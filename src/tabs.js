import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";


//create tabs to navigate to other pages
const createTabs = () => {
    const content = document.querySelector('#content');

    const nav = document.createElement('nav');
    const navRight = document.createElement('div');
    const icon = document.createElement('i');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    //apply classes
    nav.classList.add('nav-bar');
    icon.classList.add('fa-solid', 'fa-apple-whole');
    

    //set text content
    div1.textContent = "Home";
    div2.textContent = "menu";
    div3.textContent = "Contact";

    //append
    content.appendChild(nav);
    navRight.appendChild(div1);
    navRight.appendChild(div2);
    navRight.appendChild(div3);
    nav.appendChild(icon);
    nav.appendChild(navRight);

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
        createContactPage();
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