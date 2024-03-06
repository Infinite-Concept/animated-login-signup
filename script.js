let x = document.getElementById('login')
let y = document.getElementById('register')
let z = document.getElementById('btn')


function login(){
    x.style.left = "27px"
    y.style.right = "-350px"
    z.style.left ="0px"
}

function register(){
    x.style.left = "-350px"
    y.style.right = "25px"
    z.style.left ="150px"
}

// view password value 

function myLogPassword(){
    let a = document.getElementById("logPassword")
    let b = document.getElementById('eye')
    let c = document.getElementById('eye-slash')

    if(a.type === "password"){
        a.type = "text"
        b.style.opacity = "0"
        c.style.opacity = "1"
    }else{
        a.type = "password"
        b.style.opacity = "1"
        c.style.opacity = "0"
    }

}


function myRegPassword(){
    let d = document.getElementById("regPassword")
    let e = document.getElementById('eye-2')
    let f = document.getElementById('eye-slash-2')

    if(d.type === "password"){
        d.type = "text"
        e.style.opacity = "0"
        f.style.opacity = "1"
    }else{
        d.type = "password"
        e.style.opacity = "1"
        f.style.opacity = "0"
    }

}