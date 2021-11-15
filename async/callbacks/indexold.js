console.log("Script started")
function getUserName() {
    console.log("inside function")
    return "galamo88"
}
getUserName()
// console.log("Script Ended")

setTimeout(() => {
    console.log("Script Ended")
}, 5000);