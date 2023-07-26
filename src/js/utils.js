const resetActiveState = (elements, className = "is-active") => {
  elements.forEach((el) => {
    if (el.classList.contains(className)) {
      el.classList.remove(className);
    }
  });
};

const setActiveState = (element, className = "is-active") => {
  element.classList.add(className);
};
