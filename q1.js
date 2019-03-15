
	let q1 = document.getElementById("q1");
	let label1 = document.createElement("label");
	let label2 = document.createElement("label");
	let input1 = document.createElement("input");
	let input2 = document.createElement("input");
	let btn = document.createElement("button");
	let paragraph = document.createElement("p");

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
	q1.appendChild(paragraph);

	btn.onclick = function()
	{
		let vmin = input1.value;
		let vmax = input2.value;
		if(vmin === '' || vmax === '')
		{
			window.alert("Preencha os campos!");
		}
		else
		{
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
			}
			else
			{
				window.alert("Valor mínimo precisa ser menor que valor máximo");
			}
		}
		paragraph.innerHTML = a;
		console.log(paragraph.innerHTML);
	}
