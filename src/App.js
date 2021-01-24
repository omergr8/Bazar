import logo from "./logo.svg";
import "./App.css";
import Grid from '@material-ui/core/Grid';

import Sidebar from "./Components/sidebar/sidebar";
import Navbar from './Components/shared/Navbar/navbar'
import Content from './Components/content/content'
import Buttongroup from './Components/content/buttonGroup/buttongroup'
function App() {
  document.body.style = 'background: #EDF3F6;';
  return (
    <div className="App">
      <Navbar/>

          <Grid container spacing={3}>
        <Grid item xs={3}>
        <Sidebar />
        </Grid>
        <Grid item xs={9}>
<Content/>
        </Grid>
      </Grid>
     
      

    </div>
  );
}

export default App;
