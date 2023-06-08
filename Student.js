class Student{
    static count=0;
   constructor(name,age,phno,marks){
        this.name=name;
        this.age=age;
        this.phno=phno;
        this.marks=marks;
        Student.increaseStudentCount();
   }
   eligible(){
    if(this.marks >= 40)
    {
        console.log("eligible");
    }
    else{
        console.log("not eligible");
    }
   }

  static increaseStudentCount(){
    this.count++;
  }
  printStudentCount(){
    console.log(this.count);
  }
}
function createNewStudents(){
    const Riya=new Student('Riya',18,1234,34);
    const Hiya=new Student('Hiya',15,2345,35);
    const Diya=new Student('Diya',16,4567,60);
    Student.printStudentCount();
    Riya.eligible();
    Hiya.eligible();
    Diya.eligible();
}
async function readInput() {
    let inputString = '';
    var output=[];
    process.stdin.on('data', inputStdin => {
        inputString += inputStdin;
        const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
        const argumentsArr = inputArr[0].split(',');
        createNewStudents()
        process.exit();
    })
}
readInput();
