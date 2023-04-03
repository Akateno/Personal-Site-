import book1 from '../photos/book1.png'
import book2 from '../photos/book2.png'
import book3 from '../photos/book3.png'
import book4 from '../photos/book4.png'
import book5 from '../photos/book5.png'

function BookClub(){
    
    return(
        <div>
                <div>
                    <div className="projectTitle">
                        <h1>BookClub App</h1>
                    </div>
                    
                    <h4><a href="https://github.com/Akateno/Phase5Project">GitHub Repo</a></h4>
                                    <p>The intention of this app was to be used as a social media type app where users can search up any topic or book, add them to their personalized library, where they can read book or remove them. Users can recommend books to one another in a community tab. In this community tab users can like eachothers recommended books and leave comments. </p>
                                     <p>The front end for this app was made using React and SemanticUI in order to have a more modern look. The backend was made with Ruby on Rails, the ruby gem B-crypt in order to utilize user authorization and password encryption. The database used for this project was PostgreSQL.</p>

                </div>
                <div class="container">
                     <div class="ui segment">
                        
                        <div className="appImages">
                              <img src={book1} class="ui medium centered image"/>
                              <img src={book2} class="ui medium centered image"/>
                              <img src={book3} class="ui medium centered image"/>
                              <img src={book4} class="ui medium centered image"/>
                        </div>
                            
                {/* <p>Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide phaedrum, vim vivendum maiestatis in.</p>
                <img src="/images/wireframe/image-text.png" class="ui small centered image"/> */}
            </div>
                    
                    
                </div>
        </div>
    )
}

export default BookClub; 