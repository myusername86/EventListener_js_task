const companies = [
    ["Saab AB", "Stockholm", 1937],
    ["Volvo Group", "Göteborg", 1927],
    ["Sandvik AB", "Stockholm", 1862],
    ["Atlas Copco Group", "Nacka", 1873],
    ["Electrolux AB", "Stockholm", 1919],
    ["Skanska AB", "Stockholm", 1887],
];

function DisplayTable() {
    // Create table element
    var table = document.createElement('table');
    table.style.borderCollapse = 'collapse'; 
    table.style.width = '50%';


    var tbody = document.createElement('tbody');

    // Iterate over the array
    for (var i = 0; i < companies.length; i++) {
        
        var row = document.createElement('tr');
        
        
        for (var j = 0; j < companies[i].length; j++) {
            var cell = document.createElement('td');
            cell.textContent = companies[i][j];
            
            cell.style.border = '1px solid black'; 
            cell.style.padding = '8px'; 
            row.appendChild(cell);
        }
        
        // Append row to table body
        tbody.appendChild(row);
    }

    // Append table body to table
    table.appendChild(tbody);

    // Append table to container
    var tableContainer = document.getElementById('tableContainer');

    tableContainer.innerHTML = '';
    
    tableContainer.appendChild(table);
}

// Event listener for button click
document.getElementById('createTableButton').addEventListener('click', DisplayTable);