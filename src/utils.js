const toggleHidden = (ref) => {
  ref.classList.toggle("hidden");
};

const switchButtonIcons = ({ buttonRef, svgRef }, { icon1, icon2 }) => {
  let switchTarget = !buttonRef.getAttribute("aria-pressed");
  buttonRef.setAttribute("aria-pressed", switchTarget);
  svgRef.classList.toggle(icon1);
  svgRef.classList.toggle(icon2);
};

const determineTheme = (svgRefIcon) => {
  // get the current theme
  const theme = localStorage.getItem('theme');
  let currTheme = theme !== 'dark' ? 'sun' : 'moon';

  // apply current icon and theme
  svgRefIcon.value.classList.add(currTheme);
  document.documentElement.style.setProperty("color-scheme", theme);
}

const utils = {
  toggleHidden,
  switchButtonIcons,
  determineTheme,
};

export default utils;
