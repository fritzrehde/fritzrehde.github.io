function hideBody() {
	document.body.style.visibility = 'hidden';
	document.body.style.opacity = 0;
}

function showBody() {
	document.body.style.visibility = 'visible';
	document.body.style.opacity = 1;
}

function initTheme() {
	if (window.matchMedia("(prefers-color-scheme: dark)").matches)
		toggleTheme();
}

function toggleTheme() {
	document.body.classList.toggle("dark");
	document.getElementById("toggle-icon").classList.toggle('bi-toggle-on');
}
