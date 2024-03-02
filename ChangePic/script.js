function changeImage(){
    const html = document.documentElement;
    html.classList.toggle("light")

    var imagem = document.querySelector('#profile');
    var btn = document.getElementById("btnStyle");
    var dt = document.getElementById("data");

    var registro = new Date();
    dt = formatarData(registro);
    
    if(html.classList.contains("light")){
        btn.style.color = "lightpink"
        btn.style.borderColor = "lightpink"
        document.getElementById("colorTxt").style.color = "lightpink"
        document.getElementById("data").textContent = dt;
        imagem.setAttribute("src", "./img/pic1.jpg");
    }else{
        btn.style.color = "rgb(41, 144, 139)"
        btn.style.borderColor = "rgb(41, 144, 139)"
        document.getElementById("data").textContent = dt;
        document.getElementById("colorTxt").style.color = "#ffff"
        imagem.setAttribute("src", "./img/pic2.avif");
    }
}

function formatarData(item){
    var options = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }

    return item.toLocaleString("pt-BR", options)
}