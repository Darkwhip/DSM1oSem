function exer10(){
    if(document.getElementById("entrada").value.length<=0){
        return
    }
    const nome = document.createElement("li");
    const cont = document.createTextNode(document.querySelector("#entrada").value);
    nome.appendChild(cont);
    let titl = document.createAttribute("title");
    titl.value=document.querySelector("#entrada").value;
    nome.setAttributeNode(titl);
    titl = document.createAttribute("onclick");
    titl.value="exibir()";
    nome.setAttributeNode(titl);
    const div1 = document.getElementsByTagName("ol")[0];
    div1.appendChild(nome);
    document.getElementById("entrada").value="";
    const lista = document.querySelectorAll("li");
    document.getElementById("total").innerHTML=lista.length
}

function exibir(){
    alert("Exibindo");
  }
  