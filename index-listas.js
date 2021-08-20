function addItem(){
    const taskValue = document.getElementById("input-task").value;
    addElemToDom("li", taskValue, "list");
    document.getElementById("input-task").value = "";
}

function addElemToDom(type, content, parentId){
    const elem = document.createElement (type);
    const text = document.createTextNode (content);
    const parent = document.getElementById (parentId);

    elem.appendChild(text);
    parent.appendChild(elem);



}