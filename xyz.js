let number=Math.round(Math.random()*100);
let chances=0;
let flag=true;
while(flag)
{
let gNumber=prompt("enter guess number:")
gNumber=Number.parseInt(gNumber)
if(number<gNumber){
    alert("guess number is Greater then random number")
    chances++;
}
if(number>gNumber)
{
    alert("guess number is less then random number")
    chances++; 
}
if(number==gNumber)
{
    flag=false;
    alert("guess number is match with random number and Random number is "+number+" No.of attempt is "+chances)
}
}
