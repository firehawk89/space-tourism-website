// Reset elements which have is-active (or any different) class
const resetActiveState = (elements, className = "is-active") => {
  elements.forEach((el) => {
    if (el.classList.contains(className)) {
      el.classList.remove(className);
    }
  });
};

// Set is-active (or any different) class on the element
const setActiveState = (element, className = "is-active") => {
  element.classList.add(className);
};
