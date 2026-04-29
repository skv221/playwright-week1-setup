interface User {
    username: string;
    password: string;
}

const user1: User = {
    username: "Keeve221",
    password : "sept182025"
}
const user2: User = {
    username: "Venk221",
    password : ""
}
const user3: User = {
    username: "Keer221",
    password : "KV"
}

function validateLogin(user: User): boolean {
    if(user.username == "" || user.password.length <= 6)
        return false
    return true
}

console.log(validateLogin(user1))
console.log(validateLogin(user2))
console.log(validateLogin(user3))