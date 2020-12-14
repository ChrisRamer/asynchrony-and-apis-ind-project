import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

async function ConvertCurrency(currency, amount) {
	let promise = new Promise(function(resolve, reject) {
		let request = new XMLHttpRequest();
		const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
		request.onload = function() {
			if (this.status === 200) {
				resolve(request.response);

				const body = JSON.parse(request.response);
				if (body.result === "error") {
					ShowError("API error: " + body["error-type"]);
				}
			} else {
				reject(request.response);
				ShowError("API connection error: " + this.status);
			}
		};
		request.open("GET", url,  true);
		request.send();
	});

	promise.then(function(response) {
		const body = JSON.parse(response);
		let output;

		switch(currency) {
			case "EUR":
				output = ("€" + (body.conversion_rates.EUR * amount).toFixed(2));
				ShowOutput(output, false);
				break;
			case "JPY":
				output = ("¥" + (body.conversion_rates.JPY * amount).toFixed(2));
				ShowOutput(output, false);
				break;
			case "GBP":
				output = ("£" + (body.conversion_rates.GBP * amount).toFixed(2));
				ShowOutput(output, false);
				break;
			case "AUD":
				output = ("$" + (body.conversion_rates.AUD * amount).toFixed(2));
				ShowOutput(output, false);
				break;
			case "CAD":
				output = ("$" + (body.conversion_rates.CAD * amount).toFixed(2));
				ShowOutput(output, false);
				break;
			case "CHF":
				output = ("$" + (body.conversion_rates.CHF * amount).toFixed(2));
				ShowOutput(output, false);
				break;
			// Zelda Easter egg (ZSR stands for zeldaspeedruns)
			case "ZSR":
				document.getElementById("rupee").src = "assets/img/green.png";
				output = "x" + (0.893 * amount).toFixed(2);
				ShowOutput(output, true);
				break;
		}
	});
}

function ShowOutput(text, easteregg) {
	$(".error").hide();
	
	if (easteregg) {
		$(".result").hide();
		$("#result2").text(text);
		$(".result2").show();
	}
	else {
		$(".result2").hide();
		$("#result").text(text);
		$(".result").show();
	}
}

function ShowError(text) {
	$(".result").hide();
	$(".result2").hide();
	$("#error").text(text);
	$(".error").show();
}

function UpdateOutputText() {
	const amountInput = $("#amount").val();
	const currencyInput = $("#currency").val();
	const currency = currencyInput.substring(currencyInput.length - 4, currencyInput.length - 1);
	if (amountInput > 0) {
		ConvertCurrency(currency, amountInput);
	}
	else {
		ShowError("Input error: USD amount must be greater than 0");
	}
}

$(document).ready(function () {
	$("form#currencyForm").submit(function (e) { 
		e.preventDefault();
		UpdateOutputText();
	});
});