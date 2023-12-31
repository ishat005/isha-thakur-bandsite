const shows = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA", 
    },

    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA",     
    },

    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA",     
    },

    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
    },

    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA",
    },

    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA",    
    }
];

function createTableFromObjects(data) {
    const table = document.createElement('table');
    const tableRow = document.createElement('tr');
    
    // header row of table
    const keys = Object.keys(data[0]);
    for (const key of keys) {
        const tableHeading = document.createElement('th');
        tableHeading.textContent = key;
        tableRow.appendChild(tableHeading); 
    }
    table.appendChild(tableRow);

    // data rows of table
    for (const obj of data) {
        const dataRow = document.createElement('tr');
        
        for (const key of keys) {
            const dataCell = document.createElement('td');
            dataCell.textContent = obj[key];
            dataRow.appendChild(dataCell);
        }

        const myButtons = document.createElement("button");
        myButtons.innerHTML = "BUY TICKETS";
        dataRow.appendChild(myButtons);
        
        table.appendChild(dataRow);
    }

    return table;
}

const table = createTableFromObjects(shows);
const tableContainer = document.querySelector('.tables');
tableContainer.appendChild(table);



