function question_3()
{
    let q = document.getElementById("q3");    
	let h3 = document.createElement("h3");    
    let btn = document.createElement("button");
    let table = document.createElement("table");
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdNota = document.createElement("td");
    let tdresult = document.createElement("td");

    h3.innerHTML = "Questao 3"
    h3.style.marginTop = "0";
    
    btn.innerHTML = "Criar relatorio";
    btn.classList.add("q-btn");

    tdName.innerHTML = "Nome";
    tdNota.innerHTML = "Nota"
    tdresult.innerHTML = "Resultado";
    
	q.classList.add("q-div");

    table.appendChild(tr);
    tr.appendChild(tdName);
    tr.appendChild(tdNota);
    tr.appendChild(tdresult);
    q.appendChild(h3);
    q.appendChild(btn);
    q.appendChild(table);

    let aprovados = [];
    let reprovados = [];
    let percentAprov;
    let percentReprov;

    btn.onclick = function()
    {
        if(aprovados.length > 0)
        {
            return
        }
        else
        {
            console.log(aprovados.length)
            function Aluno(nraluno, notaluno) 
            {
                this.nraluno = nraluno;
                this.notaluno = notaluno;
            }
    
            let nota = 0;
            let registros = [];
    
            for(var i = 1; i <= 20; i++)
            {
                nota = (Math.random() * 100) + 1;
                nota = Math.round(nota);
                registros.push(new Aluno(i, nota));
            }
    
            for(var j = 0; j <= registros.length; j++)
            {
                let tr2 = document.createElement("tr");
    
                let al = registros[j];
    
                if(al)
                {
                    let td1 = document.createElement("td");
                    let td2 = document.createElement("td");
                    let td3 = document.createElement("td");
    
                    td1.innerHTML = "Aluno " + al.nraluno;
                    td2.innerHTML = al.notaluno;
                    if(al.notaluno >= 50)
                    {
                        td3.innerHTML = "Aprovado";
                        aprovados.push(td3);
                    }
                    else
                    {
                        td3.innerHTML = "Reprovado";
                        reprovados.push(td3);
                    }
                    tr2.appendChild(td1);
                    tr2.appendChild(td2);
                    tr2.appendChild(td3);
                }
                table.appendChild(tr2);
            }
            let td4 = document.createElement("td");
            let td5 = document.createElement("td");
            percentAprov = (aprovados.length / 20) * 100;
            percentReprov = (reprovados.length / 20) * 100;
            td4.innerHTML = "APROVADOS: " + aprovados.length + " (" +  Math.round(percentAprov) + "%)";
            td5.innerHTML = "REPROVADOS: " + reprovados.length + " (" + Math.round(percentReprov) + "%)";
            let tr3 = document.createElement("tr");
            tr3.appendChild(td4);
            tr3.appendChild(td5);
            table.appendChild(tr3);
        }
    }
}
question_3();