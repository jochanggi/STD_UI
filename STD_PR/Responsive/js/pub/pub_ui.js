/*--------------------------------------------------------------
	## UI - 모듈공통
--------------------------------------------------------------*/
var ui = {
	init : function(){
		console.log('ui.init()');

		if ($('.tab-nav').length)		{this.tab.init();		}	/* ##Tabs */
		if ($('.accordion').length)		{this.accrodion.init();	}	/* ##Accordion */
	},

	/*
		기능이름 : ##Tabs
		기능설정 : 전환탭 공통
		참고내용 : data-id, id 연결방식
		참고화면 : URL
	*/
	tabs : {
		init : function(){
			this.event();
		},
		event : function(){
		},
		action : function(){
		},
	},

	/*
		기능이름 : ##Accordion
		기능설정 : 전환탭 공통
		참고내용 : data-id, id 연결방식
		참고화면 : URL
	*/
	accordion : {
		init : function(){
			this.event();
		},
		event : function(){
		},
		action : function(){
		},
	},
}