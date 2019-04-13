var include = {
	meta : function(){
		document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge" />');
		document.write('<meta http-equiv="imagetoolbar" content="no" />');
		document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />');
		document.write('<meta name="keywords" content="웹스타일가이드, 더웹스타일㈜" />');
		document.write('<meta name="description" content="웹스타일가이드, 더웹스타일㈜" />');
	},
	styles : function(){
		document.write('<link rel="stylesheet" href="/common/css/reset.css" type="text/css" />');
		document.write('<link rel="stylesheet" href="/common/css/ui.css" type="text/css" />');
		document.write('<link rel="stylesheet" href="/common/css/common.css" type="text/css" />');
		document.write('<link rel="stylesheet" href="/common/css/layout.css" type="text/css" />');
		document.write('<link rel="stylesheet" href="/common/css/content.css" type="text/css" />');
		document.write('<link rel="stylesheet" href="/common/css/animate.css" type="text/css" />');
	},
	scripts : function(){
		document.write('<script type="text/javascript" src="/common/js/libs/jquery-3.3.1.min.js"></script>');
		document.write('<script type="text/javascript" src="/common/js/pub/pub_import.js"></script>');
	},
	skipNav : function(){
		document.write('   <div id="skipNav"></div>');
	},
	header : function(){
		document.write('    <header id="header"></header>');
	},
	footer : function(){
		document.write('    <footer id="footer"></footer>');
	},
}