/*--------------------------------------------------------------
	## Common - 전체공통
--------------------------------------------------------------*/
var cm = {
	init : function(){
		console.log('cm.init()');

		if ($('.gnb').length)			{ this.gnb.init()		}	/* GNB */
		if ($('.aside-menu').length)	{ this.asideMenu.init()	}	/* Aside Menu */
	},
	gnb : {
		eleNode1_list	: '.gnb .node1-list',
		eleNode1_item	: '.gnb .node1-item',
		eleNode1_link	: '.gnb .node1-link',
		eleNode2_wrap	: '.gnb .node2-wrap',
		eleNode2_item	: '.gnb .node2-item',
		eleNode2_link	: '.gnb .node2-link',
		node1_idx		: 0,
		node2_idx		: 0,
		init : function(){
			this.reset();
			this.event();
		},
		reset : function(){
			$(this.eleNode1_item).attr('data-state', 'close');
			$(this.eleNode1_item).eq(this.node1_idx).addClass('is-current').siblings('.is-current').removeClass('is-current');
			$(this.eleNode2_item).eq(this.node2_idx).addClass('is-current').siblings('.is-current').removeClass('is-current');
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
	asideMenu : {
		eleModule : '.aside-menu',
		eleOpener : '.aside-menu-open',
		eleCloser : '.aside-menu-close',
		init : function(){
			this.event();
		},
		event : function(){
			var _this = this;
			//Opener
			$(this.eleOpener).not('.is-clicked').on('click', function(){
				var id = $(this).attr('aria-controls');
				_this.open(id);
			}).addClass('is-clicked');
			//Closer
			$(this.eleCloser).not('.is-clicked').on('click', function(){
				var id = $(this).attr('aria-controls');
				_this.close(id);
			}).addClass('is-clicked');
		},
		open : function(id){
			var $module = $('#'+id);
			$module.show();
		},
		close : function(id){
			var $module = $('#'+id);
			$module.hide();
		},
	}
}

$(document).ready(function(){
	cm.init();
})