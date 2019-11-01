import template from './template.html'
import './style.scss'

const queryString = require('query-string')
const name = 'app';

controller.$inject = ['$scope', '$http', '$element', 'wiToken', 'projectApi', 'alertMessage', 'funcGen', 'browserCodeRunner', 'mime', '$timeout', 'ngDialog', '$location', 'config', 'wiLoading', 'wiApi'];

function controller($scope, $http, $element, wiToken, projectApi, alertMessage, funcGen, browserCodeRunner, mime, $timeout, ngDialog, $location, config, wiLoading, wiApi) {
	let self = this;
	const BASE_URL = "http://dev.i2g.cloud";
	let stackNode = [];
	$scope.safeApply = function (fn) {
    const phase = this.$root.$$phase;
    if (phase == '$apply' || phase == '$digest') {
      if (fn && (typeof (fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

	self.$onInit = function () {
		// self.autoSave = true;
		self.baseUrl = $location.search().baseUrl || self.baseUrl || config.PROJECT_RELATED_ROOT_URL || BASE_URL;
		self.loginUrl = $location.search().loginUrl || self.loginUrl || config.USER_RELATED_ROOT_URL;
		self.queryString = queryString.parse(location.search);
		initState();
		$scope.$watch(function () {
			return localStorage.getItem('token');
		}, function (newValue, oldValue) {
			// console.log(newValue, oldValue);
			if ((localStorage.getItem("token")) !== null) {
				// getCurveTree();
				setTimeout(function () {
					wellcome();
				}, 1400);
			}
		});
		$scope.$watch(function () {
			return [self.curFile]
		}, function () {
			let preCode = self.code;
			let preNode = stackNode[1];
			if (self.autoSave && preNode) {
				if(self.selectedNode){
					projectApi.saveCode(self.currentProject.rootName, getRelPath(self.currentProject.rootName, preNode.path), preCode)
						.catch(error => console.log(error));
				}
			} else if (!self.autoSave && !self.askSave && preNode) {
				ngDialog.open({
					template: 'templateWarningSave',
					className: 'ngdialog-theme-default',
					scope: $scope,
				});
				self.acceptDontSave = function(){
					ngDialog.close();
				}
				self.acceptSave = function(){
					projectApi.saveCode(self.currentProject.rootName, getRelPath(self.currentProject.rootName, preNode.path), preCode)
						.catch(error => console.log(error));
					ngDialog.close();
				}
			}
		}, true);
	};

	function wellcome() {
		
		if (wiToken.getCurrentProjectName()) {
			self.curPrj = wiToken.getCurrentProjectName()
			ngDialog.open({
				template: 'templateRestore',
				className: 'ngdialog-theme-default',
				scope: $scope,
			});
			self.acceptRestore = function () {
				projectApi.openProject(wiToken.getCurrentProjectName())
					.then(item => {
						self.currentProject = item;
						self.selectedNode = self.currentProject;
						ngDialog.close();
						$("#root-app").removeClass("blur");
						getCurveTree();
					})
					.catch(error => {
						ngDialog.open({
							template: 'templateConnectionError',
							className: 'ngdialog-theme-default',
							scope: $scope,
						});
						self.cancelReload = function (){
							ngDialog.close();
							$timeout(()=>{
								location.reload();
							},500)
						}
						// alertMessage.error(error)
					})
			}
		} else if (wiToken.getToken()) {
			ngDialog.open({
				template: 'templateOpenProject',
				className: 'ngdialog-theme-default',
				scope: $scope,
			});
			projectApi.listProjects()
				.then(projects => {
					if (self.currentProject.rootName !== 'NOT OPEN PROJECT YET!!!') {
						console.log(self.currentProject.rootName);
						self.allProjects = projects.filter(p => p !== self.currentProject.rootName)
					} else {
						self.allProjects = projects;
					}
				})
				.catch(error => {
					alertMessage.error(error)
				});
		}
	}

	self.saveCode = function () {
		projectApi.saveCode(self.currentProject.rootName, getRelPath(self.currentProject.rootName, self.selectedNode.path), self.code)
			.then(() => alertMessage.success('save success'))
			.catch(error => alertMessage.error(error));
	};

	self.removeTreeConfig = function () {
		$scope.treeConfig.length = 0;
	};
	self.findAllProjects = function () {
		ngDialog.open({
			template: 'templateOpenProject',
			className: 'ngdialog-theme-default',
			scope: $scope,
		});
		projectApi.listProjects()
			.then(projects => {
				if (self.currentProject.rootName !== 'NOT OPEN PROJECT YET!!!') {
					console.log(self.currentProject);
					self.allProjects = projects.filter(p => p !== self.currentProject.rootName)
				} else {
					self.allProjects = projects;
				}
			})
			.catch(error => {
				ngDialog.open({
					template: 'templateConnectionError',
					className: 'ngdialog-theme-default',
					scope: $scope,
				});
				self.cancelReload = function (){
					ngDialog.close();
					$timeout(()=>{
						location.reload();
					},500)
				}
				// alertMessage.error(error)
			});
	};
	self.openProject = function (name) {
		projectApi.openProject(name)
			.then(item => {
				self.currentProject = item;
				self.selectedNode = self.currentProject;
				wiToken.setCurrentProjectName(self.currentProject.rootName)
				ngDialog.close();
				$("#root-app").removeClass("blur");
				getCurveTree();
			})
			.catch(error => {
				alertMessage.error(error)
			})
	};
	this.getChildren4Python = function (node) {
		let children = node.files.concat(node.folders);
		return children;
	};

	this.getLabel4Python = function (node) {
		return node.rootName;
	};
	this.getIcon4Python = function (node) {
		return node.rootIsFile ? 'file-wi-python-16x16' : 'folder-wi-python-16x16';
	};

	this.runMatch4Python = function (node, criteria) {
		return node.rootName.includes(criteria);
	};
	this.clickFunction4Python = function ($event, node) {
		self.selectedNode = node;
		if (node.rootIsFile) {
			self.openFile(node.path);
			self.previousNode = self.selectedNode;
			stackNode.unshift(self.previousNode);
			self.curPath = self.selectedNode.path.split('/' + self.selectedNode.rootName)
			self.curPath = self.curPath[0];
		} else {
			self.curPath = getRelPath(self.currentProject.rootName, self.selectedNode.path)
			projectApi.openFolder(node.path)
				.then(item => {
					if (!(item.files.length + item.folders.length)) {
						return alertMessage.error('There is nothing in this folder')
					}
					// node.files = item.files;
					// node.folders = item.folders;
				  if(!((node.files && node.files.length) || (node.folders && node.folders.length))){
            		//node.files.length = 0;
					  //node.folders.length = 0;
					  for(const f of item.files) {
						  node.files.push(f)
					  }

					  for(const f of item.folders) {
						  node.folders.push(f)
					  } 
          }

				})
				.catch(error => {
					alertMessage.error(error)
				})
		}
		
	};
	self.renameFn = function () {
		let projectName = self.currentProject.rootName;
		let isProject = self.selectedNode.path.search("/");


		function updateUI() {
			const renameItemPath = projectName + '/' + getRelPath(projectName, self.selectedNode.path)
			const renameItemNode = findNodeInTree(self.currentProject, node => node.path === renameItemPath)
			const parentItemPath = renameItemPath.substring(0, renameItemPath.lastIndexOf('/'))
			const newItemPath = parentItemPath + '/' + self.newFileName

			renameItemNode.rootName = self.newFileName
			renameItemNode.path = newItemPath
		}
		function checkExistItem() {
			const renameItemPath = projectName + '/' + getRelPath(projectName, self.selectedNode.path)
			const parentItemPath = renameItemPath.substring(0, renameItemPath.lastIndexOf('/'))
			const parentNode = findNodeInTree(self.currentProject, node => node.path === parentItemPath)
			const listFileName = parentNode.files.map(f => f.rootName)
			const listFolderName = parentNode.folders.map(f => f.rootName)
			const listItemName = [...listFolderName,...listFileName]
			return listItemName.includes(self.newFileName) || listItemName.includes(self.newFileName + '.py')
		}
		if (self.selectedNode.rootIsFile) {
			self.delFile = true;
			self.delFolder = false;
			ngDialog.open({
				template: 'templateRename',
				className: 'ngdialog-theme-default',
				scope: $scope,
			});
		} else if(isProject !== -1){
			self.delFile = false;
			self.delFolder = true;
			self.curFolder = getRelPath(projectName, self.selectedNode.path)
			ngDialog.open({
				template: 'templateRename',
				className: 'ngdialog-theme-default',
				scope: $scope,
			});
		} else {
			alertMessage.error('Please select file or folder!');
		}
		self.acceptRename = function () {
			const isExistItem = checkExistItem()
			if(isExistItem) return alertMessage.error('File name is existed')

			if (self.selectedNode.rootIsFile) {
				if (!self.newFileName || !self.newFileName.length) {
					alertMessage.error('Fill your fileName or folderName');
				}
				else {
					if (!self.newFileName.includes('.')) {
						self.newFileName = self.newFileName + '.py';
					}
					let newFileName = getRelPath(projectName, self.selectedNode.path);
					newFileName = newFileName.replace(self.selectedNode.rootName, '');
					projectApi.renameFile(
						projectName, getRelPath(projectName, self.selectedNode.path), newFileName + self.newFileName
					).then((data) => {
						updateUI()
						ngDialog.close();
						self.newFileName = '';
					}).catch((e) => {
						console.error(e);
					});
				}
			} else {
				let newFileName = getRelPath(projectName, self.selectedNode.path);
				newFileName = newFileName.replace(self.selectedNode.rootName, '');
				projectApi.renameFolder(
					projectName, getRelPath(projectName, self.selectedNode.path), newFileName + self.newFileName
				).then((data) => {
					updateUI();
					ngDialog.close();
					self.newFileName = '';
				}).catch((e) => {
					console.error(e);
				});
			}
			// reloadPrj(projectName);

			//update in client
			// const renameItemPath = projectName + '/' + getRelPath(projectName, self.selectedNode.path)
			// const renameItemNode = findNodeInTree(self.currentProject, node => node.path === renameItemPath)
			// const parentItemPath = renameItemPath.substring(0, renameItemPath.lastIndexOf('/'))
			// const newItemPath = parentItemPath + '/' + self.newFileName

			// renameItemNode.rootName = self.newFileName
			// renameItemNode.path = newItemPath
		}
	};
	self.deleteFn = function () {
		let projectName = self.currentProject.rootName;
		let isProject = self.selectedNode.path.search("/");
		function updateUI() {
			const deleteItemPath = projectName + '/' + getRelPath(projectName, self.selectedNode.path)
			const deleteItemNode = findNodeInTree(self.currentProject, node => node.path === deleteItemPath)
			const parentItemPath = deleteItemPath.substring(0, deleteItemPath.lastIndexOf('/'))
			const parentItemNode = findNodeInTree(self.currentProject, node => node.path === parentItemPath)

			parentItemNode.files = parentItemNode.files.filter(f => f !== deleteItemNode)
			parentItemNode.folders = parentItemNode.folders.filter(f => f !== deleteItemNode)
			//update vTree
			self.currentProject = {...self.currentProject};
		}
		if (self.selectedNode.rootIsFile) {
			self.delFile = true;
			self.delFolder = false;
			ngDialog.open({
				template: 'templateWarning',
				className: 'ngdialog-theme-default',
				scope: $scope,
			});
			self.acceptDelete = function () {
				projectApi.deleteFile(
					projectName,
					getRelPath(projectName, self.selectedNode.path)
				).then((data) => {
					console.log(data);
					// reloadPrj(projectName);
					updateUI()
					ngDialog.close();
				}).catch(e => {
					console.error(e);
				});
			}
			self.cancelDelete = function () {
				ngDialog.close();
			}
		}
		else if(isProject !== -1){
			self.delFile = false;
			self.delFolder = true;
			self.curFolder = getRelPath(projectName, self.selectedNode.path)
			ngDialog.open({
				template: 'templateWarning',
				className: 'ngdialog-theme-default',
				scope: $scope,
			});
			self.acceptDelete = function () {
				projectApi.deleteFolder(
					projectName,
					getRelPath(projectName, self.selectedNode.path)
				).then(data => {
					console.log(data);
					// reloadPrj(projectName);
					updateUI()
					ngDialog.close();
				}).catch(e => console.error(e));
			}
			self.cancelDelete = function () {
				ngDialog.close();
			}
		} else {
			self.delProject();
		}
	};

	function getParentPath(path) {
		if (!path) return "";
		let tokens = path.split('/');
		tokens.splice(tokens.length - 1, 1);
		return tokens.join('/');
	}

	function getRelPath(prjName, path) {
		let sNodePath = path;
		if (!sNodePath) {
			let sNode = self.selectedNode;
			if (sNode) {
				if (sNode.rootIsFile) {
					sNodePath = getParentPath(sNodePath);
				}
				else {
					sNodePath = sNode.path;
				}
			}
			else {
				sNodePath = "";
			}
		}
		return sNodePath.replace(prjName + '/', '');
	}

	function reloadPrj(prjName) {
		projectApi.openProject(prjName).then(item => {
			$timeout(() => {
				self.currentProject = item;
				self.selectedNode = self.currentProject;
			});
		}).catch(error => {
			alertMessage.error(error)
		});
	}

	self.closeProject = function () {
		initState()
	};

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
					.then(() => {
						self.openProject(this.nameProject);
						this.nameProject = '';
						ngDialog.close();
					})
					.catch(error => alertMessage.error(error))
			}
		}
	};
	self.delProject = function (project) {

		// let dialog = ngDialog.open({
		// 	template: 'templateDeleteProject',
		// 	className: 'ngdialog-theme-default',
		// 	scope: $scope,
		// });
		// dialog.closePromise.then((data) => {
		// 	console.log(data);
		// 	if (data.value === 'accept') {
		// 		projectApi.deleteProject(project)
		// 			.then(() => {
		// 				alertMessage.success('Success remove project ' + project);
		// 				self.allProjects = self.allProjects.filter(p => p !== project)
		// 				// initState()
		// 			})
		// 			.catch(error => alertMessage.error(error))
		// 	}
		// })
		// // self.acceptDelete = function () {

		// // }
		ngDialog.open({
			template: 'templateDeleteProject',
			className: 'ngdialog-theme-default',
			scope: $scope,
		});
		self.acceptDeletePrj = function () {
			projectApi.deleteProject(project)
				.then(() => {
					alertMessage.success('Success remove project ' + project);
					initState();
					ngDialog.close();
					$("#root-app").removeClass("blur");
				})
				.catch(error => alertMessage.error(error))
		}
		self.cancelDeletePrj = function () {
			ngDialog.close();
			$("#root-app").removeClass("blur");

		}

	};

	self.deleteProject = function () {
		if (self.currentProject) {
			ngDialog.open({
				template: 'templateDeleteProject',
				className: 'ngdialog-theme-default',
				scope: $scope,
			});
			self.acceptDeletePrj = function () {
				projectApi.deleteProject(self.currentProject.rootName)
					.then(() => {
						alertMessage.success('Success remove project ' + self.currentProject.rootName);
						initState();
						ngDialog.close();
					})
					.catch(error => alertMessage.error(error))
			}
			self.cancelDeletePrj = function () {
				ngDialog.close();
			}

		} else {
			return alertMessage.error('No project is opened');
		}

	};
	self.aboutWiPython = function () {
		ngDialog.open({
			template: 'templateAbout',
			className: 'ngdialog-theme-default',
			scope: $scope,
		});
	};
	self.changeTheme = function () {
		var element = document.getElementById("tools");
		  element.classList.toggle("dark-theme");
		var element2 = document.getElementById("app");
		  element2.classList.toggle("dark-theme");
		var element3 = document.getElementById("custom-login-css");
			element3.classList.toggle("dark-theme");
	};
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////
	//  fils system function
	//
	///

	self.openFile = function (dir) {

		const fileName = dir
			.split('/')
			.reduce((acc, cur, i, arr) => i === arr.length - 1 ? cur : null);

		const fileNode = findNodeInTree(self.currentProject, f => f.path === dir);

		self.curFile = fileName;
		self.selectedNode = fileNode;

		projectApi.openFile(dir)
			.then(code => {
				// console.log(code);
				if (typeof code === "object") {
					self.code = "";
				} else self.code = code
			})
			.catch(error => {
				alertMessage.error(error)
			})
	};

	self.openFolder = function (dir) {

		const folderNode = findNodeInTree(self.currentProject, f => f.path === dir);

		self.selectedNode = folderNode;

		if (!folderNode) return alertMessage.error('There are some error, refresh?');
		if (folderNode.files.length + folderNode.folders.length)
			return; // already fetch inside item, do not have to fetch any more

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
	};

	self.createNewFile = function () {
		ngDialog.open({
			template: 'templateNewFile',
			className: 'ngdialog-theme-default',
			scope: $scope,
		});
	};

	self.createNewFolder = function () {
		ngDialog.open({
			template: 'templateNewFolder',
			className: 'ngdialog-theme-default',
			scope: $scope,
		});
	};

	self.acceptNewFile = function () {
		let fileName = this.nameFileNew.lastIndexOf('.') === -1 ? this.nameFileNew + '.py' : this.nameFileNew;
		let parentPath = self.selectedNode.rootIsFile ? self.selectedNode.path.substring(0, self.selectedNode.path.lastIndexOf('/')) : self.selectedNode.path;
		if (parentPath.indexOf('/') === -1) parentPath += '/';
		let filePath = getRelPath(self.currentProject.rootName, parentPath) + '/' + fileName;
		if (!filePath) return;

		projectApi.newFile(self.currentProject.rootName, filePath)
			.then((data) => {
				// reloadPrj(self.currentProject.rootName);
				let self = this;
				let parentFolderPath = self.currentProject.rootName + '/' + getRelPath(self.currentProject.rootName, parentPath);
				if (parentFolderPath === self.currentProject.rootName + '/') {
					self.currentProject.files.push({
						rootName: fileName,
						path: self.currentProject.rootName + filePath,
						rootIsFile: true,
						files: [],
						folders: []
					});
					// self.currentProject = {
					// 	...self.currentProject,
					// 	files: [...self.currentProject.files, {
					// 		rootName: fileName,
					// 		path: self.currentProject.rootName + filePath,
					// 		rootIsFile: true,
					// 		files: [],
					// 		folders: []
					// 	}]
					// }
					
					// self.currentProject = {...self.currentProject};
				} else {
					const parentFolder = findNodeInTree(self.currentProject, node => node.path === parentFolderPath);
					parentFolder.files.push({
						rootName: fileName,
						path: parentFolder.path + '/' + fileName,
						rootIsFile: true,
						files: [],
						folders: []
					});
					// self.currentProject = {...self.currentProject};
				}
                
                //remove selected in vTree
			    self.selectedNode._selected = false
    			self.currentProject = {...self.currentProject};
				ngDialog.close();
				this.nameFileNew = '';
			})
			.catch(error => {
				alertMessage.error(error)
			})
	}
	
	self.acceptNewFolder = function () {
		const folderName = this.nameFolderNew;
		let parentPath = self.selectedNode.rootIsFile ? self.selectedNode.path.substring(0, self.selectedNode.path.lastIndexOf('/')) : self.selectedNode.path;
		if (parentPath.indexOf('/') === -1) parentPath += '/';
		let folderPath = getRelPath(self.currentProject.rootName, parentPath) + '/' + folderName;
		if (!folderPath) return;
		projectApi.newFolder(self.currentProject.rootName, folderPath).then(() => {
			const containerFolderPath = getParrentFolderPath(folderPath);
			if (containerFolderPath === self.currentProject.rootName + '/') {
				self.currentProject.folders.push({
					rootName: folderName,
					files: [],
					folders: [],
					path: containerFolderPath + '/' + folderName,
					rootIsFile: false
				});
				// self.currentProject = {
				// 	...self.currentProject,
				// 	folders: [...self.currentProject.files, {
				// 		rootName: folderName,
				// 		files: [],
				// 		folders: [],
				// 		path: containerFolderPath + '/' + folderName,
				// 		rootIsFile: false
				// 	}]
				// }
				self.currentProject = {...self.currentProject};
			} else {
				const folderName = folderPath.split('/').reduce((pre, cur, i, arr) => arr[arr.length - 1]);

				const parrentFolder = findNodeInTree(self.currentProject, node => node.path === containerFolderPath);

				if (!parrentFolder) return alertMessage.error('Cannot create folder');

				parrentFolder.folders.push({
					rootName: folderName,
					files: [],
					folders: [],
					path: containerFolderPath + '/' + folderName,
					rootIsFile: false
				});
				self.currentProject = {...self.currentProject};
			}
			alertMessage.success('success create folder');
			console.log({
				tree: self.currentProject
			});
			ngDialog.close();
			this.nameFolderNew = '';
			// alertMessage.success('success create file');
			// let initcode =
			// 	`#--login block--
			//       client = wilib.loginWithToken("${wiToken.getToken()}")
			//       #--end of login block--
			//       `;
			// projectApi.saveCode(self.currentProject.rootName, fileName, initcode).then(() => {
			// 	console.log("save init code success");
			// });
			console.log({
				tree: self.currentProject
			});
		}).catch(error => alertMessage.error(error))
	};

	self.deleteItem = function () {

		if (!self.selectedNode) return alertMessage.error('Not choose an item yet');

		projectApi
			.removeItem(self.currentProject.rootName, self.selectedNode.rootName)
			.then(() => {
				const nodeContainerOfRmItem = findNodeInTree(
					self.currentProject,
					node => node.path === getParrentFolderPath(self.selectedNode.path, true)
				);

				if (self.selectedNode.rootIsFile) {
					nodeContainerOfRmItem.files = nodeContainerOfRmItem.files.filter(
						nodeFile => nodeFile.path !== self.selectedNode.path
					)
				} else {
					nodeContainerOfRmItem.folders = nodeContainerOfRmItem.folders.filter(
						nodeFile => nodeFile.path !== self.selectedNode.path
					)
				}

				alertMessage.success('remove success ' + self.selectedNode.rootName);
				self.selectedNode = null
			})
			.catch(error => alertMessage.error('Cannot remove item'));
	};

	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	//  code functions
	//
	///

	self.addFunction = function (type) {
		const fileType = mime.getFileType(self.selectedNode.rootName);
		if (fileType !== mime.types.python)
			return alertMessage.error(`Doesn't support gen function for file ${fileType}`);
		const generatedFuncCode = funcGen.generateForPy(type);
		self.code = generatedFuncCode + self.code
	};


	self.runCode = function () {
		// Spinner();
		projectApi.saveCode(self.currentProject.rootName, getRelPath(self.currentProject.rootName, self.selectedNode.path), self.code)
			.then(() => {
				// alertMessage.success('save success')
				wiLoading.show($element.find('.app')[0]);
				// Spinner.show();
				browserCodeRunner.execute(self.currentProject.rootName, getRelPath(self.currentProject.rootName, self.selectedNode.path),
					function (error, {
						type,
						render,
						link
					}) {
						if (error) {
							return alertMessage.error(error.message)
						}
						if (render) {
							self.resultHtml = render;
							// alertMessage.success('Run Finished')
						}
						// Spinner.hide();
						wiLoading.hide();
						// if (link) self.iframeHtmlLink = link
						self.isResultAIframe = type === mime.types.html
					})
			})
			.catch(error => alertMessage.error(error))
	};

	self.coding = function (code) {
		self.code = code
	};

	self.getCurrentCode = function (cb) {
		cb(self.code)
	};


	function initState() {
		self.currentProject = {
			rootName: 'NOT OPEN PROJECT YET!!!',
			files: [],
			folders: [],
			path: ''
		};
		self.allProjects = [];

		self.autoSave = true;
		self.askSave = true;
		self.check = 'sidebar';
		self.sortByName = true;
		// self.outCoding = false;
		// pass to explorer
		self.code = `/* your code is here */\n`;

		self.code += `\nclient = wilib.loginByToken("${wiToken.getToken()}")\n`;

		self.curFile = ''; // using with write and running code

		// current tree node
		self.selectedNode = null;

		// pass to terminal
		self.resultHtml = '';
		self.iframeHtmlLink = ''; // if code is html, this field will have value
		self.isResultAIframe = false
	}

	function findNodeInTree(rootNode, predicate) {

		if (predicate(rootNode)) return rootNode;

		// find current level
		for (const f of [...rootNode.files, ...rootNode.folders]) {
			if (predicate(f)) {
				return f
			}
		}

		// find deeper level
		for (const folder of rootNode.folders) {
			const foundNode = findNodeInTree(folder, predicate);
			if (foundNode) return foundNode
		}

		return null
	}

	function getParrentFolderPath(dir, dirContainProjectName = false) {
		const lastSlashIndex = dir.lastIndexOf('/');


		if (lastSlashIndex === -1) return self.currentProject.path;
		if (dirContainProjectName) return dir.substr(0, lastSlashIndex);
		return self.currentProject.path + '/' + dir.substr(0, lastSlashIndex)
	}


	this.codeGenMode = "load";

	this.deleteChecked = function () {
		console.log("deleteChecked");
		self.codeGenMode = "delete";
		return false;
	};
	this.saveChecked = function () {
		console.log("saveChecked");
		self.codeGenMode = "save";
		return false;
	};
	this.newChecked = function () {
		console.log("newChecked");
		self.codeGenMode = "new";
		return false;
	};
	this.refreshChecked = function () {
		console.log("refeshChecked");
		self.codeGenMode = "load";
		return true;
	};

	this.createProject = function () {

	};

	this.getLabel = function (node) {
		function getDisplayName(node) {
			if(node.displayName) return node.displayName;
			return node.name
		}

		if(node){
			if (node.idCurve) {
				// return node.name;
				return getDisplayName(node)
			} else if (node.idDataset) {
				// return node.name;
				return getDisplayName(node)
			} else if (node.idWell) {
				// return node.name;
				return getDisplayName(node)
			} else if (node.idProject) {
				// return node.name;
				return getDisplayName(node)
			}
		}
		
	};
	this.getIcon = function (node) {
		if(node){
			if (node.idCurve) return "curve-16x16";
			else if (node.idDataset) return "curve-data-16x16";
			else if (node.idWell) return "well-16x16";
			else if (node.idProject) return "project-normal-16x16";
		}
	};
	this.getChildren = function (node) {
		if (!node) {
			return [];
		}
		// if (Array.isArray(node)) return node;
		if (node.idDataset) {
			return node.curves;
		} else if (node.idWell) {
			return node.datasets;
		} else if (node.idProject) {
			return node.wells;
		}
	};
	this.getSiblings = function (node) {
		if (node.idCurve) {
			return [];
		} else if (node.idDataset && node.idWell) {
			return [];
		} else if (node.idWell && node.idProject) {
			let project = $scope.treeConfig.find(prj => prj.idProject === node.idProject);
			//      self.treeConfig.filter(prj => prj.idProject != node.idProject).forEach(prj => prj._active = false);
			return project.wells.filter(w => w.idWell != node.idWell);
		} else if (node.idProject) {
			return $scope.treeConfig.filter(prj => prj.idProject != node.idProject);
		}
	};
	this.runMatch = function (node, criteria) {
		let keySearch = criteria.toLowerCase();
        let searchArray = node.alias.toLowerCase();
        return searchArray.includes(keySearch);
	};
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
						self.code += generateCode4Well(mode, info);
						;
						break;
					case 'project':
						self.code += generateCode4Project(mode, info);
						;
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
datasetInfo = datasetObj.getDatasetInfo()
`;
				case "save":
					return `
datasetObj = client.getDatasetById(${info})
datasetObj.editDatasetInfo(name="someName");
`;
				case "delete":
					return `
datasetObj = client.getDatasetById(${info})
datasetObj.deleteDataset()
`;
				case "new":
					return `
datasetObj = client.getDatasetById(${info})
datasetObj.createCurve()
`;
			}
		}

		function generateCode4Well(mode, info) {
			switch (mode) {
				case "load":
					return `
wellObj = client.getWellById(${info})
wellInfo = wellObj.getWellInfo()
`;
				case "save":
					return `
wellObj = client.getWellById(${info})
wellObj.editWellInfo(name="someName");
`;
				case "delete":
					return `
wellObj = client.getWellById(${info})
wellObj.deleteWell()
`;
				case "new":
					return `
wellObj = client.getWellById(${info})
wellObj.createDataset()
`;
			}
		}

		function generateCode4Project(mode, info) {
			switch (mode) {
				case "load":
					return `
projectObj = client.getProjectById(${info})
projectInfo = projectObj.getProjectInfo()
`;
				case "save":
					return `
projectObj = client.getProjectById(${info})
projectObj.editProjectInfo(name="someName");
`;
				case "delete":
					return `
projectObj = client.getProjectById(${info})
projectObj.deleteProject()
`;
				case "new":
					return `
projectObj = client.getProjectById(${info})
projectObj.createWell(name = "someName")
`;
			}
		}
	};
	this.generateSaveCurveData = function () {
		self.code += `
curveObject.updateCurveData(someData)    
`;
	};
	this.generateLoginByToken = function () {
		self.code += `
client = wilib.loginByToken("${wiToken.getToken()}")
`;
	};
	this.generateLoginByAccount = function () {
		self.code += `
client = wilib.login("${wiToken.getUserName()}", "${wiToken.getPassword()}")
`;
	};

	this.clickFunction = function ($event, node) {

		if (node.idCurve) {
			console.log("Curve clicked");
		} else if (node.idDataset) {
			console.log("Dataset clicked");
		} else if (node.idWell) {
			console.log("Well clicked");
			getDatasets(node.idWell, node, function (err, datasets) {
				if (err) {
					return console.log(err);
				}
				node.datasets = datasets;
			});
		} else if (node.idProject) {
			if (!node.timestamp || (Date.now() - node.timestamp > 3 * 1000)) {
				getWells(node.idProject, node, function (err, wells) {
					if (err) {
						return alertMessage.error(err.data.content);
					}
					//node.wells = wells;
					if (!node.wells || !node.wells.length) {
						node.wells = [];
						for (const w of wells) node.wells.push(w);
					}
				});
			}
		}
	};
	// this.getCurveTree = getCurveTree;

	function getCurveTree() {
		self.showLoading = true;
		$scope.treeConfig = [];
		getProjects($scope.treeConfig, function (err, projects) {
			if (err) {
				ngDialog.open({
					template: 'templateConnectionError',
					className: 'ngdialog-theme-default',
					scope: $scope,
				});
				self.cancelReload = function () {
					ngDialog.close();
					$timeout(() => {
						location.reload();
					}, 500)
				};
				self.showLoading = false;
				return;
			}
			// $scope.treeConfig = projects.filter(project => !project.shared);
			$scope.treeConfig = projects;
			$scope.treeConfig.map(p => {
				p.realName = p.name;
				p.name = p.alias;
			});
			if (self.sortByName) {
				$scope.treeConfig = $scope.treeConfig.sort(dynamicSort("name"));
				self.showLoading = false;
				// console.log(self.sortByName)
			} else {
				$scope.treeConfig = $scope.treeConfig.sort(dynamicSort("alias"));
				self.showLoading = false;
				// console.log(self.sortByName)
			}
			// $scope.$apply()
		});
	}
	this.refreshTree = function () {
		getCurveTree();
	}
	function dynamicSort(property) {
		var sortOrder = 1;
	
		if(property[0] === "-") {
			sortOrder = -1;
			property = property.substr(1);
		}
	
		return function (a,b) {
			if(sortOrder == -1){
				return b[property].localeCompare(a[property]);
			}else{
				return a[property].localeCompare(b[property]);
			}        
		}
	}

	function getProjects(treeConfig, cb) {
		wiApi.getListProjects().then(resp => {
			$timeout(()=>{
				cb(null, resp, treeConfig);
			})
		}).catch(err => {
			cb(err);
		});
		// $http({
		// 	method: 'POST',
		// 	url: self.baseUrl + '/project/list',
		// 	data: {},
		// 	headers: {
		// 		"Authorization": wiToken.getToken(),
		// 	}
		// }).then(function (response) {
		// 	let projects = response.data.content;
		// 	console.log(projects)
		// 	// cb(null, projects, treeConfig);
		// }, function (err) {
		// 	cb(err);
		// });
	}

	function getWells(projectId, projectNodeChildren, cb) {
		wiApi.getListWells(projectId).then(wells => {
			$timeout(()=>{
				cb(null, wells, projectNodeChildren);
			})
		}).catch(err => {
			console.log(err);
			cb(err);
		});
		// $http({
		// 	method: 'POST',
		// 	url: self.baseUrl + '/project/well/list',
		// 	data: {
		// 		idProject: projectId
		// 	},
		// 	headers: {
		// 		"Authorization": wiToken.getToken(),
		// 	}
		// }).then(function (response) {
		// 	cb(null, response.data.content, projectNodeChildren);
		// }, function (err) {
		// 	cb(err);
		// });
	}

	function getDatasets(wellId, wellNodeChildren, cb) {
		wiApi.getListDatasets(wellId).then(well => {
			$timeout(()=>{
				cb(null, well.datasets, wellNodeChildren);
			})
		}).catch(err => {
			cb(err);
		})
		// $http({
		// 	method: 'POST',
		// 	url: self.baseUrl + '/project/well/info',
		// 	data: {
		// 		idWell: wellId
		// 	},
		// 	headers: {
		// 		"Authorization": wiToken.getToken(),
		// 	}
		// }).then(function (response) {
		// 	cb(null, response.data.content.datasets, wellNodeChildren);
		// }, function (err) {
		// 	cb(err);
		// });
	}
}

export default {
	name,
	options: {
		bindings: {
			baseUrl: "@",
			loginUrl: "@"
		},
		template,
		controller,
		controllerAs: 'self'
	}
}
