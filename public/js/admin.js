

const deleteBtns = document.querySelectorAll(".btn-outline-delete");

deleteBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target);
    fetch(`/user/${e.target.dataset.orderid}`, { method: "DELETE" }).then(
      (res) => {
        if (res.ok) {
          location.reload();
        } else {
          alert("Failed to delete.");
        }
      }
    );
  });
});

const printBtns = document.querySelectorAll(".print-button");
const orderCards = document.querySelectorAll(".order-card");
printBtns.forEach(btn=>{
  btn.addEventListener("click",e=>{
    const card = e.target.parentElement.parentElement;
    orderCards.forEach(oc=>{
      oc.classList.remove("print-selected")
    })
    card.classList.add("print-selected")
    window.print()
  })
})

// const specialsInput = document.querySelector(".form-control");
// const specialsBtn = document.querySelector("#specialsBtn");



// specialsBtn.addEventListener("click", (es) => {
//   console.log(specialsInput.value);
//   es.preventDefault();
//   let input = { specialInput: specialsInput.value };
//   fetch("/api/specials", {
//     method: "POST",
//     body: JSON.stringify(input),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((res) => {
   
//     if (res.ok) {
//       location.reload();
//     } else {
//       console.log("Failed to delete.");
//     }
//   });
// });
