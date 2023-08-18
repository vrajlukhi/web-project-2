import Navbar from "../components/i_x.js";
document.getElementById("navbar").innerHTML = Navbar()

const login = (e) => {
    e.preventDefault()
    let user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }
    fetch(`http://localhost:3000/user?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.lenght > 0) {
                if (data[0].password === user.password) {
                    alert("Login succesfully comlete"),
                    window.location.href="../index.html"
                }
                else {
                    alert("Enter the correct password")
                }
            }
            else {
                alert("user can not access")
            }
        })
}

document.getElementById("login").addEventListener("submit", login)
document.getElementById("email").addEventListener("keypress", () => {
    let email = document.getElementById("email").value
    let e_pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (!e_pattern.test(email)) {
        document.getElementById("e_err").innerHTML = `enter the valid email`
        document.getElementById("e_err").classList.add("text-danger")
        document.getElementById("email").classList.add("border-danger")
        document.getElementById("email").classList.add("text-danger")
    }
    else {
        document.getElementById("e_err").innerHTML = `valid email`
        document.getElementById("e_err").classList.add("text-primary")
        document.getElementById("e_err").classList.remove("text-danger")
        document.getElementById("email").classList.add("border-primary")
        document.getElementById("email").classList.remove("border-danger")
        document.getElementById("email").classList.remove("text-danger")
        document.getElementById("email").classList.add("text-primary")
    }
})
document.getElementById("password").addEventListener("keypress", () => {
    let password = document.getElementById("password").value
    let p_pattern = /(?=.*\d.*)(?=.*[a-zA-Z].*)(?=.*[!#\$%&\?].*).{8,}/;

    if (!p_pattern.test(password)) {
        document.getElementById("p_err").innerHTML = `plase enter the propar password`
        document.getElementById("p_err").classList.add("text-danger")
        document.getElementById("password").classList.add("border-danger")
        document.getElementById("password").classList.add("text-danger")
    }
    else {
        document.getElementById("p_err").innerHTML = `valid password`
        document.getElementById("p_err").classList.add("text-primary")
        document.getElementById("p_err").classList.remove("text-danger")
        document.getElementById("password").classList.add("border-primary")
        document.getElementById("password").classList.remove("border-danger")
        document.getElementById("password").classList.remove("text-danger")
        document.getElementById("password").classList.add("text-primary")
    }
})