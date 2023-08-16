// const inputField = document.getElementById("tinggi-input");
// const button = document.getElementById("count-button")
// inputField.addEventListener('input', function() {
//     const inputValue = inputField.value

//     if (inputValidation(inputValue)) {
//         console.log("Success")
//         button.disabled = false
//     } else  {
//         console.log("fail")
//         button.disabled = true
//     }
// })

// function inputValidation(input) {
//     const integerRegex = /^-?\d+$/;
//     return integerRegex.test(input)
// }


try {
    var bilangan = 10
    var pembagi = 0
    if (pembagi === 0) {
        throw new Error("Pembagi bernilai 0")
    }
    console.log("Success")
} catch (error) {
    console.log("Ada error", error)
}