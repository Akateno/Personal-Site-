import { Item } from 'semantic-ui-react'
import john1 from '../photos/john1.png'
import john2 from '../photos/john2.png'
import john3 from '../photos/john3.png'
import john4 from '../photos/john4.png'
import john5 from '../photos/john5.png'
import john6 from '../photos/john6.png'
import React, { useState } from 'react';


function JohnWebsite(){
    
    const [pic, setpic] = useState(john6);
    
   



    function changePicture(e){
        console.log(e.target.src);
        let newpic=e.target.src
        setpic(newpic)

        
        console.log(pic)
    }
   
   


    return(
        <div>
            <h1 className="projectTitle">Johns Brewery Shop</h1>
            
            
            
            
                <div className="aboutContainer">
                <h4 className="underline"><a href="https://github.com/Akateno/JohnsWebsite">GitHub Repo</a></h4>
                <h5>About:</h5>
                <p>A hobby of mine is brewing and I noticed the website of my favorite vendor was a very basic website, I asked if I could redesign their website for free
                    and this is the redesign I ended up on. This project used React.js along with bootstrap for a more modern look. I chose bootstrap in order to fortify my knowledge in it and push my current set of skills.  
                </p>
                <p>The website was made using React and SemanticUI in order to have a more modern look. A JSON file was used to store some inventory information in order to facilitate mapping over the data to create components. 
                    Google maps API was used to in order to show the location of the business to users. Users can shop and also open PDF files that contain recipes for different types of brews. 
                </p>

                </div>
                
            
                
           
           

    
             <div >
            <img src={pic} className="largeView"alt="john"/>
            </div> 


            <div className="johnWebsiteImagesContainer">
                <div className="clickImages">
                         <div class="ui hidden divider"></div>
                        <div class="ui small images">
                            <img onClick={changePicture} src={john1} alt="john1" class="ui image"/>
                            <img onClick={changePicture} src={john5} alt="john5" class="ui image"/>
                            <img onClick={changePicture} src={john4} alt="john4" class="ui image"/>
                            <img onClick={changePicture} src={john3} alt="john3" class="ui image"/>
                            <img onClick={changePicture} src={john2} alt="john2" class="ui image"/>
                            <img onClick={changePicture} src={john6} alt="john6" class="ui image"/>
                        </div>
                </div>
                
            </div>







            
            
                
               





            

        </div>
    )
}
export default JohnWebsite; 