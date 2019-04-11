/*--------------------------------------------------------------
	## Init - 초기실행
--------------------------------------------------------------*/
var pub = {
	init : function(){
		dv.init();   // 기기체크 - pub_device.js
		cm.init();   // 영역공통 - pub_common.js
		ui.init();   // 모듈공통 - pub_ui.js
		cn.init();   // 화면기능 - pub_content.js
	}
}

$(document).ready(function(){
	pub.init();  // 개발에서 하나만 호출하도록
});