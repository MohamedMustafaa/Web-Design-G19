let users = []
function numberOfUsers() {
    usersNumber = prompt("enter number of user")
    for (var i = 1; i <= usersNumber; i++) {
        addUser()
    }
}
numberOfUsers()

function addUser() {
    let user={
        id : prompt("enter your id"),
        balance :  prompt("enter your balance"),
        name : prompt("enter your name")
    }
    users.push(user)
    console.table(users)
}

function deleteUserById(){
    let id= prompt("enter deleted id")
    let findIndex = users.findIndex(item => item.id==id)
    users.splice(findIndex,1)
}
deleteUserById()
console.table(users)

function updateBalanceById(){
    let id= prompt("enter updated id")
    let findIndex = users.findIndex(item => item.id==id)
    let user = {
        id: id,
        balance:  prompt("enter new balance"),
        name: users[findIndex].name
    }
    users.splice(findIndex,1,user)
}
updateBalanceById()
console.table(users)