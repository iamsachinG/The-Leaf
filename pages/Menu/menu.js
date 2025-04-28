function cartText(){
  let text = document.querySelectorAll(".cart_btn");
  text.forEach(change =>{
    if(change === event.target){
      change.innerText = "Done"
    }
  })
}