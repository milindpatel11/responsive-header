# responsive-headerResponsive header with Hamburger Example (possibly creating mini-package later)

# How to Use 

Copy Header.js and Header.css in preferred directory

Use in App component (or other parent component as needed). Currently passing background color as prop but this can be directly added in CSS and passing prop can be skipped

Comment are added where edits can be made to get it working according (importing from correct address, background color, list for header items etc)

```

import Header from './components/Header';

function App() {  
  return (    
    <div className="App">      
      <Header headerColor={'#000002'}/>    
     </div>  
     );
   }
export default App;

```
