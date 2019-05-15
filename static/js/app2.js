// from data.js
var tableData = data;

//  d3 selectors
var button = d3.select("#filter-btn");
var dateText = d3.select("#datetime");
var cityText =d3.select("#cityname");
var stateText =d3.select("#statename");

var tbody = d3.select("tbody");

// add data to html table
function updateTable(dataset) {
    dataset.forEach(function(sight) {
        // console.log(sighting);
        var row = tbody.append('tr');
        Object.entries(sight).forEach(function([key,value]) {
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
}


// // filter data by date
// function dateFilter(dataset) {
//     var newText = dateText.property("value");
//     var filteredDateData = dataset.filter(sighting => sighting.datetime === newText); 
//     return filteredDateData;
//     // console.log('date filtered');
// }

// function cityFilter(dataset) {
//     var new1Text = cityText.property("value");
//     var filteredCityData = dataset.filter(sighting => sighting.city === new1Text); 
//     console.log('city filtered');
//     return filteredCityData;
// }
//  trying multiple filters..
function filterFilter(dataset) {
    var newDateText = dateText.property("value");
    var newCityText = cityText.property("value");
    var filteredData = '';

    if (newDateText == true && newCityText == false) {
        filteredData = dataset.filter(sighting => sighting.datetime === newDateText);   
        // console.log(filteredData);
        
    }
    // console.log(filteredData);

    else if (newDateText == true && newCityText == true) {
        filteredData = dataset.filter(sighting => sighting.datetime === newDateText).filter(sightin => sightin.city === newCityText);   
        
    }
    return filteredData
    // var filteredData = dataset.filter(sighting => sighting.datetime === newDateText).filter(sightin => sightin.city === newCityText); 
    // return filteredData;
    // var new1Text = cityText.property("value");
    // var filteredCityData2 = filteredDateData.filter(sightin => sightin.city === new1Text); 
    
    // console.log('date filtered');
}


updateTable(tableData);

// display new table on click

button.on("click", function() {
    d3.event.preventDefault();
    
    tbody.html('');
    var fData = filterFilter(tableData);
    console.log(fData);
    updateTable(fData);
 
    console.log('updated date')
    
});

// button.on("click", function() {
//     d3.event.preventDefault();
    
//     tbody.html('');
//     var cityData = cityFilter(tableData);
  
//     updateTable(cityData);
//     console.log('updated city')
    
// });