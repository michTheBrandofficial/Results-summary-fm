# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview 

### The challenge

Users should be able to: 

- View the optimal layout for the interface depending on their device's screen size 
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop version](./screenshots/lavender%20effect%20result%20summary.png)
![Mobile version](./screenshots/mobile%20verson.png)

### Links 

- Solution URL: [Git repository for the project](https://github.com/michTheBrandofficial/Results-summary-fm.git)
- Live Site URL: [result-summary-fm](https://result-summary-fm.web.app)

## My process 

### Built with 

- Bare bones semantic HMTL5, CSS3 , JS and a little bit of JSON.
- VS Code.
- Love for frontend development.

### What I learned

- I learnt how to fetch json data with the promise-based fetch api in javascript.
The fetch api is just a regular javascript function which takes two arguments. The first being the URL to the file and the second being the request initializer. It can be used to fetch data from a remote server and do some things to the data. The syntax is like so.
```typescript
  fetch('../data.json').then(data => {
    return data.json()
  }).then(newData => {
    document.querySelector('p').textContent = newData.name; 
  })
```

In the above code snippet, we used the fetch function to fetch a specific json file, then in the '.then' method we pass a callback to handle the data. 

Here, we just returned the data in json format in the first '.then' and changed the textContent property of an HTML paragragh element with the name property of the newData. 

You can chain as many '.then' methods as you want. to manipulate the data that comes in. To further your learning of the fetch api, scroll down to [Useful resources](#useful-resources) 👇. 

### Useful resources 

[The fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
[CSS z-index property](https://css-tricks.com/almanac/properties/z/z-index/)

### Continued development
- I will wrap the fetch function in an async function and use the popular async/await method for handling the json data.

### Author

- Frontend Mentor - [michTheBrandofficial](https://frontendmentor.io/profile/michTheBrandofficial)
- DEV.to - [michthebrandofficial](https://dev.to/michthebrandofficial)
- Github - [michTheBrandofficial](https://github.com/michTheBrandofficial)

### Acknowledgments 

I want to say a big thanks to [Frontend Mentor](https://www.frontendmentor.io) for providing this challenge.
It has really brought back my motivation to code confidently. Thanks, again.