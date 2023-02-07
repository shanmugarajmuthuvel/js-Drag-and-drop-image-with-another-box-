var container=document.querySelectorAll(".container")
var body=document.querySelector(".body")
var boxes=document.querySelectorAll(".box")
var imag=document.querySelector(".imag")
boxes.forEach(function(box){
	    box.addEventListener("dragover",drag)
		     function drag(event){
			event.preventDefault()
			box.classList.toggle("hover")
			
		}
		box.addEventListener("dragleave",leave)
		   function leave(){
			   box.classList.remove("hover")
		   }
		   box.addEventListener("drop",drop)
		   function drop(){
			   box.appendChild(imag)
		   }
})
