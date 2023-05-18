import './App.css'
import Button from './components/Button'

function App() {
  return(
    <div className="container flex">
      <Button href="https://www.instagram.com/rizuarzz/" bgColor="black" textColor="white">Instagram</Button>
      <Button href="https://www.tiktok.com/@rizwaradn" bgColor="black" textColor="white">Tiktok</Button>
    </div>
  );
}
export default App