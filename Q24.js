//test no 1:
let str1= "humans"
let str2= "animals"

if(str1==str2){
    console.log("humans are similar to animals.")
    console.log(str==str2)
}
else{
    console.log("humans and animals are not similar.")
    console.log(str1!=str2)
}
//test no 02:
let name= "Zayan"
if (name.toLowerCase()=='zayan'){
    console.log("The name is in lower case.")
    console.log(name=="zayan")
}    
 else {
        console.log("The name name is not in lower case")
    }
    //test no 3:
    console.log("we have a marks of two students")
    let 
    marksA=96
marksB=87
if(marksA>=80){
    console.log("Marks of studentA is greater than 80")
}
else if(marksA<98){
    console.log("marks of studentA is not greater than 98")
}

if(marksA==marksB){
    console.log("Marks of studentA is equal to studentB")
}
else if(marksA!=marksB){
    console.log("marks of studentA is not equal to studentB")
}
//test no 4:
if(marksA>marksB && marksA%2==0){
    console.log("Correct")
}
if(marksB<marksA || marksB%2==0 ){
    console.log("marksB is less than marksA but marksB is not divisible by 2.")
}

//test no 5:
let arr=[12, 14, 16, 18, 22, 24, 26,28]
if(arr.includes(16)){
    console.log("found it!")
}
//test no 06:
if (arr.includes(17)) {
    console.log("found it!")
} else {
    console.log("coudn\'t found it")
}
