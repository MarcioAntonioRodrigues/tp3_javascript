function quest_4()
{
	let q = document.getElementById("q4");    
	let h3 = document.createElement("h3");    
	let btn = document.createElement("button");
	let label1 = document.createElement("label");
	let label2 = document.createElement("label");
	let label3 = document.createElement("label");
	let input1 = document.createElement("input");
	let input2 = document.createElement("input");
	let input3 = document.createElement("input");
	let p = document.createElement("p");
	
	h3.innerHTML = "Questao 4"
	h3.style.marginTop = "0";
	
	btn.innerHTML = "Calcular";
	btn.classList.add("q-btn");
	
	label1.innerHTML = "Quantidade de numeros";
	label1.style.display = "block";
	
	label2.innerHTML = "Valor minimo";
	label2.style.display = "block";
	
	label3.innerHTML = "valor maximo";
	label3.style.display = "block";
	
	input1.type = "number";    
	input1.style.marginBottom = "20px";
	
	input2.type = "number";    
	input2.style.marginBottom = "20px";
	
	input3.type = "number";    
	input3.style.marginBottom = "20px";
	
	q.classList.add("q-div");
	
	q.appendChild(h3);
	q.appendChild(label1);
	q.appendChild(input1);
	q.appendChild(label2);
	q.appendChild(input2);
	q.appendChild(label3);
	q.appendChild(input3);
	q.appendChild(btn);
	
	btn.onclick = ()=>
	{
		if(input1.value === '' || input2.value === ''|| input3.value === '')
		{
			window.alert("Preencha todos os campos!");
		}
		else if(parseInt(input2.value) > parseInt(input3.value))
		{
			window.alert("Valor minimo deve ser menor que valor maximo!");
		}
		else
		{
			v = parseInt(input2.value) + parseInt(input3.value);
			if(input1.value > v)
			{
				window.alert("Quantidade de numeros deve ser menor que a soma de valor minimo e valor maximo!");
			}
			else
			{
				let arr = [];
				let numAle = 0;
				for(var i = 0; i < input1.value; i++)
				{
					min = Math.ceil(input2.value);
					  max = Math.floor(input3.value);
					numAle = Math.floor(Math.random() * (max - min + 1)) + min;
					numAle = parseInt(numAle).toFixed(0);
					if(arr.includes(numAle))
					{
						// console.log("encontrou");
					}
					else
					{
						// console.log("não encontrou");
						arr.push(numAle);
					}
				}
				let orden = arr.sort(function(a,b)
				{
					return a-b;
				})
				p.innerHTML =  orden;
				q.appendChild(p);
			}
		}
	}
}
quest_4();