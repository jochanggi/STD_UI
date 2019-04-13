/*--------------------------------------------------------------
	## Common - 전체공통
--------------------------------------------------------------*/
var transitionend = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend';
var cm = {
	init : function(){
		if ($('#sidebar').length)		{ this.sidebar.init()	}	/* Aside Menu */
	},
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
	}
}

$(document).ready(function(){
	cm.init();
})