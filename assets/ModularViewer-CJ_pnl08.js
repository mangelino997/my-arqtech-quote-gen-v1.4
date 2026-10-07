import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{S as t,t as n,w as r,x as i}from"./ErrorBoundary-eGYVYYaE.js";import{n as a,t as o}from"./index-CmOS1Iui.js";import{$ as s,A as c,Ct as l,Ft as u,Mt as d,Nt as f,Pt as p,S as m,_ as h,a as g,b as _,c as v,f as y,i as b,l as x,m as S,mt as C,n as w,p as T,r as E,t as D,u as O,v as k,wt as A,y as j}from"./CameraRig-BkjPD-Ka.js";function M(e,t,n,r){var i=class extends A{constructor(i){super({vertexShader:t,fragmentShader:n,...i});for(let t in e)this.uniforms[t]=new d(e[t]),Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(e){this.uniforms[t].value=e}});this.uniforms=f.clone(this.uniforms),r?.(this)}};return i.key=s.generateUUID(),i}var N=e(r()),P=M({cellSize:.5,sectionSize:1,fadeDistance:100,fadeStrength:1,fadeFrom:1,cellThickness:.5,sectionThickness:1,cellColor:new c,sectionColor:new c,infiniteGrid:!1,followCamera:!1,worldCamProjPosition:new u,worldPlanePosition:new u},`
    varying vec3 localPosition;
    varying vec4 worldPosition;

    uniform vec3 worldCamProjPosition;
    uniform vec3 worldPlanePosition;
    uniform float fadeDistance;
    uniform bool infiniteGrid;
    uniform bool followCamera;

    void main() {
      localPosition = position.xzy;
      if (infiniteGrid) localPosition *= 1.0 + fadeDistance;
      
      worldPosition = modelMatrix * vec4(localPosition, 1.0);
      if (followCamera) {
        worldPosition.xyz += (worldCamProjPosition - worldPlanePosition);
        localPosition = (inverse(modelMatrix) * worldPosition).xyz;
      }

      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `,`
    varying vec3 localPosition;
    varying vec4 worldPosition;

    uniform vec3 worldCamProjPosition;
    uniform float cellSize;
    uniform float sectionSize;
    uniform vec3 cellColor;
    uniform vec3 sectionColor;
    uniform float fadeDistance;
    uniform float fadeStrength;
    uniform float fadeFrom;
    uniform float cellThickness;
    uniform float sectionThickness;

    float getGrid(float size, float thickness) {
      vec2 r = localPosition.xz / size;
      vec2 grid = abs(fract(r - 0.5) - 0.5) / fwidth(r);
      float line = min(grid.x, grid.y) + 1.0 - thickness;
      return 1.0 - min(line, 1.0);
    }

    void main() {
      float g1 = getGrid(cellSize, cellThickness);
      float g2 = getGrid(sectionSize, sectionThickness);

      vec3 from = worldCamProjPosition*vec3(fadeFrom);
      float dist = distance(from, worldPosition.xyz);
      float d = 1.0 - min(dist / fadeDistance, 1.0);
      vec3 color = mix(cellColor, sectionColor, min(1.0, sectionThickness * g2));

      gl_FragColor = vec4(color, (g1 + g2) * pow(d, fadeStrength));
      gl_FragColor.a = mix(0.75 * gl_FragColor.a, gl_FragColor.a, g2);
      if (gl_FragColor.a <= 0.0) discard;

      #include <tonemapping_fragment>
      #include <${S>=154?`colorspace_fragment`:`encodings_fragment`}>
    }
  `),F=N.forwardRef(({args:e,cellColor:t=`#000000`,sectionColor:n=`#2080ff`,cellSize:r=.5,sectionSize:i=1,followCamera:a=!1,infiniteGrid:o=!1,fadeDistance:s=100,fadeStrength:c=1,fadeFrom:l=1,cellThickness:d=.5,sectionThickness:f=1,side:p=1,...m},g)=>{j({GridMaterial:P});let v=N.useRef(null);N.useImperativeHandle(g,()=>v.current,[]);let y=new C,b=new u(0,1,0),x=new u(0,0,0);_(e=>{y.setFromNormalAndCoplanarPoint(b,x).applyMatrix4(v.current.matrixWorld);let t=v.current.material,n=t.uniforms.worldCamProjPosition,r=t.uniforms.worldPlanePosition;y.projectPoint(e.camera.position,n.value),r.value.set(0,0,0).applyMatrix4(v.current.matrixWorld)});let S={cellSize:r,sectionSize:i,cellColor:t,sectionColor:n,cellThickness:d,sectionThickness:f},w={fadeDistance:s,fadeStrength:c,fadeFrom:l,infiniteGrid:o,followCamera:a};return N.createElement(`mesh`,h({ref:v,frustumCulled:!1},m),N.createElement(`gridMaterial`,h({transparent:!0,"extensions-derivatives":!0,side:p},S,w)),N.createElement(`planeGeometry`,{args:e}))}),I=t();function L(e){let t=a(e);if(!t)return{id:`hero`,label:`Vista`,icon:`🏡`,position:[7,7,9],target:[0,.8,0],fov:40};let n=(t.x0+t.x1)/2,r=(t.z0+t.z1)/2,i=Math.max(t.x1-t.x0,t.z1-t.z0,6);return{id:`hero`,label:`Vista`,icon:`🏡`,fov:40,position:[n+i*.75,i*1.05+3,r+i*1.3],target:[n,.6,r]}}function R(e,t,n,r){let{camera:i,gl:a,raycaster:o,controls:s}=m(),c=(0,N.useRef)(null),l=(0,N.useRef)(e);(0,N.useEffect)(()=>{l.current=e},[e]);let d=(0,N.useMemo)(()=>new C(new u(0,1,0),-t),[t]),f=(0,N.useCallback)((e,t)=>{let n=a.domElement.getBoundingClientRect(),r=new p((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);o.setFromCamera(r,i);let s=new u;return o.ray.intersectPlane(d,s)?s:null},[i,a,o,d]),h=(0,N.useRef)(()=>{}),g=(0,N.useCallback)((e,t)=>{n(e);let i=l.current.find(t=>t.id===e),a=f(t.nativeEvent.clientX,t.nativeEvent.clientY);if(!i||!a)return;c.current={id:e,offX:i.x-a.x,offZ:i.z-a.z};let o=s;o&&(o.enabled=!1),document.body.style.cursor=`grabbing`;let u=e=>{let t=c.current;if(!t)return;let n=f(e.clientX,e.clientY);n&&r(t.id,{x:n.x+t.offX,z:n.z+t.offZ})},d=()=>h.current();h.current=()=>{c.current=null,o&&(o.enabled=!0),document.body.style.cursor=``,window.removeEventListener(`pointermove`,u),window.removeEventListener(`pointerup`,d),window.removeEventListener(`pointercancel`,d)},window.addEventListener(`pointermove`,u),window.addEventListener(`pointerup`,d),window.addEventListener(`pointercancel`,d)},[s,f,r,n]);return(0,N.useEffect)(()=>()=>h.current(),[]),g}function z({rooms:e,offsets:t,activeFloor:n,selectedId:r,onSelect:i,onMove:a,wallMode:o,showCeiling:s,night:c}){let l=R(e,t[n]??0,i,a);return(0,I.jsx)(I.Fragment,{children:e.filter(e=>e.floor<=n).map(e=>(0,I.jsx)(g,{room:e,selected:e.id===r,wallMode:o,y:t[e.floor]??0,ghost:e.floor<n,showCeiling:s,night:c,onPointerDown:l},e.id))})}var B=(0,N.forwardRef)(function({rooms:e,floors:t,activeFloor:r,onActiveFloor:s,selectedId:c,onSelect:u,onMove:d,onReady:f},p){let m=(0,N.useRef)(null),h=(0,N.useRef)(!1),g=(0,N.useRef)(null),_=(0,N.useRef)(e);(0,N.useEffect)(()=>{_.current=e},[e]);let[S,C]=(0,N.useState)(!1),[A,j]=(0,N.useState)(`glass`),[M,P]=(0,N.useState)(!1),[R,B]=(0,N.useState)(!1),[V,H]=(0,N.useState)(()=>L(e)),U=(0,N.useMemo)(()=>x(O()??v()),[]),W=(0,N.useCallback)(()=>H(L(_.current)),[]);(0,N.useImperativeHandle)(p,()=>({captureScreenshot:()=>g.current?.domElement.toDataURL(`image/png`)??null,frameAll:W}),[W]);let G=(0,N.useRef)(e.length>0);(0,N.useEffect)(()=>{!G.current&&e.length>0&&W(),G.current=e.length>0},[e.length,W]);let K=(0,N.useMemo)(()=>({sunHour:R?22:13,sunMonth:6,latitude:-31.4}),[R]),q=y(K.sunHour,K.sunMonth,K.latitude).isNight,J=(0,N.useMemo)(()=>{let t=a(e);return t?Math.max(18,Math.max(t.x1-t.x0,t.z1-t.z0)*.8+6):18},[e]),Y=(0,N.useMemo)(()=>o(e,t),[e,t]),X=(e,t,n)=>(0,I.jsx)(`button`,{onClick:()=>j(e),title:n,"aria-label":n,className:`px-2 h-7 rounded-lg text-[10px] font-semibold touch-manipulation transition-colors
        ${A===e?`bg-black text-white`:`text-gray-500 active:bg-gray-100`}`,children:t},e);return(0,I.jsxs)(`div`,{className:`relative w-full h-96 rounded-2xl overflow-hidden touch-none select-none`,style:{background:q?`#0A0E1A`:`#E8EEF5`},children:[!S&&(0,I.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center z-10 pointer-events-none`,children:(0,I.jsx)(`p`,{className:`text-[11px] text-gray-500`,children:`Preparando tus cubos…`})}),S&&e.length===0&&(0,I.jsxs)(`div`,{className:`absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none text-center px-8`,children:[(0,I.jsx)(`span`,{className:`text-4xl mb-2`,children:`🧊`}),(0,I.jsx)(`p`,{className:`text-sm font-semibold text-gray-700`,children:`Agregá tu primer ambiente`}),(0,I.jsx)(`p`,{className:`text-xs text-gray-500 mt-1`,children:`Cada ambiente es un cubo que podés mover y configurar`})]}),(0,I.jsxs)(`div`,{className:`absolute top-3 left-3 z-10 flex flex-col gap-1.5`,children:[(0,I.jsxs)(`div`,{className:`flex gap-0.5 bg-white/90 backdrop-blur rounded-xl shadow border border-gray-200 p-1`,children:[X(`glass`,`🔲 Vidrio`,`Paredes transparentes`),X(`solid`,`🧱 Sólido`,`Paredes sólidas`),X(`low`,`▁ Bajos`,`Muros bajos (vista Sims)`)]}),(0,I.jsxs)(`div`,{className:`flex gap-1`,children:[(0,I.jsx)(`button`,{onClick:()=>P(e=>!e),"aria-pressed":M,className:`px-2.5 h-7 rounded-full text-[10px] font-semibold shadow border touch-manipulation
              ${M?`bg-black text-white border-black`:`bg-white/90 text-gray-600 border-gray-200`}`,children:`🏠 Techo`}),(0,I.jsx)(`button`,{onClick:()=>B(e=>!e),"aria-pressed":R,className:`px-2.5 h-7 rounded-full text-[10px] font-semibold shadow border touch-manipulation
              ${R?`bg-black text-white border-black`:`bg-white/90 text-gray-600 border-gray-200`}`,children:`🌙 Noche`})]})]}),t>1&&(0,I.jsx)(`div`,{className:`absolute top-3 right-3 z-10 flex flex-col gap-0.5 bg-white/90 backdrop-blur rounded-xl shadow border border-gray-200 p-1`,children:Array.from({length:t},(e,n)=>t-1-n).map(e=>(0,I.jsx)(`button`,{onClick:()=>s(e),"aria-pressed":e===r,className:`px-2 h-7 rounded-lg text-[10px] font-semibold touch-manipulation text-left
                ${e===r?`bg-black text-white`:`text-gray-500 active:bg-gray-100`}`,children:i(e)},e))}),(0,I.jsx)(`div`,{className:`absolute bottom-3 left-3 z-10 flex gap-1.5`,children:(0,I.jsx)(`button`,{onClick:W,"aria-label":`Encuadrar todos los ambientes`,className:`px-2.5 h-7 rounded-full text-[10px] font-semibold shadow border bg-white/90 text-gray-600 border-gray-200 touch-manipulation`,children:`⌖ Encuadrar`})}),S&&e.length>0&&(0,I.jsx)(`div`,{className:`absolute bottom-3 left-1/2 -translate-x-1/2 z-10 bg-black/55 backdrop-blur-sm text-white
          text-[10px] px-2.5 py-1 rounded-full pointer-events-none whitespace-nowrap`,children:`✋ Arrastrá un cubo para moverlo · Arrastrá el fondo para rotar la vista`}),(0,I.jsxs)(`div`,{className:`absolute bottom-3 right-3 z-10 flex flex-col bg-white/90 backdrop-blur rounded-xl shadow border border-gray-200 overflow-hidden`,children:[(0,I.jsx)(`button`,{onClick:()=>{m.current?.dollyIn(1.18),m.current?.update()},"aria-label":`Acercar`,className:`w-8 h-8 flex items-center justify-center text-gray-700 active:bg-gray-100`,children:`+`}),(0,I.jsx)(`div`,{className:`h-px bg-gray-200`}),(0,I.jsx)(`button`,{onClick:()=>{m.current?.dollyOut(1.18),m.current?.update()},"aria-label":`Alejar`,className:`w-8 h-8 flex items-center justify-center text-gray-700 active:bg-gray-100`,children:`−`})]}),(0,I.jsx)(n,{label:`modular-viewer`,fallback:(0,I.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center text-center px-6 text-sm text-gray-600`,children:`No pudimos cargar la vista 3D. Tu diseño y el presupuesto se siguen calculando.`}),children:(0,I.jsxs)(k,{dpr:U.dpr,frameloop:`demand`,shadows:U.tier===`low`?`basic`:`soft`,camera:{position:V.position,fov:V.fov,near:.1,far:300},gl:{antialias:!0,toneMapping:4,toneMappingExposure:q?.9:1.05,preserveDrawingBuffer:!0},onCreated:({gl:e})=>{e.outputColorSpace=l,g.current=e,C(!0),f?.()},onPointerMissed:()=>u(null),children:[(0,I.jsx)(`fog`,{attach:`fog`,args:[q?`#0A0E1A`:`#E8EEF5`,60,140]}),(0,I.jsx)(b,{config:K,quality:U,shadowExtent:J}),(0,I.jsx)(E,{isNight:q,quality:U}),q&&(0,I.jsx)(`ambientLight`,{intensity:.55,color:`#8FA6D8`}),(0,I.jsxs)(`mesh`,{rotation:[-Math.PI/2,0,0],position:[0,-.1,0],receiveShadow:!0,children:[(0,I.jsx)(`circleGeometry`,{args:[160,48]}),(0,I.jsx)(`meshStandardMaterial`,{color:q?`#161C2B`:`#D3DCC8`,roughness:1})]}),(0,I.jsx)(F,{position:[0,-.095,0],args:[10,10],cellSize:.5,cellThickness:.5,sectionSize:2.5,sectionThickness:1,cellColor:q?`#2B3550`:`#BFC9B3`,sectionColor:q?`#3C4A70`:`#A5B195`,fadeDistance:55,fadeStrength:1.5,infiniteGrid:!0}),(0,I.jsx)(z,{rooms:e,offsets:Y,activeFloor:r,selectedId:c,onSelect:u,onMove:d,wallMode:A,showCeiling:M,night:q}),(0,I.jsx)(T,{ref:m,makeDefault:!0,enableDamping:!0,dampingFactor:.08,minDistance:3,maxDistance:90,minPolarAngle:.1,maxPolarAngle:Math.PI/2.05,rotateSpeed:.5,zoomSpeed:.7,target:V.target,onStart:()=>{h.current=!1}}),(0,I.jsx)(D,{view:V,controlsRef:m,transitioningRef:h}),(0,I.jsx)(w,{quality:U})]})})]})});export{B as default};