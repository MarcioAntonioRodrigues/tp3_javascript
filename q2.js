function quest_2()
{
	// create elements
    let q2 = document.getElementById("q2");
    let h3 = document.createElement("h3");
    let label = document.createElement("label");
    let input = document.createElement("input");
	let btn = document.createElement("button");
	let paragraph = document.createElement("p");
    
    h3.innerHTML = "Questao 2";
    h3.style.marginTop = "0";

    label.innerHTML = "Calcular fatorial de";
	label.style.display = "block";
    
	input.type = "number";    
    input.style.marginBottom = "20px";

    btn.innerHTML = "Calcular";
	btn.classList.add("q-btn");

    q2.classList.add("q-div");
    
    // append elements in the div
    q2.appendChild(h3);
    q2.appendChild(label);
    q2.appendChild(input);
    q2.appendChild(btn);
    q2.appendChild(paragraph);

    btn.onclick = function()
    {
        if(input.value !== '')
        {
            var antes = Date.now();
            var fat = 1;
            var valor = input.value;
            for(var i = 1; i <= valor; i++)
            {
                fat *= i;
            }
            var duracao = Date.now() - antes;
            paragraph.innerHTML = input.value + "! = " + fat + " (" + duracao + " milisegundos)";
            paragraph.style.color = "black";
        }
        else
        {
            window.alert("Insira um valor no campo!");
            paragraph.innerHTML = "Insira um valor no campo!";
            paragraph.style.color = "red";
        }
    }
    var antes = Date.now();
    // tarefa02();
    var duracao = Date.now() - antes;
    // var fat = tarefa02();
    // var resposta = "Iniciando Algoritmo Nr2 - \n A resposta é: 53!= " + fat + "(" + duracao + " milisegundos)";
    // resposta;
    
}
quest_2();