/*--------------------------------------------------------------
	## Util - 유틸리티
--------------------------------------------------------------*/
var transitionend = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend';

//콘솔뷰
var consoleLog = function(value){
	var delay = 3000;
	var setTime = null;
	var consoleHTML = '<div class="consoleLog"><div class="consoleLog-scroll"></div></div>';
	if ($('.consoleLog').length == 0){$('body').append(consoleHTML)}
	$('.consoleLog-scroll').append('<span class="consoleLog-item">'+value+'</span>');
	clearTimeout(setTime);
	setTime = setTimeout(function(){$('.consoleLog').fadeOut('fast', function(){$(this).remove()})}, delay);
}
// 스크립트파일 로드
var setScriptLoader = function(url, id, callback){
	if ($('#'+id).length == 0){
		$('head').append('<script src="'+url+'" id="'+id+'"></script>');
		if (callback){callback()}
	}
}
// Attribute 설정
var setAnchorAttr = function($this){
	$this.each(function(){
		if ($($(this).attr('href')).length && !$(this).is('[data-id]')){$(this).attr('data-id', $(this).attr('href'))}
		else if ($($(this).attr('data-id')).length > 0 && $(this).is('a')){$(this).attr('href', $(this).attr('data-id'))}
	})
}
// 실제값의 퍼센트 구하기 (실제값/최대값 * 100%)
var getPercent = function(val, max){
	var value = (val/max) * 100;
	return value;
}
// 퍼센트로 실제값 구하기 (퍼센트/100% * 최대값)
var getValue = function(val, max){
	var value = (val/100) * max;
	return value;
}
// 퍼센트 제외값 구하기 (최대값 - (퍼센트/100% * 최대값)
var getRemain = function(val, max){
	var value = max - ((val/100) * max);
	return value;
}
// 정규식 반환
var getRegExec = function(reg, str){
	return reg.exec(str);
}
// 정규식 확인
var getRegTest = function(reg, str){
	return regex.test(str);
}
// 숫자 반올림
var getNumRound = function(val, lens){
	return Math.round(val/lens) * lens;
}
// 숫자 올림
var getNumCeil = function(val, lens){
	return Math.ceil(val/lens) * lens;
}
// 숫자 내림
var getNumFloor = function(val, lens){
	return Math.floor(val/lens) * lens;
}
// 숫자 콤마변환
var getNumComma = function(val){
	return val.toLocaleString();
}
// 숫자 콤마삭제
var getNumCommaDel = function(val){
	var num = parseFloat(val.replace(/,/gi,""));
	if (isNaN(num)){return 0} else {return num}
}
// 소수점 변환
var getNumDecimal = function(val){
	return getRegTest('^[+-]?\d*(\.?\d*)$', val);
}
// 파라미터값 구하기
var getParamiter = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results==null){
		return null;
	} else {
		return results[1] || 0;
	}
}
// Ajax 로드
var callAjaxLoad = function(selector, frmName, callUrl, callback){
	var dataString = $("#"+frmName).serialize();
	$(selector).load(callUrl, dataString, callback);
}
// Ajax 실행
var callAjax = function(target, frmName, sendUrl, callback) {
	var dataString = $("#"+frmName).serialize();
	$.ajax({
		type:"POST",
		url:sendUrl,
		cache:false,
		async:false,
		dataType:"html",
		data:dataString,
		timeout:6000,
		success:function(data){
		// 통신이 성공적으로 이루어졌을때 이 함수를 타게 된다.
		$("#"+target).html(data);
			if (callback !==""){
				callback;
			}
		},
		/*complete:function(data){
		// 통신이 실패했어도 완료가 되었을때 이함수를 타게된다.
		// success 와 complete 둘 중 하나만 이용, 그렇지 않으면 두번실행
		},*/
		error:function(xhr, status, error){
		}
	});
}
// Document Target Length
var callThisTarget = function($this, callback){
	$(document).on('click focusin', function(e){
		if ($this.has(e.target).length == 0){
			if (callback){ callback() }
		}
	});
}
// Document Target Selector
var callChildTarget = function($this, callback){
	$(document).on('click focusin', function(e){
		if ($(e.target).is($this) == false){
			if (callback){ callback() }
		}
	})
}

/*
	기능명칭 : SET FOCUS
	기능상세 : 모달 노출시 배경포커스 잠금
*/

