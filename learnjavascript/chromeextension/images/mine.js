//document.getElementById("input-btn").innerText

//adding eventlisteners
let myLeads = []
const inputEl = document.getElementById("input-el")
let inputBtn= document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let listItems

inputBtn.addEventListener("click", function(){
    let inputValue = inputEl.value;
    myLeads.push(inputValue)

    //for (let i = 0; i < myLeads.length; i++){
        //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

        ///this is the same thing as the one that is above

        //const li= document.createElement("li")
        //li.textContent = myLeads[i]
        //ulEl.append(li)

        //or do this 

        //listItems += "<li>" + myLeads[i] + "</li>"

        //ulEl.innerHTML = listItems
        
    }
    
})



const li = document.createElement("li");
        li.textContent = myLeads[i];
        ulEl.appendChild(li);