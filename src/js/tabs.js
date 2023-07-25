const destinationTabs = document.querySelectorAll("[data-tab-target]");
const destinationContents = document.querySelectorAll(".destination__info");
const destinationImages = document.querySelectorAll(
  ".destination__img-container"
);

const resetActiveStates = (elements, className = "is-active") => {
  elements.forEach((el) => {
    if (el.classList.contains(className)) {
      el.classList.remove(className);
    }
  });
};

const setActiveState = (element, className = "is-active") => {
  element.classList.add(className);
};

destinationTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);

    resetActiveStates(destinationTabs);
    resetActiveStates(destinationContents);
    resetActiveStates(destinationImages);

    setActiveState(tab);
    setActiveState(target);
    setActiveState(destinationImages[index]);
  });
});
