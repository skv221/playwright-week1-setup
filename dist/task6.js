"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    {
        username: "Keeve221",
        password: "sept182025"
    },
    {
        username: "Venk221",
        password: ""
    },
    {
        username: "Keer221",
        password: "KV"
    },
    {
        username: "",
        password: "Pranav221"
    },
    {
        username: "Theeks221",
        password: "McQueen"
    }
];
const usernames = users.map(u => u.username);
const validUsers = users.filter(u => u.username != "" && u.password.length >= 6);
const invalidUserCount = users.length - validUsers.length;
console.log(usernames);
console.log(validUsers);
console.log(invalidUserCount);
//# sourceMappingURL=task6.js.map