let friends= ['ahmed', 'Zayan', 'Shoaib'];
for (let i = 0; i <friends.length; i++){
  console.log("Hi "+friends[i]+", i would love to have you on dinner at my place tonight.")
}
console.log("\n"+friends[1]+" couldn't come to dinner.");
friends.splice(1, 1, "Ali")
console.log(friends);
for (let i = 0; i <1; i++){
  console.log("\n")
}
for (let i = 0; i <friends.length; i++){
  console.log("Hi "+friends[i]+", i would love to have you on dinner at my place tonight.")

}
console.log("\nI just found a new table which means we can invite more guest!");
console.log("\n")
friends.unshift("Maaz");
friends.splice(2, 0, "Sami");
friends.push("Essa");
for (let i = 0; i <friends.length; i++){
  console.log("Hi "+friends[i]+", i would love to have you on dinner at my place tonight.");
}
console.log("\nThe dinner table coudn't arrive before dinner so i can have only two guests for dinner.");
console.log("\n");
for(i=friends.length-1; i>1 ; i--){
  console.log(friends[i]+", Sorry i can't have you tonight. I'll invite you some other day.")
friends.pop();
}
console.log("\n"+friends[0]+ ", You are still invited");
console.log(friends[1]+ ", You are still invited.");
for (let i = friends.length; i>0; i--) {
  friends.pop();
}
console.log(friends);
