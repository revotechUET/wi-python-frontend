import template from './template.html'
import './style.scss'

const name = 'terminal';

controller.$inject = ['$sce', '$timeout', 'logStream'];

function controller($sce, $timeout, logStream) {
	const self = this;
	self.messages = [];
	self.running = false;
	logStream.registerCallback("pyLog", function (msg) {
		if (msg.content.indexOf("--|*WELCOME*|--") !== -1) self.running = true;
		if (msg.content.indexOf("--|*END*|--") !== -1) self.running = false;
		self.messages.push(msg);
		$timeout(() => {
		});
	});
	self.$onInit = function () {
		initState()
	};
	self.clearConsole = function () {
		this.messages.length = 0;
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