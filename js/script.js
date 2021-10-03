//read more buttons//
let noOfCharac = 300;
let contents = document.querySelectorAll(".text1");
contents.forEach(text1 => {
        if(text1.textContent.length < noOfCharac){
        text1.nextElementSibling.style.display = "none";
    }
    else{
        let displayText = text1.textContent.slice(0,noOfCharac);
        let moreText = text1.textContent.slice(noOfCharac);
        text1.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
    }
});

function readMore(btn){
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}

//From submission
var form=document.getElementById("ContactForm")

var event1=form.addEventListener("submit",function(event){
    event.preventDefault()

    var Fname =document.getElementById("exampleInputName").value
    console.log(Fname)

    var email =document.getElementById("exampleInputEmail1").value
    console.log(email)

    var subject =document.getElementById("subject1").value
    console.log(subject)
    
    var message =document.getElementById("message1").value
    console.log(message)
       
})
//validation
function eventhandler(){
    var fname1=document.getElementById("exampleInputName").value
    var email1=document.getElementById("exampleInputEmail1").value
    var subject2=document.getElementById("subject1").value
    var message2=document.getElementById("message1").value

    if (fname1=="" || email1=="" || subject2=="" || message2==""){
        swal({
            title:"Insufficient Information",
            text:"Please fill all the information",
            icon:"warning",
            button:"Try again",

        });
    }else{
        swal({
            title:"Submitted Successfully",
            icon:"success",
            button:"ok",

        });
    }
}


