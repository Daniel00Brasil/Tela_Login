import { Login } from "./login153.js";

const callback_S=() => {
    alert("ok")
}

const callback_N=() => {
    alert("Usuário ou Senha está incorreto")
}

const configlogin = {
    cor: "048",
    img: "cfb.png",
    endpoint: "https://73c5b81a-7be4-4798-9ce5-ebdfcb1467fb-00-8562namg8p6l.worf.replit.dev/"
}
Login.login(null,callback_S,callback_N,configlogin)