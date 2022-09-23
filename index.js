const items = [
    "apple",
    "apricot",
    "banana",
    "pear",
    "guava",
    "surveliance",
    "system",
    "operation",
    "movement",
    "orange",
    "dragonfruit",
    "papaya",
    "strawberry",
    "kiwi",
    "blackberry"
];

const root = new makeNode('\2');
for(const item of items){
    add(item,2,root);
}

const text_box = document.getElementById("text-box");
const list = document.getElementById("list");

function handler(e){
    const str = e.target.value;
    const predictions = search(str, 2 ,root);

    console.log(predictions);

    //add predictions to ul
    list.innerHTML = "";
    for(const prediction of predictions){
        list.innerHTML+= `<li class="list-group-item clickable" onclick="handleClick(this)"><b>${str}</b>${prediction.substring(str.length)}</li>`;
    }
}


function handleClick(e){
    const text = e.innerHTML.split("<b>").join("").split("</b>").join("");
    text_box.value = text;
}

handler({target: {value: ""}});

text_box.addEventListener("keyup",handler);

