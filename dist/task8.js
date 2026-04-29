"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testUsers = [
    // ✅ Valid Cases
    { username: "venk", password: "venk123" },
    { username: "admin_user", password: "admin2024" },
    { username: "testUser1", password: "pass1234" },
    { username: "qa_engineer", password: "qa2025test" },
    { username: "alpha", password: "a1b2c3" },
    // ❌ Invalid — Empty / Missing
    { username: "", password: "123456" },
    { username: "user1", password: "" },
    { username: "", password: "" },
    // ❌ Invalid — Password Too Short
    { username: "short1", password: "123" },
    { username: "mini", password: "a1b" },
    { username: "tinyUser", password: "12a" },
    // ❌ Invalid — No Numbers in Password
    { username: "nonumber", password: "abcdef" },
    { username: "plainuser", password: "password" },
    { username: "lettersOnly", password: "qwerty" },
    // ⚠️ Edge Cases
    { username: "   ", password: "123456" },
    { username: "user space", password: "pass 123" },
    { username: "USER123", password: "PASS123" },
    { username: "user!@#", password: "abc123" },
    { username: "longusernametestcase", password: "longpassword123456" },
    { username: "u", password: "u12345" },
    { username: "123456", password: "123456" }
];
const validUsername = /^(?!\d+$)[A-Za-z0-9_]{1,20}$/;
const validPwd = /^(?=.*[A-Za-z])(?=.*\d).{6,30}$/;
const validUsers = testUsers.filter(u => validUsername.test(u.username.trim()) && validPwd.test(u.password.trim()));
console.log(`Total users: ${testUsers.length}`);
console.log(`Valid users: ${validUsers.length}`);
console.log(`Invalid users: ${testUsers.length - validUsers.length}`);
//# sourceMappingURL=task8.js.map