import util from "util";

const firstName = "Rafie"
const lastName = "Chautie"

console.info(`Hello ${firstName} ${lastName}`)
console.info(util.format("Hello %s %s", firstName, lastName))

const person = {
    firstName: "Rafie",
    lastName: "Chautie"
}

console.info(`Person: ${JSON.stringify(person)}`)
console.info(util.format("Person : %j", person))