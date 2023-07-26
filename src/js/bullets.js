const crewBullets = document.querySelectorAll("[data-bullet-target]");
const crewContents = document.querySelectorAll(".crew__text");
const crewImages = document.querySelectorAll(".crew__img-container");

crewBullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    const target = document.querySelector(bullet.dataset.bulletTarget);

    resetActiveState(crewBullets);
    resetActiveState(crewContents);
    resetActiveState(crewImages);

    setActiveState(bullet);
    setActiveState(target);
    setActiveState(crewImages[index]);
  });
});
