// import { gsap } from "gsap";
// import { Flip } from "gsap/Flip";
// gsap.registerPlugin(Flip);

const toggleHidden = (ref) => {
  ref.classList.toggle("hidden");
};

function waitForAnimation(element) {
  return new Promise((resolve) => {
    if (!element) resolve(); // Resolve immediately if the element doesn't exist

    // Listen for animation or transition end
    element.addEventListener('animationend', resolve);
    element.addEventListener('transitionend', resolve);
  });
}

const switchButtonIcons = ({ buttonRef, svgRef }, { icon1, icon2 }) => {
  let truthyValue = buttonRef.getAttribute("aria-pressed").valueOf();
  let switchTarget = 'false' == truthyValue ? true : false;
  buttonRef.setAttribute("aria-pressed", switchTarget);
  svgRef.classList.toggle(icon1);
  svgRef.classList.toggle(icon2);
};

const loadSavedTheme = () => {
  //root element
  const rootElement = document.documentElement;

  let temp = document.querySelector('.cb-btn');

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
  if (theme === "light" || currTheme === "sun") {
    rootElement.classList.remove("dark")
    rootElement.classList.add("light")
    temp.checked = true

  }
  else if (theme === "dark" || currTheme === "moon") {
    rootElement.classList.remove("light")
    rootElement.classList.add("dark")

    temp.checked = false
  }
}

const toggleTheme = () => {
  const rootElement = document.documentElement;

  let test = document.querySelector('.cb-btn');

  if (rootElement.classList.contains("light")) {
    rootElement.classList.remove("light")
    rootElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
    test.checked = true
  }
  else if (rootElement.classList.contains("dark")) {
    rootElement.classList.remove("dark")
    rootElement.classList.add("light")
    localStorage.setItem("theme", "light")
    test.checked = false
  }
  else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      rootElement.classList.add("dark")
      localStorage.setItem("theme", "dark");
      test.checked = true
    } else {
      rootElement.classList.add("light")
      localStorage.setItem("theme", "light");
      test.checked = false
    }
  }
};

// const flipAnimation = (relocateElement, moveElementToPosition, animation) => {
//   let state = Flip.getState([moveElementToPosition, relocateElement]);
//   moveElementToPosition.append(relocateElement)
//   Flip.from(state, {
//     duration: 0.5,
//     absolute: true,
//   });
// }

const getLastJsonId = (ref) => {
  return ref.length !== 0 ? parseInt(ref[ref.length - 1].id, 10) : 0;
}

const addItem = (ref, toast) => {
  toast.id = getLastJsonId(ref) + 1;
  ref.push(toast);
};

const removeItemById = (ref, id) => {
  const index = ref.findIndex((toast) => toast.id === id);
  if (index !== -1) {
    ref.splice(index, 1);
  }
};

const utils = {
  toggleHidden,
  switchButtonIcons,
  loadSavedTheme,
  toggleTheme,
  addItem,
  removeItemById,
  waitForAnimation,
};

export default utils;
