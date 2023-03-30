function getRandomColor() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100);
    const l = Math.floor(Math.random() * 30) + 60;
    return `hsl(${h}, ${s}%, ${l}%)`;
}
var button = document.querySelector('button');
var title = document.querySelector('#title');
navigator.serviceWorker.register('sw2.js');
title.classList.remove('animate-in');

setTimeout(function () {
    title.classList.add('animate-in');
  }, 1000);


//mengambil data (fetch)
fetch("https://randomuser.me/api?results=10")
.then(res => res.json())
.then(data =>  {
    var count = 1;
    var time = 2000;

    for(var i in data["results"]){
    
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.width = 250;
    img.height = 200;
    div.style = "background-color: " + getRandomColor();
    img.srcset = `${data["results"][i]["picture"]["large"]} 800w, ${data["results"][i]["picture"]["medium"]} 320w`;
    div.appendChild(img);
    div.className = "flex-box";
    div.id = "flex-box"+count;
    
    

    var pEmail = document.createElement("p");
    var pName = document.createElement("p");
    var pPhone = document.createElement("p");
    pName.id = "name";
    pPhone.id = "phone";
    var nameString =  data["results"][i]["name"]["title"] + ' '+ data["results"][i]["name"]["first"] + ' ' + data["results"][i]["name"]["last"];
    var emailString = data["results"][i]["email"];
    var cellString =  data["results"][i]["cell"];
    var text = document.createTextNode(nameString+"\n \n");
    
    var text2 = document.createTextNode(emailString+"\n \n");
    var text3 = document.createTextNode(cellString+"\n \n");
    pName.appendChild(text);
    pEmail.appendChild(text2);
    pPhone.appendChild(text3);
    div.appendChild(pName);
    div.appendChild(pEmail);
    div.appendChild(pPhone)
    var element = document.getElementById("flex-container");
   
       
        element.appendChild(div);
        
   
   
    count+=1;
  time+=1000;

    }});



  

