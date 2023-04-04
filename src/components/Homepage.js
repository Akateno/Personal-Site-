
import Portrait from '../photos/Portrait.png'
import javascriptLogo from '../photos/javascriptLogo.png'
import nodeLogo from '../photos/nodeLogo.png'
import postgresLogo from '../photos/postgresLogo.png'
import railsLogo from '../photos/railsLogo.png'
import reactLogo from '../photos/reactLogo.png'
import rubyLogo from '../photos/rubyLogo.png'
import { Link } from "react-router-dom";
import bootstrap from "../photos/bootstrap.png"
import css from "../photos/css.png"
import html from "../photos/html.png"
import semantic from "../photos/semantic.png"




import Resume from "../photos/SoftwareResume.pdf"



function Homepage(){
  
    return (
        <div>
           <h1 className="welcome"><span>Welcome to my Website</span></h1> 
           
           
           {/* <div class="catcontainer">
            <div class="shadow"></div>
            <div class="cat">
                <div class="ear"></div>
                <div class="eye"></div>
                <div class="mouth"></div>
                <div class="nose"></div>
                <div class="tail"></div>
                <div class="body"></div>
                <div class="bubble"></div>
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
                                                <div class="meta"><a href="https://github.com/Akateno">GitHub</a></div>
                                                <h3 class="meta">
                                                        <a href={Resume} without rel="noopener noreferrer" target="_blank"> Resume</a>
                                                 </h3>
                                                <div class="description"> I am a full stack Engineer with a degree in Chemistry from Washington State Univeristy, I fell in love with coding right at the end of my senior year and have continued to push my knowlege in coding languages and implementing them to different technologies. I received my coding education from FlatIron school in their Software Engineering program. Used to work in a lab now I start my days wondering what bug or new fascinating concept I'll be learning today and how I can make use of it. As you will see React is by far my favorite technology to use, but also enjoy working with Ruby on rails. I am always persuing new things to learn, and am currently on track learning Python and pursuing a certification in AWS. 
                                                                            Animal lover and father to two cats. When not behind a monitor, If I'm not playing tennis I'm sketching, and or making coffee. </div>
                                                    <p>I have built several applications making use of React.js, Javascript, Ruby, Rails, SQL, and make use of databases. In these applications I have made use of external APIs, JSON, OOP, and debugging. </p>
                                                 
                                                
                                            </div>

                                            
                                        </div>
                                    
                                
                    </div>
            </div>
           
            <h1 className="techTitle">Technologies</h1>
           
            
            <div className="technologies">
                            <div class="ui tiny images">
                            <img class="ui image" src={javascriptLogo} alt="javaLogo"/>
                            <img class="ui image" src={nodeLogo} alt="javaLogo"/>
                            <img class="ui image" src={postgresLogo} alt="javaLogo"/>
                            <img class="ui image"src={railsLogo} alt="javaLogo"/>
                            <img class="ui image" src={reactLogo} alt="javaLogo"/>
                            <img class="ui image" src={rubyLogo} alt="javaLogo"/>
                            <img class="ui image" src={semantic} alt="javaLogo"/>
                            <img class="ui image" src={bootstrap} alt="javaLogo"/>
                            <img class="ui image" src={html} alt="javaLogo"/>
                            <img class="ui image" src={css} alt="javaLogo"/>
                            </div>
            </div>





           <h1>Projects/Experience</h1>
            <div class="ui four item menu">
                    
                    <a class="item"><Link to="/bookclub">BookClub App</Link></a>
                    <a class="item"><Link to="/johnwebsite">John Website</Link></a>
                    <a class="item"><Link to="/recordstore">RecordStore</Link></a>
                    <a class="item"><Link to="/animalShelter">AnimalShelter</Link></a>
                    
            </div>
           
           
           

         




        </div>
    )
}

export default Homepage; 
