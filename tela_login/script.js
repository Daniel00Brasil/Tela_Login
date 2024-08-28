import { Login } from "./login.js";

const callback_S=() => {
    alert("ok")
}

const callback_N=() => {
    alert("Usuário ou Senha está incorreto")
}

Login.login(callback_S,callback_N)