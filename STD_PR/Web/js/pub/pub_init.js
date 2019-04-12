/*--------------------------------------------------------------
	## Init - 초기실행
--------------------------------------------------------------*/
var pub = {
	init : function(){
		dv.init();   // 기기체크 - pub_device.js
		cm.init();   // 영역공통 - pub_common.js
		ui.init();   // 모듈공통 - pub_ui.js
	}
}

$(document).ready(function(){
	pub.init();  // 개발에서 하나만 호출하도록
});