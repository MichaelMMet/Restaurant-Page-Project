

const createRestaurantHomePage = () =>{
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //Create and append image element
    const image = document.createElement('img');
    image.src = '/home/michael/repos/Restaurant-Page-Project/src/Savage-2019-top-50-busy-restaurant.png';
    image.height = '300';
    pageContent.appendChild(image);

    //Create and append header
    const header = document.createElement('h1');
    header.textContent = "Wonderful restaurant";
    pageContent.appendChild(header);

    //Create and append paragraph
    const para = document.createElement('p');
    para.textContent = "Our staff hard at work preparing wonderful food";
    pageContent.appendChild(para);

    

    //append to content
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;