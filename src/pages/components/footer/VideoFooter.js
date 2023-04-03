import React from 'react';
import './videoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({ name, description, audio }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="videoFooter__audio">
          <MusicNoteIcon className="videoFooter__icon" />
          <div className="videoFooterAudio__text">
            <p>{audio}</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter__record"
        alt="Imagem de um vinil girando"
        src="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/vinil.png?alt=media&token=72a6362d-ca03-4b8b-975e-a4832fdeccff"
      />
    </div>
  );
}

export default VideoFooter;
