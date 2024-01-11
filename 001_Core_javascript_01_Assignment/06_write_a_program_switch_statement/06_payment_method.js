// write a program that takes payment method

let paymentMethod = "paypal"; // use any payment method paypal,credit,debit

switch (paymentMethod) {
    case "credit":
        console.log(`processing fee of ${paymentMethod} is 2%`)
        break;
    case "debit":
        console.log(`processing fee of ${paymentMethod} is 1.5%`)
        break;
    case "paypal":
            console.log(`processing fee of ${paymentMethod} is 3%`)
        break;
    default:
        console.log(`this is not valid input`)
        break;
}