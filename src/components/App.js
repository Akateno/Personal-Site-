import Homepage from "./Homepage";
import 'semantic-ui-css/semantic.min.css';
import { Link, Routes, Route } from "react-router-dom";
import RecordStore from "./RecordStore";
import JohnWebsite from "./JohnWebsite";
import BookClub from "./BookClub";
import AnimalShelter from "./AnimalShelter";




function App() {



  return (
    <div className="App">
     
     <Homepage/>
     <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="/johnwebsite"  element={<JohnWebsite />} />
          <Route path="/recordstore"  element={<RecordStore />} />
          <Route path="/bookclub"  element={<BookClub />} />
          <Route path="/animalshelter"  element={<AnimalShelter />} />
          
          
      </Routes>
    </div>
  );
}

export default App;
