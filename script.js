let btnCard = document.querySelector('.card-recipe button');

// Variables pour les modales
const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

async function getFetch() {
    for (let i = 1; i <= 8; i++) {
        let getData = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        let showData = await getData.json();

        let mealCard = document.querySelector(`#meal${i}`);

        let mealImage = mealCard.querySelector('img');
        
        mealImage.setAttribute('src', showData.meals[0].strMealThumb);
        mealImage.setAttribute('alt', `Picture of ${showData.meals[0].strMeal}`);

        let mealName = mealCard.querySelector('.details p');
        mealName.textContent = showData.meals[0].strMeal;
        let mealBtn = document.querySelector(`#btn-${i}`);
        mealBtn.setAttribute('data-id', showData.meals[0].idMeal);
        // // Date of the day
        let dayDate = new Date();
        // Day
        let day = dayDate.getDay().toString();
        if(i == day) {
            switch (day) {
                case '1':
                    // Monday
                    let mon = document.querySelector('.day');
                    mon.textContent = "Monday";
                    let monMeal = document.querySelector('.dayMeal');
                    monMeal.textContent = showData.meals[0].strMeal;
                    break;
                case '2':
                    // Tuesday
                    let tue = document.querySelector('.day');
                    tue.textContent = "Tuesday";
                    let tueMeal = document.querySelector('.dayMeal');
                    tueMeal.textContent = showData.meals[0].strMeal;
                    break;
                case '3':
                    // Wednesday
                    let wed = document.querySelector('.day');
                    wed.textContent = "Wednesday";
                    let wedMeal = document.querySelector('.dayMeal');
                    wedMeal.textContent = showData.meals[0].strMeal;
                    break;
                case '4':
                    // Thursday
                    let thu = document.querySelector('.day');
                    thu.textContent = "Thursday";
                    let thuMeal = document.querySelector('.dayMeal');
                    thuMeal.textContent = showData.meals[0].strMeal;
                    break;
                case '5':
                    // Friday
                    let fri = document.querySelector('.day');
                    fri.textContent = "Friday";
                    let friMeal = document.querySelector('.dayMeal');
                    friMeal.textContent = showData.meals[0].strMeal;
                    break;
                case '6':
                    // Saturday
                    let sat = document.querySelector('.day');
                    sat.textContent = "Saturday";
                    let satMeal = document.querySelector('.dayMeal');
                    satMeal.textContent = showData.meals[0].strMeal;
                    break;
                case '7':
                    // Sunday
                    let sun = document.querySelector('.day');
                    sun.textContent = "Sunday";
                    let sunMeal = document.querySelector('.dayMeal');
                    sunMeal.textContent = showData.meals[0].strMeal;
                    break;
                default:
                    console.log("Erreur");
            }
        }
    }       
}

async function toggleModal(event) {
  modalContainer.classList.toggle('active')
  let target = event.target;
  let id = target.getAttribute('data-id');

  // let fetchDat = fetch(`https://www.themealdb.com/api/json/ v1/1/lookup.php?i=${data}`)
  //                 .then(response => response.json())
  //                 .then(data => console.log(data))
  let getData = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  let showData = await getData.json();
  let name = document.querySelector('.modalName');
  name.textContent = showData.meals[0].strMeal;
  let recipe = document.querySelector('.modalRecipe');
  recipe.textContent = showData.meals[0].strInstructions;
  
    let ingredients = document.querySelector('.modalIngredients');
    console.log(ingredients);

        for (let i=1 ; i <= 20 ; i++) {
            let ingredient = showData.meals[0][`strIngredient${i}`].toString();
            let newIngredient = document.createElement('p');
            if(ingredient !== (null || "")) {
                ingredients.textContent += `${ingredient}, `;
            }        
        }
}


getFetch()
