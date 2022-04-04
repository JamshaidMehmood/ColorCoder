
let arrayColors=["red","blue","green","blueviolet","chocolate","grey","brown","pink"];
let button=document.getElementById("btn");
let myCol=document.querySelector(".color");

button.addEventListener("click", function(){
    const randomNumInd=gererateRandomIndex();

    //console.log(randomNumInd);
    document.body.style.backgroundColor=arrayColors[randomNumInd];
    myCol.innerHTML=arrayColors[randomNumInd];
});
function gererateRandomIndex()
{
    return Math.floor(Math.random()*arrayColors.length);
}