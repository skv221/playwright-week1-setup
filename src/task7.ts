interface User {
    username: string;
    password: string;
}

const users: User[] = [
    {
        username: "Keeve221",
        password : "sept182025"
    },
    {
        username: "Venk221",
        password : ""
    },
    {
        username: "Keer221",
        password : "KV"
    },
    {
        username: "",
        password : "Pranav221"
    },
    {
        username: "Theeks221",
        password : "McQueen"
    }
]

type status = "VALID" | "INVALID"

const validPwds:status[] = users.map(u => /^(?=.*\d).{6,}$/.test(u.password) && u.username != "" ?"VALID":"INVALID")

console.log(validPwds)