import './index.css';
import { useState } from 'react';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import Alert from './components/Alert'
// import About from './components/About';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has enabled", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below." mode={mode} />
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              // <TextForm showAlert={showAlert} heading="Enter the text to analyze below." mode={mode} />
            </Route>

          </Switch>
        </div>
      </Router> */}
      </div>
    </>  
  );
}


export default App;
