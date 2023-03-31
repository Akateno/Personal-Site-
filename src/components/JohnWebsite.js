import { Item } from 'semantic-ui-react'
import john1 from '../photos/john1.png'
import john2 from '../photos/john2.png'
import john3 from '../photos/john3.png'
import john4 from '../photos/john4.png'
import john5 from '../photos/john5.png'
import john6 from '../photos/john6.png'

function JohnWebsite(){
    return(
        <div>
            <h3>Redesigned Local website</h3>
            <p>A hobby of mine is brewing and I noticed the website of my favorite vendor was a very basic website, I asked if I could redesign their website for free
                and this is the redesign I ended up on. This project used React.js along with bootstrap for a more modern look. 

            </p>
            

            <div className='johnImages'>
            <div class="ui items">
                <div class="item">
                    <div class="ui medium image">
                        <img src={john1} alt="john1"/>
                    </div>
                    {/* <div class="middle aligned content">
                        <a class="header">12 Years a Slave</a>
                    </div> */}
                </div>

                <div class="item">
                    <div class="ui medium image">
                        <img src={john5} alt="john5"/>
                    </div>
                    {/* <div class="middle aligned content">
                        <a class="header">My Neighbor Totoro</a>
                    </div> */}
                </div>

                <div class="item">
                    <div class="ui medium image">
                        <img src={john6} alt="john6"/>
                    </div>
                    {/* <div class="middle aligned content">
                        <a class="header">My Neighbor Totoro</a>
                    </div> */}
                </div>
                <div class="item">
                    <div class="ui medium image">
                        <img src={john2} alt="john2"/>
                    </div>
                    {/* <div class="middle aligned content">
                        <a class="header">My Neighbor Totoro</a>
                    </div> */}
                </div>
                <div class="item">
                    <div class="ui medium image">
                        <img src={john3} alt="john3"/>
                    </div>
                        {/* <div class="middle aligned content">
                            <div class="header">Watchmen</div>
                        </div> */}
                    </div>
                </div>
            </div>

            
                
               





            

        </div>
    )
}
export default JohnWebsite; 