var isValid = function(s) {
    const stk=new Array();
    for(let i=0;i<s.length;i++){
        let x= s.charAt(i)
        switch(x){
         case '{':
         case '[':
         case '(':
             stk.push(x)
             break;
         case '}':
              if(s.length!=0 && s.charAt(i-1)=="{")
              {
                  stk.pop();
              }
              else{
                  stk.push(x);
              }
              break;
         case ']':
              if(s.length!=0 && s.charAt(i-1)=="[")
              {
                stk.pop();
              }
              else{
                stk.push(x);
              }
              break;
         case ')':
            if(s.length!=0 && s.charAt(i-1)=="(")
            {
              stk.pop();
            }
            else{
              stk.push(x);
            }
            break;
        }
    }
    return (stk.length==0)
};

let s='[{[]}]'
console.log(isValid(s))