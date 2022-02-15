const deleteBtns = document.querySelectorAll('.btn-outline-delete');

deleteBtns.forEach(button => {
    button.addEventListener("click", e =>{
        console.log(e.target)
        fetch(`/user/${e.target.dataset.orderid}`, {method:"DELETE"})
        .then(res=>{
            if (res.ok){location.reload()
            } else {
                alert("Failed to delete.")
            };
        });
    })
});

const  specialsInput = document.querySelector(".form-control");
const  specialsBtn = document.querySelector("#specialsBtn");

specialsBtn.addEventListener("click", )
