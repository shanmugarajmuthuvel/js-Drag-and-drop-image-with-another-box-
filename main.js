var container=document.querySelectorAll(".container")
var body=document.querySelector(".body")
var boxes=document.querySelectorAll(".box")
var imag=document.querySelector(".imag")
boxes.forEach(function(box){
	    box.addEventListener("dragover",mani)
		     function mani(e){
			e.preventDefault()
			box.classList.add("hover")
			
		}
		box.addEventListener("dragleave",sha)
		   function sha(){
			   box.classList.remove("hover")
		   }
		   box.addEventListener("drop",poor)
		   function poor(){
			   box.appendChild(imag)
		   }
})