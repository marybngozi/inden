const Meals = [
  {
    name: "Akara & Pap",
    image: "pap",
    class: "Carbohydrate",
  },
  {
    name: "Jollof Rice",
    image: "rice",
    class: "Protein",
  },
  {
    name: "Gastonton",
    image: "gastonton",
    class: "Carbohydrate",
  },
  {
    name: "Port Domenic",
    image: "port",
    class: "Carbohydrate",
  },
  {
    name: "Carleeville",
    image: "carl",
    class: "Fat & Oils",
  },
  {
    name: "South Chesleyton",
    image: "chesleyton",
    class: "Vegetable",
  },
];

// get DOM elements
const todayMealsEl = document.querySelector("#todayMeals");
const mealUl = document.querySelector("#mealList");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const mealImgEl = document.querySelector("#mealImg");
const mealImgDivEl = document.querySelector("#mealImg > div");
const yCardEl = document.querySelector("#yellowCard");
const mBody = document.querySelector(".modal-body");

Meals.forEach((meal) => {
  const liEl = `
    <li class="food-list">
      <img src="./assets/images/${meal.image}.png" alt="${meal.name}" />
      <div>
        <h5>${meal.name}</h5>
        <p>${meal.class}</p>
      </div>
    </li>
  `;

  mealUl.insertAdjacentHTML("beforeend", liEl);
});

openBtn.addEventListener("click", (e) => {
  todayMealsEl.classList.remove("hidden");
  todayMealsEl.classList.remove("fade");
  yCardEl.classList.add("blow-out");
  mBody.classList.remove("hidden");

  setTimeout(() => {
    todayMealsEl.classList.remove("close");
    todayMealsEl.classList.add("open");
    mBody.classList.add("mt-big");
  }, 100);
});

closeBtn.addEventListener("click", (e) => {
  yCardEl.classList.remove("blow-out");
  mBody.classList.add("hidden");
  todayMealsEl.classList.add("fade");

  setTimeout(function () {
    todayMealsEl.classList.remove("open");
    todayMealsEl.classList.add("close");
    mBody.classList.remove("mt-big");
  }, 700);
});

const liElements = document.querySelectorAll(".food-list");

liElements.forEach((el) => {
  el.addEventListener("click", (e) => {
    mealImgEl.classList.remove("closeImg");
    mealImgEl.classList.add("openImg");
    mealImgDivEl.classList.remove("hiddenImg");
  });
});

mealImgEl.addEventListener("click", (e) => {
  if (e.target.matches("#mealImg")) {
    mealImgEl.classList.remove("openImg");
    // mealImgEl.classList.add("hiddenImg");
    mealImgDivEl.classList.add("hiddenImg");

    setTimeout(function () {
      mealImgEl.classList.add("closeImg");
    }, 1000);
  }
});
