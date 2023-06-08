let user=prompt("enter S,G OR W:")
let cpuI=Math.floor(Math.random()*3)
let cpu=["S","W","G"][cpuI]

const match=(cpu,user)=>{
    if(cpu===user){
        return "Nobody wins!..its a tie";
    }
    else if(cpu==="S" && user==="W")
    {
        return "cpu"
    }
    else if(cpu==="W" && user==="S")
    {
        return "user"
    }
    else if(cpu==="G" && user==="S")
    {
        return "cpu"
    }
    else if(cpu==="G" && user==="W")
    {
        return "user"
    }
    else if(cpu==="W" && user==="G")
    {
        return "cpu"
    }
    else if(cpu==="S" && user==="G")
    {
        return "user"
    }
}

let result=match(cpu,user)
document.write(`Value of CPU is : ${cpu} and Value of User: ${user} The Winner is : ${result}`)