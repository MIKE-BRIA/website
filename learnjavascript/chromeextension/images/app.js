//document.getElementById("input-btn").innerText

//adding eventlisteners
let myLeads = ["www.bimax.com","www.ghost.com","www.woland.com"]
const inputEl = document.getElementById("input-el")
let inputBtn= document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function(){
    let inputValue = inputEl.value;
    myLeads.push(inputValue)

    for (let i = 0; i < myLeads.length; i++){
        ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    }
    
})