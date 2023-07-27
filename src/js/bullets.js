const crewBullets = document.querySelectorAll("[data-crew-bullet-target]");
const crewContents = document.querySelectorAll(".crew__info");
const crewImages = document.querySelectorAll(".crew__img-container");

const technologyBullets = document.querySelectorAll(
  "[data-tech-bullet-target]"
);
const technologyContents = document.querySelectorAll(".technology__info");
const technologyImages = document.querySelectorAll(
  ".technology__img-container"
);

// Technology page bullets
crewBullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    const target = document.querySelector(bullet.dataset.crewBulletTarget);

	// From utils.js
    resetActiveState(crewBullets);
    resetActiveState(crewContents);
    resetActiveState(crewImages);
	
	// From utils.js
    setActiveState(bullet);
    setActiveState(target);
    setActiveState(crewImages[index]);
  });
});

technologyBullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    const target = document.querySelector(bullet.dataset.techBulletTarget);
    console.log(target);

    resetActiveState(technologyBullets);
    resetActiveState(technologyContents);
    resetActiveState(technologyImages);

    setActiveState(bullet);
    setActiveState(target);
    setActiveState(technologyImages[index]);
  });
});
