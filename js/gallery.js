
  function imageGallery(){
	//target the gallery-highlight class for the main image or the figure in html document and each image in the ul list 
	const highlight=document.querySelector(".gallery-highlight");
	const previews=document.querySelectorAll(".flower-preview img");
	//create a for each to loop through the list images
	previews.forEach(preview=>{
		//add event listner 
    preview.addEventListener('click',function(){
		//here is the magic we have a small image source link so when we click the thumbnail it will replace the small word link with large  and then that large image 
		//link will be diaplayed in figure as highlight is the variable we have targeted  the class of main image or big image 
		
	const smallSrc=this.src;
	const largesrc=smallSrc.replace("small","large");
	highlight.src=largesrc;
	
	
	
})
	});
  }
  //call the function
  imageGallery();

  