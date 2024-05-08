// Create a function that takes an array of numbers and return "Boom!" ,if the digit 7 appears in the array.
// Otherwise, return "there is no 7 in the array".

sevenBoom([1, 2, 3, 4, 5, 6, 7]) //➞ "Boom!"

sevenBoom([8, 6, 33, 100]) //➞ "there is no 7 in the array"

sevenBoom([2, 55, 60, 97, 86]) //➞ "Boom!"


function sevenBoom(arr){
    let newarr=arr.join("")
   newarr.includes(7)?console.log("Boom!"):console.log("there is no 7 in the array")    
}

// 
const arr1 =[
                { "score": 0, "text": "pizza" },
                { "score": 0, "text": "burger" },
                { "score": 0, "text": "paratha" },
                { "score": 0, "text": "samosa" },
                { "score": 0, "text": "other" }
            ]

const arr2 = ["pizza", "burger", "paratha", "samosa","paneer"];
// Result paneer
// Return elements of arr2 which are not present in arr1.text

let res=arr2.filter(element=>!arr1.some(newelement=>newelement.text==element))
console.log(res.join())

//



