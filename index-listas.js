function addItem(){
    const taskValue = document.getElementById("input-task").value;
    addElement(taskValue);
    document.getElementById("input-task").value = "";
}

/*function addElemToDom(content){
    const li = document.createElement ("li");
    const text = document.createTextNode (content);
    const parent = document.getElementById ("list");

    li.appendChild(text);
    parent.appendChild(li);



}*/
function addElement(content){
const lista = document.getElementById("lista");
const div = document.createElement("div");
div.classList.add("list-item");

lista.appendChild(div);

const ul = document.createElement("ul");
ul.classList.add("ul");

div.appendChild(ul);
const text = document.createTextNode (content);
ul.appendChild(text);
const btn = document.createElement("button");

div.appendChild(btn);
const btnContent= document.createTextNode("X");
btn.appendChild(btnContent);


}


