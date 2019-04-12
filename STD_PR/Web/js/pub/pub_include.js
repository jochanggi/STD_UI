var baseURL = '/STD_PR/Web/';
var include = {
	meta : function(){
		document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
		document.write('<meta http-equiv="imagetoolbar" content="no">');
		document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">');
		document.write('<meta name="keywords" content="Standard UI - HOME">');
		document.write('<meta name="description" content="Standard UI - HOME">');
	},
	styles : function(){
		document.write('<link rel="stylesheet" href="'+baseURL+'css/import.css" type="text/css">');
	},
	scripts : function(){
		document.write('<script type="text/javascript" src="'+baseURL+'js/libs/jquery-3.3.1.min.js"></script>');
		document.write('<script type="text/javascript" src="'+baseURL+'js/libs/EasePack.js"></script>');
		document.write('<script type="text/javascript" src="'+baseURL+'js/libs/TweenMax.js"></script>');
		document.write('<script type="text/javascript" src="'+baseURL+'js/pub/pub_device.js"></script>');
		document.write('<script type="text/javascript" src="'+baseURL+'js/pub/pub_utility.js"></script>');
		document.write('<script type="text/javascript" src="'+baseURL+'js/pub/pub_common.js"></script>');
		document.write('<script type="text/javascript" src="'+baseURL+'js/pub/pub_ui.js"></script>');
		document.write('<script type="text/javascript" src="'+baseURL+'js/pub/pub_init.js"></script>');
		document.write('<!--[if lt IE 9]>');
		document.write('<script type="text/javascript" src="'+baseURL+'libs/html5shiv-printshiv.js"></script>');
		document.write('<![endif]-->');
	},
	skipNav : function(){
		document.write('	<div id="skipNav">');
		document.write('		<a href="#content">본문 바로가기</a>');
		document.write('	</div>');
	},
	header : function(){
		document.write('    <header id="header">');
		document.write('		<div class="header-inner in-sec">');
		document.write('			<div class="header-logo">');
		document.write('				<h1 class="logo"><a href="#">LOGO</a></h1>');
		document.write('			</div>');
		document.write('			<div class="header-gnb">');
		document.write('				<nav class="gnb">');
		document.write('					<div class="node1-wrap">');
		document.write('						<ul class="node1-list">');
		document.write('							<li class="node1-item">');
		document.write('								<a href="#" class="node1-link">회사소개</a>');
		document.write('								<div class="node2-wrap">');
		document.write('									<ul class="node2-list">');
		document.write('										<li class="node2-item"><a href="#" class="node2-link">인사말</a></li>');
		document.write('										<li class="node2-item"><a href="#" class="node2-link">연혁</a></li>');
		document.write('										<li class="node2-item"><a href="#" class="node2-link">비전</a></li>');
		document.write('										<li class="node2-item"><a href="#" class="node2-link">CEO 인사말</a></li>');
		document.write('									</ul>');
		document.write('								</div>');
		document.write('							</li>');
		document.write('							<li class="node1-item">');
		document.write('								<a href="#" class="node1-link">상품안내</a>');
		document.write('								<div class="node2-wrap">');
		document.write('									<ul class="node2-list">');
		document.write('										<li class="node2-item"><a href="#" class="node2-link">주요상품</a></li>');
		document.write('										<li class="node2-item"><a href="#" class="node2-link">상품홍보</a></li>');
		document.write('										<li class="node2-item"><a href="#" class="node2-link">상세정보</a></li>');
		document.write('										<li class="node2-item"><a href="#" class="node2-link">상품안내</a></li>');
		document.write('									</ul>');
		document.write('								</div>');
		document.write('							</li>');
		document.write('							<li class="node1-item">');
		document.write('								<a href="#" class="node1-link">투자정보</a>');
		document.write('								<div class="node2-wrap">');
		document.write('									<ul class="node2-list">');
		document.write('										<li class="node2-item"><a href="#" class="node2-link">IR 활동</a></li>');
		document.write('										<li class="node2-item"><a href="#" class="node2-link">제무제표</a></li>');
		document.write('										<li class="node2-item"><a href="#" class="node2-link">사업보고서</a></li>');
		document.write('										<li class="node2-item"><a href="#" class="node2-link">Annual Report</a></li>');
		document.write('									</ul>');
		document.write('								</div>');
		document.write('							</li>');
		document.write('							<li class="node1-item">');
		document.write('								<a href="#" class="node1-link">소식정보</a>');
		document.write('								<div class="node2-wrap">');
		document.write('									<ul class="node2-list">');
		document.write('										<li class="node2-item"><a href="#" class="node2-link">공지사항</a></li>');
		document.write('										<li class="node2-item"><a href="#" class="node2-link">자료실</a></li>');
		document.write('										<li class="node2-item"><a href="#" class="node2-link">갤러리</a></li>');
		document.write('										<li class="node2-item"><a href="#" class="node2-link">홍보영상</a></li>');
		document.write('										<li class="node2-item"><a href="#" class="node2-link">이벤트</a></li>');
		document.write('									</ul>');
		document.write('								</div>');
		document.write('							</li>');
		document.write('						</ul>');
		document.write('					</div>');
		document.write('				</nav>');
		document.write('			</div>');
		document.write('		</div>');
		document.write('    </header>');
	},
	footer : function(){
		document.write('	<footer id="footer">');
		document.write('		<div class="fotter-logo">');
		document.write('			<p class="logo">LOGO</p>');
		document.write('		</div>');
		document.write('		<div class="footer-fnb">');
		document.write('			<ul class="fnb">');
		document.write('				<li><a href="#">이용약관</a></li>');
		document.write('				<li><a href="#">개인정보처리방침</a></li>');
		document.write('				<li><a href="#">영상정보처리기기 운영&middot;관리 방침</a></li>');
		document.write('				<li><a href="#">이메일주소무단수집거부</a></li>');
		document.write('				<li><a href="#">사이트맵</a></li>');
		document.write('			</ul>');
		document.write('		</div>');
		document.write('		<div class="footer-info">');
		document.write('			<address class="txt-address">(우)37859 경상북도 포항시 남구 동해안로 6261(포항시 남구 괴동동1)</address>');
		document.write('			<p class="txt-tel">대표전화: 054-220-0114, 02-3457-0114</p>');
		document.write('		</div>');
		document.write('		<div class="footer-mark">');
		document.write('			<a href="http://www.wa.or.kr/board/list.asp?BoardID=0006" target="_blank" title="새창"><img src="http://www.posco.co.kr/docs/kor6/jsp/_images/common/kwac_posco.png" alt="(사)한국장애인단체총연합회 한국웹접근성인증평가원 웹 접근성 우수마크 인증마크(WA인증마크)"></a>');
		document.write('		</div>');
		document.write('		<div class="footer-copy">');
		document.write('			<p class="txt-copy">(c) POSCO, All rights reserved.</p>');
		document.write('		</div>');
		document.write('	</footer>');
	},
}