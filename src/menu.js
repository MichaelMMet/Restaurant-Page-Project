
//creates menu page
const createMenuPage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content', 'menu-page-content');

    //creates main dish and desert sections
    const mainDishContent = document.createElement('div');
    mainDishContent.classList.add("main-dish-content");
    const mainDishDishes = document.createElement('div');
    mainDishDishes.classList.add('mainDishes');
    const mainDishHead = document.createElement('h1');
    const dessertDishContent = document.createElement('div');
    const dessertDishHead = document.createElement('h1');
    const dessertDishes = document.createElement('div');
    mainDishHead.textContent = "Main Dishes";
    dessertDishHead.textContent = "Desserts";
    mainDishContent.appendChild(mainDishHead);
    mainDishContent.appendChild(mainDishDishes);
    

    //main dish content creation

    //dish one
    const mainDishOne = document.createElement('div');
    mainDishOne.classList.add('dish');
    const mainDishOneHead = document.createElement('h2');
    mainDishOneHead.textContent = "Plain a la Appe";
    mainDishOneHead.classList.add('menuItemName');
    const mainDishOneInfo = document.createElement('p');
    mainDishOneInfo.classList.add('menuItemInfo');
    const mainDishOneImage = document.createElement('img');
    mainDishOneInfo.textContent = "test"
    mainDishDishes.appendChild(mainDishOne);
    mainDishOne.appendChild(mainDishOneHead);
    mainDishOne.appendChild(mainDishOneImage);
    mainDishOne.appendChild(mainDishOneInfo);

    //dish two
    const mainDishTwo = document.createElement('div');
    const mainDishTwoHead = document.createElement('h2');
    mainDishTwoHead.textContent = "Apple in form of ";
    mainDishTwoHead.classList.add('menuItemName');
    const mainDishTwoInfo = document.createElement('p');
    mainDishTwoInfo.classList.add('menuItemInfo');
    const mainDishTwoImage = document.createElement('img');
    mainDishTwoInfo.textContent = "test"
    mainDishDishes.appendChild(mainDishTwo);
    mainDishTwo.appendChild(mainDishTwoHead);
    mainDishTwo.appendChild(mainDishTwoImage);
    mainDishTwo.appendChild(mainDishTwoInfo);
    

    pageContent.appendChild(mainDishContent);
    pageContent.appendChild(dessertDishContent);
    content.appendChild(pageContent);
}


export default createMenuPage;