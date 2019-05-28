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
		if ($('#sidebar').length)		{ this.sidebar.init()	}	/* Sidebar */
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
		eleNode1_list	: '.gnb .node1-list',
		eleNode1_item	: '.gnb .node1-item',
		eleNode1_link	: '.gnb .node1-link',
		eleNode2_wrap	: '.gnb .node2-wrap',
		eleNode2_item	: '.gnb .node2-item',
		eleNode2_link	: '.gnb .node2-link',
		idxNode1		: 0,
		idxNode2		: 0,
		init : function(){
			this.reset();
			this.event();
		},
		reset : function(){
			$(this.eleNode1_item).attr('data-state', 'close');
			$(this.eleNode1_item).eq(this.idxNode1).addClass('is-current').siblings('.is-current').removeClass('is-current');
			$(this.eleNode2_item).eq(this.idxNode2).addClass('is-current').siblings('.is-current').removeClass('is-current');
		},
		event : function(){
			var _this = this;
			//Toggle
			$(this.eleNode1_link).not('.is-toggled').on('click', function(){
				var idx = $(this).parent().index();
				var $activeItem = $(this).parent().siblings();
				if ($(this).parent().attr('data-state') == 'open'){_this.close($(this).parent());}
				else if ($(this).parent().attr('data-state') == 'close'){_this.open(idx);}
				return false;
			}).addClass('is-toggled');
			//Open
			$(this.eleNode1_link).not('.is-mouseentered').on('mouseenter', function(){
				var idx = $(this).parent().index();
				var $activeItem = $(this).parent().siblings();
				_this.open(idx);
			}).addClass('is-mouseentered');
			//Close
			$(this.eleNode1_list).not('.is-mouseleaved').on('mouseleave', function(){
				var $activeItem = $(_this.eleNode1_item).filter('.is-active');
				_this.close($activeItem);
			}).addClass('is-mouseleaved');
			//Area Leave
			$(document).on('focusin click', function(e){
				if ($(_this.eleNode1_list).has(e.target).length == 0){
					var $activeItem = $(_this.eleNode1_item+'.is-active');
					_this.close($activeItem);
				}
			});
		},
		open : function(idx){
			$(this.eleNode1_item).eq(idx).addClass('is-active').attr('data-state', 'open');
			this.close($(this.eleNode1_item).eq(idx).siblings('.is-active'));
		},
		close : function($activeItem){
			$activeItem.removeClass('is-active').attr('data-state', 'close');
		},
	},

	/*
		인스턴스: Sidebar
		기능설명: aria-controls, id 연결방식
		특이사항:
	*/
	sidebar : {
		eleModule : '.sidebar-wrap',
		eleOpener : '.js-sidebar-opener',
		eleCloser : '.js-sidebar-closer',
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
