import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const registrationForm = document.getElementById("registration-form")

registrationForm.addEventListener("submit", createUser)
function createUser(event) {
    event.preventDefault();
    const userName = event.target.elements.username.value;
    const userEmail = event.target.elements.email.value;
    const userPassword = event.target.elements.password.value;
    
    const userObj = {
        name: userName,
        email: userEmail,
        password: userPassword,
    };

     let usersInStorage = localStorage.getItem("users");
    if (!usersInStorage) {
        usersInStorage = [];
    } else {
        usersInStorage = JSON.parse(usersInStorage);
    }

    if (usersInStorage.find(user => user.email === userEmail)) {
        return iziToast.error({
            title: 'Hey',
            message: "This email is already in use",
            theme: 'dark',
            backgroundColor: 'red',
            position: 'topCenter',
            color: 'black',
        });
    }

    usersInStorage.push(userObj);
    localStorage.setItem("users", JSON.stringify(usersInStorage));


    event.target.reset();

    return iziToast.show({
        title: '',
        message: "You have created your account",
        theme: 'dark',
        backgroundColor: 'green',
        position: 'topCenter',
        color: 'black',
    });
}







