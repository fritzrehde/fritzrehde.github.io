window.onload = function() {
	if (window.matchMedia("(prefers-color-scheme: dark)").matches)
		toggle_theme();
}

function toggle_theme() {
	document.body.classList.toggle("alternate-theme");
	document.getElementById("toggle-icon").classList.toggle('bi-toggle-on');
}

