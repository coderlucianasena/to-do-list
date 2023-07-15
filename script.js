document.addEventListener("DOMContentLoaded", function () {
    let tarefaInput = document.getElementById("tarefaInput");
    let adicionarButton = document.getElementById("adicionarButton");
    let tarefaLista = document.getElementById("tarefaLista");

    adicionarButton.addEventListener("click", function () {
        let tarefa = tarefaInput.value.trim();

        if (tarefa !== "") {
            let li = document.createElement("li");
            li.textContent = tarefa;

            let closeIcon = document.createElement("span");
            closeIcon.className = "close";
            closeIcon.innerHTML = "&#10006;";

            li.appendChild(closeIcon);
            tarefaLista.appendChild(li);

            tarefaInput.value = "";
        }
    });

    tarefaLista.addEventListener("click", function (event) {
        let elementoClicado = event.target;

        if (elementoClicado.classList.contains("close")) {
            let li = elementoClicado.parentElement;
            tarefaLista.removeChild(li);
        } else {
            elementoClicado.classList.toggle("completed");
        }
    });
});
