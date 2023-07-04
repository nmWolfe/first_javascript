function calculateYearsUntilRetirement(event) {
    const currentAge = event.target.value;

    const yearsLeft = 65 - currentAge

    alert(yearsLeft)
}

function getGreetingInFrench(event) {
    const greeting = event.target.value;
    let response = ''

    if (greeting == "Hello") {
        response = "Bonjour"
    } else if (greeting == "Goodbye") {
        response = "Au Revoir"
    } else {
        response = "Not recognised"
    }

    alert(response)
}
