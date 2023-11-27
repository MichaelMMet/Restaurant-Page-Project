import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";


//create tabs to navigate to other pages
const createTabs = () => {
    const content = document.querySelector('#content');

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    //set text content
    div1.textContent = "Home";
    div2.textContent = "menu";
    div3.textContent = "Contact";

    //append them to content
    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

    //add eventListeners
    div1.addEventListener('click', () =>{
        clearContent();
        createRestaurantHomePage();
    });
    div2.addEventListener('click', () =>{
        clearContent();
        createMenuPage();
    });
        div3.addEventListener('click', () =>{
        clearContent();
        createMenuPage();
    });

}

function clearContent(){
    const content = document.querySelector("#content");
    const pageContent = document.querySelector('.page-content');
    if(pageContent){
        content.removeChild(pageContent);
    }
}


export default createTabs;