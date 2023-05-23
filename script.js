
for (let index = 0; index < document.querySelectorAll(".column").length ; index++) {
    document.querySelectorAll(".column")[index].addEventListener("click",function(){
        var buttonInnerHtml = this.innerHTML;
        makeSound( buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}  
document.addEventListener("keydown",function(e){
    makeSound(e.key);
    buttonAnimation(e.key);
   
});
function makeSound(choice){
    
    switch (choice) {         
        case "a":var audio= new Audio("sounds/crash.mp3");
                 audio.play();
                 break;
        case "b":var audio= new Audio("sounds/kick-bass.mp3");
                 audio.play();
                 break;
        case "c":var audio= new Audio("sounds/snare.mp3");
                 audio.play();
                 break;
        case "d":var audio= new Audio("sounds/tom-1.mp3");
                 audio.play();
                 break;
         case "e":var audio= new Audio("sounds/tom-2.mp3");
                  audio.play();
                  break;
        case "f":var audio= new Audio("sounds/tom-3.mp3");
                 audio.play();
                 break;
        case "g":var audio= new Audio("sounds/tom-4.mp3");
                 audio.play();
                 break;

}
}
function buttonAnimation(key){
   var activation = document.querySelector("."+key);
   activation.classList.add("pressed");
   setTimeout(function(){
    activation.classList.remove("pressed");
   },150);

}

