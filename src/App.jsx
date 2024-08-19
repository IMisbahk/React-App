import Card from "./Card";
import Button from './button.jsx'
import Student from "./student.jsx";
function App() {
  return(
    <>
    <Card />
    <Card />
    <Card />
    <Button />
    <Student name = "Misbah" age = {16}/>
    <Student name = "spongebob" age = {30}/>
    </>
  );
}

export default App