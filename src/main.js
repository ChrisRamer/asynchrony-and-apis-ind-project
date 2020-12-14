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
		let output = "USD -> " + currency + " = ";

		switch(currency) {
			case "EUR":
				output += ("€" + (body.conversion_rates.EUR * amount).toFixed(2));
				break;
			case "JPY":
				output += ("¥" + (body.conversion_rates.JPY * amount).toFixed(2));
				break;
			case "GBP":
				output += ("£" + (body.conversion_rates.GBP * amount).toFixed(2));
				break;
			case "AUD":
				output += ("$" + (body.conversion_rates.AUD * amount).toFixed(2));
				break;
			case "CAD":
				output += ("$" + (body.conversion_rates.CAD * amount).toFixed(2));
				break;
			case "CHF":
				output += ("$" + (body.conversion_rates.CHF * amount).toFixed(2));
				break;
		}

		$(".error").hide();
		$("#result").text(output);
		$(".result").show();
	});
}

function ShowError(text) {
	$(".result").hide();
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