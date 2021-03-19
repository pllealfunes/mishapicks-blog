"use strict"


//Logic to adding comments to blog 1st post


var commSection = document.getElementById("commSection");
var form = document.getElementById("commForm");
//var formInput = document.querySelectorAll("textarea");
const formButtons = document.querySelectorAll(".formBtn");
const comments = document.querySelectorAll(".comments");
var array = [];

/*$(document).ready(function () {
    var results = JSON.parse(localStorage.getItem("comment"));
    for (var i in results) {
        var para = document.createElement("P");
        para.innerText = results[i];
        comments.forEach(item => function (){
        item.appendChild(para).style.display="none";
        array.push(results[i]);
});
    }
});*/


const commButtons = document.querySelectorAll(".addComm");

commButtons.forEach( function (commBtn) {
    commBtn.addEventListener("click", function (){
        let commSection = commBtn.nextElementSibling;
        if(commSection.style.display !=="block"){
            commSection.style.display="block";
            
        } else{
            commSection.style.display="none";
        }
      });
    });


    
    /*function submitHandler() {
        let formInput = event.target.previousSibling;
        if (formInput.value!== " ") {
            var para = document.createElement("P");
            para.innerText = formInput.value;
            let comments = document.querySelectorAll("#commForm");
            comments.forEach( function (comment) { comment.nextElementSibling
            console.log(comment);
            comment.appendChild(para);
            array.push(formInput.value);
            localStorage.setItem("comment", JSON.stringify(array));
            formInput.value = " ";
        });
        }
   
    }*/

            //console.log(event.target.previousSibling.value);
        
        formButtons.forEach(item => item.addEventListener("click", function (){
            let formInput = item.previousElementSibling;
            if (formInput.value!== " ") {
                var para = document.createElement("P");
                para.innerText = formInput.value;
                let comments = item.parentNode.nextElementSibling;
                comments.appendChild(para);
                array.push(formInput.value);
                localStorage.setItem("comment", JSON.stringify(array));
                formInput.value = " ";
            }
        }));