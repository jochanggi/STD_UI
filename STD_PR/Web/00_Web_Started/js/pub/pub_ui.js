/*--------------------------------------------------------------
	## Variables, Utility
--------------------------------------------------------------*/
var transitionend = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend';

/*--------------------------------------------------------------
	## UI
--------------------------------------------------------------*/
var ui = {
	init: function(){
		/* Layout */
		if ($('.gnb').length)			{ this.gnb.init()		}	/* GNB */
		if ($('.sidebar').length)		{ this.sidebar.init()	}	/* Sidebar */
	},

	/*--------------------------------------------------------------
		Layout
	--------------------------------------------------------------*/
	/*
		인스턴스: Sidebar
		기능설명: aria-controls, id 연결방식
		특이사항:
	*/
	gnb : {
		eleNode1_item : '.gnb .node1-item',
		eleNode2_item : '.gnb .node2-item',
		init: function(){
			var _this = this, setTime = null;
			$(this.eleNode1_item).not('.is-entered').on('mouseenter focusin', function(){
				clearTimeout(setTime);
				$(this).addClass('is-active').find('> a').attr({'aria-expended':'true'});
				$(this).siblings().removeClass('is-active').find('> a').attr({'aria-expended':'false'});
			}).addClass('is-entered');
			$(this.eleNode1_item).not('.is-leaved').on('mouseleave focusout', function(){
				var $this = $(this);
				setTime = setTimeout(function(){ $this.removeClass('is-active') });
			}).addClass('is-leaved');
		},
		set : function(n1, n2){
			$(this.eleNode1_item).eq(n1).addClass('is-current').siblings().removeClass('is-current');
			$(this.eleNode2_item).eq(n2).addClass('is-current').siblings().removeClass('is-current');
		}
	},
	/*
		인스턴스: Sidebar
		기능설명: aria-controls, id 연결방식
		특이사항:
	*/
	sidebar : {
		eleModule : '.sidebar',
		eleOpener : '.sidebar-opener',
		eleCloser : '.sidebar-closer',
		eleFocus : 'a, button, [tabindex=0]',
		init : function(){
			this.reset();
			this.event();
		},
		reset : function(){
			var clsSidebar = $(this.eleModule).attr('data-sidebar');
			$('body').attr({'data-sidebar': clsSidebar});
		},
		event : function(){
			var _this = this;
			$(this.eleOpener).off().on('click', function(){ var id = $(this).attr('aria-controls'); _this.open(id) });
			$(this.eleCloser).off().on('click', function(){ var id = $(this).attr('aria-controls'); _this.close(id) });
		},
		open : function(id){
			var _this = this;
			var $module = $('#'+id);
			$module.show();
			setTimeout(function(){
				$('body').addClass('is-sidebar-opened');
				$module.one(transitionend, function(){ $module.find(_this.eleFocus).first().focus() });
			},10);
		},
		close : function(id){
			var _this = this;
			var $module = $('#'+id);
			$('body').removeClass('is-sidebar-opened');
			$module.one(transitionend, function(){ $module.hide(); $(_this.eleOpener).focus(); });
		},
	},


	/*--------------------------------------------------------------
		Objects
	--------------------------------------------------------------*/
	/*
		인스턴스: _Object
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
		Content
	--------------------------------------------------------------*/
	/*
		인스턴스: _Object
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
