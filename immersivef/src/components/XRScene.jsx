import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const XRScene = ({ session, canvasRef, modelUrl }) => {
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    if (!session || !canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // Load the 3D model
    const loader = new GLTFLoader();
    loader.load(modelUrl, (gltf) => {
      const model = gltf.scene;
      model.scale.set(0.5, 0.5, 0.5); // Adjust scale as needed
      scene.add(model);
      modelRef.current = model;
    }, undefined, (error) => {
      console.error('Error loading 3D model:', error);
    });

    camera.position.z = 5;

    // Add lights to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    // Set up XR reference space
    let referenceSpace;
    session.requestReferenceSpace('local').then((space) => {
      referenceSpace = space;
      session.requestAnimationFrame(onXRFrame);
    });

    // XR render loop
    const onXRFrame = (time, frame) => {
      session.requestAnimationFrame(onXRFrame);

      const pose = frame.getViewerPose(referenceSpace);
      if (pose) {
        const view = pose.views[0];
        const viewport = session.renderState.baseLayer.getViewport(view);
        renderer.setSize(viewport.width, viewport.height);

        camera.matrix.fromArray(view.transform.matrix);
        camera.projectionMatrix.fromArray(view.projectionMatrix);
        camera.updateMatrixWorld(true);

        // Rotate the model if it's loaded
        if (modelRef.current) {
          modelRef.current.rotation.y += 0.01;
        }

        renderer.render(scene, camera);
      }
    };

    // Handle XR input
    session.addEventListener('select', onSelect);

    function onSelect(event) {
      const inputSource = event.inputSource;
      console.log('Select event from input source:', inputSource);

      // Example: Change model color on select event
      if (modelRef.current) {
        modelRef.current.traverse((child) => {
          if (child.isMesh) {
            child.material.color.setHex(Math.random() * 0xffffff);
          }
        });
      }
    }

    return () => {
      session.removeEventListener('select', onSelect);
    };
  }, [session, canvasRef, modelUrl]);

  return null;
};

export default XRScene;
