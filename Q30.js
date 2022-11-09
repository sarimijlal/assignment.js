let arr= ["chris", "urs", "admin", "phil", "andrie"]
for (let i = 0; i< arr.length; i++) {
    if (arr[i]=="admin") {
        console.log("Hello "+arr[i]+", would you like to see a status report?")
    }
    else{console.log(arr[i]+", thank you for logging in again.")
    }
    
}
