$("#activate").click(function() {
	$("#unfold").toggleClass("show")
	window.scrollBy(0, 1000);
});

$("._option").click(function() {
	$(this).toggleClass("-checked")
})