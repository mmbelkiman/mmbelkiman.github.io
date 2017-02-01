function putZerosLeft(input, maxSizeInput) {
	while (input.length < maxSizeInput) {
		input = "0" + input.toString();
	}
	return input;
}

function controlInputNumber(campoData, tecla, valorMinimo, valorMaximo, habilitarSetas) {

	var setToNegative = false;

	if (valorMinimo.trim() == "")
		valorMinimo = undefined;

	if (valorMaximo.trim() == "")
		valorMaximo = undefined;

	if (campoData.value == "-")
		setToNegative = true;

	var data = (campoData.value);
	campoData.value = data;

	//Tratamento para teclado numerico
	var valorAux = parseInt(tecla.keyCode);
	if (valorAux >= 96)
		valorAux = valorAux - 48;

	var valor = String.fromCharCode(valorAux);

	//Prevensao de valores nulos ou vazios
	if (isNaN(data)) {
		data = 0;
		if (valorMinimo != undefined)
			campoData.value = valorMinimo;
		else
			campoData.value = data;

		data = parseFloat(campoData.value);
	}

	//Controle por setas
	if (habilitarSetas != undefined && habilitarSetas == true) {
		if (tecla.keyCode == 38) {
			if (valorMaximo != undefined) {
				if ((data + 1) <= valorMaximo)
					campoData.value = data + 1;
			} else {
				campoData.value = data + 1;
			}
		}
		if (tecla.keyCode == 40) {
			if (valorMinimo != undefined) {
				if ((data - 1) >= valorMinimo)
					campoData.value = data - 1;
			} else {
				campoData.value = data - 1;
			}
		}
	}

	//Deixar o valor negativo
	if (tecla.keyCode == 109 || tecla.keyCode == 173) {
		if (campoData.value == 0) {
			campoData.value = "-";
		} else if (campoData.value != "-") {
			campoData.value = campoData.value * -1;
		}

		return false;
	}

	//Permitir valores float
	if (tecla.keyCode == 188 || tecla.keyCode == 190 || tecla.keyCode == 110) {
		//transforma virgula em ponto
		if (tecla.keyCode == 188) {
			campoData.value = campoData.value + ".";
			return false;
		}
		return true;
	}

	//Libera somente numeros
	if ((tecla.keyCode > 47 && tecla.keyCode < 58) || (tecla.keyCode >= 96 && tecla.keyCode <= 105)) {
		var mReturn = false;

		if (valorMinimo != undefined) {
			if ((data) < valorMinimo) {
				campoData.value = valorMinimo;
				mReturn = false;
			} else {
				mReturn = true;
			}
		} else {
			mReturn = true;
		}

		if (valorMaximo != undefined) {
			if ((data) > valorMaximo) {
				campoData.value = valorMaximo;
				mReturn = false;
			} else {
				mReturn = true;
			}
		} else {
			mReturn = true;
		}

		//Prevendo valores iniciados em 0, como 02 ou 007
		if (campoData.value.length > 0) {
			if (campoData.value.substring(0, 1) == "0") {
				campoData.value = "";
				if (setToNegative)
					campoData.value = "-";
			}
		}

		return mReturn;

	} else {
		if (tecla.keyCode == 8 || tecla.keyCode == 13 || tecla.keyCode == 46 || tecla.keyCode == 9 || tecla.keyCode == 37 || tecla.keyCode == 38 || tecla.keyCode == 39 || tecla.keyCode == 40) {
			return true;
		} else
			return false;
	}
}