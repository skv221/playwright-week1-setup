"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    username: "Keeve221",
    password: "sept182025"
};
const user2 = {
    username: "Venk221",
    password: ""
};
const user3 = {
    username: "Keer221",
    password: "KV"
};
function validateLogin(user) {
    if (user.username == "" || user.password.length <= 6)
        return "FAILURE";
    return "SUCCESS";
}
console.log(validateLogin(user1));
console.log(validateLogin(user2));
console.log(validateLogin(user3));
//# sourceMappingURL=task4.js.map