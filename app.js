const tableBody = document.querySelector("#table-body");

let flights = [
  {
    time: "08:11",
    destination: "OMAN",
    flight: "0X 263",
    gate: "A 01",
    remarks: "ON TIME"
  },
  {
    time: "12:39",
    destination: "LONDON",
    flight: "CL 263",
    gate: "C 01",
    remarks: "CANCELLED"
  },
  {
    time: "05:21",
    destination: "DUBAI",
    flight: "0X 201",
    gate: "A 02",
    remarks: "ON TIME"
  },
  {
    time: "14:01",
    destination: "TOKYO",
    flight: "TX 231",
    gate: "A 32",
    remarks: "ON TIME"
  },
  {
    time: "09:20",
    destination: "OSAKA",
    flight: "0X 265",
    gate: "A 22",
    remarks: "DELAYED"
  }
]

function populateTable() {
  flights.forEach(flight => {
    const tablerow = document.createElement("tr");
    for (const flightDetail in flight) {
      const tableCell = document.createElement("td");
      const word = Array.from(flight[flightDetail]);

      for (const [index, letter] of word.entries()) {
        const letterElement = document.createElement("div");

        setTimeout(() => {
          letterElement.classList.add("flip");
          letterElement.textContent = letter;
          tableCell.append(letterElement);
        }, 100 * index)
      }
      tablerow.append(tableCell);
    }
    tableBody.append(tablerow);
  })
}

populateTable();