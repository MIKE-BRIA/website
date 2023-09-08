
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
    let inputValue = inputEl.value;
    if (inputValue.trim() !== "") {
        myLeads.push(inputValue);
        inputEl.value = ""; // Clear the input field after adding an item

        renderLeads(); // Update the list on the page
    }
});

function renderLeads() {
    let listItems = ""; // Clear the list before re-rendering

    for (let i = 0; i < myLeads.length; i++) {

        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>" + myLeads[i] + "</a>
        </li>
        `
        
        //ulEl.innerHTML += `<li><a target='_blank' href='${myLeads[i]}'>" + myLeads[i] + "</a></li>`
        //console.log(ulEl.innerHTML)
        //const li = document.createElement("li");
        //li.textContent = myLeads[i];
        //ulEl.appendChild(li);
    }
    ulEl.innerHTML = listItems
}

// Optional: Render the leads when the page loads if you have stored leads in localStorage
// You can add this code outside the event listener
// renderLeads();




