/*--------------------------------------------------------------
	Common - 전역공통
--------------------------------------------------------------*/
var cm = {
	init : function(){
		if ($('.gnb').length)			{this.gnb.init();		}	// ##GNB
	},

	// ##GNB
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
			var setTime = null;
			//Toggle
			$(this.eleNode1_link).off('click').on('click', function(){
				$(this).parent().toggleClass('is-active');
				return false;
			});
			//Open
			$(this.eleNode1_link).off('mouseenter').on('mouseenter', function(){
				var idx = $(this).parent().index();
				_this.open(idx);
			});
			//Open
			$(this.eleNode2_wrap).off('focusin').on('focusin', function(){
				clearTimeout(setTime);
				var idx = $(this).parent().index();
				_this.open(idx);
			});
			//Close
			$(this.eleNode1_item).off('focusout mouseleave').on('focusout mouseleave', function(){
				var $this = $(this);
				setTime = setTimeout(function(){ _this.close($this); }, 50);
			});
		},
		open : function(idx){
			$(this.eleNode1_item).eq(idx).addClass('is-active');
			this.close($(this.eleNode1_item).eq(idx).siblings('.is-active'));
		},
		close : function($activeItem){
			console.log($activeItem);
			$activeItem.removeClass('is-active');
		},
	},
}