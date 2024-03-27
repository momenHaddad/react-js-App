import Navbar from './Navbar';
import NewBlog from './NewBlog';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/NewBlog'>
              <NewBlog/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
