import React from 'react';
import Toolbar from './components/Navbar/Navbar';
import '/Users/codenation/Documents/reddit/src/components/Navbar/Navbar.css';

function App() {
  return (
    <div className="App">
     <Toolbar />
     <main style={{marginTop: '64px'}}>
     <p>Page Content Placeholder</p>
     </main>
    </div>
  );
}

export default App;
