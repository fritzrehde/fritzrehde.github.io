function showBody(bool) {
	document.body.style.visibility = (bool) ? 'visible' : 'hidden';
	document.body.style.opacity = (bool) ? 1 : 0;
}

function saveTheme(theme) {
	sessionStorage.setItem("theme", theme);
}

function getTheme() {
	return sessionStorage.getItem("theme");
}

function initTheme() {
	var theme = getTheme();
	if (theme) {
		setTheme(theme);
	} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		setTheme('dark');
	}
}

function setTheme(theme) {
	var icon = (theme === 'light') ? 'bi-toggle-off' : 'bi-toggle-on';
	document.body.className = theme;
	document.getElementById("toggle-icon").className = icon;
	saveTheme(theme);
}

function toggleTheme() {
	if (document.body.classList.contains('dark')) {
		setTheme('light');
	} else {
		setTheme('dark');
	}
}
