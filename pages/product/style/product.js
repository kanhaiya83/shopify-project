//Collapsible below images[Shipping,Size Chart]
var collapsibleButtons = document.querySelectorAll(".collapsible button");
for (let i = 0; i < collapsibleButtons.length; i++) {
    const collapsibleButton = collapsibleButtons[i];
    
  collapsibleButton.addEventListener("click", function() {
      var arrowIcon=this.querySelector(".collapsible button img") //chevron-down svg

    var content = this.nextElementSibling;   //Collapsed content
    if (arrowIcon.classList.contains("collapsed")) {
        arrowIcon.style.transform="rotate(0deg)"
        arrowIcon.classList.remove("collapsed")

    }
    else{
        
        arrowIcon.style.transform="rotate(180deg)"
        arrowIcon.classList.add("collapsed")
    }
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
    
}

//Cart slideout

var cartBtn=document.querySelector(".cart-icon")
var cartContainer=document.querySelector(".cart-slideout-container")
var cartSlideout=document.querySelector(".cart-slideout")
cartCloseBtn=document.querySelector(".cart-close-btn")
cartBtn.addEventListener("click",()=>{

   
  cartContainer.style.height="100%"
  cartContainer.style.opacity="1"

  cartSlideout.style.transform="translateX(0%)"
})
cartCloseBtn.addEventListener("click",()=>{
  cartContainer.style.opacity="0"
  cartContainer.style.height="0"
  cartSlideout.style.transform="translateX(100%)"
})
//Search slider

var searchSliderContainer=document.querySelector(".search-slider")
var searchBtn=document.querySelector(".search-icon")
searchCloseBtn=document.querySelector(".search-close-btn")
searchBtn.addEventListener("click",()=>{
  searchSliderContainer.style.transform="translateY(0%)"
})
searchCloseBtn.addEventListener("click",()=>{
  searchSliderContainer.style.transform="translateY(-100%)"
})

  
  