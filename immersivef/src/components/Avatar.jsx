import React, { useEffect, useRef } from 'react';

function AvatarCreator() {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = 'https://readyplayer.me/avatar?frameApi';
    }

    const handleMessage = (event) => {
      if (event.data.source === 'readyplayerme') {
        if (event.data.eventName === 'v1.avatar.exported') {
          const avatarUrl = event.data.data;
          console.log('Avatar URL:', avatarUrl);
          // You can now save the avatar URL to the user's profile in your database
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div>
      <iframe
        ref={iframeRef}
        title="Ready Player Me Avatar Creator"
        allow="camera *; microphone *"
        style={{ width: '100%', height: '600px', border: 'none' }}
      />
    </div>
  );
}

export default AvatarCreator;
