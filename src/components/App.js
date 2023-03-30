import Homepage from "./Homepage";
import 'semantic-ui-css/semantic.min.css';
import { Link, Routes, Route } from "react-router-dom";
import ThisSite from "./ThisSite";
import JohnWebsite from "./JohnWebsite";




function App() {



  return (
    <div className="App">
     
     <Homepage/>
     <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="/johnwebsite"  element={<JohnWebsite />} />
          <Route path="/thissite"  element={<ThisSite />} />
          
          
      </Routes>
    </div>
  );
}

export default App;
