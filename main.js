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
const openBtn = document.querySelector("#yellowCard");
const closeBtn = document.querySelector("#closeBtn");
const mealImgEl = document.querySelector("#mealImg");

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
  todayMealsEl.classList.remove("close");
  todayMealsEl.classList.add("open");
});

closeBtn.addEventListener("click", (e) => {
  todayMealsEl.classList.remove("open");
  todayMealsEl.classList.add("close");
});

const liElements = document.querySelectorAll(".food-list");

liElements.forEach((el) => {
  el.addEventListener("click", (e) => {
    mealImgEl.classList.remove("close");
    mealImgEl.classList.add("open");
  });
});

mealImgEl.addEventListener("click", (e) => {
  if (e.target.matches("#mealImg")) {
    mealImgEl.classList.remove("open");
    mealImgEl.classList.add("close");
  }
});
