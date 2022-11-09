let current_user = ["chris", "urs", "admin", "phil", "andrie"]

let new_user = ["areeb","ANDRIE","Sarim","PHIL","sami"]

const curr = current_user.map(nam => nam.toLowerCase())
const new_us = new_user.map(nam => nam.toLowerCase())

for (let i = 0; i < new_user.length; i++) {
    if (curr.includes(new_us[i])) {
        console.log("Enter a different username.");
    } else {
        console.log(`Username ${new_user[i]} is available.`)
    }
}
