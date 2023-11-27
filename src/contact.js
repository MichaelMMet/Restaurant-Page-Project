
//creates contact page
const createContactPage = () => {

    //target content div and create page content
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //create contact contents 
    const contactHead = document.createElement('h1');
    pageContent.appendChild(contactHead);

    
    const contactOne = document.createElement('div');
    const contactTwo = document.createElement('div');
    const contactOneHead = document.createElement('h2');
    const contactOneInfo = document.createElement('p');
    const contactTwoHead = document.createElement('h2');
    const contactTwoInfo = document.createElement('p');

    //add classes and textContent
    contactOneHead.textContent = "contact 1";
    contactOneInfo.textContent = "info";
    contactTwoHead.textContent = "contact 2";

    //append elements
    pageContent.appendChild(contactOne);
    pageContent.appendChild(contactTwo);
    contactOne.appendChild(contactOneHead);
    contactOne.appendChild(contactOneInfo);
    contactTwo.appendChild(contactTwoHead);
    contactTwo.appendChild(contactTwoInfo);



    

    content.appendChild(pageContent);
}


export default createContactPage;