 let friends= ['ahmed', 'zayan', 'shoaib'];
  for (let i = 0; i <friends.length; i++){
    console.log("Hi "+friends[i]+", i would love to have you on dinner at my place tonight.")
  }
  console.log("\n"+friends[1]+" couldn't come to dinner.");
  friends.splice(1, 1, "Ali")
  console.log(friends);
  for (let i = 0; i <friends.length; i++){
    console.log("\nHi "+friends[i]+", i would love to have you on dinner at my place tonight.")
  }
