function quest_6()
{
	let q = document.getElementById("q6");    
	let h3 = document.createElement("h3");    
	let h4 = document.createElement("h4");
	let btn_login = document.createElement("button");    
	let btn_register = document.createElement("button");    
	let btn_back = document.createElement("button");   
	let label1 = document.createElement("label");
	let label2 = document.createElement("label");
	let input1 = document.createElement("input");
	let input2 = document.createElement("input");
	let validate_cadastro = false;
	let validate_login = false;

	h3.innerHTML = "Questao 6"
	h3.style.marginTop = "0";

	h4.innerHTML = "Entre ou cadastre-se"
	h4.style.marginTop = "0";
	
	btn_login.innerHTML = "Entrar";
	btn_login.classList.add("q-btn");
	
	btn_register.innerHTML = "Cadastrar";
	btn_register.classList.add("q-btn");

	btn_back.innerHTML = "Voltar";
	btn_back.classList.add("q-btn");
	btn_back.style.display = "none";
	
	label1.style.display = "none";
	
	label2.style.display = "none";
	
	input1.type = "text";    
	input1.style.marginBottom = "20px";
	input1.style.display = "none";
	
	input2.type = "password";    
	input2.style.marginBottom = "20px";
	input2.style.display = "none";

	q.classList.add("q-div");

	q.appendChild(h3);
	q.appendChild(h4);
	q.appendChild(label1);
	q.appendChild(input1);
	q.appendChild(label2);
	q.appendChild(input2);
	q.appendChild(btn_login);
	q.appendChild(btn_register);
	q.appendChild(btn_back);

	btn_register.onclick = ()=>
	{
		cenario_cadastro();

		if(validate_cadastro)
		{
			if(input1.value !== "" && input2.value !== "")
			{
				localStorage.setItem(input1.value, input2.value);
				window.alert("Usuario cadastrado com sucesso!");
				cenarioInicial();
				return;
			}
			else
			{
				window.alert("Preencha todos os campos!");
			}
		}
		validate_cadastro = true;
	}
	
	btn_login.onclick = ()=>
	{
		cenario_login();
		if(validate_login)
		{
			let user = localStorage.getItem(input1.value);
			if(user === input2.value)
			{
				cenario_logado();
			}
			else
			{
				window.alert("Usuario ou senha incorretos");
				cenarioInicial();
				return;
			}
		}
		validate_login = true;
	}

	btn_back.onclick = ()=>
	{
		cenarioInicial();
	}

	//Cenários
	function cenarioInicial()
	{
		validate_cadastro = false;
		validate_login = false;
		h4.innerHTML = "Entre ou cadastre-se";
		btn_login.style.display = "block";
		btn_register.style.display = "block";
		label1.style.display = "none";
		label2.style.display = "none";
		input1.style.display = "none";
		input2.style.display = "none";
		input1.value = "";
		input2.value = "";
		btn_back.style.display = "none";
	}

	function cenario_cadastro()
	{
		h4.innerHTML = "Cadastre-se"
		btn_login.style.display = "none";
		label1.style.display = "block";
		label1.innerHTML = "Cadastrar login";
		label2.style.display = "block";
		label2.innerHTML = "Cadastrar senha";
		input1.style.display = "block";
		input2.style.display = "block";
		btn_back.style.display = "block";
	}

	function cenario_login()
	{
		h4.innerHTML = "Digite seu login e senha"
		btn_register.style.display = "none";
		label1.style.display = "block";
		label1.innerHTML = "Login";
		label2.style.display = "block";
		label2.innerHTML = "Senha";
		input1.style.display = "block";
		input2.style.display = "block";
		btn_back.style.display = "block";
		btn_back.innerHTML = "Voltar";
	}

	function cenario_logado()
	{
		validate_cadastro = false;
		validate_login = false;
		h4.innerHTML = "Usuario logado com sucesso!"
		label1.style.display = "none";
		label2.style.display = "none";
		input1.style.display = "none";
		input2.style.display = "none";
		btn_back.style.display = "block"
		btn_back.innerHTML = "Deslogar";
		btn_login.style.display = "none";
	}
	
}
quest_6();