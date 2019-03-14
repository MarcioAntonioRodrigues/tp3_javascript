var resp1 = document.getElementById('resp1');
function tarefa01()
{
	let vmin = document.getElementById('vmin').value;
	let vmax = document.getElementById('vmax').value;
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
				if(i % 2 === 0 && i % 3 === 0 && i !== 1 && i !== 1000000)
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
}
tarefa01();