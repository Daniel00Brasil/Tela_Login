class Login {
    static logado     = null //CONFERIR SE ESTÁ LOGADO.
    static matrlog    = null //MATRICULA DE QUEM ESTÁ LOGADO.
    static nomelog    = null //NOME DE QUEM ESTÁ LOGADO.
    static aceslog    = null //ACESSO DE QUEN ESTÁ LOGADO.
    static estilo_css = null //CONFIGURAÇÃO DE ESTILO CSS
    static callback_S = null
    static callback_N = null
    static config     = {    //CONFIGURAÇÃO DE MARCAÇÃO HTML
        cor : "048",
        img : "./cfb.png",
        endpoint: null,// "https://73c5b81a-7be4-4798-9ce5-ebdfcb1467fb-00-8562namg8p6l.worf.replit.dev/"
    }
    
//------------------------------CONSTRUÇÃO FINAL DO ENDPOINT------------------------------------------
    static login=(callback_S,callback_N,config) => {
        this.config = config
        this.callback_S=() => {callback_S()}
        this.callback_N=() => {callback_N()}
//--------------------------------------------------------------------------------------------------        

//----------------------------CONFIGURAÇÃO DE ESTILO CSS--------------------------------------------
        this.estilo_css = 
           ".fundo_login {"+
                "display: flex;"+
                "justify-content: center;"+
                "align-items: center;"+
                "width: 100%;"+
                "height: 100vh;"+
                "position: absolute;"+
                "top: 0px;"+
                "left: 0px;"+
                "background-color: rgba(0,0,0,0.75);"+
                "box-sizing: border-box;"+
                                
            "}"+
        
            ".base_login {"+
                "display: flex;"+
                "justify-content: center;"+
                "align-items: stretch;"+
                "width: 30%;"+
                "box-sizing: inherit;"+
            "}"+
        
            ".elemento_login {"+
                "display: flex;"+
                "justify-content: center;"+
                "align-items: flex-start;"+
                "width: 50%;"+
                "background-color: #eee;"+
                "flex-direction: column;"+
                "padding: 10px;"+
                "border-radius: 10px 0px 0px 10px;"+
                "box-sizing: inherit;"+
                
            "}"+
        
            ".logo_login {"+
                "display: flex;"+
                "justify-content: center;"+
                "align-items: center;"+
                "width: 40%;"+
                "background-color: #bbb;"+
                "padding: 10px;"+
                "border-radius: 0px 10px 10px 0px;"+
                "box-sizing: inherit;"+
            "}"+
        
            ".logo_login img {"+
                "width: 100%;"+
                "box-sizing: inherit;"+
            "}"+
        
            ".campo_login {"+
                "display: flex;"+
                "justify-content: flex-start;"+
                "align-items: flex-start;"+
                "flex-direction: column;"+
                "box-sizing: inherit;"+
                "margin-bottom: 10px;"+
               
            "}"+
        
            ".campo_login label {"+
                "font-size: 18px;"+
            "}"+
        
            ".campo_login input {"+
                "font-size: 18px;"+
                "padding: 5px;"+
                "background-color: #fff;"+
                "border-radius: 5px;"+
            "}"+
        
            ".botoes_login {"+
                "display: flex;"+
                "justify-content: space-around;"+
                "align-items: center;"+
                "width: 100%;"+
                "box-sizing: inherit;"+
            "}"+
        
            ".botoes_login button {"+
                "cursor: pointer;"+
                `background-color: #${this.config_html.cor};`+
                "border-radius: 5px;"+
                "padding: 10px;"+
                "width: 100px;"+
                "box-sizing: inherit;"+
                "color: #fff;"+
                //"box-shadow: 1px 1px 5px #000"
            "}"    
//------------------------------------FIM ESTILO CCS---------------------------------------------------  

//------------------------------------CONFIGURAÇÃO MARCAÇÃO HTML---------------------------------------
        const styleEstilo =  document.createElement("style")
        styleEstilo.setAttribute("id","id_estilo_login")
        styleEstilo.setAttribute("rel","stylesheet")
        styleEstilo.innerHTML = this.estilo_css
        document.head.appendChild(styleEstilo)
        
        const fundo_login = document.createElement("div")
        fundo_login.setAttribute("id","fundo_login")      
        fundo_login.setAttribute("class","fundo_login") 
        document.body.prepend(fundo_login)  
        
        const base_login = document.createElement("div")
        base_login.setAttribute("id","base_login")
        base_login.setAttribute("class","base_login")
        fundo_login.appendChild(base_login)

        const elemento_login = document.createElement("div")    
        elemento_login.setAttribute("id","elemento_login")
        elemento_login.setAttribute("class","elemento_login")
        base_login.appendChild(elemento_login)

        const campo_loginUserName = document.createElement("div")
        campo_loginUserName.setAttribute("id","campo_loginUserName")
        campo_loginUserName.setAttribute("class","campo_login")
        elemento_login.appendChild(campo_loginUserName)
        
        const label_UserName = document.createElement("label")
        label_UserName.setAttribute("id","label_UserName")
        label_UserName.innerHTML = "Usuário:"
        campo_loginUserName.appendChild(label_UserName)
        
        const input_UserName = document.createElement("input")
        input_UserName.setAttribute("id","f_userName")
        input_UserName.setAttribute("type","text")
        input_UserName.setAttribute("name","f_userName")
        campo_loginUserName.appendChild(input_UserName)
        
        const label_Senha = document.createElement("label")
        label_Senha.setAttribute("id","label_senha")
        label_Senha.innerHTML = "Senha:"
        campo_loginUserName.appendChild(label_Senha)
        
        const input_Senha = document.createElement("input")
        input_Senha.setAttribute("id","f_senha")
        input_Senha.setAttribute("type","password")
        input_Senha.setAttribute("name","f_senha")
        campo_loginUserName.appendChild(input_Senha)
        
        const botoes_login = document.createElement("div")
        botoes_login.setAttribute("class","botoes_login")
        elemento_login.appendChild(botoes_login)

        const btn_login = document.createElement("button")
        btn_login.setAttribute("id","btn_login")
        btn_login.innerHTML = "Login"
        btn_login.addEventListener("click",(evt) => {
            this.verificaLogin()
        })
        botoes_login.appendChild(btn_login)
        
        const btn_cancelar = document.createElement("button")
        btn_cancelar.setAttribute("id","btn_cancelar")
        btn_cancelar.innerHTML = "Cancelar"
        btn_cancelar.addEventListener("click",(evt) => {
            this.fechar()
        })
        botoes_login.appendChild(btn_cancelar)
        
        const logo_login = document.createElement("div")
        logo_login.setAttribute("id","logo_login")
        logo_login.setAttribute("class","logo_login")
        base_login.appendChild(logo_login)
        
        const img_login = document.createElement("img")
        img_login.setAttribute("src",this.config_html.img)
        img_login.setAttribute("class","logo_login")
        logo_login.appendChild(img_login)
    }   
//------------------------------------FIM DA MARCAÇÃO HTML---------------------------------------------
    static verificaLogin=() => {
        const matri = document.getElementById("f_userName").value
        const pass = document.getElementById("f_senha").value
    
        const endpoint = `${this.config.endpoint}/${matri}&senha=${pass}`
        fetch(endpoint)
        .then(res => res.json())
        .then(res => {
            if (res) {
                sessionStorage.setItem("logado","true")
                sessionStorage.setItem("matlogado",matri)
                sessionStorage.setItem("nomelogado",res.nome)
                sessionStorage.setItem("acessologado",res.acesso)
                this.callback_S()
                this.fechar()
            }else {
                sessionStorage.setItem("logado","false")
                sessionStorage.setItem("matlogado","")
                sessionStorage.setItem("nomelogado","")
                sessionStorage.setItem("acessologado","")
                this.callback_N()
            }
        })
    }    
    
    static fechar=() => {
        const fundo_login = document.getElementById("fundo_login")
        fundo_login.remove()

        const id_estilo_login = document.getElementById("id_estilo_login")
        id_estilo_login.remove()
        
    }

}
//export {Login}

/* EXEMPLO DE API
    // API DEVERÁ RETORNAR NOME E ACESSO CASO O LOGIN SEJA EFETUADO COM SUCESSO
    // API DEVERÁ RESTORNAR NULL CASO O LOGIN NÃO SEJA EFETUADO

    // var http = require("http");
    // var url = require("url");

    // http.createServer(function (req, res) {
    //     res.setHeader("Access-Control-Allow-Origin", "*");
    //     res.writeHead(200, { "Content-Type": "application/json" });

    //     let parametros = url.parse(req.url, true);
    //     let matri = parametros.query.matricula;
    //     let pass = parametros.query.senha;
    //     let dados = null;

    //     if (matri == "123" && pass == "321") {
    //       dados = {
    //         nome: "Adm",
    //         acesso: 10,
    //       };
    //     }

    //     res.end(JSON.stringify(dados));
    //   })
    //   .listen(8080);
*/