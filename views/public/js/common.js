// NProgress.start();

// NProgress.done();

// $('.navs ul').prev('a').on('click', function () {
// 	$(this).next().slideToggle();
// });

if (!$.cookie('PHPSESSID') && location.pathname != '/login') {
	window.location.href = '/login';
}
if (location.pathname != '/login' && location.pathname != '/dashboard/login' && location.pathname != '/views/dashboard/login') {
	var result = JSON.parse($.cookie('userInfo'));
	var htmlStr = template('tpl_aside', result);
	$('.aside .profile').html(htmlStr);
}