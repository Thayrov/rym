import {useEffect, useRef, useState} from 'react';
import * as THREE from 'three';
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const PortalScreen = () => {
  const vert = `
  varying vec3 vNormal;
  varying vec3 camPos;
  varying vec2 vUv;
  
  void main() {
    vNormal = normal;
    vUv = uv;
    camPos = cameraPosition;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`;
  const frag = `
  #define NUM_OCTAVES 5
  #define M_PI 3.1415926535897932384626433832795
  uniform vec4 resolution;
  varying vec3 vNormal;
  uniform sampler2D perlinnoise;
  uniform sampler2D sparknoise;
  uniform sampler2D waterturbulence;
  uniform sampler2D noiseTex;
  uniform float time;
  uniform vec3 color0;
  uniform vec3 color1;
  uniform vec3 color2;
  uniform vec3 color3;
  uniform vec3 color4;
  uniform vec3 color5;
  varying vec3 camPos;
  varying vec2 vUv;

  
  float rand(vec2 n) {
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
  }

  float noise(vec2 p){
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u*u*(3.0-2.0*u);

    float res = mix(
      mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
      mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
    return res*res;
  }

  float fbm(vec2 x) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100);
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
      v += a * noise(x);
      x = rot * x * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }

    float setOpacity(float r, float g, float b, float tonethreshold) {
    float tone = (r + g + b) / 3.0;
    float alpha = 1.0;
    if(tone<tonethreshold) {
      alpha = 0.0;
    }
    return alpha;
  }

  vec3 rgbcol(vec3 col) {
    return vec3(col.r/255.0,col.g/255.0,col.b/255.0);
  }

  vec2 rotate(vec2 v, float a) {
    float s = sin(a);
    float c = cos(a);
    mat2 m = mat2(c, -s, s, c);
    return m * v;
  }

  vec2 UnityPolarCoordinates (vec2 UV, vec2 Center, float RadialScale, float LengthScale){
    vec2 delta = UV - Center;
    float radius = length(delta) * 2. * RadialScale;
    float angle = atan(delta.x, delta.y) * 1.0/6.28 * LengthScale;
    return vec2(radius, angle);
  }
 
  void main() {
    vec2 olduv = gl_FragCoord.xy/resolution.xy ;
    vec2 uv = vUv ; 
    vec2 imguv = uv;
    float scale = 1.;
    olduv *= 0.5 + time; 
    olduv.y = olduv.y ;
    vec2 p = olduv*scale;
    float noise = fbm( p  )*0.04;
    vec4 txt = texture2D(perlinnoise, olduv);
    float gradient = dot(normalize( -camPos ), normalize( vNormal ));
    float pct = distance(vUv,vec2(0.5));

    vec3 rgbcolor0 = rgbcol(color0);
    vec3 rgbcolor1 = rgbcol(color1);
    vec3 rgbcolor2 = rgbcol(color2);
    vec3 rgbcolor3 = rgbcol(color3);
    vec3 rgbcolor4 = rgbcol(color4);
    vec3 rgbcolor5 = rgbcol(color5);

    // set solid background
    float y = smoothstep(0.16,0.525,pct);
    vec3 backcolor = mix(rgbcolor0, rgbcolor5, y);

    gl_FragColor = vec4(backcolor,1.);

    // set polar coords
    vec2 center = vec2(0.5);
    vec2 cor = UnityPolarCoordinates(vUv, center, 1., 1.);
    vec2 newvUv = vUv - 0.5;
    vec3 noisetexvUv = texture2D(perlinnoise,mod(rotate(newvUv*0.15 + vec2(sin(time*0.005),cos(time*0.005)),time),1.)).rgb;    

    // set textures
    vec2 newUv = vec2(cor.x + time,cor.x+cor.y);
    vec3 noisetex = texture2D(perlinnoise,mod(newUv,1.)).rgb;    
    vec3 noisetex2 = texture2D(sparknoise,mod(newUv,1.)).rgb;    
    vec3 noisetex3 = texture2D(waterturbulence,mod(newUv,1.)).rgb;    


    // set textures tones
    float tone0 =  1. - smoothstep(0.3,0.6,noisetex.r);
    float tone1 =  smoothstep(0.3,0.6,noisetex2.r);
    float tone2 =  smoothstep(0.3,0.6,noisetex3.r);


    // set opacity for each tone
    float opacity0 = setOpacity(tone0,tone0,tone0,.29);
    float opacity1 = setOpacity(tone1,tone1,tone1,.49);
    float opacity2 = setOpacity(tone2,tone2,tone2,.69);

    // build circular noise
    float gradienttone = 1. - smoothstep(0.196,0.532,pct);
    vec4 circularnoise = vec4( vec3(gradienttone)*noisetexvUv*1.4, 1.0 );
    float gradopacity = setOpacity(circularnoise.r,circularnoise.g,circularnoise.b,0.19);

    // set edge static sparkle
    vec2 uv2 = uv;
    float iTime = time*0.004;
    uv.y += iTime / 10.0;
    uv.x -= (sin(iTime/10.0)/2.0);
    uv2.x += iTime / 14.0;
    uv2.x += (sin(iTime/10.0)/9.0);
    float result = 0.0;
    result += texture2D(noiseTex, mod(uv*0.5,1.) * 0.6 + vec2(iTime*-0.003)).r;
    result *= texture2D(noiseTex, mod(uv2*0.5,1.) * 0.9 + vec2(iTime*+0.002)).b;
    result = pow(result, 4.0);

    //set final render
    if(opacity2>0.0){
      gl_FragColor = vec4(rgbcolor4,0.)*vec4(opacity2);
    } else if(opacity1>0.0){
      gl_FragColor = vec4(rgbcolor2,0.)*vec4(opacity1);
    } else if(opacity0>0.0){
      gl_FragColor = vec4(rgbcolor1,0.)*vec4(opacity0);
    } 
    gl_FragColor += vec4(108.0)*result*(y*0.02);
    gl_FragColor *= vec4(gradopacity);
    
  }

`;

  const worldRef = useRef();
  const [options, setOptions] = useState({
    exposure: 2.8,
    bloomStrength: 2.39,
    bloomThreshold: 0,
    bloomRadius: 0.38,
    color0: [1, 5, 1],
    color1: [2, 20, 2],
    color2: [44, 97, 15],
    color3: [14, 28, 5],
    color4: [255, 255, 255],
    color5: [74, 145, 0],
  });

  useEffect(() => {
    let scene, camera, renderer, controls, bloomPass, composer, material;
    let animationFrameId;

    const width = worldRef.current.clientWidth;
    const height = worldRef.current.clientHeight;

    const init = () => {
      createScene();
      generateMesh();
      animate();
    };

    const createScene = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
      camera.position.set(0, 0, 4.473751741859916);
      renderer = new THREE.WebGLRenderer({alpha: true});
      renderer.antialias = true;
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      controls = new OrbitControls(camera, renderer.domElement);
      controls.update();

      renderer.autoClear = false;
      material = new THREE.ShaderMaterial({
        uniforms: {
          time: {
            type: 'f',
            value: 0.0,
          },
          perlinnoise: {
            type: 't',
            value: new THREE.TextureLoader().load(
              'https://raw.githubusercontent.com/pizza3/asset/master/noise9.png',
            ),
          },
          sparknoise: {
            type: 't',
            value: new THREE.TextureLoader().load(
              'https://raw.githubusercontent.com/pizza3/asset/master/sparklenoise.png',
            ),
          },
          waterturbulence: {
            type: 't',
            value: new THREE.TextureLoader().load(
              'https://raw.githubusercontent.com/pizza3/asset/master/waterturbulence.png',
            ),
          },
          noiseTex: {
            type: 't',
            value: new THREE.TextureLoader().load(
              'https://raw.githubusercontent.com/pizza3/asset/master/rgbnoise2.png',
            ),
          },
          color5: {
            value: new THREE.Vector3(...options.color5),
          },
          color4: {
            value: new THREE.Vector3(...options.color4),
          },
          color3: {
            value: new THREE.Vector3(...options.color3),
          },
          color2: {
            value: new THREE.Vector3(...options.color2),
          },
          color1: {
            value: new THREE.Vector3(...options.color1),
          },
          color0: {
            value: new THREE.Vector3(...options.color0),
          },
          resolution: {value: new THREE.Vector2(width, height)},
        },
        fragmentShader: frag,
        vertexShader: vert,
      });
      renderer.domElement.style.position = 'absolute';
      worldRef.current.appendChild(renderer.domElement);
      const renderScene = new RenderPass(scene, camera);
      bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        options.bloomStrength,
        options.bloomThreshold,
        options.bloomRadius,
      );

      composer = new EffectComposer(renderer);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);
    };

    const generateMesh = () => {
      var planegeometry = new THREE.PlaneGeometry(5, 5, 1, 1);
      var plane = new THREE.Mesh(planegeometry, material);
      scene.add(plane);
    };

    const updateDraw = deltaTime => {
      material.uniforms.time.value = deltaTime / 5000;
      material.uniforms.color5.value = new THREE.Vector3(...options.color5);
      material.uniforms.color4.value = new THREE.Vector3(...options.color4);
      material.uniforms.color3.value = new THREE.Vector3(...options.color3);
      material.uniforms.color2.value = new THREE.Vector3(...options.color2);
      material.uniforms.color1.value = new THREE.Vector3(...options.color1);
      material.uniforms.color0.value = new THREE.Vector3(...options.color0);
    };

    const animate = time => {
      animationFrameId = requestAnimationFrame(animate);
      updateDraw(time);
      composer.render();
    };
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    init();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      // Limpieza de recursos
      if (renderer) renderer.dispose();
      if (material) material.dispose();
      if (scene) {
        scene.children.forEach(child => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) child.material.dispose();
          if (child.texture) child.texture.dispose();
        });
      }
    };
  }, [options]);

  return <div ref={worldRef} style={{width: '100%', height: '100vh', zIndex: 10}} />;
};

export default PortalScreen;
