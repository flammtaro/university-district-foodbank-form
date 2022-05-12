
document.querySelector("#feedbackForm").addEventListener("submit",e=>{
    e.preventDefault();
    console.log("feed")
    fetch("/api/feedbacks",{
        method:"POST",
        body:JSON.stringify({
            feedback:document.querySelector("#feedbackTA").value
        }),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            alert("thank you for the feedback!")
        } else {
            alert("there was a problem submitting your feedback")
        }
        document.querySelector("#feedbackTA").value = ""
    })
})