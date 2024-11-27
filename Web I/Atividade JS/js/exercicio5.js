function exer5(){
    const nome = document.createElement("p");
    const cont = document.createTextNode(document.querySelector("#entrada").value);
    nome.appendChild(cont);
    const div1 = document.querySelector("#saida");
    div1.appendChild(nome);
}