import template from './template.html'
import './style.scss'

const name = 'terminal';

controller.$inject = ['$sce', '$timeout', 'logStream', 'projectApi'];

function controller($sce, $timeout, logStream, projectApi) {
	const self = this;

	//------------------------------------
	// function updateScroll() {
	// 	let element = document.getElementById("consoleWindow");
	// 	element.scrollTop = element.scrollHeight;
	// 	console.log(".")
	// }
	//------------------------------------
	self.messages = [];
	self.running = false;
	logStream.registerCallback("pyLog", function (msg) {
		if (msg.content.indexOf("--|*WELCOME*|--") !== -1) self.running = true;
		if (msg.content.indexOf("--|*END*|--") !== -1) self.running = false;
		self.messages.push(msg);
		$timeout(() => {
		});
		if (self.running) {
			let i = 0;
			let id = setInterval(updateScroll, 1000); //Cứ 3s gọi hàm myAlert một lần
			function updateScroll() {
				i++;
				let element = document.getElementById("consoleWindow");
				element.scrollTop = element.scrollHeight;
				console.log(".");
				clearInterval(id);          //Ngắt lặp lại sau 5 lần
			}
		}
	});

	self.$onInit = function () {
		initState()
	};

	self.clearConsole = function () {
		this.messages.length = 0;
	};

	self.terminateProcess = function () {
		let processes = JSON.parse(localStorage.getItem('running-pid') || []);
		console.log("Terminate ", processes);
		async.each(processes, (p, next) => {
			projectApi.terminateProcess(p).then(data => {
				console.log(data);
				next()
			});
		}, () => {
			localStorage.setItem('running-pid', '[]');
		});
	};

	self.$onChanges = function ({resultHtml, iframeHtmlLink, isResultAIframe}) {
		if (resultHtml) {
			self._resultHtml = $sce.trustAsHtml(resultHtml.currentValue)
		}

		if (iframeHtmlLink) {
			self._iframeHtmlLink = $sce.trustAsResourceUrl(iframeHtmlLink.currentValue)
		}

		if (isResultAIframe) {
			self.isResultAIframe = isResultAIframe.currentValue
		}
	};

	// self.run = function () {
	//   self.getCurrentCode(code => {
	//     browserCodeRunner.execute(self.project, self.fileName, ({ type, render, link }) => {
	//       if (render) self.render = $sce.trustAsHtml(render)
	//       if (link) self.link = $sce.trustAsResourceUrl(link)
	//       self.codeOrIframe = type === mime.types.html ? 'iframe' : 'code'
	//     })
	//   })
	// }

	function initState() {
		self._resultHtml = '';
		self._iframeHtmlLink = ''
	}
}

export default {
	name,
	options: {
		bindings: {
			resultHtml: '<',
			iframeHtmlLink: '<',
			isResultAIframe: '<'
		},
		template,
		controller,
		controllerAs: 'self'
	}
}