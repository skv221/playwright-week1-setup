"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                username: "KeeVe221",
                password: "sept182025"
            });
        }, 5000);
    });
}
async function main() {
    const user = await getUser();
    console.log(user);
}
main();
//# sourceMappingURL=task5.js.map