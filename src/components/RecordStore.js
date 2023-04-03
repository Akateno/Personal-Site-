
import record1 from '../photos/record1.png'
import record2 from '../photos/record2.png'
import record3 from '../photos/record3.png'
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
                <h3>Redesigned Local website</h3>
            <p>A hobby of mine is brewing and I noticed the website of my favorite vendor was a very basic website, I asked if I could redesign their website for free
                and this is the redesign I ended up on. This project used React.js along with bootstrap for a more modern look. 

            </p>
    
             <div >
            <img src={pic} className="largeView"alt="john"/>
            </div> 


            <div className="johnWebsiteImagesContainer">
                <div className="clickImages">
                         <div class="ui hidden divider"></div>
                        <div class="ui small images">
                            <img onClick={changePicture} src={record1} alt="john1" class="ui image"/>
                            <img onClick={changePicture} src={record2} alt="john5" class="ui image"/>
                            <img onClick={changePicture} src={record3} alt="john4" class="ui image"/>
                            
                        </div>
                </div>
                
            </div>

        </div>
    )
}
export default RecordStore; 