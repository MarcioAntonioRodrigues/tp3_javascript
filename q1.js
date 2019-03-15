
	let q1 = document.getElementById("q1");
	let label1 = document.createElement("label");
	let label2 = document.createElement("label");
	let input1 = document.createElement("input");
	let input2 = document.createElement("input");
	let btn = document.createElement("button");

	label1.innerHTML = "Valor minimo";
	label1.style.display = "block";

	label2.innerHTML = "Valor maximo";
	label2.style.display = "block";

	input1.type = "number";
	input1.style.marginBottom = "20px";

	input2.type = "number";
	input2.style.marginBottom = "20px";

	btn.innerHTML = "Calcular";
	btn.style.display = "block";

	q1.appendChild(label1);
	q1.appendChild(input1);
	q1.appendChild(label2);
	q1.appendChild(input2);
	q1.appendChild(btn);

	




	var resp1 = document.getElementById('resp1');
	let vmin = document.getElementById('vmin').value;
	let vmax = document.getElementById('vmax').value;
	if(vmin === '' || vmax === '')
	{
		window.alert("Preencha os campos!");
	}
	else
	{
		// vmin = vmin.value;
		// vmax = vmax.value;
		if(vmin < vmax)
		{
			var a = 0;
			var list = [];
			for(var i = vmin; i < vmax; i++)
			{
				if(i % 2 === 0 && i % 3 === 0 && i !== vmin && i !== vmax)
				{
					list.push(i);
				}
			}
			a = list.length;
			// return "Iniciando Algoritmo Nr1 - \n A resposta é: " + a;
		}
		else
		{
			window.alert("Valor mínimo precisa ser menor que valor máximo");
		}
	}
	resp1.innerHTML = a;
	console.log(resp1.innerHTML);
