# *Asynchrony & APIs*

#### *Asynchrony & APIs, 12/14/2020*

#### By **Chris Ramer**

## Description

A program that converts inputted USD amount to some of the most popular currencies.

## Setup/Installation Requirements

You must have Node package manager (npm) installed to run this app.

Clone this repo to your desktop.

Open the folder named *"asyncrhony-and-apis-ind-project"*.

Open the folder in Visual Studio Code or an alternate IDE.

Go to https://app.exchangerate-api.com/ and make an account. In your dashboard, copy the API Key, which is a string of random characters.

Create a new file in the project named `.env` and in this folder, type "`API_KEY = `" followed by your API key.

Open the terminal (view -> terminal) and with node, enter `npm install`  in the terminal to install the required packages for the app to run.

Then enter `npm start` to start the app. This will open the app in your browser.

## Specs

* **Spec:** Takes a user's inputted currency as USD and converts it to EUR.
* **Input:** $1200
* **Output:** €989.52
* **Spec:** Takes a user's inputted currency as USD and converts it to JPY.
* **Input:** $1200
* **Output:** ¥124894.08
* **Spec:** Takes a user's inputted currency as USD and converts it to GBP.
* **Input:** $1200
* **Output:** £904.44
* **Spec:** Takes a user's inputted currency as USD and converts it to AUD.
* **Input:** $1200
* **Output:** $1590.12
* **Spec:** Takes a user's inputted currency as USD and converts it to CAD.
* **Input:** $1200
* **Output:** $1531.08
* **Spec:** Takes a user's inputted currency as USD and converts it to CHF.
* **Input:** $1200
* **Output:** $1067.40

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

### License

Copyright (c) 2020 **Chris Ramer**
This software is licensed under the MIT license.