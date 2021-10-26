
//Instagram cancel request scrpi
let i99=0;

var unfollow="global";

var final="global";

var link=["link","link2"];

var proWindow=[""]

proWindow.length=0

link.length=0;

var ids = document.querySelectorAll(".-utLf");

for(i99=0;i99<ids.length;i99++){

link.push('https://www.instagram.com/'+ids[i99].innerText);

console.log(link[i99]);

proWindow[i99]=window.open(link[i99]);

}




for(i99=0;i99<ids.length;i++){
unfollow = proWindow[i99].document.querySelector(".aOOlW -Cab_");
unfollow.click();
//final = proWindow[i99].document.querySelector(".aOOlW -Cab_");
//final.click();}
console.log("Completed");