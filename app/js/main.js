$(function(){
	function sizing(){
		$('#backCanvas').attr({height:$(window).height()}).attr({width:$(window).width()});
	}

	window.onload = function() {
		var canvas = document.getElementsByTagName('canvas')[0];
		var codeElm = document.getElementById('processing-code');
		var code = codeElm.textCount || codeElm.innerText;

		Processing(canvas, code);
	};

	sizing();
	$(window).resize(function(){
		sizing();
	});
});