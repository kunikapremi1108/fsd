function validateForm() {

    const username = document.getElementById("username");
    const password = document.getElementById("password");

    if (username === "" || password === "") {
        alert("Both fields are required.");
        return false;
    }
    return true;
}