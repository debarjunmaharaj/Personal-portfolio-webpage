
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const AnimatedCube = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    renderer.setSize(300, 300);
    renderer.setClearColor(0x000000, 0);
    
    // Clear previous render if any
    if (mountRef.current.children.length > 0) {
      mountRef.current.removeChild(mountRef.current.children[0]);
    }
    mountRef.current.appendChild(renderer.domElement);

    // Create cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x2A3F9D }), // Blue
      new THREE.MeshBasicMaterial({ color: 0x8B5CF6 }), // Purple
      new THREE.MeshBasicMaterial({ color: 0x06B6D4 }), // Teal
      new THREE.MeshBasicMaterial({ color: 0x4C1D95 }), // Dark purple
      new THREE.MeshBasicMaterial({ color: 0x2563EB }), // Light blue
      new THREE.MeshBasicMaterial({ color: 0x5B21B6 }), // Medium purple
    ];
    
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);
    
    // Add wireframe
    const wireframe = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry),
      new THREE.LineBasicMaterial({ color: 0xffffff })
    );
    cube.add(wireframe);
    
    camera.position.z = 2.5;
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      cube.rotation.x += 0.005;
      cube.rotation.y += 0.005;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const size = Math.min(mountRef.current.clientWidth, 300);
      renderer.setSize(size, size);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current?.removeChild(renderer.domElement);
      }
      geometry.dispose();
      materials.forEach(material => material.dispose());
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default AnimatedCube;
