const app= document.querySelector(".app-sub-menu");
const user= document.querySelector(".user-sub-menu");

function myFunction(x) {
  x.classList.toggle("change");
  var y= document.querySelector(".navbar-navigation");
  y.classList.toggle("show")
}

document.addEventListener("click",function(event){
//For app select
  if (event.target.closest(".top-app")){
    app.classList.add("click");
   }else{
     app.classList.remove("click");
   }
//For user icon select
   if (event.target.closest(".top-user-icon")){
    user.classList.add("click");
   }else{
     user.classList.remove("click");
   }
})


moveVersion.onchange= function(){
  var changeVersion= this.options[this.selectedIndex];
  if(changeVersion.value !="nothing"){
    window.open(changeVersion.value, "_self", "");
    }
}
const language= document.querySelector("#moveLanguage");
  language.onchange= function(){
    var changeLocation= this.options[this.selectedIndex];
    if(changeLocation.value !="nothing"){
      window.open(changeLocation.value, "_self", "");
    }
  }
