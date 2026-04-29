interface User {
    username: string;
    password: string;
}

function getUser(): Promise<User> {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve({
                username: "KeeVe221",
                password: "sept182025"
            })
        }, 5000);
    })
}

async function main() {
    const user = await getUser()
    console.log(user)
}

main()