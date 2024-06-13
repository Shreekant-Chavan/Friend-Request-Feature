var isstatus = document.querySelector("h5");
var addFriend = document.querySelector("#add");
// var removeFriend = document.querySelector("#remove");
var val = 0;

addFriend.addEventListener("click", () => {
    if (val == 0) {
        isstatus.innerText = "Friends!";
        isstatus.style.color = "green";
        addFriend.innerText = "Remove Friend";
        val = 1;
    } else {
        isstatus.innerText = "Stranger";
        isstatus.style.color = "red";
        addFriend.innerText = "Add Friend";
        val = 0;
    }
})

// removeFriend.addEventListener("click", () => {
//     isstatus.innerText = "Stranger";
//     isstatus.style.color = "red";
// })