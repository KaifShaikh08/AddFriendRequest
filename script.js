let Istatus = document.querySelector("h5")
let addFriend = document.querySelector("#add")

let check = 0

addFriend.addEventListener("click",() => {
    if(check === 0){
        Istatus.innerHTML = "Friend"
        Istatus.style.color = "green"
        addFriend.innerHTML = "Remove Friend"
        addFriend.style.backgroundColor = "red"
        
        check = 1
        console.log("working")
    }
    else{
        Istatus.innerHTML = "Stranger"
        Istatus.style.color = "red"
        addFriend.innerHTML = "Add Friend"
        addFriend.style.backgroundColor = "cornflowerblue"
        check = 0
    }
})
