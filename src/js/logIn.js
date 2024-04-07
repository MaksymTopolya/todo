import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const loginForm = document.getElementById("login-form")
loginForm.addEventListener("submit", loginUser)

function loginUser(event) {
    event.preventDefault();
    const userEmail = event.target.elements.loginEmail.value
    const userPassword = event.target.elements.loginPassword.value
    const usersInStorage = JSON.parse(localStorage.getItem("users"))
    if (usersInStorage === null) {
        return iziToast.error({
           title: 'Hey',
           message: "Not user, create account please",
           theme: 'dark',
          backgroundColor: 'red',
          position: 'topCenter',
          color: 'black',
});
    }
    
     const foundUser = usersInStorage.find(user => user.email === userEmail && user.password === userPassword);

    if (foundUser) {
        window.location.href = './todos.html';
    } else {
         return iziToast.error({
           title: 'Hey',
           message: "Invalid email or password",
           theme: 'dark',
          backgroundColor: 'red',
          position: 'topCenter',
          color: 'black',
});
    }
    
}