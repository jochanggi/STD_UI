/*--------------------------------------------------------------
	## Init - 초기실행
--------------------------------------------------------------*/
var pub2 = {
	init2 : function(){
		dv.init();   // 유틸리티 - pub_utility.js
		cm.init();   // 영역공통 - pub_common.js
		ui.init();   // 모듈공통 - pub_ui.js
		cn.init();   // 화면기능 - pub_content.js
	}
}

$(document).ready(function(){
	//pub.init();  // 개발에서 하나만 호출하도록
});