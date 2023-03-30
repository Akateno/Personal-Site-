
import Portrait from '../Portrait.png'
import javascriptLogo from '../javascriptLogo.png'
import nodeLogo from '../nodeLogo.png'
import postgresLogo from '../postgresLogo.png'
import railsLogo from '../railsLogo.png'
import reactLogo from '../reactLogo.png'
import rubyLogo from '../rubyLogo.png'
import { Link } from "react-router-dom";
import JohnWebsite from './JohnWebsite'
import ThisSite from './ThisSite'

import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Message,
    Item,
  } from 'semantic-ui-react'

function Homepage(){


    
    return (
        <div>
           <h1>Welcome to my Homepage</h1> 
           

           {/* <div className='headerContainer'>
                <div>
                    <img className='selfImage'src={Portrait} alt='selfImage'/>
                </div>
                <div>
                     <h3>Erick Vargas</h3>
                    <h4>erickkvargas@gmail.com</h4>
                     <p> I started working in Chemistry due to how fascinating elements work together to form the things around us. I worked in an environmental lab in order help develop enzymes that remove pollutants from drinking water. During this time is when I decided to take C++ course, and over time I started to watch more and more computer language related videos, and soon found myself transitioning to a Software Engineering career. 
                        Software engineering was not too different where many components come together to form something even bigger. Now I start my days wondering what bug or new fascinating concept I'll be learning today and how I can make use of it.
                        Animal lover and father to two cats. When not behind a monitor, If I'm not playing tennis I'm sketching, and or making coffee. 
                     </p>
                </div>
           </div> */}
            <div className="headerContainer">
                 <div class="ui items">
                                        <div class="item">
                                            <div class="image">
                                                <img className='selfImage'src={Portrait} alt='selfImage'/>
                                            </div>
                                            <div class="content">
                                                <div class="header">Erick Vargas</div>
                                                <div class="meta">erickkvargas@gmail.com</div>
                                                <div class="description">I started working in Chemistry due to how fascinating elements work together to form the things around us. I worked in an environmental lab in order help develop enzymes that remove pollutants from drinking water. During this time is when I decided to take C++ course, and over time I started to watch more and more computer language related videos, and soon found myself transitioning to a Software Engineering career. 
                                            Software engineering was not too different where many components come together to form something even bigger. Now I start my days wondering what bug or new fascinating concept I'll be learning today and how I can make use of it.
                                            Animal lover and father to two cats. When not behind a monitor, If I'm not playing tennis I'm sketching, and or making coffee. </div>
                                                <div class="extra">Extra</div>
                                            </div>
                                        </div>
                                    
                                
                    </div>
            </div>
           








           <h1>Projects/Experience</h1>
            <div class="ui four item menu">
                    <a class="item">Editorials</a>
                    <a class="item">Editorials</a>
                    <a class="item"><Link to="/johnwebsite">John Website</Link></a>
                    <a class="item"><Link to="/thissite">This Site</Link></a>
                    
            </div>
           
           <h1>Technologies Used</h1>
           {/* <div className='technologiesContainer'>
                <img className="techLogo" src={javascriptLogo} alt="javaLogo"/>
                <img className="techLogo" src={nodeLogo} alt="javaLogo"/>
                <img className="techLogo" src={postgresLogo} alt="javaLogo"/>
                <img className="techLogo" src={railsLogo} alt="javaLogo"/>
                <img className="techLogo" src={reactLogo} alt="javaLogo"/>
                <img className="techLogo" src={rubyLogo} alt="javaLogo"/>
           </div> */}

           <div className="technologies">
                <div class="ui tiny images">
                <img class="ui image" src={javascriptLogo} alt="javaLogo"/>
                <img class="ui image" src={nodeLogo} alt="javaLogo"/>
                <img class="ui image" src={postgresLogo} alt="javaLogo"/>
                <img class="ui image"src={railsLogo} alt="javaLogo"/>
                <img class="ui image" src={reactLogo} alt="javaLogo"/>
                <img class="ui image" src={rubyLogo} alt="javaLogo"/>
                </div>
           </div>




        </div>
    )
}

export default Homepage; 
