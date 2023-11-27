
//creates menu page
const createMenuPage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const mainDishContent = document.createElement('div');
    const mainDishHead = document.createElement('h1');
    mainDishHead.textContent = "Main Dishes"
    mainDishContent.appendChild(mainDishHead);
    mainDishContent.appendChild(mainDishHead);
    

  

    const mainDishOne = document.createElement('div');
    const mainDishOneInfo = document.createElement('p');
    const mainDishOneImage = document.createElement('img');
    mainDishOneInfo.textContent = "test"
    mainDishContent.appendChild(mainDishOne);
    mainDishOne.appendChild(mainDishOneInfo);
    

    pageContent.appendChild(mainDishContent);
    content.appendChild(pageContent);
}


export default createMenuPage;