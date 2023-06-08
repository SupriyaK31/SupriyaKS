//class
class person{
    //constructor
    constructor(firstName,lastName,age,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.dob=new Date(dob);
    }
    //methods
    getFullName(){
      return `${this.firstName} ${this.lastName}`;
    }
    getBirthYear(){
        return  this.dob.getFullYear();
    }
    getBirthMonth(){
        return  this.dob.getMonth()+1;
    }

}
const person1=new person('Supriya','Singh',31,'12-31-1991');
console.log(person1.getFullName());
console.log(person1.getBirthYear());
console.log(person1);