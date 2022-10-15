import { BrowseRouter as Router, } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/navbar';

function App() {
  return (
    <Router >
    <Navbar />
    <div className="InitdwialPageHeader">
      
      <body className='page-body'>
      
        <p>
          Aprenda de uma forma divertida e ganhe recompensas.
        </p>
      
        
      </body>
    </div>
    </Router>
  );
}

export default App;
