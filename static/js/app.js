// from data.js
var tableData = data;

// YOUR CODE HERE!

 // add table to the website

var datas = tableData.forEach(item => {

  var bodies = d3.select('tbody');

  var trs = bodies.append('tr');

  trs.append('td').text(`${item.datetime}`);
  trs.append('td').text(`${item.city}`);
  trs.append('td').text(`${item.state}`);
  trs.append('td').text(`${item.country}`);
  trs.append('td').text(`${item.shape}`);
  trs.append('td').text(`${item.durationMinutes}`);
  trs.append('td').text(`${item.comments}`);

});

// Select the button

var button = d3.select("#filter-btn");

var dropp = d3.select('select');


// Begin function

// country filter as dropdown

dropp.on("change", function () {
  
  var Countrys = d3.select("#d3-dropdown").node().value;
  
// filter button
button.on("click",function() {
 
  // Select the inputs from the user

  var input = d3.select ("#datetime");
  var Sinput = d3.select("#state");
  var Cinput = d3.select("#city");
  var SHinput = d3.select("#shape");

  // Get the value from what the user entered

  var value = input.property('value');
  var Svalue = Sinput.property("value");
  var Cvalue = Cinput.property("value");
  var SHvalue = SHinput.property("value");

  console.log(value);
  
// Filter based on the user inputs
  // putting data to the table

  
    var filtered = tableData.filter(item => {

    return ((item.datetime === value || value === "") && (item.country === Countrys || Countrys === "-----")
     && (item.state === Svalue || Svalue === "") && (item.city === Cvalue || Cvalue === "") && 
     (item.shape === SHvalue || SHvalue === ""));

  });

  var table = d3.select('table');

  var body = table.select('tbody')
  
  body.html('');
  
  filtered.forEach(item => {
  
    var tr = body.append('tr');
    
    tr.append('td').text(`${item.datetime}`);
    tr.append('td').text(`${item.city}`);
    tr.append('td').text(`${item.state}`);
    tr.append('td').text(`${item.country}`);
    tr.append('td').text(`${item.shape}`);
    tr.append('td').text(`${item.durationMinutes}`);
    tr.append('td').text(`${item.comments}`);
  
    
  });



  

});


});



// grab distinct values for each variable

const country = tableData.map(item => item.country);
const distinctCountry = [...new Set(country)];


const state = tableData.map(item => item.state);
const distinctState = [...new Set(state)];


const city = tableData.map(item => item.city);
const distinctCity = [...new Set(city)];


const shape = tableData.map(item => item.shape);
const distinctShape = [...new Set(shape)];

console.log(distinctShape);



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// var dropp = d3.select('select');

// dropp.on("change", function () {

// var Countrys = d3.select("#d3-dropdown").node().value;

// console.log(Countrys);

// var filters = tableData.filter(item => {

//   return(item.country === Countrys);

// });


// putting data to the table

// var table = d3.select('table');

// var body = table.select('tbody')

// body.html('');

// filters.forEach(item => {

//   var tr = body.append('tr');
  
//   tr.append('td').text(`${item.datetime}`);
//   tr.append('td').text(`${item.city}`);
//   tr.append('td').text(`${item.state}`);
//   tr.append('td').text(`${item.country}`);
//   tr.append('td').text(`${item.shape}`);
//   tr.append('td').text(`${item.durationMinutes}`);
//   tr.append('td').text(`${item.comments}`);

  
// });

// });