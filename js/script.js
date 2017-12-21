(function() {
	

	var preload = document.getElementById("preload");
	var loading=0;
	var id = setInterval (frame, 64);

	function frame() {
		if (loading==100) {
			clearinterval(id)
			window.open("index.html" ,"_self");

		}else {
			loading= loading+1;
			if (loading==90) {
				preload.style.animation = "fadeout Is ease";
			}
		}
		// body...
	}
})();