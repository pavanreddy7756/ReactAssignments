function AssignmentImages() {

  
    var arrayOfImages=["image1.jfif","image2.jfif","image3.jfif","image4.jfif"]
    var image=arrayOfImages.map(i=><>
    
    <img  width="100"   src={ "./images/" +i} /><br/>
    </>)


return (
  <>
    {image}
  </>     
);
}

export default AssignmentImages;