var btn = document.querySelector("button");
var h4 = document.querySelector("h4");
var check =0;

btn.addEventListener("click", function(){
    if (check==0) {

        btn.innerHTML="Remove"
        btn.style.backgroundColor="red"
        h4.innerHTML="Accepted!!";
        h4.style.color="green";
        check=1;
    }else{
        btn.innerHTML="Accept Request"
        btn.style.backgroundColor="green"

        h4.innerHTML="STRANGER";
        h4.style.color="red";
        check=0;
    }
    
    
})