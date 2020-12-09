import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

async function ConvertCurrency(currency) {
	new Promise(function(resolve, reject) {
		let request = new XMLHttpRequest();
		const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`;
		request.onload = function() {
			if (this.status === 200) {
				resolve(request.response);
				console.log("SUCCESS!");
			} else {
				reject(request.response);
				console.log("FAILURE :(");
			}
		}
		request.open("GET", url,  true);
		request.send();
	})
}

$(document).ready(function () {
	$("form#currencyForm").submit(function (e) { 
		e.preventDefault();
		const input = $("#currency").val();
		const currency = input.substring(input.length - 4, input.length - 1);
		ConvertCurrency(currency)
	});
});