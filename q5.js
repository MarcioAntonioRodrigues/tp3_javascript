function quest_5()
{
	let q = document.getElementById("q5");    
	let h3 = document.createElement("h3");    
	let btn = document.createElement("button");
	let label1 = document.createElement("label");
	let label2 = document.createElement("label");
	let label3 = document.createElement("label");
	let input1 = document.createElement("input");
	let input2 = document.createElement("input");
	let input3 = document.createElement("input");
	let p = document.createElement("p");
	
	h3.innerHTML = "Questao 5"
	h3.style.marginTop = "0";
	
	btn.innerHTML = "Calcular";
	btn.classList.add("q-btn");
	
	label1.innerHTML = "Lado A";
	label1.style.display = "block";
	
	label2.innerHTML = "Lado B";
	label2.style.display = "block";
	
	label3.innerHTML = "Lado C";
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
	q.appendChild(p);
	
	btn.onclick = ()=>
	{
		a = input1.value;
		b = input2.value;
		c = input3.value;

		if(a == 0 || b == 0 || c == 0)
		{
			window.alert("Nao e um triangulo");
		}
		else{
			if(a==b && b==c)
			{
				p.innerHTML = "Triangulo equilatero";
			}
			else if(a==b && b != c)
			{
				p.innerHTML = "Triangulo isosceles";
			}
			else
			{
				p.innerHTML = "Triangulo escaleno";
			}
		}
	}
}
quest_5();