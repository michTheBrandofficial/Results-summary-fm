// get the json file
// get an array of elements with the same className props 
// while iterating over the elements you got, interpolate the json object values into the img tags that which will be children of each of the elements.

const colors = [
  'hsl(0, 100%, 67% ',
  'hsl(39, 100%, 56% ',
  'hsl(166, 100%, 37% ',
  'hsl(234, 85%, 45% '
]
const summaries = document.querySelectorAll('article');

fetch('../data.json').then(data => {
  return data.json();
}).then(data => {
  
  summaries.forEach((summary, index) => {

    summary.style.backgroundColor = colors[index] + ', .1)';
    summary.innerHTML = /*html*/`
      <div class="mood" >
        <img src=${ data[index].icon } alt="" />
        <p style=" color: ${ colors[index] + ')' }; " >${ data[index].category }</p>
      </div>
      <div class="score">
        <p>${ data[index].score }</p>
        <p>/100</p>
      </div>
    `
  
  })

}).catch(err => {
  throw err;
});

