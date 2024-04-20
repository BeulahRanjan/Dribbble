import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Sample from "./Sample";
import ProfilePage from "./ProfilePage";
import SimpleCard from "./SimpleCard";
import { UserProvider } from "./UserContext";
import SimpleEmail from "./SimpleEmail";

function App() {
  return (

<div className="">
<UserProvider>
<Router>
 <Routes>

 {/* Defining the paths of various files */}
   < Route exact path="/signup" element={<Sample/>}/>
   <Route exact path="/ProfilePage" element={<ProfilePage/>}/>
   <Route exact path="/SimpleCard" element={<SimpleCard/>}/>
   <Route exact path="/SimpleEmail" element={<SimpleEmail/>}/>
  
 </Routes>
</Router>
</UserProvider>
</div>
  );
}

export default App;
