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
            
           
            
            



            
            <div className="aboutContainer">
                <h4 className="underline"><a href="https://github.com/Akateno/Phase-3-Project-Front-end-">GitHub Repo</a></h4>
                <h5>About:</h5>
                <p> THis project was a collaboration with other team members, we wanted to test the usage of siniatra as a bakc-end and how it could be incorporated with React as the frontend. 
                </p>
                <p>The front end for this app was made using React and SemanticUI/vanillaCSS in order to have a more modern look. The backend was made with Sinatra using a SQLite database, along with seeding data with the Faker Gem.
                    This applicaiton is able to make GET requests to the database, POST requests, DELETE items, and Create new items/dogs. A join table was used to show the relationship bewtween the pet applicants wanted to adopt as seen in the third image.
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