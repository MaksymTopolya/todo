import"./assets/registration-c9430fa7.js";import{i as t}from"./assets/vendor-ad859c2f.js";const a=document.getElementById("login-form");a.addEventListener("submit",l);function l(e){e.preventDefault();const s=e.target.elements.loginEmail.value,n=e.target.elements.loginPassword.value,o=JSON.parse(localStorage.getItem("users"));if(o===null)return t.error({title:"Hey",message:"Not user, create account please",theme:"dark",backgroundColor:"red",position:"topCenter",color:"black"});if(o.find(r=>r.email===s&&r.password===n))window.location.href="./todos.html";else return t.error({title:"Hey",message:"Invalid email or password",theme:"dark",backgroundColor:"red",position:"topCenter",color:"black"})}
//# sourceMappingURL=commonHelpers2.js.map
