export const name = 'projectApi';

service.$inject = ['config', 'request', 'wiToken'];

export function service(config, request, wiToken) {

	const newProject = name => {
		const token = getToken();
		const url = `${config.ONLINE_EDITOR_URL}/project/new?name=${encodeURIComponent(name)}&token=${token}`;
		return request.get(url)
	};

	const openProject = name => {
		const token = getToken();
		const url = `${config.ONLINE_EDITOR_URL}/project/open?name=${encodeURIComponent(name)}&token=${token}`;
		return request.get(url)
	};

	const deleteProject = name => {
		const token = getToken();
		const url = `${config.ONLINE_EDITOR_URL}/project/delete?name=${encodeURIComponent(name)}&token=${token}`;
		return request.get(url)
	};
	// const deleteFile = name => {
	// 	const token = getToken();
	// 	const url = `${config.ONLINE_EDITOR_URL}/project/delete?name=${encodeURIComponent(name)}&token=${token}`;
	// 	return request.get(url)
	// };
	const deleteFolder = (project, folder) => {
		const token = getToken();
	    const url = `${config.ONLINE_EDITOR_URL}/file-sys/remove-folder?project=${project}&folder=${encodeURIComponent(folder)}&token=${token}`
	    return request.get(url)
	};
	const renameFile = (project, file, newFileName) => {
		const token = getToken();
	    const url = `${config.ONLINE_EDITOR_URL}/file-sys/rename-file?project=${project}&file=${encodeURIComponent(file)}&newFileName=${encodeURIComponent(newFileName)}&token=${token}`
	    return request.get(url)
	};
	const renameFolder = (project, folder, newFolderName) => {
		const token = getToken();
	    const url = `${config.ONLINE_EDITOR_URL}/file-sys/rename-folder?project=${project}&folder=${encodeURIComponent(folder)}&newFolderName=${encodeURIComponent(newFolderName)}&token=${token}`
	    return request.get(url)
	};
	const deleteFile = (project, file) => {
		const token = getToken();
	    const url = `${config.ONLINE_EDITOR_URL}/file-sys/remove-file?project=${project}&file=${encodeURIComponent(file)}&token=${token}`
	    return request.get(url)
	};
	const openFile = dir => {
		const token = getToken();
		const url = `${config.ONLINE_EDITOR_URL}/project/read-file?dir=${encodeURIComponent(dir)}&token=${token}`;
		return request.get(url)
	};

	const openFolder = dir => {
		const token = getToken();
		const url = `${config.ONLINE_EDITOR_URL}/project/read-folder?dir=${encodeURIComponent(dir)}&token=${token}`;
		return request.get(url)
	};

	const listProjects = () => {
		const token = getToken();
		const url = `${config.ONLINE_EDITOR_URL}/project/list?&token=${token}`;
		return request.get(url)
	};

	const runCode = (fileName, project) => {
		const token = getToken();
		const url = `${config.ONLINE_EDITOR_URL}/code-runner/?file=${encodeURIComponent(fileName)}&project=${encodeURIComponent(project)}&token=${token}`;
		return request.get(url)
	};

	const saveCode = (project, fileName, code) => {
		const token = getToken();
		const url = `${config.ONLINE_EDITOR_URL}/code-action/save`;
		const data = {
			project,
			fileName,
			code,
			token
		};

		return request.post(url, data)
	};

	const login = (username, password) => {
		//const url = `${config.USER_RELATED_ROOT_URL}/user/login`
		const url = `${config.USER_RELATED_ROOT_URL}/login`;
		const data = {
			username,
			password
		};

		return request.post(url, data)
	};



	const removeItem = (project, item) => {
		const token = getToken();
		const url = `${config.ONLINE_EDITOR_URL}/file-sys/remove-folder?project=${project}&folder=${encodeURIComponent(item)}&token=${token}`;
		return request.get(url)
	};

	const newFile = (project, file) => {
		const token = getToken();
		const url = `${config.ONLINE_EDITOR_URL}/file-sys/new-file?project=${project}&file=${encodeURIComponent(file)}&token=${token}`;
		return request.get(url)
	};

	const newFolder = (project, folder) => {
		const token = getToken();
		const url = `${config.ONLINE_EDITOR_URL}/file-sys/new-folder?project=${project}&folder=${encodeURIComponent(folder)}&token=${token}`;
		return request.get(url)
	};

	function getToken() {
		return wiToken.getToken();
	}

	function getUsername() {

		return wiToken.getUserName();
	}

	return {
		newProject,
		openProject,
		deleteProject,
		renameFile,
		renameFolder,
		deleteFile,
		deleteFolder,
		openFile,
		openFolder,
		listProjects,
		runCode,
		saveCode,
		login,
		// removeFile,
		removeItem,
		newFile,
		newFolder
	}

}