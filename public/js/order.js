const submitBtn = document.querySelector('#submit-btn')

const orderFormSubmit = async function (event) {
    event.preventDefault();

    const wantedItems = document.querySelectorAll('input[type="checkbox"]:checked')
    const preferences = document.querySelectorAll('.form-control')


    // document.querySelectorAll('.form-control').forEach(element => {
    //       if(element.value) {
    //           console.log(`${element.id}: ${element.value}`)
    //   }})

    // }
    console.log("THIS IS WORKING")
    const bodyObj = {}
    wantedItems.forEach(element => {
        bodyObj[element.id] = true
    })
    preferences.forEach(element => {
        if (element.value) {
            bodyObj[element.id] = element.value
        }
    })

    const response = await fetch('/api/order/', {
        method: 'POST',
        body: JSON.stringify( bodyObj ),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/login');
    } else {
        alert('Failed to send Order');
    }
};

submitBtn.addEventListener("click", orderFormSubmit);