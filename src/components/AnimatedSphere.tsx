
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const AnimatedSphere = () => {
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
    renderer.setSize(200, 200);
    renderer.setClearColor(0x000000, 0);
    
    // Clear previous render
    if (mountRef.current.children.length > 0) {
      mountRef.current.removeChild(mountRef.current.children[0]);
    }
    mountRef.current.appendChild(renderer.domElement);

    // Create sphere
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    
    // Create custom shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec2 vUv;
        varying vec3 vNormal;
        
        void main() {
          // Purple to blue gradient based on normal
          vec3 color1 = vec3(0.5, 0.2, 0.9); // Purple
          vec3 color2 = vec3(0.0, 0.4, 0.8); // Blue
          
          float noise = sin(vUv.x * 10.0 + time) * sin(vUv.y * 10.0 + time) * 0.1;
          float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          
          vec3 color = mix(color1, color2, fresnel + noise);
          
          gl_FragColor = vec4(color, 1.0);
        }
      `
    });
    
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    
    camera.position.z = 2.5;
    
    // Animation loop
    const clock = new THREE.Clock();
    
    const animate = () => {
      requestAnimationFrame(animate);
      
      const elapsed = clock.getElapsedTime();
      material.uniforms.time.value = elapsed;
      
      sphere.rotation.y = elapsed * 0.2;
      sphere.rotation.z = elapsed * 0.1;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const size = Math.min(mountRef.current.clientWidth, 200);
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
      material.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default AnimatedSphere;
