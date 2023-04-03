import book1 from '../photos/book1.png'
import book2 from '../photos/book2.png'
import book3 from '../photos/book3.png'
import book4 from '../photos/book4.png'


function BookClub(){
    
    return(
        <div>
                <div>
                    <div className="projectTitle">
                        <h1>BookClub App</h1>
                    </div>
                    
                    <div className="aboutContainer">

                        <h4><a href="https://github.com/Akateno/Phase5Project">GitHub Repo</a></h4>
                        <h5>About:</h5>
                        <p>The intention of this app was to be used as a social media type app where users can search up any topic or book, add them to their personalized library, where they can read book or remove them. Users can recommend books to one another in a community tab. In this community tab users can like eachothers recommended books and leave comments. You can log in and log out and the app will retain the infomation of each user.  </p>
                        <p>The front end for this app was made using React and SemanticUI in order to have a more modern look. The backend was made with Ruby on Rails, the ruby gem B-crypt was used in order to utilize user authorization and password encryption. The database used for this project was PostgreSQL. Models, Serializers, Routing and Controllers were all worked on by myself in order to not only limit what information the user has but also to build relationships bewtween the models. </p>
                    </div>
                    

                </div>
                <div class="container">
                     <div class="ui segment">
                        <div className="appImages">
                              <img src={book1} alt="book1" class="ui medium centered image"/>
                              <img src={book2} alt="book2" class="ui medium centered image"/>
                              <img src={book3} alt="book3" class="ui medium centered image"/>
                              <img src={book4} alt="book4" class="ui medium centered image"/>
                        </div>
                </div>
                </div>
        </div>
    )
}

export default BookClub; 