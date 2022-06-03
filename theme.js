function toggle_theme() {
	var element = document.body;
	element.classList.toggle("alternate-theme");

	var button = document.getElementById("theme-button");
	button.classList.toggle('bi-toggle-on');
}