var setFocus = {
	eleTabIdx : 'a, button, select, input, textarea', //키보드제어 요소
	//포커싱 설정호출
	call : function($eleModule){
		//부모의 그룹 오브젝트를 파라미터로 전송 (형제구조를 접근 못하도록 설정)
		//$eleModule가 #header, #container 형제구조인경우 부모그룹 생략
		if ($eleModule.hasClass('popup-wrap')){ //팝업
			this.setApply($('#container').siblings());
			this.setApply($('.content-body').siblings());
			this.setApply($eleModule.siblings());
		}
		if ($eleModule.hasClass('aside-wrap')){ //모바일메뉴
			this.setApply($('#header').siblings());
			this.setApply($eleModule.siblings());
		}
		if ($eleModule.hasClass('search-all-wrap')){
			this.setApply($eleModule.siblings().not('#header'));
		}
	},
	//포커스 활성화
	enable : function($eleModule){
		$('.is-ariaHidden').attr({'aria-hidden':'false'}).removeClass('is-ariaHidden'); // 아리아히든 초기화
		$('.not-tabindex').removeClass('not-tabindex');							// 탭인덱스 -1이었던 요소 초기화
		$('.is-tabindex-0').attr('tabindex', '0').removeClass('is-tabindex');   // 탭인덱스 0이었던 요소 초기화
		$('.is-tabindex-n').removeAttr('tabindex').removeClass('is-tabindex');  // 탭인덱스 없었던 요소 초기화
	},
	//포커스 비활성
	disable : function($obj){
		$obj.attr({'aria-hidden':'true'}).addClass('is-ariaHidden'); // 아리아히든 설정
		$obj.find('[tabindex=-1]').addClass('not-tabindex');			// 탭인덱스 -1 요소 설정
		$obj.find('[tabindex=0]').attr({'tabindex':'-1'}).addClass('is-tabindex-0'); // 탭인덱스 0 요소 설정
		$obj.find(this.eleTabIdx).not('[tabindex=-1]').attr({'tabindex':'-1'}).addClass('is-tabindex-n'); // 탭인덱스 없는요소 설정
	}
}

/*
	기능명칭 : SET SCROLL
	기능상세 : 모달 노출시 배경스크롤링 잠금
*/
var setScroll = {
	clsFixed : 'is-bodyFixed',
	scrTop : null,
	//스크롤 활성화
	enable : function(){
		$('html, body, #app').removeClass(this.clsFixed);
		$(window).scrollTop(this.scrTop);
		$(ui.floating.eleModule).removeClass('is-floated');
	},
	//스크롤 비활성
	disable : function(){
		this.scrTop = $(window).scrollTop();
		$('html, body, #app').addClass(this.clsFixed);
		$('#app').scrollTop(this.scrTop);
	}
}

/*
	기능명칭 : Dimmer
	기능상세 : 모달 노출시 배경화면 가리기
*/
var dimmer = {
	eleModule : '.dimmer',
	lens      : 0,
	init : function(){
		if (this.lens == 1 && $(this.eleModule).is(':visible')){
			this.close($(this.eleModule), '', 0.5);
		}
	},
	event : function(selector){
		if (selector == 'dimmer-tab'){
			$('.dimmer-tab').not('.is-clicked').on('click', function(){
				ui.tabFolder.close('popupTabSelect');
			}).addClass('is-clicked').attr({'aria-hidden':'false'});
		}
	},
	open : function($module, selector, callback){
		var _this = this;
		_this.lens = _this.lens + 1;
		if (selector != 'dimmer-loading'){ bodyScroll.fixed() }

		//처음호출할때 생성
		if ($(_this.eleModule).length == 0){
			if (selector == 'dimmer-aside'){$('#header > .in-sec').append('<div class="dimmer" aria-hidden="true"></div>')} //전체메뉴 예외처리
			else {$('#app').append('<div class="dimmer" aria-hidden="true"></div>')} //팝업 공통
			$(_this.eleModule).addClass(_this.selector).addClass('is-visible'); //투명상태로 활성화
			TweenMax.to($(_this.eleModule), duration, {opacity:1, ease:Power3.easeOut, onComplete:function(){
				if (typeof($module) == 'object'){ setFocus.apply($module) };
				if (callback){callback(); }
			}}); //효과 진행
		}
		//기본실행
		$(_this.eleModule).attr('data-lens', _this.lens).addClass(selector);
		//console.log('Dim Layer : ', _this.lens, '개');
	},
	close : function($module, selector, duration, callback){
		var _this = this;
		_this.lens = _this.lens - 1;
		bodyScroll.static();
		setFocus.release($module);
		if (_this.lens < 1){ // 레이어순서 검토필요
			_this.lens = 0;
			TweenMax.to($(_this.eleModule), duration, {opacity:0, ease:Power3.easeOut, onComplete:function(){
				$(_this.eleModule).remove();
				if (callback){callback();}
			}});
		}
		//console.log('Dim Layer : ', _this.lens, '개');
	}
}