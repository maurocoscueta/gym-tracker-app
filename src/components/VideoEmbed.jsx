import React, { useState } from 'react';

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%',
    background: '#000',
    borderTop: '1px solid #1e1e1e',
  },
  iframe: {
    position: 'absolute',
    top: 0, left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
  },
  placeholder: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    color: '#5a5a5a',
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 13,
    letterSpacing: 1,
    background: '#0a0a0a',
    cursor: 'pointer',
  },
  playIcon: {
    width: 56, height: 56,
    background: 'rgba(255,106,0,0.12)',
    border: '2px solid #ff6a00',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    transition: 'background 0.2s, box-shadow 0.2s',
    boxShadow: '0 0 12px rgba(255,106,0,0.25)',
  },
};

export default function VideoEmbed({ youtubeId, name }) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div style={styles.container}>
        <iframe
          style={styles.iframe}
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={`Tutorial: ${name}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div
        style={styles.placeholder}
        onClick={() => setLoaded(true)}
        onMouseEnter={(e) => {
          const play = e.currentTarget.querySelector('.play-btn');
          if (play) { play.style.background = 'rgba(255,106,0,0.25)'; play.style.boxShadow = '0 0 20px rgba(255,106,0,0.5)'; }
        }}
        onMouseLeave={(e) => {
          const play = e.currentTarget.querySelector('.play-btn');
          if (play) { play.style.background = 'rgba(255,106,0,0.12)'; play.style.boxShadow = '0 0 12px rgba(255,106,0,0.25)'; }
        }}
      >
        <div className="play-btn" style={styles.playIcon}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#ff6a00">
            <polygon points="5,3 19,12 5,21"/>
          </svg>
        </div>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{opacity:0.3}}>
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
          <polygon points="9.75,15.02 15.5,12 9.75,8.98" fill="currentColor"/>
        </svg>
        <span>{name}</span>
        <span style={{fontSize:11, color:'#333', marginTop:2}}>Clic para ver tutorial</span>
      </div>
    </div>
  );
}
