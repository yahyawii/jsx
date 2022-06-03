import './App.css';
import whatever from "./img/BIGO.jpg"

function App() {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <>
  <h1 className="title red">Assad</h1>
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
