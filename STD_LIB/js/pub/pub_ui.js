/*--------------------------------------------------------------
	## UI - 모듈공통
--------------------------------------------------------------*/
var ui = {
	init: function(){
		console.log('ui.init()');

		if ($('.gnb-dropdown').length)		{this.gnb_dropdown.init();}		// #Gnb Dropdown
		if ($('.gnb-fulldown').length)		{this.gnb_fulldown.init();}		// #Gnb Fulldown
		if ($('.tab-nav').length)			{this.tab.init();}				// #Tab
		if ($('.acco').length)				{this.acco.init();}				// #acco
		if ($('[data-role=fold]').length)	{this.foldToggle.init();}		// #Folder (접기)
		if ($('[data-role=more]').length)	{this.moreToggle.init();}		// #FolderMore (더보기)
		if ($('.tooltip').length)			{this.tooltip.init();}			// #Tooltip
		if ($('.drop').length)				{this.drop.init();}				// #Dropdown
		if ($('.drop-select').length)		{this.dropSelect.init();}		// #Dropdown
		if ($('.popup-open').length)		{this.popup.init();}			// #Popup
		if ($('.js-popup').length)			{this.fullpopup.init();}		// Full Popup
		if ($('.js-sticky').length)			{this.sticky.init();}			// Sticky
		if ($('.js-spyScroll').length)		{this.spyScroll.init();}		// Spy Scroll
		if ($('.js-infinitScroll').length)	{this.infiniteScroll.init();}	// Infinit Scroll
		if ($('.js-floating').length)		{this.floating.init();}			// Floating
		if ($('.js-dimmer').length)			{this.dimmer.init();}			// Dimmer
		if ($('.js-progress').length)		{this.progress.init();}			// Progress
		if ($('.js-waypoint').length)		{this.waypoint.init();}			// Waypoint
	},

	//#Gnb Dropdown
	gnb_dropdown : {
		eleNode1_item : '.gnb-dropdown .node1-item',
		eleNode2_item : '.gnb-dropdown .node2-item',
		init: function(){
			var setTime = null;
			$(this.eleNode1_item).not('.is-entered').on('mouseenter focusin', function(){
				clearTimeout(setTime);
				$(this).addClass('is-active').find('> a').attr({'aria-expanded':'true'});
				$(this).siblings().removeClass('is-active').find('> a').attr({'aria-expanded':'false'});
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

	//#Gnb Fulldown
	gnb_fulldown : {
		eleModule : '.gnb-fulldown',
		eleNode1_item : '.gnb-fulldown .node1-item',
		eleNode2_item : '.gnb-fulldown .node2-item',
		init : function(){
			var _this = this, setTime = null;
			$(this.eleNode1_item).not('.is-entered').on('mouseenter focusin', function(){
				clearTimeout(setTime);
				$(_this.eleModule).addClass('is-active');
				$(_this.eleNode1_item).find('> a').attr({'aria-expanded':'true'});
			}).addClass('is-entered');
			$(this.eleNode1_item).not('.is-leaved').on('mouseleave focusout', function(){
				setTime = setTimeout(function(){
					$(_this.eleModule).removeClass('is-active');
					$(_this.eleNode1_item).find('> a').attr({'aria-expanded':'false'});
				});
			}).addClass('is-leaved');
		},
		set : function(n1, n2){
			$(this.eleNode1_item).eq(n1).addClass('is-current').siblings().removeClass('is-current');
			$(this.eleNode2_item).eq(n2).addClass('is-current').siblings().removeClass('is-current');
		}
	},

	/*
		기능정의: #Tab
		연결방식: aria-controls="" / id=""
		참고경로: modules/modules_tab.html
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
	*/
	tab: {
		eleButton: '.tab-nav a',
		eleContent: '.tab-content',
		init: function(){
			this.event();
		},
		event: function(){
			var _this = this;
			$(this.eleButton).not('.is-clicked').on('click', function(){
				_this.action($(this).attr('aria-controls')); return false;
			}).attr('.is-clicked');
		},
		action: function(id){
			$(this.eleButton+'[href="#'+id+'"]').attr({'aria-selected':'true'}).parent().addClass('is-selected').siblings().removeClass('is-selected').children().attr({'aria-selected':'false'});
			$('#'+id).attr({'aria-hidden':'false'}).removeAttr('hidden').siblings().attr({'aria-hidden': 'true'}).attr('hidden', 'hidden');
		},
	},

	/*
		기능정의: #acco
		연결방식: href="" / id=""
		참고경로: modules/modules_acco.html
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
	*/
	acco : {
		eleModule: '.acco',
		eleItem: '.acco-item',
		eleButton: '.acco-toggle',
		eleTitle: '.acco-title',
		eleContent: '.acco-cont',
		duration: 300,
		init: function(){
			this.reset();
			this.disable();
			this.event($(this.eleButton));
		},
		reset: function(){
			var _this = this;
			$('.acco-basic').each(function(){$(this).attr({'data-sync':'true', 'data-toggle':'true' })});
		},
		event: function($this){
			var _this = this;
			$this.not('.is-clicked, [disabled]').on('click', function(){
				_this.action($(this).attr('aria-controls')); return false;
			}).addClass('is-clicked');
		},
		action: function(id){
			var _this = this,
				$content = $('#'+id),
				$toggle = $('[aria-controls'+id+']'),
				$module = $content.closest(this.eleModule),
				$Item  = $content.closest(this.eleItem);
				console.log(id, $('#'+id), !$Item.hasClass('is-active'));

			// Toggle 접기
			if ($module.attr('data-toggle') == 'true' && $Item.hasClass('is-active')){
				$Item.removeClass('is-active').find(_this.eleButton).attr('aria-expanded','false');
				$(this).attr('aria-hidden', 'true');
				$content.stop().slideUp(this.duration);
				console.log('Accordion Toggle');
			}
			// Syncroize 펼치기
			else if ($module.attr('data-sync') == 'true' && !$Item.hasClass('is-active')){
				$Item.addClass('is-active').find(_this.eleButton).attr('aria-expanded','true');
				$Item.find(this.eleContent).stop().slideDown(this.duration);
				$Item.siblings().removeClass('is-active').find(_this.eleButton).attr('aria-expanded','false');
				$Item.siblings().find(this.eleContent).stop().slideUp(this.duration);
				console.log('Syncroize Toggle');
			}
			// Default 펼치기
			else if ($module.attr('data-sync') == 'false' && !$Item.hasClass('is-active')){
				$Item.addClass('is-active').find(_this.eleButton).attr('aria-expanded','true');
				$(this).attr('aria-hidden', 'false');
				$Item.find(this.eleContent).stop().slideDown(this.duration);
				console.log('Default Toggle');
			}
			this.disable();
		},
		disable: function(){
			$(this.eleButton+'[disabled]').each(function(){
				 $(this).removeAttr('aria-expanded');
				 $(this).attr('aria-disabled', 'true');
				 $(this).off('click');
			})
		}
	},

	/*
		기능정의: #Folder
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	foldToggle : {
		eleButton: '.fold-toggle[data-role=fold]',
		eleContent: '.fold-cont',
		eleFocus: '.fold-focus',
		speed: 250,
		init : function(){
			var _this = this;
			this.event();
			$(this.eleContent).each(function(){ _this.reset($(this).attr('id')) });
		},
		reset : function(id){
			var $button = $('[aria-controls='+id+']');
			if ($('#'+id).is(':visible') == true){ $button.attr({'aria-expanded':'true'}) }
			else { $button.attr({'aria-expanded':'false'}) }
		},
		event : function(){
			var _this = this;
			$(this.eleButton).not('.is-clicked').on('click', function(){
				_this.action($(this).attr('aria-controls'));
			}).addClass('is-clicked');
		},
		action : function(id){
			var _this = this;
			$('#'+ id).stop().slideToggle(_this.speed, function(){ _this.reset(id) });
		}
	},

	/*
		기능정의: #FolderMore
		연결방식: data-target="" / data-name=""
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	moreToggle : {
		eleButton:	'.fold-toggle[data-role=more]',
		eleContent: '.fold-cont',
		eleHide:	'.fold-hide',
		eleFocus:	'.fold-focus',
		speed: 250,
		init: function(){
			var _this = this;
			this.event();
			$(this.eleContent).each(function(){ _this.reset($(this).attr('id')) });
		},
		reset: function(id, obj){
			var $button = $('[aria-controls='+id+']');
			var $eleHide = $('#'+id).find(this.eleHide);
			if ($eleHide.is(':visible') == true){
				$button.attr({'aria-expanded':'true'});
				$eleHide.removeAttr('hidden');
				if (typeof(obj) == 'object'){ obj.attr({'role':'text', 'tabindex':'0'}).focus(); }
			} else {
				$button.attr({'aria-expanded':'false'});
				$eleHide.attr('hidden');
			}
		},
		event: function(){
			var _this = this;
			$(this.eleButton).not('.is-clicked').on('click', function(){
				_this.action($(this).attr('aria-controls'));
			})
		},
		action: function(id){
			$('#'+id).find(this.eleHide).toggle();
			this.reset(id, $('#'+id).find(this.eleFocus));
		}
	},

	/*
		기능정의: #Tooltip
		참고사항: 설명
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	tooltip: {
		eleWrapper: '.tooltip-wrap',
		eleOpener: '.tooltip-open',
		eleCloser: '.tooltip-close',
		eleModule: '.tooltip',
		init: function(){
			this.event();
		},
		event: function(){
			var _this = this;
			$(this.eleOpener).not('.is-evented').on('click', function(){_this.open($(this).attr('aria-controls')); return false});
			$(this.eleCloser).not('.is-evented').on('click', function(){_this.close($(this).attr('aria-controls')); return false});
			$(this.eleWrapper).not('.is-evented').on('mouseover', function(){_this.open($(this).find(_this.eleModule).attr('id'))});
			$(this.eleWrapper).not('.is-evented').on('mouseleave', function(){_this.close($(this).find(_this.eleModule).attr('id'))});
		},
		open: function(id, callback){
			var _this = this;
			var $id = $('#'+id);
			$id.attr({'data-state':'null', 'aria-hidden':'false'});
			$id.stop().fadeIn(200);
			$(_this.eleOpener+'[aria-controls="'+id+'"]').attr({'aria-expanded':'true'});
			if (callback){ callback }
		},
		close: function(id, callback){
			var _this = this;
			var $id = $('#'+id);
			$id.attr({'data-state':'null', 'aria-hidden':'true'});
			$id.stop().fadeOut(200);
			$(_this.eleOpener+'[aria-controls="'+id+'"]').attr({'aria-expanded':'false'});
			if (callback){ callback }
		},
	},

	/*
		기능정의: #Drop
		참고사항: href="" / id="" 연결
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	drop: {
		eleWrap: '.drop',
		eleButton: '.drop-toggle',
		init: function(){
			this.event();
		},
		event: function(){
			var _this = this;
			var setTime;
			//토글이벤트(기본기능) Reflow 발생하므로 토글슬라이스 사용안함
			$(this.eleButton).not('.is-toggled').on('click', function(){
				var id = $(this).attr('aria-controls');
				var isActive = $(this).closest(_this.eleWrap).hasClass('is-active');
				if (isActive){ _this.close(id) } //활성화된 경우, 닫기
				if (!isActive){ _this.open(id) } //비활성화 경우, 열기
			}).addClass('is-toggled');
			//모듈내 포커스아웃 닫기 막기
			$(this.eleWrap).not('.is-focusin').on('focusin', function(){ clearTimeout(setTime) }).addClass('is-focusin');
			//모듈 포커스아웃 닫기
			$(this.eleWrap).not('.is-focusout').on('focusout', function(){
				var id = $(this).find(_this.eleButton).attr('aria-controls');
				if ($(this).hasClass('is-active')){ setTime = setTimeout(function(){ _this.close(id) }, 10) }
			}).addClass('is-focusout');
		},
		open: function(id){
			//초기화
			var $wrapActive = $(this.eleWrap).filter('.is-active');
			var idActive = $wrapActive.find(this.eleButton).attr('aria-controls');
			this.close(idActive);

			//활성화
			var $id = $('#'+id);
			var $button = $('[aria-controls='+id+']');
			var $wrap = $('#'+id).closest(this.eleWrap);
			$id.removeAttr('hidden');
			$button.attr({'aria-expanded':'true'});
			setTimeout(function(){ $wrap.addClass('is-active') });
		},
		close: function(id){
			var $id = $('#'+id);
			var $button = $('[aria-controls='+id+']');
			var $wrap = $('#'+id).closest(this.eleWrap);
			$wrap.removeClass('is-active');
			$id.one(transitionend, function(){
				if (!$wrap.hasClass('is-active')){
					$id.attr({'hidden':'hidden'});
					$button.attr({'aria-expanded':'false'});
				}
			})
		},
	},

	dropSelect : {
		eleModule: '.drop-select',
		eleLabel: '.drop-label',
		eleItem: '.drop-item',
		init : function(){
			this.event();
		},
		event : function(){
			var _this = this;
			$(this.eleModule).find(this.eleItem).children().not('.is-clicked').on('click', function(e){
				_this.action($(this));
				e.preventDefault();
			}).addClass('is-clicked');
		},
		action : function($link){
			var $eleCurrent = $link.closest(this.eleItem);
			var $eleModule = $link.closest(this.eleModule);
			var $eleLabel = $eleModule.find(this.eleLabel);
			$eleCurrent.attr({'hidden':'hidden'}).siblings().removeAttr('hidden');
			$eleLabel.text($link.text());

		},
	},

	/*
		기능정의: #Popup
		참고사항: 설명
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	popup: {
		eleModule: '.popup-wrap',
		eleOpener: '.popup-open',
		eleCloser: '.popup-close',
		eleFocus : '.popup-focus',
		eleTabIdx: 'a, button, select, input, textarea', //키보드제어 요소
		clsVisible: 'is-visible',
		zindex   : 1000,
		indexNum : 0,
		scale	 : 0.8,
		duration : 0.6,
		init: function(){
			this.event();
		},
		event: function(){
			var _this = this;
			//Trigger Open Event
			$(_this.eleOpener).not('.is-clicked').on('click', function(){
				var id = $(this).attr('aria-controls');
				_this.open(id);
			}).addClass('is-clicked');
			//Trigger Close Event
			$(_this.eleCloser).not('.is-clicked').on('click', function(){
				var id = $(this).attr('aria-controls');
				_this.close(id);
			}).addClass('is-clicked');
			//Kayboard Close Event
			window.onkeydown = function(){
				var keycode = event.keyCode;
				if (keycode == 27 && _this.indexNum > 0){ //모달이 있을때 ESC를 눌른경우
					var id = $(_this.eleModule + '[data-index='+_this.indexNum+']').attr('id');
					_this.close(id);
				}
			}
		},
		open: function(id){
			var _this = this;
			var $eleModule = $('#'+id);
			_this.indexNum = _this.indexNum + 1;
			//Popup Open Active
			$eleModule.addClass(_this.clsVisible).attr('data-index', _this.indexNum).css('z-index', _this.zindex + _this.indexNum); //모듈활성화 + 오픈순서값 + 레이어순서 적용
			if ($eleModule.outerHeight()%2 == 1){$eleModule.css({height:$eleModule.outerHeight()+1})} //홀수 높이인경우 짝수로변환 (trnaslateY 픽셀깨짐 대응)
			TweenMax.set($eleModule, {scale:_this.scale, onComplate:function(){ //효과준비
				TweenMax.to($eleModule, _this.duration, {scale:1, opacity:1, ease:Power4.easeOut, onComplete:function(){ //효과진행
					_this.keyDisable(_this.indexNum); //보조기기, 키보드 접근성
					if ($('body').hasClass('dv-ios')){ $eleModule.removeAttr('aria-labelledby')} //IOS를 다른 보조기기에 맞추기
					$eleModule.attr({'tabindex':'0'}).focus();
				}});
			}});

			//Document UI
			dimmer.open('dimmer-popup', _this.duration); //딤 열기 (배경 가리기)
			bodyScroll.fixed(); //배경스크롤 고정
		},
		close: function(id){
			var _this = this;
			var $eleModule = $('#'+id);
			_this.indexNum = _this.indexNum - 1;
			//Popup Close Active
			TweenMax.to($eleModule, _this.duration, {scale:_this.scale, opacity:0, ease:Power4.easeOut, onComplete:function(){ //효과진행
				_this.keyEnable(_this.indexNum); //보조기기, 키보드 접근성
				var id = $eleModule.attr('id');
				$(_this.eleOpener+'[aria-controls='+id+']').focus();
				$eleModule.hide().removeClass(_this.clsVisible).removeAttr('style'); //비활성 적용
			}});

			//Document UI
			dimmer.close('dimmer-popup', _this.duration); //딤 닫기 (배경 보이기)
			bodyScroll.static(); //배경스크롤 해제
		},
		keyDisable: function(idx){
			//보조기기, 키보드 접근제한 설정
			$(this.eleModule + '[data-index='+idx+']').siblings().attr({'aria-hidden':'true'}).addClass('is-ariaHidden'); // 보조기기 접근제한
			$(this.eleModule + '[data-index='+idx+']').siblings().find(this.eleTabIdx).not('[tabindex=0]').attr({'tabindex':'-1'}).addClass('not-tabindex'); // 기본요소 키보드 접근제한 (클래스로 설정표시)
			$(this.eleModule + '[data-index='+idx+']').siblings().find('[tabindex=0]').attr({'tabindex':'-1'}).addClass('is-tabindex'); // 탭인덱스 키보드 접근제한 (클래스로 설정표시)
		},
		keyEnable: function(idx){
			//활성화된 모달이 없는경우 전체 초기화
			if (this.indexNum == 0){
				$('.is-ariaHidden').attr({'aria-hidden':'false'}).removeClass('is-ariaHidden'); //보조기기 접근해제
				$('.not-tabindex').removeAttr('tabindex').removeClass('not-tabindex'); //탭인덱스 없었던 요소 접근해제
				$('.is-tabindex').attr('tabindex', '0').removeClass('is-tabindex');   //탭인덱스 0이었던 요소 접근해제
			}
			//활성화된 모달이 남은경우 초기화
			else {
				$(this.eleModule + '[data-index='+idx+']').attr({'aria-hidden':'false'});
				$(this.eleModule + '[data-index='+idx+']').find('.not-tabindex').removeAttr('tabindex'); //탭인덱스 없었던 요소 접근해제
				$(this.eleModule + '[data-index='+idx+']').find('.is-tabindex').attr('tabindex', '0');   //탭인덱스 0이었던 요소 접근해제
			}
		},
	},

	/*
		## Full Popup
		기능정의: 설명
		참고사항: 설명
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	fullpopup: {
		init: function(){
			this.event();
		},
		reset: function($this){
			ut.setAnchorAttr($this);
		},
			event: function(){
			this.action();
		},
		action: function(){
			console.log('Fullpopup Action');
		},
	},

	/*
		## Sticky
		기능정의: 설명
		참고사항: 설명
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	sticky: {
		init: function(){
			this.event();
		},
		event: function(){
			this.action();
		},
		action: function(){
			console.log('Sticky Action');
		},
	},

	/*
		## Spy Scroll
		기능정의: 설명
		참고사항: 설명
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	spyScroll: {
		init: function(){
			this.event();
		},
		event: function(){
			this.action();
		},
		action: function(){
			console.log('Spy Scroll Action');
		},
	},

	/*
		## Infinit Scroll
		기능정의: 설명
		참고사항: 설명
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	infiniteScroll: {
		init: function(){
			this.event();
		},
		event: function(){
			this.action();
		},
		action: function(){
			console.log('Infinit Scroll Action');
		},
	},

	/*
		## Floating
		기능정의: 설명
		참고사항: 설명
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	floating: {
		init: function(){
			this.event();
		},
		event: function(){
			this.action();
		},
		action: function(){
			console.log('Floating Action');
		},
	},

	/*
		## Dimmer
		기능정의: 설명
		참고사항: 설명
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	dimmer: {
		init: function(){
			this.event();
		},
		event: function(){
			this.action();
		},
		action: function(){
			console.log('Dimmer Action');
		},
	},

	/*
		## Progress
		기능정의: 설명
		참고사항: 설명
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	progress: {
		init: function(){
			this.event();
		},
		event: function(){
			this.action();
		},
		action: function(){
			console.log('Progress Action');
		},
	},

	/*
		## Waypoint
		기능정의: 설명
		참고사항: 설명
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	waypoint: {
		init: function(){
			this.event();
		},
		event: function(){
			this.action();
		},
		action: function(){
			console.log('Waypoint Action');
		},
	},
}

/*--------------------------------------------------------------
	## Init - 초기실행
--------------------------------------------------------------*/
$(document).ready(function(){
	dv.init();   // 유틸리티 - pub_utility.js
	ui.init();  // 개발에서 하나만 호출하도록
});