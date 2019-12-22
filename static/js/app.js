//import data from data.js
const tableData = data;

//Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    //Clear existing data
    tbody.html("");

    //Loop through each object & append row + cells for each value in row
    data.forEach((dataRow) => {
        //Append row to table body
        let row = tbody.append("tr");

        //Loop through each field in data row & add value as table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}
