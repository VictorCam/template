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
  //root element
  const rootElement = document.documentElement;

  // get the current theme
  let theme = localStorage.getItem('theme');
  let currTheme = null

  //get the icon based on savedTheme or the system default
  if (theme) {
    currTheme = theme == 'light' ? 'sun' : 'moon';
  }
  else {
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    currTheme = prefersDark ? 'sun' : 'moon';
  }

  //change the theme
  if (theme === "light") {
    rootElement.classList.remove("dark")
    rootElement.classList.add("light")
  }
  else if (theme === "dark") {
    rootElement.classList.remove("light")
    rootElement.classList.add("dark")
  }

  //set the icon
  svgRefIcon.value.classList.add(currTheme);
}

const toggleTheme = () => {
  const rootElement = document.documentElement;

  if (rootElement.classList.contains("light")) {
    rootElement.classList.remove("light")
    rootElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
  }
  else if (rootElement.classList.contains("dark")) {
    rootElement.classList.remove("dark")
    rootElement.classList.add("light")
    localStorage.setItem("theme", "light")
  }
  else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      rootElement.classList.add("dark")
      localStorage.setItem("theme", "dark");
    } else {
      rootElement.classList.add("light")
      localStorage.setItem("theme", "light");
    }
  }
};

const utils = {
  toggleHidden,
  switchButtonIcons,
  loadSavedTheme,
  toggleTheme
};

export default utils;
