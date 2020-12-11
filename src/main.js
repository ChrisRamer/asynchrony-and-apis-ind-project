import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

async function ConvertCurrency(currency) {
	let promise = new Promise(function(resolve, reject) {
		let request = new XMLHttpRequest();
		const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
		request.onload = function() {
			if (this.status === 200) {
				resolve(request.response);
			} else {
				reject(request.response);
				$(".result").hide();
				$("#error").text(this.status);
				$(".error").show();
			}
		}
		request.open("GET", url,  true);
		request.send();
	});

	promise.then(function(response) {
		const body = JSON.parse(response);
		const outputStart = "USD -> " + currency + " = ";

		switch(currency) {
			case "EUR":
				$("#result").text(outputStart + "€" + body.conversion_rates.EUR);
				break;
			case "JPY":
				$("#result").text(outputStart + "¥" + body.conversion_rates.JPY);
				break;
			case "GBP":
				$("#result").text(outputStart + "£" + body.conversion_rates.GBP);
				break;
			case "AUD":
				$("#result").text(outputStart + "$" + body.conversion_rates.AUD);
				break;
			case "CAD":
				$("#result").text(outputStart + "$" + body.conversion_rates.CAD);
				break;
			case "CHF":
				$("#result").text(outputStart + "$" + body.conversion_rates.CHF);
				break;
		}

		$(".result").show();
	});
}

function UpdateOutputText() {
	const input = $("#currency").val();
	const currency = input.substring(input.length - 4, input.length - 1);
	ConvertCurrency(currency);
}

$(document).ready(function () {
	$("form#currencyForm").submit(function (e) { 
		e.preventDefault();
		UpdateOutputText();
	});
});