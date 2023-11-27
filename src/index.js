console.log("hello");

const content = document.getElementById("content");

var header = document.createElement("header");

/*
 function component(id) {
   const element = document.createElement('div');

   element.id = id;


   return element;
 }
 */

 
 var headh1 = document.createElement("h1");
 headh1.innerHTML = "Wonderful restaurant";

 var img = document.createElement("img");
 img.src = "/home/michael/repos/Restaurant-Page-Project/src/Savage-2019-top-50-busy-restaurant.png";

 var para = document.createElement("p");
 para.innerHTML = "Our staff hard at work preparing wonderful food";

 var test = document.createElement("div");

 content.appendChild(header);

 header.appendChild(headh1);

 content.appendChild(test);

 test.appendChild(img);
 test.appendChild(para);

 

 //content.appendChild(component(container)).appendChild(img);