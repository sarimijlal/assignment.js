let friends= ['Ahmed', 'Zayan', 'Shoaib'];
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
  console.log("Hi "+friends[i]+", i would love to have you on dinner at my place tonight.")
}
