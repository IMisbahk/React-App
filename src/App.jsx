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
    <Student name = "Misbah" age = {16} isStudent = {true}/>
    <Student name = "spongebob" age = {30} isStudent = {false}/>
    <Student/>
    </>
  );
}

export default App