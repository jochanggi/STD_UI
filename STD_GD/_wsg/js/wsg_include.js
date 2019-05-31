var gRootURL = {
	root : '/STD_GD/',
}
var gBaseURL = {
	_wsg : gRootURL.root+'_wsg/',
	menu0 : gRootURL.root+'_wsg/html/_prototype/',
	menu1 : gRootURL.root+'_wsg/html/convention/',
	menu2 : gRootURL.root+'_wsg/html/plan/',
	menu3 : gRootURL.root+'_libs/',
	menu4 : gRootURL.root+'_ia/',
	menu5 : gRootURL.root+'_wsg/html/accessibility/',
	//target : 'target="gContentFrame"',
	target : '',
}

var include = {
	meta : function(){
		document.write('<title>웹퍼블리싱가이드 - Standard Guide</title>');
		document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge" />');
		document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />');
	},
	head : function(){
		document.write('<!-- Front -->');
		document.write('<link href="'+gRootURL.root+'css/import.css" rel="stylesheet" />');
		document.write('<script src="'+gRootURL.root+'js/libs/jquery-3.3.1.min.js"></script>');
		document.write('<script src="'+gRootURL.root+'js/libs/EasePack.js"></script>');
		document.write('<script src="'+gRootURL.root+'js/libs/TweenMax.js"></script>');
		document.write('<script src="'+gRootURL.root+'js/pub/pub_device.js"></script>');
		document.write('<script src="'+gRootURL.root+'js/pub/pub_ui.js"></script>');
		document.write('<!--[if lt IE 9]>');
		document.write('<script src="'+gRootURL.root+'js/libs/html5shiv-printshiv.js"></script>');
		document.write('<![endif]-->');

		document.write('<!-- Guide -->');
		document.write('<link href="'+gBaseURL._wsg+'css/import.css" rel="stylesheet">');
		document.write('<link href="'+gBaseURL._wsg+'codeview/styles/shCoreDefaultWhite.css" rel="stylesheet" />');
		document.write('<script src="'+gBaseURL._wsg+'js/addon/jquery.mCustomScrollbar.min.js"></script>');
		document.write('<script src="'+gBaseURL._wsg+'js/addon/jquery.clipboard.min.js"></script>');
		document.write('<script src="'+gBaseURL._wsg+'js/wsg_guide.js"></script>');
		document.write('<script src="'+gBaseURL._wsg+'codeview/scripts/shCore.js?cb=undefined"></script>');
		document.write('<script src="'+gBaseURL._wsg+'codeview/scripts/shAutoLoader.js?cb=undefined"></script>');
		document.write('<script src="'+gBaseURL._wsg+'codeview/scripts/shBrushjScript.js?cb=undefined"></script>');
		document.write('<script src="'+gBaseURL._wsg+'codeview/scripts/shBrushXml.js?cb=undefined"></script>');
		document.write('<script src="'+gBaseURL._wsg+'codeview/scripts/shBrushCss.js?cb=undefined"></script>');
		document.write('<script>SyntaxHighlighter.all();</script>');
	},
	header : function(){
		document.write('	<header id="g-header">');
		document.write('		<div class="g-header-inner">');
		document.write('			<h1 class="g-logo"><a href="/">Project Guide</a></h1>');
		document.write('			<button type="button" class="g-btn-aside"><span>Menu</span></button>');
		document.write('			<nav class="g-lnb">');
		document.write('				<ul>');
		document.write('					<li><a href="'+gBaseURL.menu4+'index.html" data-aside="g-snbMenu4" data-url="'+gBaseURL.menu4+'">메뉴현황판</a></li>');
		document.write('					<li><a href="'+gBaseURL.menu1+'rule_intro.html" data-aside="g-snbMenu1" data-url="'+gBaseURL.menu1+'">규칙가이드</a></li>');
		document.write('					<li><a href="'+gBaseURL.menu2+'plan_codeset.html" data-aside="g-snbMenu2" data-url="'+gBaseURL.menu2+'">설계가이드</a></li>');
		document.write('					<li><a href="'+gBaseURL.menu3+'elements_form.html" data-aside="g-snbMenu3" data-url="'+gBaseURL.menu3+'">라이브러리</a></li>');
		document.write('					<li><a href="'+gBaseURL.menu5+'wa_index.html" data-aside="g-snbMenu5" data-url="'+gBaseURL.menu5+'">접근성점검</a></li>');
		//document.write('					<li><a href="'+gBaseURL.menu0+'index.html" data-aside="g-snbMenu0" data-url="'+gBaseURL.menu0+'" data-role="spy-scroll">가이드템플릿</a></li>');
		document.write('				</ul>');
		document.write('			</nav>');
		document.write('		</div>');
		document.write('	</header>');
	},
	aside : {
		init : function(){
			this.opneHTML();
			this.menu0();
			this.menu1();
			this.menu2();
			this.menu3();
			this.menu4();
			this.menu5();
			this.closeHTML();
		},
		opneHTML : function(){
			document.write('	<aside id="g-aside">');
			document.write('		<div class="g-js-scroll g-aside-scroll">');
			document.write('			<nav class="g-snb">');
		},
		closeHTML : function(){
			document.write('			</nav>');
			document.write('		</div>');
			document.write('	</aside>');
		},

		//샘플메뉴
		menu0 : function(){
			var baseURL = gBaseURL.menu0;
			document.write('				<!-- Prototype -->');
			document.write('				<ul class="g-depth1 g-snbMenu0">');
			document.write('					<li class="g-node1">');
			document.write('						<a href="javascript:;">가이드 템플릿</a>');
			document.write('						<ul class="g-depth2">');
			document.write('							<li class="g-node2"><a href="'+baseURL+'index.html">Intro</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'_prototype_conventions.html">컨텐츠 템플릿</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'_prototype_standard.html">표준 템플릿</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'_prototype_markup.html">마크업 템플릿</a></li>');
			document.write('						</ul>');
			document.write('					</li>');
			document.write('				</ul>');
			document.write('				<!-- //Prototype -->');
		},

		//규칙가이드
		menu1 : function(){
			var baseURL = gBaseURL.menu1;
			document.write('				<!-- Convention -->');
			document.write('				<ul class="g-depth1 g-snbMenu1">');
			document.write('					<li class="g-node1">');
			document.write('						<a href="javascript:;">규칙가이드</a>');
			document.write('						<ul class="g-depth2">');
			document.write('							<li class="g-node2"><a href="'+baseURL+'rule_intro.html">기본정책</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'rule_standard.html">표준규칙</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'rule_code.html">코드규칙</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'rule_name.html">네임규칙</a></li>');
			document.write('						</ul>');
			document.write('					</li>');
			document.write('				</ul>');
			document.write('				<!-- //Convention -->');
		},

		//설계가이드
		menu2 : function(){
			var baseURL = gBaseURL.menu2;
			document.write('				<!-- Globals -->');
			document.write('				<ul class="g-depth1 g-snbMenu2">');
			document.write('					<li class="g-node1">');
			document.write('						<a href="javascript:;">설계가이드</a>');
			document.write('						<ul class="g-depth2">');
			document.write('							<li class="g-node2"><a href="'+baseURL+'plan_codeset.html">Codeset</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'plan_layout.html">Layout</a></li>');
			//document.write('							<li class="g-node2"><a href="'+baseURL+'plan_nav.html">Navigation</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'plan_general.html">General</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'plan_wai.html">WAI-ARIA</a></li>');
			//document.write('							<li class="g-node2"><a href="'+baseURL+'plan_lang.html">Languages</a></li>');
			//document.write('							<li class="g-node2"><a href="'+baseURL+'plan_library.html">Library</a></li>');
			document.write('						</ul>');
			document.write('					</li>');
			document.write('				</ul>');
			document.write('				<!-- //Globals -->');
		},

		//Library
		menu3 : function(){
			var baseURL = gBaseURL.menu3;
			document.write('				<!-- library -->');
			document.write('				<ul class="g-depth1 g-snbMenu3">');
			document.write('					<li class="g-node1">');
			document.write('						<a href="javascript:;">Elements</a>');
			document.write('						<ul class="g-depth2">');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_form.html">Forms</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_button.html">Buttons</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_icon.html">Icons</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_label.html">Labels</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_badge.html">Badges</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_bullet.html">Bullets</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_thumbnail.html">Thumbnails</a></li>');
			//document.write('							<li class="g-node2"><a href="'+baseURL+'elements_list.html">List</a></li>');
			//document.write('							<li class="g-node2"><a href="'+baseURL+'elements_define.html">Define</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_panel.html">Panels</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_card.html">Cards</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_step.html">Steps</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_table.html">Tables</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_pagination.html">Paginations</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'elements_progress.html">Progress</a></li>');
			document.write('						</ul>');
			document.write('					</li>');
			document.write('					<li class="g-node1">');
			document.write('						<a href="javascript:;">Modules</a>');
			document.write('						<ul class="g-depth2">');
			document.write('							<li class="g-node2"><a href="'+baseURL+'modules_tab.html">Tabs</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'modules_accordion.html">Accordions</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'modules_folder.html">Folders</a></li>');
			//document.write('							<li class="g-node2"><a href="'+baseURL+'modules_collapse.html">Collapse</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'modules_tooltip.html">Tooltips</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'modules_dropdown.html">Dropdowns</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'modules_popup.html">Popup</a></li>');
			//document.write('							<li class="g-node2"><a href="'+baseURL+'modules_fullpopup.html">Full Popup</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'modules_dimmer.html">Dimmer</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'modules_sticky.html">Sticky</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'modules_spyscroll.html">Spy Scroll</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'modules_customscroll.html">Custom Scroll</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'modules_floaingscroll.html">Floating Scroll</a></li>');
			document.write('						</ul>');
			document.write('					</li>');
			document.write('					<li class="g-node1">');
			document.write('						<a href="javascript:;">Behavior</a>');
			document.write('						<ul class="g-depth2">');
			document.write('							<li class="g-node2"><a href="'+baseURL+'behavior_youtube.html">Youtube</a></li>');
			document.write('						</ul>');
			document.write('					</li>');
			document.write('				</ul>');
			document.write('				<!-- //library -->');
		},

		//Status Board
		menu4 : function(){
			var baseURL = gBaseURL.menu4;
			document.write('				<!-- Status Board -->');
			document.write('				<ul class="g-depth1 g-snbMenu4">');
			document.write('					<li class="g-node1">');
			document.write('						<a href="'+baseURL+'index.html">Status Board</a>');
			document.write('					</li>');
			document.write('				</ul>');
			document.write('				<!-- //Status Board -->');
		},

		//Modules
		menu5 : function(){
			var baseURL = gBaseURL.menu5;
			document.write('				<!-- Checklist -->');
			document.write('				<ul class="g-depth1 g-snbMenu5">');
			document.write('					<li class="g-node1">');
			document.write('						<a href="'+baseURL+'wa_index.html">웹접근성</a>');
			document.write('						<ul class="g-depth2">');
			document.write('							<li class="g-node2"><a href="'+baseURL+'wa_index.html">웹접근성 개요</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'wa_part.html">역할별 체크리스트</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'wa_process.html">개선작업 프로세스</a></li>');
			document.write('							<li class="g-node2"><a href="'+baseURL+'wa_names.html">기본명칭 정의예시</a></li>');
			//document.write('							<li class="g-node2"><a href="'+baseURL+'wa_rule1.html">인식의 용이성</a></li>');
			//document.write('							<li class="g-node2"><a href="'+baseURL+'wa_rule2.html">운용의 용이성</a></li>');
			//document.write('							<li class="g-node2"><a href="'+baseURL+'wa_rule3.html">이해의 용이성</a></li>');
			//document.write('							<li class="g-node2"><a href="'+baseURL+'wa_rule4.html">견고성</a></li>');
			document.write('						</ul>');
			document.write('					</li>');
			document.write('				</ul>');
			document.write('				<!-- //Checklist -->');
		},
	},
	quick : {
		init : function(){
			this.opneHTML();
			this.closeHTML();
		},
		opneHTML : function(){
			document.write('	<div id="g-quick">');
			document.write('		<div class="g-js-scroll g-quick-scroll">');
			document.write('			<nav class="g-qnb">');
		},
		closeHTML : function(){
			document.write('			</nav>');
			document.write('		</div>');
			document.write('	</div>');
		},
	},
	footer : function(){
		document.write('	<a href="#g-wrap" class="g-top" data-role="spy-scroll">TOP</a>');
		document.write('	<div class="g-mask"></div>');
	},
}