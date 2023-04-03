import pet1 from '../photos/pet1.png'
import pet2 from '../photos/pet2.png'
import pet3 from '../photos/pet3.png'
import React, { useState } from 'react';


function AnimalShelter(){

    const [pic, setpic] = useState(pet2);
    
   



    function changePicture(e){
        console.log(e.target.src);
        let newpic=e.target.src
        setpic(newpic)

        
        console.log(pic)
    }
   

    return(
        <div>
            <div className="projectTitle">
                <h1 className="projectTitle">PetMatcher-Adoption App</h1>
               
            </div>
               
 <h4><a href="https://github.com/Akateno/Phase-3-Project-Front-end-">GitHub Repo</a></h4>
            <h5>About:</h5>
            <div className="aboutContainer">
                
                <p>The front end for this app was made using React and SemanticUI in order to have a more modern look. The backend was made with Ruby on Rails, the ruby gem B-crypt in order to utilize user authorization and password encryption. The database used for this project was PostgreSQL.</p>
                <p>A hobby of mine is brewing and I noticed the website of my favorite vendor was a very basic website, I asked if I could redesign their website for free
                    and this is the redesign I ended up on. This project used React.js along with bootstrap for a more modern look. 
                </p>
            </div>
    
             <div >
            <img src={pic} className="largeView"alt="john"/>
            </div> 


            <div className="shelterImagesContainer">
                <div className="shelterImages">
                         <div class="ui hidden divider"></div>
                        <div class="ui small images">
                            <img onClick={changePicture} src={pet1} alt="pet1" class="ui image"/>
                            <img onClick={changePicture} src={pet2} alt="pet2" class="ui image"/>
                            <img onClick={changePicture} src={pet3} alt="pet3" class="ui image"/>
                            
                        </div>
                </div>
                
            </div>

        </div>
    )
}
export default AnimalShelter; 