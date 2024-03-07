import './App.css'
import Form from './components/form/Form';
import Buton from './components/buton/Buton';
import Input from './components/input/Input';
import { useState } from 'react';


function App() {

  const [user, setUser] = useState({ name: "", password: "" });
 
  const handleChange = (e) => {
    if (e.target.type === "text") {
      setUser({ ...user, name: e.target.value });
      console.log(user);
    } else if (e.target.type === "password") {
      setUser({ ...user, password: e.target.value });
      console.log(user);
    }
  };

  const handleClick = () => {
    if(user.name === ""){
      alert("Kullanıcı Adı Boş Geçilemez")
    }
    else if(user.password === ""){
      alert("Şifre Boş Geçilemez")
    }
    else{
        alert("Kullanıcı Adı: " + user.name + " Parolanız: " + user.password   )
    }
  }
  return (
    <div className="App">
      <h2>Login</h2>
      <Form>
        <Input
          type={"text"}
          placeHolder={"Kullanıcı Adı"}
          value={user.name}
          onChange={handleChange}
        />
        <Input
          type={"password"}
          placeHolder={"Şifre"}
          value={user.password}
          onChange={handleChange}
        />
        <Buton onClick={handleClick} />
      </Form>
    </div>
  );
}


export default App;
