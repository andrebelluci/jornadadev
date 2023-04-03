import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video likes={111} messages={222} shares={333} name="@andrebelluci" description="Brecker o goleiro" audio="Música épica" url="https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/brecker2.mp4?alt=media&token=9aa979e9-0907-4093-abd5-a71efe4fc946" />
        <Video likes={444} messages={555} shares={666} name="@barbaraateodoro" description="Gato" audio="Clap your hands" url="https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/bird.mp4?alt=media&token=38b50871-393f-4fa4-9951-c6fc08af7e9e" />
      </div>
    </div>
  );
}

export default App;
