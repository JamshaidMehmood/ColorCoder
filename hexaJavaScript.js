
let hexaColors=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]; 
let buttonClick=document.getElementById("btn");
let myContent=document.querySelector(".color");

buttonClick.addEventListener("click", function()
{
    let dummy="#";
    for(let i=0;i<6;i++)
    {
        let rand=getRandoIndex();
        //console.log(rand);
        if(rand=="10")
        {
           rand="A" 
        }
        else if(rand=="11")
        {
           rand="B" 
        }
        else if(rand=="12")
        {
           rand="C" 
        }
        else if(rand=="13")
        {
           rand="D" 
        }
        else if(rand=="14")
        {
           rand="E" 
        }
        else if(rand=="15")
        {
           rand="F" 
        }

        dummy=dummy+rand;
    }
    document.body.style.backgroundColor=dummy;
    myContent.innerHTML=dummy;
});
 
function getRandoIndex()
{
    return Math.floor(Math.random()*hexaColors.length);
}