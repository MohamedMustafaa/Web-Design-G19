let form = document.getElementById("my-form");
let users= []
let table = document.getElementById("myTable");

function addUser(clientName, clientId, clientBalance){
    let user = {
        name : clientName,
        id : clientId,
        balance : clientBalance
    }
    users.push(user)
    console.table(users)
}
function editUserBalance(i){
    let newBalance = prompt("Enter new balance")
    users[i].balance = newBalance
    showUser()
    console.table(users)
}
function removeUser(index){
    users.splice(index , 1)
    showUser()
}
function showUser() {
    table.innerHTML = ""
    users.forEach((item, i, arr)=>{
        var table= document.getElementById('myTable')
        var row= document.createElement("tr")
        let Name= document.createElement("td")
        Name.innerText = item.name
        let Id= document.createElement("td")
        Id.innerText = item.id
        let Balance= document.createElement("td")
        Balance.innerText = item.balance
        let action= document.createElement("td")
        let buttonEdit= document.createElement("button")
        buttonEdit.innerText = "Edit User"
        let buttonRemove= document.createElement("button")
        buttonRemove.innerText = "Remove User"
        buttonEdit.classList.add("btn" , "btn-success" , "me-3")
        buttonRemove.classList.add("btn" , "btn-success")
        table.appendChild(row)
        row.appendChild(Name)
        row.appendChild(Id)
        row.appendChild(Balance)
        row.appendChild(action)
        action.appendChild(buttonEdit)
        action.appendChild(buttonRemove)
        buttonEdit.addEventListener('click',function(){
            editUserBalance(i)
        })
        buttonRemove.addEventListener('click',function(){
            removeUser(i)
        })
    })
}

form.addEventListener("submit", function(e){
    e.preventDefault()
    // console.log(e.target.elements.clientName.value)
    // console.log(e.target.elements.clientId.value)
    // console.log(e.target.elements.clientBalance.value)
    addUser(e.target.elements.clientName.value, e.target.elements.clientId.value, e.target.elements.clientBalance.value)
    showUser()
})
