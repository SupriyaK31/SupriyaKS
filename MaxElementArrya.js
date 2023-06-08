const arr=[7,9,1,5,2];

console.log(arr);

      let max=arr[0];
      for(let i=0;i<arr.length;i++){
        if(arr[i]>max)
        {
            max=arr[i]
        }
      }
console.log(max);