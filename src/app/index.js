import template from './template.html'
import './style.scss'

const name = 'app'

controller.$inject = ['projectApi', 'alertMessage', 'funcGen', 'browserCodeRunner', 'mime']
function controller(projectApi, alertMessage, funcGen, browserCodeRunner, mime) {
  const self = this

  self.$onInit = function () {
    initState()
  }

  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////
  //  Project function
  //
  ///
  self.findAllProjects = function () {
    projectApi.listProjects()
      .then(projects => {
        console.log({ tree: self.currentProject })
        self.allProjects = projects
      })
      .catch(error => {
        alertMessage.error(error)
      })
  }

  self.openProject = function (name) {
    projectApi.openProject(name)
      .then(item => {
        self.currentProject = item

      })
      .catch(error => {
        alertMessage.error(error)
      })
  }

  self.closeProject = function () {
    initState()
  }

  self.createNewProject = function () {
    const projectName = prompt('Project Name')
    if(!projectName) return


  }

  self.deleteProject = function() {
    if(!confirm('Are you sure to remove this project')) return
    if(!self.currentProject) return alertMessage.error('No project is opened')

    projectApi.deleteProject(self.currentProject.rootName)
      .then(() => {
        alertMessage.success('Success remove project ' + self.currentProject.rootName)
        initState()
      })
      .catch(error => alertMessage.error(error))
  }

  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////
  //  fils system function
  //
  ///

  self.openFile = function (dir) {

    const fileName = dir
      .split('/')
      .reduce((acc, cur, i, arr) => i === arr.length - 1 ? cur : null)

    const fileNode = findNodeInTree(self.currentProject, f => f.path === dir)

    self.curFile = fileName
    self.selectedNode = fileNode

    projectApi.openFile(dir)
      .then(code => {
        self.code = code
      })
      .catch(error => {
        alertMessage.error(error)
      })
  }

  self.openFolder = function (dir) {

    const folderNode = findNodeInTree(self.currentProject, f => f.path === dir)

    self.selectedNode = folderNode

    if (!folderNode) return alertMessage.error('There are some error, refresh?')
    if (folderNode.files.length + folderNode.folders.length)
      return // already fetch inside item, do not have to fetch any more

    //fetch inside item of folder
    projectApi.openFolder(dir)
      .then(item => {
        if (!(item.files.length + item.folders.length)) {
          return alertMessage.error('There is nothing in this folder')
        }

        for (const f of item.files) {
          folderNode.files.push(f)
        }

        for (const f of item.folders) {
          folderNode.folders.push(f)
        }
      })
      .catch(error => {
        alertMessage.error(error)
      })
  }  

  self.createNewFile = function () {

    //filePath is not include project name in init
    const filePath = prompt('Enter the file or path to the file (start without / and not include project name)')
    if (!filePath) return


    projectApi.newFile(self.currentProject.rootName, filePath)
      .then(() => {
        const containerFolderPath = getParrentFolderPath(filePath)
        const fileName = filePath
          .split('/')
          .reduce((pre, cur, i, arr) => arr[arr.length - 1])

        const parrentFolder = findNodeInTree(
          self.currentProject,
          node => node.path === containerFolderPath
        )

        if (!parrentFolder) return alertMessage.error('Cannot create file')

        parrentFolder.files.push({
          rootName: fileName,
          files: [],
          folders: [],
          path: containerFolderPath + '/' + fileName,
          rootIsFile: true
        })

        alertMessage.success('success create file')
        console.log({ tree: self.currentProject })
      })
      .catch(error => alertMessage.error(error))
  }

  self.createNewFolder = function () {
    const folderPath = prompt('Enter the folder or path to the folder (start without / and not include project name)')
    if (!folderPath) return


    projectApi.newFolder(self.currentProject.rootName, folderPath)
      .then(() => {
        const containerFolderPath = getParrentFolderPath(folderPath)
        const folderName = folderPath
          .split('/')
          .reduce((pre, cur, i, arr) => arr[arr.length - 1])

        const parrentFolder = findNodeInTree(
          self.currentProject,
          node => node.path === containerFolderPath
        )

        if (!parrentFolder) return alertMessage.error('Cannot create folder')

        parrentFolder.folders.push({
          rootName: folderName,
          files: [],
          folders: [],
          path: containerFolderPath + '/' + folderName,
          rootIsFile: false
        })

        alertMessage.success('success create folder')
        console.log({ tree: self.currentProject })
      })
      .catch(error => alertMessage.error(error))
  }

  self.deleteItem = function () {

    if (!self.selectedNode) return alertMessage.error('Not choose an item yet')

    projectApi
      .removeItem(self.currentProject.rootName, self.selectedNode.rootName)
      .then(() => {

        const nodeContainerOfRmItem = findNodeInTree(
          self.currentProject,
          node => node.path === getParrentFolderPath(self.selectedNode.path, true)
        )

        if (self.selectedNode.rootIsFile) {
          nodeContainerOfRmItem.files = nodeContainerOfRmItem.files.filter(
            nodeFile => nodeFile.path !== self.selectedNode.path
          )
        } else {
          nodeContainerOfRmItem.folders = nodeContainerOfRmItem.folders.filter(
            nodeFile => nodeFile.path !== self.selectedNode.path
          )
        }

        alertMessage.success('remove success ' + self.selectedNode.rootName)
        self.selectedNode = null
      })
      .catch(error => alertMessage.error('Cannot remove item'))
  }

  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////
  //  code functions
  //
  ///

  self.addFunction = function (type) {

    const fileType = mime.getFileType(self.curFile)
    if (fileType !== mime.types.python)
      return alertMessage.error(`Doesn't support gen function for file ${fileType}`)


    const generatedFuncCode = funcGen.generateForPy(type)
    self.code = generatedFuncCode + self.code
  }
  
  self.saveCode = function () {
    projectApi.saveCode(self.currentProject.rootName, self.curFile, self.code)
      .then(() => alertMessage.success('save success'))
      .catch(error => alertMessage.error(error))

  }

  self.runCode = function () {
    browserCodeRunner.execute(self.currentProject.rootName, self.curFile,
      (error, { type, render, link }) => {
        if (error) {
          return alertMessage.error(error.message)
        }

        if (render) self.resultHtml = render
        if (link) self.iframeHtmlLink = link
        self.isResultAIframe = type === mime.types.html
      })
  }

  self.coding = function (code) {
    self.code = code
  }

  self.getCurrentCode = function (cb) {
    cb(self.code)
  }


  function initState() {
    self.currentProject = {
      rootName: 'NOT OPEN PROJECT YET!!!',
      files: [],
      folders: [],
      path: ''
    }
    self.allProjects = []

    // pass to explorer
    self.code = `/* your code is here */`
    self.curFile = 'sample.js'// using with write and runnign code

    // current tree node
    self.selectedNode = null

    // pass to terminal
    self.resultHtml = ''
    self.iframeHtmlLink = '' // if code is html, this field will have value
    self.isResultAIframe = false
  }

  function findNodeInTree(rootNode, predicate) {

    if (predicate(rootNode)) return rootNode

    // find current level
    for (const f of [...rootNode.files, ...rootNode.folders]) {
      if (predicate(f)) {
        return f
      }
    }

    // find deeper level
    for (const folder of rootNode.folders) {
      const foundNode = findNodeInTree(folder, predicate)
      if (foundNode) return foundNode
    }

    return null
  }

  function getParrentFolderPath(dir, dirContainProjectName = false) {
    const lastSlashIndex = dir.lastIndexOf('/')


    if (lastSlashIndex === -1) return self.currentProject.path
    if (dirContainProjectName) return dir.substr(0, lastSlashIndex)
    return self.currentProject.path + '/' + dir.substr(0, lastSlashIndex)
  }
}

export default {
  name,
  options: {
    bindings: {},
    template,
    controller,
    controllerAs: 'self'
  }
}