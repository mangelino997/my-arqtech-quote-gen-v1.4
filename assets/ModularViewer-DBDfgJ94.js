import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{C as t,F as n,M as r,N as i,d as a,k as o,t as s}from"./ErrorBoundary-BgQgYlwE.js";import{i as c,n as l,r as u,t as d}from"./index-CdTLHtmS.js";import{At as f,B as p,Bt as m,C as h,D as g,Ft as _,Ht as v,I as y,Kt as b,M as x,Ut as S,V as C,Vt as w,W as T,Y as E,_ as D,a as O,at as ee,b as k,bt as A,d as te,g as j,h as ne,i as re,kt as ie,l as ae,m as oe,n as se,ot as M,p as ce,r as le,st as N,t as ue,u as de,v as P,w as F,x as I,y as fe,zt as pe}from"./CameraRig-Def8f4gw.js";var L=j>=125?`uv1`:`uv2`,R=new g,z=new v,B=class extends p{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new y([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new y([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new C(t,6,1);return this.setAttribute(`instanceStart`,new T(n,3,0)),this.setAttribute(`instanceEnd`,new T(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let r=new C(n,t*2,1);return this.setAttribute(`instanceColorStart`,new T(r,t,0)),this.setAttribute(`instanceColorEnd`,new T(r,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new b(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new g);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),R.setFromBufferAttribute(t),this.boundingBox.union(R))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)z.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(z)),z.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(z));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}applyMatrix(e){return console.warn(`THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4().`),this.applyMatrix4(e)}},me=class extends B{constructor(){super(),this.isLineGeometry=!0,this.type=`LineGeometry`}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,r=new Float32Array(2*n);if(t===3)for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5];else for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5],r[2*i+6]=e[i+6],r[2*i+7]=e[i+7];return super.setColors(r,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}},V=class extends f{constructor(e){super({type:`LineMaterial`,uniforms:m.clone(m.merge([F.common,F.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new w(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${j>=154?`colorspace_fragment`:`encodings_fragment`}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA=`1`:delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return`WORLD_UNITS`in this.defines},set:function(e){e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return`USE_DASH`in this.defines},set(e){!!e!=`USE_DASH`in this.defines&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return`USE_ALPHA_TO_COVERAGE`in this.defines},set:function(e){!!e!=`USE_ALPHA_TO_COVERAGE`in this.defines&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE=``,this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}},H=new S,he=new v,ge=new v,U=new S,W=new S,G=new S,_e=new v,ve=new M,K=new E,ye=new v,q=new g,J=new _,Y=new S,X,Z;function be(e,t,n){return Y.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),Y.multiplyScalar(1/Y.w),Y.x=Z/n.width,Y.y=Z/n.height,Y.applyMatrix4(e.projectionMatrixInverse),Y.multiplyScalar(1/Y.w),Math.abs(Math.max(Y.x,Y.y))}function xe(e,t){let n=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let r=0,s=o;r<s;r++){K.start.fromBufferAttribute(i,r),K.end.fromBufferAttribute(a,r),K.applyMatrix4(n);let o=new v,s=new v;X.distanceSqToSegment(K.start,K.end,s,o),s.distanceTo(o)<Z*.5&&t.push({point:s,pointOnLine:o,distance:X.origin.distanceTo(s),object:e,face:null,faceIndex:r,uv:null,[L]:null})}}function Se(e,t,n){let r=t.projectionMatrix,i=e.material.resolution,a=e.matrixWorld,o=e.geometry,s=o.attributes.instanceStart,c=o.attributes.instanceEnd,l=Math.min(o.instanceCount,s.count),u=-t.near;X.at(1,G),G.w=1,G.applyMatrix4(t.matrixWorldInverse),G.applyMatrix4(r),G.multiplyScalar(1/G.w),G.x*=i.x/2,G.y*=i.y/2,G.z=0,_e.copy(G),ve.multiplyMatrices(t.matrixWorldInverse,a);for(let t=0,o=l;t<o;t++){if(U.fromBufferAttribute(s,t),W.fromBufferAttribute(c,t),U.w=1,W.w=1,U.applyMatrix4(ve),W.applyMatrix4(ve),U.z>u&&W.z>u)continue;if(U.z>u){let e=U.z-W.z,t=(U.z-u)/e;U.lerp(W,t)}else if(W.z>u){let e=W.z-U.z,t=(W.z-u)/e;W.lerp(U,t)}U.applyMatrix4(r),W.applyMatrix4(r),U.multiplyScalar(1/U.w),W.multiplyScalar(1/W.w),U.x*=i.x/2,U.y*=i.y/2,W.x*=i.x/2,W.y*=i.y/2,K.start.copy(U),K.start.z=0,K.end.copy(W),K.end.z=0;let o=K.closestPointToPointParameter(_e,!0);K.at(o,ye);let l=ee.lerp(U.z,W.z,o),d=l>=-1&&l<=1,f=_e.distanceTo(ye)<Z*.5;if(d&&f){K.start.fromBufferAttribute(s,t),K.end.fromBufferAttribute(c,t),K.start.applyMatrix4(a),K.end.applyMatrix4(a);let r=new v,i=new v;X.distanceSqToSegment(K.start,K.end,i,r),n.push({point:i,pointOnLine:r,distance:X.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,[L]:null})}}}var Ce=class extends N{constructor(e=new B,t=new V({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)he.fromBufferAttribute(t,e),ge.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+he.distanceTo(ge);let i=new C(r,2,1);return e.setAttribute(`instanceDistanceStart`,new T(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new T(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`);let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;X=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;Z=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),J.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?Z*.5:be(r,Math.max(r.near,J.distanceToPoint(X.origin)),s.resolution),J.radius+=c,X.intersectsSphere(J)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),q.copy(o.boundingBox).applyMatrix4(a);let l;l=n?Z*.5:be(r,Math.max(r.near,q.distanceToPoint(X.origin)),s.resolution),q.expandByScalar(l),X.intersectsBox(q)!==!1&&(n?xe(this,t):Se(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(H),this.material.uniforms.resolution.value.set(H.z,H.w))}},we=class extends Ce{constructor(e=new me,t=new V({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type=`Line2`}},Q=e(n()),Te=Q.forwardRef(function({points:e,color:t=16777215,vertexColors:n,linewidth:r,lineWidth:i,segments:a,dashed:o,...s},c){var l;let u=h(e=>e.size),d=Q.useMemo(()=>a?new Ce:new we,[a]),[f]=Q.useState(()=>new V),p=(n==null||(l=n[0])==null?void 0:l.length)===4?4:3,m=Q.useMemo(()=>{let r=a?new B:new me,i=e.map(e=>{let t=Array.isArray(e);return e instanceof v||e instanceof S?[e.x,e.y,e.z]:e instanceof w?[e.x,e.y,0]:t&&e.length===3?[e[0],e[1],e[2]]:t&&e.length===2?[e[0],e[1],0]:e});if(r.setPositions(i.flat()),n){t=16777215;let e=n.map(e=>e instanceof x?e.toArray():e);r.setColors(e.flat(),p)}return r},[e,a,n,p]);return Q.useLayoutEffect(()=>{d.computeLineDistances()},[e,d]),Q.useLayoutEffect(()=>{o?f.defines.USE_DASH=``:delete f.defines.USE_DASH,f.needsUpdate=!0},[o,f]),Q.useEffect(()=>()=>{m.dispose(),f.dispose()},[m]),Q.createElement(`primitive`,P({object:d,ref:c},s),Q.createElement(`primitive`,{object:m,attach:`geometry`}),Q.createElement(`primitive`,P({object:f,attach:`material`,color:t,vertexColors:!!n,resolution:[u.width,u.height],linewidth:r??i??1,dashed:o,transparent:p===4},s)))});function Ee(e,t,n,r){var i=class extends f{constructor(i){super({vertexShader:t,fragmentShader:n,...i});for(let t in e)this.uniforms[t]=new pe(e[t]),Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(e){this.uniforms[t].value=e}});this.uniforms=m.clone(this.uniforms),r?.(this)}};return i.key=ee.generateUUID(),i}var De=Ee({cellSize:.5,sectionSize:1,fadeDistance:100,fadeStrength:1,fadeFrom:1,cellThickness:.5,sectionThickness:1,cellColor:new x,sectionColor:new x,infiniteGrid:!1,followCamera:!1,worldCamProjPosition:new v,worldPlanePosition:new v},`
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
      #include <${ne>=154?`colorspace_fragment`:`encodings_fragment`}>
    }
  `),Oe=Q.forwardRef(({args:e,cellColor:t=`#000000`,sectionColor:n=`#2080ff`,cellSize:r=.5,sectionSize:i=1,followCamera:a=!1,infiniteGrid:o=!1,fadeDistance:s=100,fadeStrength:c=1,fadeFrom:l=1,cellThickness:u=.5,sectionThickness:d=1,side:f=1,...p},m)=>{k({GridMaterial:De});let h=Q.useRef(null);Q.useImperativeHandle(m,()=>h.current,[]);let g=new A,_=new v(0,1,0),y=new v(0,0,0);I(e=>{g.setFromNormalAndCoplanarPoint(_,y).applyMatrix4(h.current.matrixWorld);let t=h.current.material,n=t.uniforms.worldCamProjPosition,r=t.uniforms.worldPlanePosition;g.projectPoint(e.camera.position,n.value),r.value.set(0,0,0).applyMatrix4(h.current.matrixWorld)});let b={cellSize:r,sectionSize:i,cellColor:t,sectionColor:n,cellThickness:u,sectionThickness:d},x={fadeDistance:s,fadeStrength:c,fadeFrom:l,infiniteGrid:o,followCamera:a};return Q.createElement(`mesh`,P({ref:h,frustumCulled:!1},p),Q.createElement(`gridMaterial`,P({transparent:!0,"extensions-derivatives":!0,side:f},b,x)),Q.createElement(`planeGeometry`,{args:e}))}),$=i(),ke={north:[0,-1],south:[0,1],east:[1,0],west:[-1,0]};function Ae({room:e,y:n,activeSide:r,onActiveSide:i,onResize:s}){let{camera:c,gl:u,raycaster:d,controls:f}=h(),p=(0,Q.useRef)(e);(0,Q.useEffect)(()=>{p.current=e},[e]);let m=a[e.kind],[g,_]=(0,Q.useState)(null),y=(e,t)=>{t.stopPropagation();let r=f;r&&(r.enabled=!1);let i=new A(new v(0,1,0),-n),[a,o]=ke[e],l=p.current.rot*Math.PI/2,m=Math.round(Math.cos(l)),h=Math.round(Math.sin(l)),g=a*m+o*h,_=-a*h+o*m,y=t=>{let n=u.domElement.getBoundingClientRect(),r=new w((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1);d.setFromCamera(r,c);let a=new v;if(!d.ray.intersectPlane(i,a))return;let o=p.current,l=(a.x-o.x)*g+(a.z-o.z)*_,f=e===`east`||e===`west`?o.w:o.d;s(o.id,e,Math.round((l+f/2)*2)/2)},b=()=>{r&&(r.enabled=!0),window.removeEventListener(`pointermove`,y),window.removeEventListener(`pointerup`,b),window.removeEventListener(`pointercancel`,b)};window.addEventListener(`pointermove`,y),window.addEventListener(`pointerup`,b),window.addEventListener(`pointercancel`,b)},b=e.kind!==`stairs`,x=!m.open&&e.kind!==`stairs`;return(0,$.jsx)(`group`,{position:[e.x,n,e.z],rotation:[0,e.rot*Math.PI/2,0],children:o.map(n=>{let[a,o]=ke[n],s=(a===0?e.d:e.w)/2,c=l(e.rot,n),u=r===c;return(0,$.jsxs)(`group`,{children:[b&&(0,$.jsxs)(`mesh`,{position:[a*s,.18,o*s],onPointerDown:e=>y(n,e),onPointerOver:()=>{_(n),document.body.style.cursor=`ew-resize`},onPointerOut:()=>{_(null),document.body.style.cursor=``},children:[(0,$.jsx)(`sphereGeometry`,{args:[g===n?.3:.22,16,12]}),(0,$.jsx)(`meshBasicMaterial`,{color:`#FF6A3D`,depthTest:!1,transparent:!0,opacity:.95})]}),(0,$.jsx)(D,{position:[a*(s+.85),.3,o*(s+.85)],center:!0,zIndexRange:[15,0],children:(0,$.jsxs)(`button`,{onClick:e=>{e.nativeEvent.stopPropagation(),x&&i(u?null:c)},onPointerDown:e=>e.nativeEvent.stopPropagation(),onPointerUp:e=>e.nativeEvent.stopPropagation(),"aria-label":`Lado ${c}`,className:`w-8 h-8 rounded-full text-[11px] font-extrabold shadow border touch-manipulation select-none
                  ${u?`bg-black text-white border-black`:`bg-white/95 text-gray-800 border-gray-300`}`,children:[t[c],x&&(e.windows[n]>0||e.door[n])?(0,$.jsxs)(`sup`,{className:`text-[8px]`,children:[e.door[n]?`🚪`:``,e.windows[n]>0?e.windows[n]:``]}):null]})})]},n)})})}function je({rooms:e}){let n=c(e);if(!n)return null;let r=(n.x0+n.x1)/2,i=(n.z0+n.z1)/2,a=2.2,o=[[`north`,r,n.z0-a],[`south`,r,n.z1+a],[`east`,n.x1+a,i],[`west`,n.x0-a,i]];return(0,$.jsx)($.Fragment,{children:o.map(([e,n,r])=>(0,$.jsx)(D,{position:[n,.05,r],center:!0,zIndexRange:[5,0],style:{pointerEvents:`none`},children:(0,$.jsx)(`span`,{className:`px-1.5 py-0.5 rounded-full bg-black/60 text-white text-[10px] font-bold select-none`,children:t[e]})},e))})}function Me(e){let t=c(e);if(!t)return{id:`hero`,label:`Vista`,icon:`🏡`,position:[7,7,9],target:[0,.8,0],fov:40};let n=(t.x0+t.x1)/2,r=(t.z0+t.z1)/2,i=typeof window<`u`&&window.innerWidth<window.innerHeight,a=Math.max(t.x1-t.x0,t.z1-t.z0,6)*(i?1.45:1);return{id:`hero`,label:`Vista`,icon:`🏡`,fov:40,position:[n+a*.75,a*1.05+3,r+a*1.3],target:[n,.6,r]}}function Ne(e,t,n,r,i,a,o){let{camera:s,gl:c,raycaster:l,controls:u}=h(),d=(0,Q.useRef)(null),f=(0,Q.useRef)(e);(0,Q.useEffect)(()=>{f.current=e},[e]);let p=(0,Q.useMemo)(()=>new A(new v(0,1,0),-t),[t]),m=(0,Q.useCallback)((e,t)=>{let n=c.domElement.getBoundingClientRect(),r=new w((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);l.setFromCamera(r,s);let i=new v;return l.ray.intersectPlane(p,i)?i:null},[s,c,l,p]),g=(0,Q.useRef)(()=>{}),_=(0,Q.useCallback)((e,t)=>{let s=t.nativeEvent.shiftKey||t.nativeEvent.ctrlKey||t.nativeEvent.metaKey||r;if(i(e,s),!n||s)return;let c=f.current.find(t=>t.id===e),l=m(t.nativeEvent.clientX,t.nativeEvent.clientY);if(!c||!l)return;o(e),d.current={id:e,offX:c.x-l.x,offZ:c.z-l.z};let p=u;p&&(p.enabled=!1),document.body.style.cursor=`grabbing`;let h=e=>{let t=d.current;if(!t)return;let n=m(e.clientX,e.clientY);n&&a(t.id,{x:n.x+t.offX,z:n.z+t.offZ})},_=()=>g.current();g.current=()=>{d.current=null,o(null),p&&(p.enabled=!0),document.body.style.cursor=``,window.removeEventListener(`pointermove`,h),window.removeEventListener(`pointerup`,_),window.removeEventListener(`pointercancel`,_)},window.addEventListener(`pointermove`,h),window.addEventListener(`pointerup`,_),window.addEventListener(`pointercancel`,_)},[u,m,a,i,o,n,r]);return(0,Q.useEffect)(()=>()=>g.current(),[]),_}function Pe({rooms:e,offsets:t,activeFloor:n,selectedIds:r,multi:i,canDrag:a,onSelect:o,onMove:s,wallMode:c,showCeiling:l,night:d}){let[f,p]=(0,Q.useState)(null),m=Ne(e,t[n]??0,a,i,o,s,p),h=(0,Q.useMemo)(()=>f?u(e,f):[],[e,f]),g=(t[n]??0)+.06;return(0,$.jsxs)($.Fragment,{children:[e.filter(e=>e.floor<=n).map(e=>(0,$.jsx)(O,{room:e,selected:r.includes(e.id),wallMode:c,y:t[e.floor]??0,ghost:e.floor<n,showCeiling:l,night:d,onPointerDown:m},e.id)),h.map((e,t)=>(0,$.jsx)(Te,{color:`#FF6A3D`,lineWidth:1.5,dashed:!0,dashSize:.25,gapSize:.15,points:e.axis===`x`?[[e.at,g,e.from-.6],[e.at,g,e.to+.6]]:[[e.from-.6,g,e.at],[e.to+.6,g,e.at]]},t))]})}var Fe=(0,Q.forwardRef)(function({rooms:e,floors:t,activeFloor:n,onActiveFloor:i,selectedIds:a,multi:o,onSelect:l,onMove:u,onReady:f,editor:p,activeSide:m,onActiveSide:h,onResize:g},_){let v=(0,Q.useRef)(null),y=(0,Q.useRef)(!1),b=(0,Q.useRef)(null),x=(0,Q.useRef)(e);(0,Q.useEffect)(()=>{x.current=e},[e]);let[S,C]=(0,Q.useState)(!1),[w,T]=(0,Q.useState)(`glass`),[E,D]=(0,Q.useState)(!1),[O,ee]=(0,Q.useState)(!1),[k,A]=(0,Q.useState)(!0),[j,ne]=(0,Q.useState)(()=>Me(e)),M=(0,Q.useMemo)(()=>de(te()??ae()),[]),N=(0,Q.useCallback)(()=>ne(Me(x.current)),[]);(0,Q.useImperativeHandle)(_,()=>({captureScreenshot:()=>b.current?.domElement.toDataURL(`image/png`)??null,frameAll:N}),[N]);let P=(0,Q.useRef)(e.length>0);(0,Q.useEffect)(()=>{!P.current&&e.length>0&&N(),P.current=e.length>0},[e.length,N]);let F=(0,Q.useMemo)(()=>({sunHour:O?22:13,sunMonth:6,latitude:-31.4}),[O]),I=ce(F.sunHour,F.sunMonth,F.latitude).isNight,pe=(0,Q.useMemo)(()=>{let t=c(e);return t?Math.max(18,Math.max(t.x1-t.x0,t.z1-t.z0)*.8+6):18},[e]),L=(0,Q.useMemo)(()=>d(e,t),[e,t]),R=(e,t,n)=>(0,$.jsx)(`button`,{onClick:()=>T(e),title:n,"aria-label":n,className:`px-2 h-7 rounded-lg text-[10px] font-semibold touch-manipulation transition-colors
        ${w===e?`bg-black text-white`:`text-gray-500 active:bg-gray-100`}`,children:t},e),z=a.length===1?e.find(e=>e.id===a[0]):void 0;return(0,$.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,$.jsxs)(`div`,{className:`relative w-full h-[min(68vh,620px)] min-h-[380px] rounded-2xl overflow-hidden touch-none select-none`,style:{background:I?`#0A0E1A`:`#E8EEF5`},children:[!S&&(0,$.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center z-10 pointer-events-none`,children:(0,$.jsx)(`p`,{className:`text-[11px] text-gray-500`,children:`Preparando tus cubos…`})}),S&&e.length===0&&(0,$.jsxs)(`div`,{className:`absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none text-center px-8`,children:[(0,$.jsx)(`span`,{className:`text-4xl mb-2`,children:`🧊`}),(0,$.jsx)(`p`,{className:`text-sm font-semibold text-gray-700`,children:`Agregá tu primer ambiente`}),(0,$.jsx)(`p`,{className:`text-xs text-gray-500 mt-1`,children:`Cada ambiente es un cubo que podés mover y configurar`})]}),(0,$.jsxs)(`div`,{className:`absolute top-3 left-3 z-10 flex flex-col gap-1.5`,children:[(0,$.jsxs)(`div`,{className:`flex gap-0.5 bg-white/90 backdrop-blur rounded-xl shadow border border-gray-200 p-1`,children:[R(`glass`,`🔲 Vidrio`,`Paredes transparentes`),R(`solid`,`🧱 Sólido`,`Paredes sólidas`),R(`low`,`▁ Bajos`,`Muros bajos (vista Sims)`)]}),(0,$.jsxs)(`div`,{className:`flex gap-1`,children:[(0,$.jsx)(`button`,{onClick:()=>D(e=>!e),"aria-pressed":E,className:`px-2.5 h-7 rounded-full text-[10px] font-semibold shadow border touch-manipulation
              ${E?`bg-black text-white border-black`:`bg-white/90 text-gray-600 border-gray-200`}`,children:`🏠 Techo`}),(0,$.jsx)(`button`,{onClick:()=>ee(e=>!e),"aria-pressed":O,className:`px-2.5 h-7 rounded-full text-[10px] font-semibold shadow border touch-manipulation
              ${O?`bg-black text-white border-black`:`bg-white/90 text-gray-600 border-gray-200`}`,children:`🌙 Noche`})]})]}),t>1&&(0,$.jsx)(`div`,{className:`absolute top-3 right-3 z-10 flex flex-col gap-0.5 bg-white/90 backdrop-blur rounded-xl shadow border border-gray-200 p-1`,children:Array.from({length:t},(e,n)=>t-1-n).map(e=>(0,$.jsx)(`button`,{onClick:()=>i(e),"aria-pressed":e===n,className:`px-2 h-7 rounded-lg text-[10px] font-semibold touch-manipulation text-left
                ${e===n?`bg-black text-white`:`text-gray-500 active:bg-gray-100`}`,children:r(e)},e))}),(0,$.jsxs)(`div`,{className:`absolute bottom-3 right-3 z-10 flex flex-col bg-white/90 backdrop-blur rounded-xl shadow border border-gray-200 overflow-hidden`,children:[(0,$.jsx)(`button`,{onClick:()=>{v.current?.dollyIn(1.18),v.current?.update()},"aria-label":`Acercar`,className:`w-8 h-8 flex items-center justify-center text-gray-700 active:bg-gray-100`,children:`+`}),(0,$.jsx)(`div`,{className:`h-px bg-gray-200`}),(0,$.jsx)(`button`,{onClick:()=>{v.current?.dollyOut(1.18),v.current?.update()},"aria-label":`Alejar`,className:`w-8 h-8 flex items-center justify-center text-gray-700 active:bg-gray-100`,children:`−`})]}),(0,$.jsx)(s,{label:`modular-viewer`,fallback:(0,$.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center text-center px-6 text-sm text-gray-600`,children:`No pudimos cargar la vista 3D. Tu diseño y el presupuesto se siguen calculando.`}),children:(0,$.jsxs)(fe,{dpr:M.dpr,frameloop:`demand`,shadows:M.tier===`low`?`basic`:`soft`,camera:{position:j.position,fov:j.fov,near:.1,far:300},gl:{antialias:!0,toneMapping:4,toneMappingExposure:I?.9:1.05,preserveDrawingBuffer:!0},onCreated:({gl:e})=>{e.outputColorSpace=ie,b.current=e,C(!0),f?.()},onPointerMissed:()=>l(null),children:[(0,$.jsx)(`fog`,{attach:`fog`,args:[I?`#0A0E1A`:`#E8EEF5`,60,140]}),(0,$.jsx)(re,{config:F,quality:M,shadowExtent:pe}),(0,$.jsx)(le,{isNight:I,quality:M}),I&&(0,$.jsx)(`ambientLight`,{intensity:.55,color:`#8FA6D8`}),(0,$.jsxs)(`mesh`,{rotation:[-Math.PI/2,0,0],position:[0,-.1,0],receiveShadow:!0,children:[(0,$.jsx)(`circleGeometry`,{args:[160,48]}),(0,$.jsx)(`meshStandardMaterial`,{color:I?`#161C2B`:`#D3DCC8`,roughness:1})]}),(0,$.jsx)(Oe,{position:[0,-.095,0],args:[10,10],cellSize:.5,cellThickness:.5,sectionSize:2.5,sectionThickness:1,cellColor:I?`#2B3550`:`#BFC9B3`,sectionColor:I?`#3C4A70`:`#A5B195`,fadeDistance:55,fadeStrength:1.5,infiniteGrid:!0}),(0,$.jsx)(Pe,{rooms:e,offsets:L,activeFloor:n,selectedIds:a,multi:o,canDrag:k,onSelect:l,onMove:u,wallMode:w,showCeiling:E,night:I}),(0,$.jsx)(je,{rooms:e}),z&&z.floor<=n&&(0,$.jsx)(Ae,{room:z,y:L[z.floor]??0,activeSide:m,onActiveSide:h,onResize:g}),(0,$.jsx)(oe,{ref:v,makeDefault:!0,enableDamping:!0,dampingFactor:.08,minDistance:3,maxDistance:90,minPolarAngle:.1,maxPolarAngle:Math.PI/2.05,rotateSpeed:.5,zoomSpeed:.7,target:j.target,onStart:()=>{y.current=!1}}),(0,$.jsx)(ue,{view:j,controlsRef:v,transitioningRef:y}),(0,$.jsx)(se,{quality:M})]})}),p]}),(0,$.jsxs)(`div`,{className:`flex items-center gap-1.5 flex-wrap`,children:[(0,$.jsx)(`button`,{onClick:N,"aria-label":`Encuadrar todos los ambientes`,className:`px-3 h-8 rounded-full text-[11px] font-semibold border bg-white text-gray-700 border-gray-200 touch-manipulation`,children:`⌖ Encuadrar`}),(0,$.jsx)(`button`,{onClick:()=>A(e=>!e),"aria-pressed":k,"aria-label":k?`Modo mover: arrastrar un cubo lo mueve. Tocar para pasar a modo cámara`:`Modo cámara: arrastrar rota la vista. Tocar para pasar a modo mover`,className:`px-3 h-8 rounded-full text-[11px] font-semibold border touch-manipulation
          ${k?`bg-white text-gray-700 border-gray-200`:`bg-black text-white border-black`}`,children:k?`✋ Mover`:`🎥 Cámara`}),(0,$.jsx)(`span`,{className:`text-[10px] text-gray-400 flex-1 min-w-[140px]`,children:k?`Arrastrá un cubo para moverlo · ● estira una pared · N S E O orientan`:`Modo cámara: arrastrá para rotar la vista`})]})]})});export{Fe as default};