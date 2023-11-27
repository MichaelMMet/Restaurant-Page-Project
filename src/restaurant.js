

const createRestaurantHomePage = () =>{
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const rightSide = document.createElement('div');
    rightSide.classList.add('restaurantRightSide');
    const leftSide = document.createElement('div');
    leftSide.classList.add('restaurantLeftSide');


    //Create and append header
    const header = document.createElement('h1');
    header.textContent = "Wecome to Apples' r Us!";
    rightSide.appendChild(header);

    //Create and append image element
    const image = document.createElement('img');
    image.src = '/home/michael/repos/Restaurant-Page-Project/src/Savage-2019-top-50-busy-restaurant.png';
    image.height = '300';
    rightSide.appendChild(image);


    //Create and append paragraph
    const para = document.createElement('p');
    para.textContent = "One of our signiture apples.";
    para.classList.add('restPara');
    rightSide.appendChild(para);


    const headerTwo = document.createElement('h2');
    headerTwo.textContent = "One of our signiture dishes.";

    const appImg = document.createElement('img');
    appImg.src = "/home/michael/repos/Restaurant-Page-Project/src/ezgif-3-00cc2e7962.jpg";
    appImg.height = '300';

leftSide.appendChild(headerTwo);
leftSide.appendChild(appImg);


    

    

    //append to content

    pageContent.appendChild(rightSide);
    pageContent.appendChild(leftSide);
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;