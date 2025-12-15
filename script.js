function adiconarTarefa(){

    const input = document.querySelector("input");
    const valorDoInput = input.value


    if (valorDoInput.trim() === ""){
        alert("Digite uma tarefa antes de adicionar");
        return;
    }


let li = document.createElement("li");
li.textContent = valorDoInput;

const span = document.createElement("span");
span.textContent = "❌";
span.style.cursor = "pointer";
span.onclick = function () {
    deletarTarefa(span);
};

li.appendChild(span);

document.querySelector("ul").appendChild(li);

input.value = "";
}

function deletarTarefa(span){
    span.parentElement.remove()
}

