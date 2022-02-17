import { useState } from "react";
import Input from "./components/Input";
import Submit from "./components/Submit";
 function App() {
  const [value, setValue] = useState("");


  const handleChange = (event) => {
    setValue(event.target.value);
  };



  const handleSubmit = () => {
    console.log(JSON.stringify({ 
      email: value
    }))
  };
  return (
    <div>
      <Input value={value} handleChange={handleChange} />
      <Submit handleSubmit={handleSubmit} />
    </div>
  );
}
export default App;