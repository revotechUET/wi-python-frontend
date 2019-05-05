import template from './template.html'
import './style.scss'

const name = 'app'

controller.$inject = ['$scope', '$http', 'wiToken', 'projectApi', 'alertMessage', 'funcGen', 'browserCodeRunner', 'mime', '$timeout', 'ngDialog']

function controller($scope, $http, wiToken, projectApi, alertMessage, funcGen, browserCodeRunner, mime, $timeout, ngDialog) {
  let self = this
  self.$onInit = function () {
    initState();
  }
  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////
  //  Project function
  //
  ///


  self.removeTreeConfig = function () {
    $scope.treeConfig.length = 0;
  }
  self.findAllProjects = function () {
    projectApi.listProjects()
      .then(projects => {
        console.log({
          tree: self.currentProject
        })
        self.allProjects = projects
      })
      .catch(error => {
        alertMessage.error(error)
      });
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
    let projectName;
    if (!projectName) {
      ngDialog.open({
        template: 'templateNewPrj',
        className: 'ngdialog-theme-default',
        scope: $scope,
      });
      self.acceptNewPrj = function () {
        projectApi
          .newProject(this.nameProject)
          .then(() => self.openProject(this.nameProject))
          .catch(error => alertMessage.error(error))
        ngDialog.close();
      }
    }
  }

  self.deleteProject = function () {
    if (self.currentProject) {
      ngDialog.open({
        template: 'templateDeleteProject',
        className: 'ngdialog-theme-default',
        scope: $scope,
      });
      self.acceptDelete = function () {
        projectApi.deleteProject(self.currentProject.rootName)
          .then(() => {
            alertMessage.success('Success remove project ' + self.currentProject.rootName)
            ngDialog.close();
            initState()
          })
          .catch(error => alertMessage.error(error))
      }
    } else {
      return alertMessage.error('No project is opened');
    }
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
        console.log(code);
        if (typeof code === "object") {
          self.code = "";
        } else self.code = code
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
    ngDialog.open({
      template: 'templateNewFile',
      className: 'ngdialog-theme-default',
      scope: $scope,
    });
    self.acceptNewFile = function () {
      let filePath = this.nameFileNew;
      filePath = filePath + '.py';
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
          let initcode = `#--login block--\nclient = wilib.loginByToken("${wiToken.getToken()}")\n#--end of login block--`;
          projectApi.saveCode(self.currentProject.rootName, fileName, initcode).then(() => {
            console.log("save init code success");
          });
          console.log({
            tree: self.currentProject
          })
          ngDialog.close();

        })
        .catch(error => alertMessage.error(error))
    }
  }

  self.createNewFolder = function () {
    ngDialog.open({
      template: 'templateNewFolder',
      className: 'ngdialog-theme-default',
      scope: $scope,
    });
    self.acceptNewFolder = function () {
      const folderPath = this.nameFolderNew
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
          console.log({
            tree: self.currentProject
          })
          ngDialog.close();

        alertMessage.success('success create file')
        let initcode = 
`#--login block--
client = wilib.loginWithToken("${wiToken.getToken()}")
#--end of login block--
`;
        projectApi.saveCode(self.currentProject.rootName, fileName, initcode).then(() => {
          console.log("save init code success");
        });
        console.log({
          tree: self.currentProject
        })
        .catch(error => alertMessage.error(error))
    }

    // const folderPath = prompt('Enter the folder or path to the folder (start without / and not include project name)')
    // if (!folderPath) return


    // projectApi.newFolder(self.currentProject.rootName, folderPath)
    //   .then(() => {
    //     const containerFolderPath = getParrentFolderPath(folderPath)
    //     const folderName = folderPath
    //       .split('/')
    //       .reduce((pre, cur, i, arr) => arr[arr.length - 1])

    //     const parrentFolder = findNodeInTree(
    //       self.currentProject,
    //       node => node.path === containerFolderPath
    //     )

    //     if (!parrentFolder) return alertMessage.error('Cannot create folder')

    //     parrentFolder.folders.push({
    //       rootName: folderName,
    //       files: [],
    //       folders: [],
    //       path: containerFolderPath + '/' + folderName,
    //       rootIsFile: false
    //     })

    //     alertMessage.success('success create folder')
    //     console.log({
    //       tree: self.currentProject
    //     })
    //   })
    //   .catch(error => alertMessage.error(error))
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
    projectApi.saveCode(self.currentProject.rootName, self.curFile, self.code)
      .then(() => {
        alertMessage.success('save success')
        browserCodeRunner.execute(self.currentProject.rootName, self.curFile,
          (error, {
            type,
            render,
            link
          }) => {
            if (error) {
              return alertMessage.error(error.message)
            }

            if (render) self.resultHtml = render
            // if (link) self.iframeHtmlLink = link
            self.isResultAIframe = type === mime.types.html
          })
      })
      .catch(error => alertMessage.error(error))
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
    self.code = `/* your code is here */\n`

    self.code += `\nclient = wilib.loginByToken("${wiToken.getToken()}")\n`;

    self.curFile = '' // using with write and runnign code

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



  this.codeGenMode = "load";

  this.deleteChecked = function () {
    console.log("deleteChecked");
    self.codeGenMode = "delete";
    return false;
  }
  this.saveChecked = function () {
    console.log("saveChecked");
    self.codeGenMode = "save";
    return false;
  }
  this.newChecked = function () {
    console.log("newChecked");
    self.codeGenMode = "new";
    return false;
  }
  this.refreshChecked = function () {
    console.log("refeshChecked");
    self.codeGenMode = "load";
    return true;
  }

  this.createProject = function () {

  }

  this.getLabel = function (node) {
    if (node.idCurve) {
      return node.name;
    } else if (node.idDataset) {
      return node.name;
    } else if (node.idWell) {
      return node.name;
    } else if (node.idProject) {
      return node.alias;
    }
  }
  this.getIcon = function (node) {
    if (node.idCurve) return "curve-16x16";
    else if (node.idDataset) return "curve-data-16x16";
    else if (node.idWell) return "well-16x16";
    else if (node.idProject) return "project-normal-16x16";
  }
  this.getChildren = function (node) {
    if (node.idDataset) {
      return node.curves;
    } else if (node.idWell) {
      return node.datasets;
    } else if (node.idProject) {
      return node.wells;
    }
  }
  this.runMatch = function (node, criteria) {
    return node.name.includes(criteria);
  }
  self.onDrop = function (event, ui, nodeArray) {

    for (let node of nodeArray) {
      if (node.idCurve) {
        generateCode('curve', self.codeGenMode, nodeArray[0].idCurve);
      } else if (node.idDataset) {
        generateCode('dataset', self.codeGenMode, nodeArray[0].idDataset);
      } else if (node.idWell) {
        generateCode('well', self.codeGenMode, nodeArray[0].idWell);
      } else if (node.idProject) {
        generateCode('project', self.codeGenMode, nodeArray[0].idProject);
      }
    }

    // function generateCode(type, mode, info) {
    //   $timeout(() => {
    //     switch (type) {
    //       case 'curve':
    //         self.code += `\n#--get curve info--\ncurveInfo = client.getCurveById(${info}).getCurveInfo()\nprint(curveInfo)\n#--end of get curve info--\n`;
    //         // self.code += `print("${type} - ${mode} - ${info}")\n`;
    //         break;
    //       case 'dataset':
    //         self.code += `\n#--get dataset info--\ndatasetInfo = client.getDatasetById(${info}).getDatasetInfo()\nprint(datasetInfo)\n#--end of get dataset info--\n`;
    //         // self.code += `print("${type} - ${mode} - ${info}")\n`;
    //         break;
    //       case 'well':
    //         self.code += `\n#--get well info--\nwellInfo = client.getWellById(${info}).getWellInfo()\nprint(wellInfo)\n#--end of get well info--\n`;
    //         // self.code += `print("${type} - ${mode} - ${info}")\n`;
    //         break;
    //       case 'project':
    //         self.code += `\n#--get project info--\nprojectInfo = client.getProjectById(${info}).getProjectInfo()\nprint(projectInfo)\n#--end of get project info--\n`;
    //         // self.code += `print("${type} - ${mode} - ${info}")\n`;
    //         break;
    //     }
    //   });
    // }

    function generateCode(type, mode, info) {
      $timeout(() => {
        switch (type) {
          case 'curve':
            self.code += generateCode4Curve(mode, info);
            break;
          case 'dataset':
            self.code += generateCode4Dataset(mode, info);
            break;
          case 'well':
            self.code += generateCode4Well(mode, info);;
            break;
          case 'project':
            self.code += generateCode4Project(mode, info);;
            break;
        }
      });
    }

    function generateCode4Curve(mode, info) {
      switch (mode) {
        case "load":
          return `
curveObj = client.getCurveById(${info})
curveInfo = curveObj.getCurveInfo()
curveData = curveObj.getCurveData()
`;
        case "save":
          return `
curveObj = client.getCurveById(${info})
curveObj.editCurveInfo(name="someName");
`;
        case "delete":
          return `
curveObj = client.getCurveById(${info})
curveObj.deleteCurve()
`;
      }
    }

    function generateCode4Dataset(mode, info) {
      switch (mode) {
        case "load":
          return `
datasetObj = client.getdatasetById(${info})
datasetInfo = datasetObj.getdatasetInfo()
datasetData = datasetObj.getdatasetData()
`;
        case "save":
          return `
datasetObj = client.getdatasetById(${info})
datasetObj.editdatasetInfo(name="someName");
`;
        case "delete":
          return `
datasetObj = client.getdatasetById(${info})
datasetObj.deletedataset()
`;
        case "new":
          return `
datasetObj = client.getdatasetById(${info})
datasetObj.createCurve()
`;
      }
    }

    function generateCode4Well(mode, info) {
      switch (mode) {
        case "load":
          return `
wellObj = client.getwellById(${info})
wellInfo = wellObj.getwellInfo()
wellData = wellObj.getwellData()
`;
        case "save":
          return `
wellObj = client.getwellById(${info})
wellObj.editwellInfo(name="someName");
`;
        case "delete":
          return `
wellObj = client.getwellById(${info})
wellObj.deletewell()
`;
        case "new":
          return `
wellObj = client.getwellById(${info})
wellObj.createDataset()
`;
      }
    }

    function generateCode4Project(mode, info) {
      switch (mode) {
        case "load":
          return `
projectObj = client.getprojectById(${info})
projectInfo = projectObj.getprojectInfo()
projectData = projectObj.getprojectData()
`;
        case "save":
          return `
projectObj = client.getprojectById(${info})
projectObj.editprojectInfo(name="someName");
`;
        case "delete":
          return `
projectObj = client.getprojectById(${info})
projectObj.deleteproject()
`;
        case "new":
          return `
projectObj = client.getprojectById(${info})
projectObj.createWell()
`;
      }
    }
  }

  this.clickFunction = function ($event, node) {

    if (node.idCurve) {
      console.log("Curve clicked");
    } else if (node.idDataset) {
      console.log("Dataset clicked");
    } else if (node.idWell) {
      console.log("Well clicked");
    } else if (node.idProject) {
      if (!node.timestamp || (Date.now() - node.timestamp > 10 * 5000)) {
        getWells(node.idProject, node, function (err, wells) {
          if (err) {
            return alertMessage.error(err.data.content);
          }
          node.wells = wells;
          async.eachOf(node.wells, function (well, idx, cb) {
            getDatasets(well.idWell, well, function (err, datasets) {
              if (err) {
                return cb(err);
              }
              well.datasets = datasets;
              cb();
            });
          }, function (err) {
            if (err) {
              return alertMessage.error(err.message);
            }
            node.timestamp = Date.now();
          });
        });
      }
    }
  }
  this.getCurveTree = getCurveTree;
  const BASE_URL = "http://dev.i2g.cloud";

  function getCurveTree() {
    $scope.treeConfig = [];
    getProjects($scope.treeConfig, function (err, projects) {
      if (err) {
        return alertMessage.error(err.data.content);
      }
      $scope.treeConfig = projects;
    });
  }

  function getProjects(treeConfig, cb) {
    $http({
      method: 'POST',
      url: BASE_URL + '/project/list',
      data: {},
      headers: {
        "Authorization": wiToken.getToken(),
      }
    }).then(function (response) {
      let projects = response.data.content;
      cb(null, projects, treeConfig);
    }, function (err) {
      cb(err);
    });
  }

  function getWells(projectId, projectNodeChildren, cb) {
    $http({
      method: 'POST',
      url: BASE_URL + '/project/well/list',
      data: {
        idProject: projectId
      },
      headers: {
        "Authorization": wiToken.getToken(),
      }
    }).then(function (response) {
      cb(null, response.data.content, projectNodeChildren);
    }, function (err) {
      cb(err);
    });
  }

  function getDatasets(wellId, wellNodeChildren, cb) {
    $http({
      method: 'POST',
      url: BASE_URL + '/project/well/info',
      data: {
        idWell: wellId
      },
      headers: {
        "Authorization": wiToken.getToken(),
      }
    }).then(function (response) {
      cb(null, response.data.content.datasets, wellNodeChildren);
    }, function (err) {
      cb(err);
    });
  }


  /*
  self.getProjectWellDatasetCurve = getProjectWellDatasetCurve;

  function getProjectWellDatasetCurve() {
    const BASE_URL = "http://dev.i2g.cloud";
    let mytoken = wiToken.getToken();
    $scope.treeConfig = [];

    async.waterfall([
      function (cb) {
        getProjects($scope.treeConfig, cb);
      },
      function (projects, treeRoot, cb) {
        let projectNodes = projects.map(function (prj) {
          return {
            data: {
              icon: 'project-normal-16x16',
              label: prj.name
            },
            properties: prj,
            children: []
          }
        });

        treeRoot.push(...projectNodes);
        async.eachOfSeries(projects, function (proj, idx, cb) {
          async.waterfall([
            function (cb) {
              getWells(proj.idProject, projectNodes[idx].children, cb);
            },
            function (wells, projectNodeChildren, cb) {
              let wellNodes = wells.map(function (well) {
                return {
                  data: {
                    icon: 'well-16x16',
                    label: well.name
                  },
                  properties: well,
                  children: []
                }
              });
              projectNodeChildren.push(...wellNodes);
              async.eachOfSeries(wells, function (well, idx, cb) {
                async.waterfall([
                  function (cb) {
                    getDatasets(well.idWell, wellNodes[idx].children, cb);
                  },
                  function (datasets, wellNodeChildren, cb) {
                    let datasetNodes = datasets.map(dataset => ({
                      data: {
                        label: dataset.name,
                        icon: 'curve-data-16x16'
                      },
                      properties: dataset,
                      children: []
                    }));

                    wellNodeChildren.push(...datasetNodes);

                    async.eachOfSeries(datasets, function (dataset, idx, cb) {
                      async.waterfall([
                        function (cb) {
                          getCurves(dataset.idDataset, datasetNodes[idx].children, cb);
                        },
                        function (curves, datasetNodeChildren, cb) {
                          let curveNodes = curves.map(curve => ({
                            data: {
                              label: curve.name,
                              icon: 'curve-16x16'
                            },
                            properties: curve
                          }));
                          datasetNodeChildren.push(...curveNodes);
                          // console.log("curves:", curves);
                          cb();
                        }
                      ], cb);
                    }, cb);
                  }
                ], cb);
              }, cb);
            }
          ], cb);
        }, cb);
      }
    ], function (err) {
      if (err) {
        alertMessage.error(err.data.content);
      }
      console.log("every thing is done", err);
    });


    function getProjects(treeConfig, cb) {
      $http({
        method: 'POST',
        url: BASE_URL + '/project/list',
        data: {},
        headers: {
          "Authorization": mytoken,
        }
      }).then(function (response) {
        let projects = response.data.content;
        cb(null, projects, treeConfig);
      }, function (err) {
        cb(err);
      });
    }

    function getWells(projectId, projectNodeChildren, cb) {
      $http({
        method: 'POST',
        url: BASE_URL + '/project/well/list',
        data: {
          idProject: projectId
        },
        headers: {
          "Authorization": mytoken,
        }
      }).then(function (response) {
        cb(null, response.data.content, projectNodeChildren);
      }, function (err) {
        cb(err);
      });
    }

    function getDatasets(wellId, wellNodeChildren, cb) {
      $http({
        method: 'POST',
        url: BASE_URL + '/project/well/info',
        data: {
          idWell: wellId
        },
        headers: {
          "Authorization": mytoken,
        }
      }).then(function (response) {
        cb(null, response.data.content.datasets, wellNodeChildren);
      }, function (err) {
        cb(err);
      });
    }

    function getCurves(datasetId, datasetNodeChildren, cb) {
      $http({
        method: 'POST',
        url: BASE_URL + '/project/well/dataset/info',
        data: {
          idDataset: datasetId
        },
        headers: {
          "Authorization": mytoken,
        }
      }).then(function (response) {
        cb(null, response.data.content.curves, datasetNodeChildren);
      }, function (err) {
        cb(err);
      });
    }
  }
  */
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
