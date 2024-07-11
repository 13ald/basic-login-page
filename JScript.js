const passInput = document.getElementById("newUserPassword");
const userInput = document.getElementById("newUsername");
const passConfirmInput = document.getElementById("passwordConfirm");

console.log(window.localStorage.getItem("username"))



function onSignUp() {
    const pass = passInput.value;
    const user = userInput.value;
    const passConfirm = passConfirmInput.value;
    
    if (passConfirm === pass && user !== "") {
        alert("You have signed up succesfully. Please Login to continue.");
        document.getElementById("newUsername").value = "";
        document.getElementById("newUserPassword").value = "";
        document.getElementById("passwordConfirm").value = "";
        window.localStorage.setItem("username", user)
        window.localStorage.setItem("password", pass)
    } else {
        alert("Passwords do not match please try again.");
        document.getElementById("newUserPassword").value = "";
        document.getElementById("passwordConfirm").value = "";
    }
}

function onSignIn() {
    /**
     * get username (from storage)
     * get password (from storage)
     * get usernameInput (current value)
     * get usernamePassword (current value)
     * IF usernameInput EQUALS username AND passwordInput EQUALS password THEN
     *      do something
     */
    const username = window.localStorage.getItem("username");
    const password = window.localStorage.getItem("passwordInput");
    const usernameInput = document.getElementById("user-name").value;
    const passwordInput = document.getElementById("user-pass").value;
    if (username === usernameInput && password === passwordInput) {
        alert("Welcome.");
    } else {
        alert("Username or password incorrect.");
        document.getElementById("user-name").value = "";
        document.getElementById("user-pass").value = "";
    }
}

function clearInputs() {
    document.getElementById("user-name").value = "";
    document.getElementById("user-pass").value = "";
}





const localStorage = null;

function getLocalStorage() {
    return localStorage;
}

function setLocalStorage(value) {
    localStorage = value;
}

function main() {
    setLocalStorage("hello")
}

main()
console.log(getLocalStorage())