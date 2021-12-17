import ena from './wajdi-ouaili.jpg';
import './App.css';
import ProfileComponent from './components/ProfileComponent';
function App() {
  const fullname="Wajdi Ouaili"

  const hundlename = () => {
    return alert(`hello ${fullname}`)
  }
  return (
    <div className="App">
      <h1>Aslema nes lkoool </h1>
      <ProfileComponent handle={hundlename} fullName={fullname} bio='salamoualaykom' profession='etudiant'>
          {ena}
        </ProfileComponent>
    </div>
  );
}

export default App;
