const inputBox = document.querySelector("#input-box")
const listContainer = document.querySelector("#list-container")
const addBtn = document.querySelector("#add")

addBtn.addEventListener("click", () => {
    if (inputBox.value === '') {
        alert("You have to right something!")
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData();
})

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})
// to store the tasks and on refreshing it is not deleted and retains (saved)
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()