/*--------------------------------------------------------------
	Variables
--------------------------------------------------------------*/
var transitionend = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend';

/*--------------------------------------------------------------
	UI
--------------------------------------------------------------*/
var ui = {
	init: function(){
		/* ## Layout */
		if ($('셀렉터').length) {this.object.init(); } /* # Object */
		if ($('셀렉터').length) {this.object.init(); } /* # Object */

		/* ## Modules */
		if ($('셀렉터').length) {this.object.init(); } /* # Object */
		if ($('셀렉터').length) {this.object.init(); } /* # Object */

		/* ## Content */
		if ($('셀렉터').length) {this.object.init(); } /* # Object */
		if ($('셀렉터').length) {this.object.init(); } /* # Object */
	},

	/*--------------------------------------------------------------
		## Layout
	--------------------------------------------------------------*/
	/*
		인스턴스: # Object
		기능설명: aria-controls, id 연결방식
		특이사항:
	*/
	object: {
		isEvented : false,
		init: function(){
			if (this.isEvented == false){ this.event(); this.isEvented = true; }
		},
		event: function(){ },
		action: function(){ },
	},

	/*--------------------------------------------------------------
		## Modules
	--------------------------------------------------------------*/
	/*
		인스턴스: # Object
		기능설명: aria-controls, id 연결방식
		특이사항:
		참고화면: URL
	*/
	object: {
		init: function(){ },
		event: function(){ },
		action: function(){ },
	},


	/*--------------------------------------------------------------
		## Content
	--------------------------------------------------------------*/
	/*
		인스턴스: # Object
		기능설명: aria-controls, id 연결방식
		특이사항:
		참고화면: URL
	*/
	object: {
		init: function(){ },
		event: function(){ },
		action: function(){ },
	},

}

$(document).ready(function(){
	dv.init();   // 기기체크 - pub_device.js
	ui.init();   // 모듈공통 - pub_ui.js
});
