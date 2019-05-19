/*--------------------------------------------------------------
	## UI - 모듈공통
--------------------------------------------------------------*/
var ui = {
	init: function(){
		console.log('ui.init()');

		if ($('.gnb-dropdown').length)		{this.gnb_dropdown.init();}		// #Gnb Dropdown
		if ($('.gnb-fulldown').length)		{this.gnb_fulldown.init();}		// #Gnb Fulldown
		if ($('.ui-tab-nav').length)		{this.tab.init();}				// #Tab
		if ($('.ui-acco').length)			{this.acco.init();}		// #acco
		if ($('[data-role=fold]').length)	{this.folder.init();}			// #Folder (접기)
		if ($('[data-role=more]').length)	{this.folderMore.init();}		// #FolderMore (더보기)
		if ($('.tooltip-basic').length)		{this.tooltip.init();}			// #Tooltip
		if ($('.dropdown').length)			{this.dropdown.init();}			// #Dropdown
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
		eleModule		: '.gnb-dropdown',
		eleNode1_item	: '.node1-item',
		eleNode2_item	: '.node2-item',
		idxNode1		: -1,
		idxNode2		: -1,
		isEvented		: false,
		init : function(){
			if (this.isEvented == false){ this.event(); this.isEvented = true; }
		},
		set : function(n1, n2){
			this.idxNode1 = n1, this.idxNode2 = n2;
			if (this.idxNode1 > -1){ $(this.eleModule).find(this.eleNode1_item).eq(this.idxNode1).attr({'aria-current':'true'}).siblings().attr({'aria-current':'false'}) }
			if (this.idxNode2 > -1){ $(this.eleModule).find(this.eleNode2_item).eq(this.idxNode2).attr({'aria-current':'true'}).siblings().attr({'aria-current':'false'}) }
		},
		event : function(){
			var _this = this, setTime = null;
			$(this.eleModule).find(this.eleNode1_item).on('mouseenter focusin', function(){
				clearTimeout(setTime);
				var idx = $(this).index();
				_this.open(idx);
			});
			$(this.eleModule).find(this.eleNode1_item).on('mouseleave focusout', function(){
				var idx = $(this).index();
				setTime = setTimeout(function(){ _this.close(idx) }, 50);
			});
		},
		open : function(idx){
			$(this.eleModule).find(this.eleNode1_item).eq(idx).attr({'aria-selected':'true', 'aria-expanded':'true'}).siblings().attr({'aria-selected':'false', 'aria-expanded':'false'});
		},
		close : function(idx){
			$(this.eleModule).find(this.eleNode1_item).eq(idx).attr({'aria-selected':'false', 'aria-expanded':'false'});
		},
	},

	//#Gnb Fulldown
	gnb_fulldown : {
		eleModule		: '.gnb-fulldown',
		eleNode1_item	: '.node1-item',
		eleNode2_item	: '.node2-item',
		idxNode1		: -1,
		idxNode2		: -1,
		isEvented		: false,
		init : function(){
			if (this.isEvented == false){ this.event(); this.isEvented = true; }
		},
		set : function(n1, n2){
			this.idxNode1 = n1, this.idxNode2 = n2;
			if (this.idxNode1 > -1){ $(this.eleModule).find(this.eleNode1_item).eq(this.idxNode1).attr({'aria-current':'true'}).siblings().attr({'aria-current':'false'}) }
			if (this.idxNode2 > -1){ $(this.eleModule).find(this.eleNode2_item).eq(this.idxNode2).attr({'aria-current':'true'}).siblings().attr({'aria-current':'false'}) }
		},
		event : function(){
			var _this = this, setTime = null;
			$(this.eleModule).find(this.eleNode1_item).on('mouseenter focusin', function(){
				clearTimeout(setTime);
				var idx = $(this).index();
				_this.open(idx);
			});
			$(this.eleModule).find(this.eleNode1_item).on('mouseleave focusout', function(){
				var idx = $(this).index();
				setTime = setTimeout(function(){
					_this.close(idx)
				}, 50);
			});
		},
		open : function(idx){
			$(this.eleModule).addClass('is-active')
			$(this.eleModule).find(this.eleNode1_item).attr({'aria-expanded':'true'}).eq(idx).attr({'aria-selected':'true'}).siblings().attr({'aria-selected':'false'});
		},
		close : function(idx){
			$(this.eleModule).removeClass('is-active');
			$(this.eleModule).find(this.eleNode1_item).attr({'aria-expanded':'false'}).eq(idx).attr({'aria-selected':'false'});
		},
	},

	/*
		기능정의: #Tab
		연결방식: aria-controls="" / id=""
		참고경로: modules/modules_tab.html
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
	*/
	tab: {
		eleButton: '.ui-tab-nav a',
		eleContent: '.ui-tab-content',
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
			$(this.eleButton+'[href="#'+id+'"]').attr({'aria-selected':'true'}).parent().siblings().children().attr({'aria-selected':'false'});
			$('#'+id).attr({'aria-hidden':'false'}).siblings().attr({'aria-hidden': 'true'});
		},
	},

	/*
		기능정의: #acco
		연결방식: href="" / id=""
		참고경로: modules/modules_acco.html
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
	*/
	acco : {
		eleModule: '.ui-acco',
		eleItem: '.ui-acco-item',
		eleButton: '.ui-acco-toggle',
		eleTitle: '.ui-acco-title',
		eleContent: '.ui-acco-cont',
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
		연결방식: data-target="" / data-name=""
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	folder: {
		eleButton: '.folder-toggle',
		eleModule: '.folder-content',
		eleFocus: '.folder-focus',
		clsActive: 'is-active',
		init: function(){
			this.reset();
			this.event($(this.eleButton));
		},
		reset: function(){
			var _this = this;
			$(this.eleButton+'[data-role=fold]').each(function(){
				var name = $(this).attr('data-target');
				$('[data-target='+name+']').attr({'data-state':'closed', 'aria-expanded':'false'});
				$('[data-name='+name+']').attr({'hidden':'hidden'});
			})
		},
		event: function($this){
			var _this = this;
			$this.filter('[data-role=fold]').not('.is-evented').on('click', function(){
				var target = $(this).attr('data-target');
				var state = $(this).attr('data-state');
				if (state == 'closed'){_this.open(target)}
				else if (state == 'opened'){_this.close(target)}
				return false;
			}).addClass('is-evented');
		},
		open: function(name){
			var _this = this;
			$('[data-target='+name+']').attr({'data-state':'null', 'aria-expanded':'true'}).addClass(_this.clsActive);
			$('[data-name='+name+']').addClass(_this.clsActive).slideDown(300, function(){
				$('[data-name='+name+']').removeAttr('hidden');
				$('[data-target='+name+']').attr('data-state', 'opened');
			});
		},
		close: function(name){
			var _this = this;
			$('[data-target='+name+']').attr({'data-state':'null', 'aria-expanded':'false'}).removeClass(_this.clsActive);
			$('[data-name='+name+']').removeClass(_this.clsActive).slideUp(300, function(){
				$('[data-name='+name+']').attr('hidden', 'hidden');
				$('[data-target='+name+']').attr('data-state', 'closed');
			});
		}
	},

	/*
		기능정의: #FolderMore
		연결방식: data-target="" / data-name=""
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	folderMore: {
		eleButton: '.folder-toggle',
		eleModule: '.folder-content',
		eleInner: '.folder-inner',
		eleFocus: '.folder-focus',
		clsActive: 'is-active',
		init: function(){
			this.reset();
			this.event($(this.eleButton));
		},
		reset: function(){
			var _this = this;
			$(this.eleButton).each(function(){
				var name = $(this).attr('data-target');
				$('[data-target='+name+']').attr({'data-state':'closed', 'aria-expanded':'false'});
				$('[data-name='+name+']').attr({'hidden':'hidden'});
			})
		},
		event: function($this){
			var _this = this;
			$this.filter('[data-role=more]').not('.is-evented').on('click', function(){
				var target = $(this).attr('data-target');
				var state = $(this).attr('data-state');
				if (state == 'closed'){_this.open(target)}
				else if (state == 'opened'){_this.close(target)}
				return false;
			}).addClass('is-evented');
		},
		open: function(name){
			var _this = this;
			var $module = $('[data-name='+name+']').closest(_this.eleModule);
			var $inner = $('[data-name='+name+']').closest(_this.eleInner);
			$module.css({height:$inner.height(), overflow:'hidden'}).attr('data-height', $inner.height()).addClass(_this.clsActive);
			$('[data-target='+name+']').addClass(_this.clsActive).attr({'data-state':'null'});
			$('[data-name='+name+']').removeAttr('hidden');
			TweenMax.to($module, 0.3, {height:$inner.height(), ease:Power2.easeOut, onComplete:function(){
				$('[data-name='+name+']').eq(0).find(_this.eleFocus).attr('tabindex','0').focus();
				$('[data-target='+name+']').attr({'data-state':'opened', 'aria-expanded':'true'});
			}});
		},
		close: function(name){
			var _this = this;
			var $module = $('[data-name='+name+']').closest(_this.eleModule);
			var $inner = $('[data-name='+name+']').closest(_this.eleInner);
			$module.css({height:$module.height(), overflow:'hidden'}).removeClass(_this.clsActive);
			$('[data-target='+name+']').attr({'data-state':'null'}).removeClass(_this.clsActive);
			TweenMax.to($module, 0.3, {height:parseInt($module.attr('data-height')), ease:Power2.easeOut, onComplete:function(){
				$('[data-name='+name+']').attr('hidden', 'hidden');
				$('[data-target='+name+']').attr({'data-state':'closed', 'aria-expanded':'false'});
			}});
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
		eleFocus : '.tooltip-focus',
		setTime: null,
		init: function(){
			this.event();
		},
		event: function(){
			var _this = this;
			$(this.eleOpener).not('.is-evented').on('click', function(){_this.open($(this).attr('href')); return false});
			$(this.eleCloser).not('.is-evented').on('click', function(){_this.close($(this).attr('href')); return false});
			$(this.eleWrapper).not('.is-evented').on('mouseover', function(){_this.open('#'+$(this).find(_this.eleModule).attr('id'))});
			$(this.eleWrapper).not('.is-evented').on('mouseleave', function(){_this.close('#'+$(this).find(_this.eleModule).attr('id'))});
		},
		open: function(id){
			var _this = this;
			$(id).attr({'data-state':'null', 'aria-hidden':'false'});
			$(id).stop().fadeIn(200, function(){$(this).attr({'data-state':'opened'})});
			$(_this.eleOpener+'[href="'+id+'"]').attr({'aria-expanded':'true'});
		},
		close: function(id){
			var _this = this;
			$(id).attr({'data-state':'null', 'aria-hidden':'true'});
			$(id).stop().fadeOut(200, function(){$(this).attr({'data-state':'closed'})});
			$(_this.eleOpener+'[href="'+id+'"]').attr({'aria-expanded':'false'});
			//	$(this.eleOpener+'[href="'+id+'"]').attr('tabindex','0').focus();
		},
	},

	/*
		기능정의: #Dropdown
		참고사항: href="" / id="" 연결
		참고메뉴: 대메뉴 > 중메뉴 > 소메뉴 > 화면명
		참고경로: /html/menu1/page.html
		(공통여부와 관계없이 확인이 가능한 대표화면 적용)
	*/
	dropdown: {
		eleModule: '.dropdown',
		eleButton: '.dropdown-toggle',
		eleMenu: '.dropdown-menu',
		eleSelect : '.dropdown-select',
		init: function(){
			this.reset($(this.eleModule));
			this.event();
		},
		reset: function($eleModule){
			$eleModule.each(function(){
				if ($(this).hasClass('is-visible')){ $(this).attr({'data-state':'opened'}) }
				else if (!$(this).hasClass('is-visible')){ $(this).attr({'data-state':'closed'}) }
			})
		},
		event: function(){
			var _this = this;
			var setTime;
			//토글
			$(_this.eleButton).off().on('click', function(){
				var id = $(this).attr('aria-controls');
				var $eleModule = $('#'+id).closest(_this.eleModule);
				if($eleModule.attr('data-state') == 'opened') { _this.close(id) }
				else if($eleModule.attr('data-state') == 'closed') { _this.open(id) }
			});
			//포커싱
			$(_this.eleMenu).on('focusin', function(){
				clearTimeout(setTime);
			});
			$(_this.eleModule).on('focusout', function(){
				var $this = $(this);
				var id = $this.find(_this.eleMenu).attr('id');
				setTime = setTimeout(function(){ if( $this.attr('data-state') == 'opened'){ _this.close(id)} },50);
			})
			//셀렉트
			$(_this.eleSelect).find('a, button').off().on('click', function(){
				_this.select($(this));
			})
		},
		open: function(id){
			var _this = this;
			var $eleMenu = $('#'+id);
			var $eleModule = $eleMenu.closest(_this.eleModule);
			var $eleButton = $eleModule.find(_this.eleButton);
			$eleModule.attr({'data-state':'wait'}).addClass('is-visible');
			setTimeout(function(){
				$eleModule.addClass('is-active');
				$eleMenu.off(transitionend).on(transitionend, function(){
					$eleButton.attr({'aria-expanded':'true'});
					_this.reset($eleModule);
				});
			});
		},
		close: function(id){
			var _this = this;
			var $eleMenu = $('#'+id);
			var $eleModule = $eleMenu.closest(_this.eleModule);
			var $eleButton = $eleModule.find(_this.eleButton);
			$eleModule.attr({'data-state':'wait'});
			$eleModule.removeClass('is-active');
			$eleMenu.off(transitionend).on(transitionend, function(){
				$eleModule.removeClass('is-visible');
				$eleButton.attr({'aria-expanded':'false'});
				_this.reset($eleModule);
			});
		},
		select : function($this){
			var _this = this;
			var $eleModule = $this.closest(_this.eleModule);
			var $eleButton = $eleModule.find(_this.eleButton);
			var $eleLabel = $eleButton.children();
			var id = $eleButton.attr('aria-controls');
			$this.parent().addClass('is-current').siblings().removeClass('is-current');
			$eleLabel.text($this.text());
			if($eleModule.attr('data-state') == 'opened') { _this.close(id) }
		}
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