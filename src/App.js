import imageInSrc from './imageInSrc.jpg';
import myVideo from './myVideo.mp4'
import './style.css';

function App() {
  return (  
  <div className="App">
   
 <div style={{border:"solid 2px black" , maxWidth:'100vw',margin:10,boxShadow:"0 5px 8px #000"}}>

  <h1 className={"title red"}> Bienvenue à <i>tatlı tuzlu </i></h1>

   <img src={imageInSrc} />

    <img src="/imageInPublic.jpg" />
 
  </div>
 <div>
   <h1 className={"title red"}>  <i>tatlı tuzlu </i></h1>
  <video width="613" height="345" controls>

 <source src={myVideo} type="video/mp4" / >

 </video> 
 </div>
</div>
    
  );
}

export default App;
