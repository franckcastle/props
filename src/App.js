import ena from './wajdi-ouaili.jpg';
import './App.css';
import ProfileComponent from './components/ProfileComponent';

import React,{ useState } from 'react';
function App() {
  const fullname="Wajdi Ouaili";
  let a=true
  const [toggle,setToggle]=useState(a);

  const hundlename = () => {
    return alert(`hello ${fullname}`)
  };
  const toggler=()=>{
    setToggle( (a) => !a);
  };
  return (
    <div className="App">
      <div className={toggle ? "active": ""}>
      <h1 >person's profile</h1>
      <ProfileComponent handle={hundlename} fullName={fullname} bio='salamoualaykom' profession='etudiant'>
          {ena}
        </ProfileComponent>
        </div>
        <button onClick={toggler}>toggle</button>
    </div>
  );
}

export default App;
