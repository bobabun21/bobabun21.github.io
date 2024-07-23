import "./App.css";
import { Avatar } from "@mui/material";
import photo from "./assets/profile-photo-web-page.JPG";

function App() {
  return (
    <div className="App">
      <h1>Temporary Header</h1>
      <Avatar alt="Kelsey Belanger" src={photo} />
    </div>
  );
}

export default App;
