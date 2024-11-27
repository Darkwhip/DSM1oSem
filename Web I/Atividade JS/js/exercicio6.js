function exer6(){
    const nome = document.createElement("p");
    const cont = document.createTextNode(document.querySelector("#entrada").value);
    nome.appendChild(cont);
    const titl = document.createAttribute("title");
    titl.value="Nome Fornecido";
    nome.setAttributeNode(titl);
    const div1 = document.querySelector("#saida");
    div1.appendChild(nome);
}