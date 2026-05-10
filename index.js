var numberofdrumbuttons = document.querySelectorALL(".drum").length;
for(var i = 0; i < numberoofdrumbuttons; i++){
    document.querySelectorALL(".drum")[i].addEventListener("click",function() {
        alert("i got click");
    });
}

