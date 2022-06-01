import './App.css';
import whatever from "./img/BIGO.jpg"

function App() {
  return (
    <div>
      <>
  style="border:solid 1px black;max-width:100vw"&gt;
  <h1 className="title red">Your name here</h1>
  <br />
  <img src="/aaaaaaaaa.png" />
  <br />
  <img src={whatever} alt='notfound' />
  <video width={320} height={240} controls="">
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</>

    </div>
  );
}

export default App;
