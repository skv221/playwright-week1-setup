# 📘 TypeScript Practice – Week 1

## 🎯 Objective

Build a strong foundation in TypeScript for automation by focusing on:

* Type safety
* Validation logic
* Async handling
* Structured test data

---

## 📁 Project Structure

```
Week 1/
├── src/                 # TypeScript source files
│   ├── task1.ts
│   ├── task2.ts
│   ├── task3.ts
│   ├── task4.ts
│   ├── task5.ts
│   ├── task6.ts
│   ├── task7.ts
│   └── task8.ts
│
├── dist/                # Compiled JavaScript output
├── node_modules/        # Dependencies
├── package.json
├── package-lock.json
├── tsconfig.json
```

---

## ▶️ How to Run

### 1. Install dependencies

```
npm install
```

### 2. Compile TypeScript

```
npx tsc
```

### 3. Run any task

```
node dist/task1.js
node dist/task2.js
...
node dist/task8.js
```

---

## 🧪 Tasks Implemented

### 🧱 Task 1: Environment Setup

* Installed TypeScript locally
* Initialized Node project
* Configured `tsconfig.json`
* Successfully compiled and ran `.ts` files

---

### 🔹 Task 2: Strong Typing Basics

* Used explicit types (`string`, `number`, `boolean`)
* Created:

  * Array of skills
  * User object
* Avoided `any`

---

### 🔹 Task 3: Interfaces + Functions

* Defined interface for login data
* Implemented login validation:

  * Username not empty
  * Password length ≥ 6
* Tested with valid and invalid inputs

---

### 🔹 Task 4: Type Safety Enhancement

* Created custom result type:

  * `SUCCESS`
  * `FAILURE`
* Updated validation function to return typed result
* Printed meaningful outputs

---

### 🔹 Task 5: Async Programming

* Simulated API call using `async/await`
* Implemented delay using Promise
* Added:

  * Success handling
  * Error handling (`try/catch`)

---

### 🔹 Task 6: Array Operations

* Created user dataset
* Performed:

  * Filtering valid users
  * Extracting usernames
  * Counting invalid users
* Used:

  * `map`
  * `filter`

---

### 🔹 Task 7: Validation Logic Upgrade

* Enhanced password rules:

  * Minimum 6 characters
  * At least 1 number
* Tested with edge cases

---

### 🔹 Task 8: Mini Project – Test Data Manager

* Built a module to:

  * Store multiple users
  * Validate all users
  * Separate valid and invalid users
* Generated summary:

  * Total users
  * Valid count
  * Invalid count

---

## 🧠 Key Learnings

* Writing type-safe code improves reliability
* Validation logic is core to test automation
* Async handling is critical for real-world testing
* Structured test data improves scalability
* Thinking like QA while coding adds real value

---

## 🚀 Next Step

Move to **Playwright with TypeScript** and apply these concepts to real UI and API automation.
