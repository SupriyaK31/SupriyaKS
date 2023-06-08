
let runAgain=true;
const canDrive=(age)=>{
    return age>=18? true : false
}
while(runAgain){
let age=prompt("enter age:")
age =Number.parseInt(age)
if(age<0){
    console.error("Invalid Age")
    break;
}
if(canDrive(age)){
    alert("Yes,you can drive")
}else{
    alert("No,you can not drive")
}
runAgain=confirm("Do you want to run again?")
}