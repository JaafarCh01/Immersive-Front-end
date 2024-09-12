import React, { useEffect, useState, useRef } from 'react';
import XRScene from './XRScene';
import DesktopViewer from './DesktopViewer';

const XRSetup = ({ modelUrl }) => {
  const [xrSession, setXRSession] = useState(null);
  const [vrSupported, setVRSupported] = useState(false);
  const [arSupported, setARSupported] = useState(false);
  const [message, setMessage] = useState('');
  const [mode, setMode] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (navigator.xr) {
      navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
        setVRSupported(supported);
      });
      navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
        setARSupported(supported);
      });
    }
  }, []);

  const startXRSession = async (xrMode) => {
    if (xrMode === 'desktop') {
      setMode('desktop');
      setXRSession(null);
      setMessage('');
      return;
    }

    try {
      const session = await navigator.xr.requestSession(xrMode, {
        requiredFeatures: ['local-floor', 'bounded-floor', 'hand-tracking'],
        optionalFeatures: ['layers']
      });
      setXRSession(session);
      setMode(xrMode);
      setMessage('');

      const gl = canvasRef.current.getContext('webgl', { xrCompatible: true });
      await gl.makeXRCompatible();

      session.updateRenderState({
        baseLayer: new XRWebGLLayer(session, gl)
      });

      session.addEventListener('end', () => {
        setXRSession(null);
        setMode(null);
      });
    } catch (error) {
      console.error(`Error starting ${xrMode} session:`, error);
      setMessage(`${xrMode.toUpperCase()} is not available on this device.`);
    }
  };

  const endXRSession = () => {
    if (xrSession) {
      xrSession.end();
    }
  };

  return (
    <div>
      <div className="flex space-x-2 mb-4">
        <button onClick={() => startXRSession('immersive-vr')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          VR Mode
        </button>
        <button onClick={() => startXRSession('immersive-ar')} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          AR Mode
        </button>
        <button onClick={() => startXRSession('desktop')} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          Desktop Mode
        </button>
      </div>
      {message && <p className="text-red-500 mb-4">{message}</p>}
      {mode === 'desktop' && <DesktopViewer modelUrl={modelUrl} />}
      {xrSession && (
        <>
          <button onClick={endXRSession} className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            End XR Session
          </button>
          <XRScene session={xrSession} canvasRef={canvasRef} modelUrl={modelUrl} />
        </>
      )}
      <canvas ref={canvasRef} style={{ display: xrSession ? 'block' : 'none' }} />
    </div>
  );
};

export default XRSetup;