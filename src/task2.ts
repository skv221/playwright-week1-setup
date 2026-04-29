type User = {
    name: string,
    age: number,
    isExperienced: Boolean
    skills: string[]
}

const name: string = "Venkatesan"
const age: number = 25
const isExperienced: Boolean = true
const skills: string[] = ["Python", "Selenium", "Typescript", "Playwright"]

const user: User = {
    name: name,
    age: age,
    isExperienced: isExperienced,
    skills: skills
}

console.log(user)