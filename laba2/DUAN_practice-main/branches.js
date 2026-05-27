import { polarExpressData } from "./mock_data.js";
import { createTitle } from "./helper.js";

const branches = polarExpressData.branches;

const main = document.querySelector("main");

const title = createTitle("Our Branches");
main.appendChild(title);


const table = document.createElement("table");
table.classList.add("branches-table");

const headerRow = document.createElement("tr");

const headers = [
    "City",
    "Country",
    "Adress",
    "Phone",
    "Email"
];

headers.forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
});

table.appendChild(headerRow);


branches.forEach(branch => {

    const row = document.createElement("tr");

    const city = document.createElement("td");
    city.textContent = branch.city;

    const country = document.createElement("td");
    country.textContent = branch.country;

    const adress = document.createElement("td");
    adress.textContent = branch.adress;

    const phone = document.createElement("td");
    phone.textContent = branch.phone;

    const email = document.createElement("td");
    email.textContent = branch.email;

    row.append(city, country, adress, phone, email);

    table.appendChild(row);

});

main.appendChild(table);