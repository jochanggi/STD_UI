var baseURL = '/';
var include = {
	meta : function(){
		document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge" />');
		document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />');
		document.write('<meta name="keywords" content="JPK STUDIO">');
		document.write('<meta name="description" content="JPK STUDIO">');
	},
	styles : function(){
		document.write('<link rel="stylesheet" href="'+baseURL+'css/JPK_home.css" type="text/css">');
	},
	scripts : function(){
		document.write('<script src="'+baseURL+'js/libs/jquery-3.3.1.min.js"></script>');
		document.write('<script src="'+baseURL+'js/libs/EasePack.js"></script>');
		document.write('<script src="'+baseURL+'js/libs/TweenMax.js"></script>');
		document.write('<script src="'+baseURL+'js/pub/pub_device.js"></script>');
		document.write('<script src="'+baseURL+'js/pub/pub_ui.js"></script>');
		document.write('<!--[if lt IE 9]>');
		document.write('<script src="'+baseURL+'js/libs/html5shiv-printshiv.js"></script>');
		document.write('<![endif]-->');
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