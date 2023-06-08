"use strict"
class User{
    static count=0;
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
        User.count++;
    }

}
class Member extends User{
    constructor(name,email,password,monthlyPackage)
    {
        super(name,email,password);
        this.monthlyPackage=monthlyPackage;
    }
    printPacakage(){
        console.log(this.name +" has "+ this.monthlyPackage);
    }
    countUser(){
        console.log(User.count);
    }
}

const member1=new Member("supriya","abc@gmail.com","123456","Standard Package");
const member2=new Member("supriya","abc@gmail.com","123456","NO Package");
const member3=new Member("supriya","abc@gmail.com","123456","NO Package");
member1.printPacakage();
member1.countUser();