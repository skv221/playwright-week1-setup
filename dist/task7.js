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
const validPwds = users.map(u => /^(?=.*\d).{6,}$/.test(u.password) && u.username != "" ? "VALID" : "INVALID");
console.log(validPwds);
//# sourceMappingURL=task7.js.map