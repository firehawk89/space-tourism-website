const destinationTabs = document.querySelectorAll("[data-tab-target]");
const destinationContents = document.querySelectorAll(".destination__info");
const destinationImages = document.querySelectorAll(
  ".destination__img-container"
);

// Destination page tabs
destinationTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);

    // From utils.js
    resetActiveState(destinationTabs);
    resetActiveState(destinationContents);
    resetActiveState(destinationImages);

    // From utils.js
    setActiveState(tab);
    setActiveState(target);
    setActiveState(destinationImages[index]);
  });
});
