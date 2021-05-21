
import './App.css';
import {useState} from 'react';
import SignUpForm from './components/SignUpForm';
import { AppStyle } from './components/StyledComponents/AppStyles';
import UserDetails from './components/UserDetails';



function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePass, setRetype] = useState("");
  const [click, setClick] = useState('');

  const handleSubmit = (e,user) => {
    e.preventDefault();
    setClick(true);
     
  }
  

  const user = {firstName, lastName, email, password};

  return (
    <AppStyle className="App">
      
      
      <SignUpForm 
      handleSubmit={handleSubmit}
      firstname={firstName} 
      setFirstName={setFirstName} 
      lastName={lastName}
      setLastName={setLastName}
      email={email}
      setEmail={setEmail}
      password={password} 
      setPassword={setPassword}
      retypePass={retypePass}
      setRetype={setRetype}/>

      {click && <UserDetails
      {...user}
      />}
    </AppStyle>
  );
}

export default App;
