const toggleHidden = (ref) => {
  ref.classList.toggle("hidden");
};

const switchButtonIcons = ({ buttonRef, svgRef }, { icon1, icon2 }) => {
  let switchTarget = !buttonRef.getAttribute("aria-pressed");
  buttonRef.setAttribute("aria-pressed", switchTarget);
  svgRef.classList.toggle(icon1);
  svgRef.classList.toggle(icon2);
};

const loadSavedTheme = (svgRefIcon) => {
  // get the current theme
  let theme = localStorage.getItem('theme');
  let currTheme = null

  //get the icon based on savedTheme or the system default
  if (theme) {
    currTheme = theme === 'dark' ? 'sun' : 'moon';
  }
  else {
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    currTheme = prefersDark ? 'sun' : 'moon';
  }

  // apply current icon and theme
  svgRefIcon.value.classList.add(currTheme);
  document.documentElement.style.setProperty("color-scheme", theme);
}

const utils = {
  toggleHidden,
  switchButtonIcons,
  loadSavedTheme,
};

export default utils;
