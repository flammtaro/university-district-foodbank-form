const deleteBtn = document.querySelector('#deleteBtn')

const deleteOrder = async function (event) {
    event.preventDefault();
    console.log("you've been deleted")
};

deleteBtn.addEventListener("click", deleteOrder);