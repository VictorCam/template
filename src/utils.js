const toggleHidden = (ref) => {
  ref.classList.toggle("hidden");
};

const switchButtonIcons = ({ buttonRef, svgRef }, { icon1, icon2 }) => {
  let switchTarget = !buttonRef.getAttribute("aria-pressed");
  buttonRef.setAttribute("aria-pressed", switchTarget);
  svgRef.classList.toggle(icon1);
  svgRef.classList.toggle(icon2);
};

const utils = {
  toggleHidden,
  switchButtonIcons,
};

export default utils;
