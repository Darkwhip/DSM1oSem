function exer8(){
    if(document.getElementById("entrada").value.length<=0){
        return
    }
    const nome = document.createElement("li");
    const cont = document.createTextNode(document.querySelector("#entrada").value);
    nome.appendChild(cont);
    const titl = document.createAttribute("title");
    titl.value=document.querySelector("#entrada").value;
    nome.setAttributeNode(titl);
    const div1 = document.getElementsByTagName("ol")[0];
    div1.appendChild(nome);
}