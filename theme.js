function showBody(bool) {
	document.body.style.visibility = (bool) ? 'visible' : 'hidden';
	document.body.style.opacity = (bool) ? 1 : 0;
}

function saveTheme(theme) {
	localStorage.setItem("theme", theme);
}

function getTheme() {
	return localStorage.getItem("theme");
}

function initTheme() {
	var theme;
	if (theme = getTheme()) {
		setTheme(theme);
	} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		setTheme('dark');
	}
}

function saveTheme(theme) {
	localStorage.setItem("theme", theme);
}

function getTheme() {
	return localStorage.getItem("theme");
}

function initTheme() {
	var theme = getTheme();
	if (!theme) {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme('dark');
		}
	}
	setTheme(theme);
}

function setTheme(theme) {
	var icon = (theme === 'light') ? 'bi-toggle-off' : 'bi-toggle-on';
	document.body.className = theme;
	document.getElementById("toggle-icon").className = icon;
	saveTheme(theme);
}

function toggleTheme() {
	console.log("toggleTheme before", document.body.classList, getTheme());
}

function setTheme(theme) {
	var icon = (theme === 'light') ? 'bi-toggle-off' : 'bi-toggle-on';
	document.body.className = theme;
	document.getElementById("toggle-icon").className = icon;
	saveTheme(theme);
}

function toggleTheme() {
	console.log("toggleTheme before", document.body.classList, getTheme());

	if (document.body.classList.contains('dark')) {
		setTheme('light');
	} else {
		setTheme('dark');
	}

	console.log("toggleTheme after", document.body.classList, getTheme());

	// document.body.classList.toggle("dark");
	// document.getElementById("toggle-icon").classList.toggle('bi-toggle-on');
}
