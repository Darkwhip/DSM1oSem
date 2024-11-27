function exer4(){
    const nome = document.createElement("p");
    const cont = document.createTextNode("Filippe Gonçalves Marchezoni;");
    nome.appendChild(cont);
    const div1 = document.querySelector("#saida");
    div1.appendChild(nome);
}