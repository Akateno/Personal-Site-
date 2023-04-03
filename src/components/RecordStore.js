
import record1 from '../photos/record1.png'
import record2 from '../photos/record2.png'
import record3 from '../photos/record3.png'
import record4 from '../photos/record4.png'
import React, { useState } from 'react';


function RecordStore(){

    const [pic, setpic] = useState(record1);
    
   



    function changePicture(e){
        console.log(e.target.src);
        let newpic=e.target.src
        setpic(newpic)

        
        console.log(pic)
    }
   

    return(
        <div>
                 <div className="projectTitle">
                        <h1>RecordStore App</h1>
                </div>

                <div className="aboutContainer">
                <h4 className="underline"><a href="https://github.com/Akateno/Phase4Project-">GitHub Repo</a></h4>
                <h5>About:</h5>
                        <p> This application made was desinged to be a Vinyl Record store, inspired by Spotify, where users can add records to their library, they can browse the selection. This was my first time working with Ruby on rails as the backend. I expanded a lot of concepts I used in ths project in my BookClub but still wanted to showcase this specific project as it was one my favorites. 
                            Once users add records to their library they can change various aspects of the record to meet their specic likes, like naming it "fav record" and such. 
                        </p>
                        <p>
                            As mentioned this application made use of Ruby on Rails with a PostgreSQL database. Seeded data was used to populate the table with records, along with the B-Crypt gem to create password authentication possible. 
                            The front end consisted of using React and using GET requests in order to call user data from the database, SemanticUI and CSS was used to make the modern look. 
                        </p>
                </div>
            
    
             <div >
            <img src={pic} className="largeView"alt="john"/>
            </div> 


            <div className="recordsImagesContainer">
                <div className="recordClickImages">
                         <div class="ui hidden divider"></div>
                        <div class="ui small images">
                            <img onClick={changePicture} src={record1} alt="record1" class="ui image"/>
                            <img onClick={changePicture} src={record2} alt="record2" class="ui image"/>
                            <img onClick={changePicture} src={record3} alt="record3" class="ui image"/>
                            <img onClick={changePicture} src={record4} alt="record4" class="ui image"/>
                            
                        </div>
                </div>
                
            </div>

        </div>
    )
}
export default RecordStore; 