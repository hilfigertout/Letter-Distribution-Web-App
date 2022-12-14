# Letter Distribution REACT App

This project creates a simple web app using [REACT](https://reactjs.org/) with [Material UI](https://mui.com/core/) to count letters in a string. In this web app, a user enters a string in a text field in a first page, and then the app calculates the distribution of letters in the string. Punctuation and whitespace are not counted. The totals are then displayed in a table, alongside the expected distribution of letters (based on the frequency of each letter in the English language) and the percent difference. 

## Contents

 - **README.md**

 - **LICENSE**: this project is under the MIT license. See inside for more info. 

 - **src**: this folder contains the source code for this application. In particular, most of the code I wrote is in the **App.js**, **InputForm.js**, **DisplayLetters.js**, **PageHeader.js**, and **index.css** files. 

 - **public**: This folder comes with every REACT app. It contains the HTML file (without any Javascript) sent to the client, as well as a **robots.txt** file for the bots that comb the web. 

 - **package.json** and **package-lock.json**: files used by npm to install required libraries.

 - **.gitignore**: if you're on GitHub and don't know what this is, go look it up. Like, today.

## Usage

As of 25 August 2022, this app has been deployed via GitHub Pages to https://hilfigertout.github.io/Letter-Distribution-Web-App/. Follow the URL to see the page and test the letter distributions in strings.  

### Running the App Locally

If you wish to run this locally as a REACT app, you will need [NodeJS](https://nodejs.org/en/download/) installed, which should come with the Node Package Manager (npm). With a terminal open in the top level directory for this app, first install the required packages with the following command:

```
npm install
```

From there, run the following command to start the server on localhost: 

```
npm start
```

A new browser tab should open on your computer automatically, but if not, the terminal output should list some URLs to type into your browser to connect to the web app.

## Personal Note

This project was my way of flexing my REACT skills after going through a few tutorials online. (I recommend the 2021 series by [The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d), though as is typical of front-end development, his section on REACT's router library is already somewhat outdated.) This project was also a way for me to dip my toes into the Material UI library, as I will be likely be using it in an upcoming job. I don't expect this app itself to have much practical use, but it's nice to have in my portfolio. 


#### Copyright (C) 2022 Ian Roberts
