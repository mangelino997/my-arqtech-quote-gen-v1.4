import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{A as t,N as n,j as r,t as i}from"./ErrorBoundary-DPw6YUqg.js";import{n as a,r as o,t as s}from"./index-Brz-8TNz.js";import{At as c,B as l,Bt as u,C as d,D as f,Ft as p,Ht as m,I as h,Kt as g,M as _,Ut as v,V as y,Vt as b,W as x,Y as ee,a as S,at as C,b as w,bt as T,d as te,g as E,h as ne,i as re,kt as ie,l as ae,m as oe,n as se,ot as D,p as ce,r as le,st as ue,t as de,u as fe,v as O,w as k,x as A,y as pe,zt as j}from"./CameraRig-lJfeCx6e.js";var M=E>=125?`uv1`:`uv2`,N=new f,P=new m,F=class extends l{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new h([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new h([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new y(t,6,1);return this.setAttribute(`instanceStart`,new x(n,3,0)),this.setAttribute(`instanceEnd`,new x(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let r=new y(n,t*2,1);return this.setAttribute(`instanceColorStart`,new x(r,t,0)),this.setAttribute(`instanceColorEnd`,new x(r,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new g(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new f);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),N.setFromBufferAttribute(t),this.boundingBox.union(N))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new p),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)P.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(P)),P.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(P));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}applyMatrix(e){return console.warn(`THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4().`),this.applyMatrix4(e)}},me=class extends F{constructor(){super(),this.isLineGeometry=!0,this.type=`LineGeometry`}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,r=new Float32Array(2*n);if(t===3)for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5];else for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5],r[2*i+6]=e[i+6],r[2*i+7]=e[i+7];return super.setColors(r,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}},I=class extends c{constructor(e){super({type:`LineMaterial`,uniforms:u.clone(u.merge([k.common,k.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new b(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
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
					#include <${E>=154?`colorspace_fragment`:`encodings_fragment`}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA=`1`:delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return`WORLD_UNITS`in this.defines},set:function(e){e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return`USE_DASH`in this.defines},set(e){!!e!=`USE_DASH`in this.defines&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return`USE_ALPHA_TO_COVERAGE`in this.defines},set:function(e){!!e!=`USE_ALPHA_TO_COVERAGE`in this.defines&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE=``,this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}},L=new v,R=new m,z=new m,B=new v,V=new v,H=new v,U=new m,W=new D,G=new ee,he=new m,K=new f,q=new p,J=new v,Y,X;function ge(e,t,n){return J.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),J.multiplyScalar(1/J.w),J.x=X/n.width,J.y=X/n.height,J.applyMatrix4(e.projectionMatrixInverse),J.multiplyScalar(1/J.w),Math.abs(Math.max(J.x,J.y))}function _e(e,t){let n=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let r=0,s=o;r<s;r++){G.start.fromBufferAttribute(i,r),G.end.fromBufferAttribute(a,r),G.applyMatrix4(n);let o=new m,s=new m;Y.distanceSqToSegment(G.start,G.end,s,o),s.distanceTo(o)<X*.5&&t.push({point:s,pointOnLine:o,distance:Y.origin.distanceTo(s),object:e,face:null,faceIndex:r,uv:null,[M]:null})}}function ve(e,t,n){let r=t.projectionMatrix,i=e.material.resolution,a=e.matrixWorld,o=e.geometry,s=o.attributes.instanceStart,c=o.attributes.instanceEnd,l=Math.min(o.instanceCount,s.count),u=-t.near;Y.at(1,H),H.w=1,H.applyMatrix4(t.matrixWorldInverse),H.applyMatrix4(r),H.multiplyScalar(1/H.w),H.x*=i.x/2,H.y*=i.y/2,H.z=0,U.copy(H),W.multiplyMatrices(t.matrixWorldInverse,a);for(let t=0,o=l;t<o;t++){if(B.fromBufferAttribute(s,t),V.fromBufferAttribute(c,t),B.w=1,V.w=1,B.applyMatrix4(W),V.applyMatrix4(W),B.z>u&&V.z>u)continue;if(B.z>u){let e=B.z-V.z,t=(B.z-u)/e;B.lerp(V,t)}else if(V.z>u){let e=V.z-B.z,t=(V.z-u)/e;V.lerp(B,t)}B.applyMatrix4(r),V.applyMatrix4(r),B.multiplyScalar(1/B.w),V.multiplyScalar(1/V.w),B.x*=i.x/2,B.y*=i.y/2,V.x*=i.x/2,V.y*=i.y/2,G.start.copy(B),G.start.z=0,G.end.copy(V),G.end.z=0;let o=G.closestPointToPointParameter(U,!0);G.at(o,he);let l=C.lerp(B.z,V.z,o),d=l>=-1&&l<=1,f=U.distanceTo(he)<X*.5;if(d&&f){G.start.fromBufferAttribute(s,t),G.end.fromBufferAttribute(c,t),G.start.applyMatrix4(a),G.end.applyMatrix4(a);let r=new m,i=new m;Y.distanceSqToSegment(G.start,G.end,i,r),n.push({point:i,pointOnLine:r,distance:Y.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,[M]:null})}}}var Z=class extends ue{constructor(e=new F,t=new I({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)R.fromBufferAttribute(t,e),z.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+R.distanceTo(z);let i=new y(r,2,1);return e.setAttribute(`instanceDistanceStart`,new x(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new x(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`);let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;Y=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;X=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),q.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?X*.5:ge(r,Math.max(r.near,q.distanceToPoint(Y.origin)),s.resolution),q.radius+=c,Y.intersectsSphere(q)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),K.copy(o.boundingBox).applyMatrix4(a);let l;l=n?X*.5:ge(r,Math.max(r.near,K.distanceToPoint(Y.origin)),s.resolution),K.expandByScalar(l),Y.intersectsBox(K)!==!1&&(n?_e(this,t):ve(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(L),this.material.uniforms.resolution.value.set(L.z,L.w))}},ye=class extends Z{constructor(e=new me,t=new I({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type=`Line2`}},Q=e(n()),be=Q.forwardRef(function({points:e,color:t=16777215,vertexColors:n,linewidth:r,lineWidth:i,segments:a,dashed:o,...s},c){var l;let u=d(e=>e.size),f=Q.useMemo(()=>a?new Z:new ye,[a]),[p]=Q.useState(()=>new I),h=(n==null||(l=n[0])==null?void 0:l.length)===4?4:3,g=Q.useMemo(()=>{let r=a?new F:new me,i=e.map(e=>{let t=Array.isArray(e);return e instanceof m||e instanceof v?[e.x,e.y,e.z]:e instanceof b?[e.x,e.y,0]:t&&e.length===3?[e[0],e[1],e[2]]:t&&e.length===2?[e[0],e[1],0]:e});if(r.setPositions(i.flat()),n){t=16777215;let e=n.map(e=>e instanceof _?e.toArray():e);r.setColors(e.flat(),h)}return r},[e,a,n,h]);return Q.useLayoutEffect(()=>{f.computeLineDistances()},[e,f]),Q.useLayoutEffect(()=>{o?p.defines.USE_DASH=``:delete p.defines.USE_DASH,p.needsUpdate=!0},[o,p]),Q.useEffect(()=>()=>{g.dispose(),p.dispose()},[g]),Q.createElement(`primitive`,O({object:f,ref:c},s),Q.createElement(`primitive`,{object:g,attach:`geometry`}),Q.createElement(`primitive`,O({object:p,attach:`material`,color:t,vertexColors:!!n,resolution:[u.width,u.height],linewidth:r??i??1,dashed:o,transparent:h===4},s)))});function xe(e,t,n,r){var i=class extends c{constructor(i){super({vertexShader:t,fragmentShader:n,...i});for(let t in e)this.uniforms[t]=new j(e[t]),Object.defineProperty(this,t,{get(){return this.uniforms[t].value},set(e){this.uniforms[t].value=e}});this.uniforms=u.clone(this.uniforms),r?.(this)}};return i.key=C.generateUUID(),i}var Se=xe({cellSize:.5,sectionSize:1,fadeDistance:100,fadeStrength:1,fadeFrom:1,cellThickness:.5,sectionThickness:1,cellColor:new _,sectionColor:new _,infiniteGrid:!1,followCamera:!1,worldCamProjPosition:new m,worldPlanePosition:new m},`
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
  `),Ce=Q.forwardRef(({args:e,cellColor:t=`#000000`,sectionColor:n=`#2080ff`,cellSize:r=.5,sectionSize:i=1,followCamera:a=!1,infiniteGrid:o=!1,fadeDistance:s=100,fadeStrength:c=1,fadeFrom:l=1,cellThickness:u=.5,sectionThickness:d=1,side:f=1,...p},h)=>{w({GridMaterial:Se});let g=Q.useRef(null);Q.useImperativeHandle(h,()=>g.current,[]);let _=new T,v=new m(0,1,0),y=new m(0,0,0);A(e=>{_.setFromNormalAndCoplanarPoint(v,y).applyMatrix4(g.current.matrixWorld);let t=g.current.material,n=t.uniforms.worldCamProjPosition,r=t.uniforms.worldPlanePosition;_.projectPoint(e.camera.position,n.value),r.value.set(0,0,0).applyMatrix4(g.current.matrixWorld)});let b={cellSize:r,sectionSize:i,cellColor:t,sectionColor:n,cellThickness:u,sectionThickness:d},x={fadeDistance:s,fadeStrength:c,fadeFrom:l,infiniteGrid:o,followCamera:a};return Q.createElement(`mesh`,O({ref:g,frustumCulled:!1},p),Q.createElement(`gridMaterial`,O({transparent:!0,"extensions-derivatives":!0,side:f},b,x)),Q.createElement(`planeGeometry`,{args:e}))}),$=r();function we(e){let t=o(e);if(!t)return{id:`hero`,label:`Vista`,icon:`🏡`,position:[7,7,9],target:[0,.8,0],fov:40};let n=(t.x0+t.x1)/2,r=(t.z0+t.z1)/2,i=Math.max(t.x1-t.x0,t.z1-t.z0,6);return{id:`hero`,label:`Vista`,icon:`🏡`,fov:40,position:[n+i*.75,i*1.05+3,r+i*1.3],target:[n,.6,r]}}function Te(e,t,n,r,i,a,o){let{camera:s,gl:c,raycaster:l,controls:u}=d(),f=(0,Q.useRef)(null),p=(0,Q.useRef)(e);(0,Q.useEffect)(()=>{p.current=e},[e]);let h=(0,Q.useMemo)(()=>new T(new m(0,1,0),-t),[t]),g=(0,Q.useCallback)((e,t)=>{let n=c.domElement.getBoundingClientRect(),r=new b((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);l.setFromCamera(r,s);let i=new m;return l.ray.intersectPlane(h,i)?i:null},[s,c,l,h]),_=(0,Q.useRef)(()=>{}),v=(0,Q.useCallback)((e,t)=>{let s=t.nativeEvent.shiftKey||t.nativeEvent.ctrlKey||t.nativeEvent.metaKey||r;if(i(e,s),!n||s)return;let c=p.current.find(t=>t.id===e),l=g(t.nativeEvent.clientX,t.nativeEvent.clientY);if(!c||!l)return;o(e),f.current={id:e,offX:c.x-l.x,offZ:c.z-l.z};let d=u;d&&(d.enabled=!1),document.body.style.cursor=`grabbing`;let m=e=>{let t=f.current;if(!t)return;let n=g(e.clientX,e.clientY);n&&a(t.id,{x:n.x+t.offX,z:n.z+t.offZ})},h=()=>_.current();_.current=()=>{f.current=null,o(null),d&&(d.enabled=!0),document.body.style.cursor=``,window.removeEventListener(`pointermove`,m),window.removeEventListener(`pointerup`,h),window.removeEventListener(`pointercancel`,h)},window.addEventListener(`pointermove`,m),window.addEventListener(`pointerup`,h),window.addEventListener(`pointercancel`,h)},[u,g,a,i,o,n,r]);return(0,Q.useEffect)(()=>()=>_.current(),[]),v}function Ee({rooms:e,offsets:t,activeFloor:n,selectedIds:r,multi:i,canDrag:o,onSelect:s,onMove:c,wallMode:l,showCeiling:u,night:d}){let[f,p]=(0,Q.useState)(null),m=Te(e,t[n]??0,o,i,s,c,p),h=(0,Q.useMemo)(()=>f?a(e,f):[],[e,f]),g=(t[n]??0)+.06;return(0,$.jsxs)($.Fragment,{children:[e.filter(e=>e.floor<=n).map(e=>(0,$.jsx)(S,{room:e,selected:r.includes(e.id),wallMode:l,y:t[e.floor]??0,ghost:e.floor<n,showCeiling:u,night:d,onPointerDown:m},e.id)),h.map((e,t)=>(0,$.jsx)(be,{color:`#FF6A3D`,lineWidth:1.5,dashed:!0,dashSize:.25,gapSize:.15,points:e.axis===`x`?[[e.at,g,e.from-.6],[e.at,g,e.to+.6]]:[[e.from-.6,g,e.at],[e.to+.6,g,e.at]]},t))]})}var De=(0,Q.forwardRef)(function({rooms:e,floors:n,activeFloor:r,onActiveFloor:a,selectedIds:c,multi:l,onSelect:u,onMove:d,onReady:f,onRotate:p},m){let h=(0,Q.useRef)(null),g=(0,Q.useRef)(!1),_=(0,Q.useRef)(null),v=(0,Q.useRef)(e);(0,Q.useEffect)(()=>{v.current=e},[e]);let[y,b]=(0,Q.useState)(!1),[x,ee]=(0,Q.useState)(`glass`),[S,C]=(0,Q.useState)(!1),[w,T]=(0,Q.useState)(!1),[E,ne]=(0,Q.useState)(!0),[D,ue]=(0,Q.useState)(()=>we(e)),O=(0,Q.useMemo)(()=>fe(te()??ae()),[]),k=(0,Q.useCallback)(()=>ue(we(v.current)),[]);(0,Q.useImperativeHandle)(m,()=>({captureScreenshot:()=>_.current?.domElement.toDataURL(`image/png`)??null,frameAll:k}),[k]);let A=(0,Q.useRef)(e.length>0);(0,Q.useEffect)(()=>{!A.current&&e.length>0&&k(),A.current=e.length>0},[e.length,k]);let j=(0,Q.useMemo)(()=>({sunHour:w?22:13,sunMonth:6,latitude:-31.4}),[w]),M=ce(j.sunHour,j.sunMonth,j.latitude).isNight,N=(0,Q.useMemo)(()=>{let t=o(e);return t?Math.max(18,Math.max(t.x1-t.x0,t.z1-t.z0)*.8+6):18},[e]),P=(0,Q.useMemo)(()=>s(e,n),[e,n]),F=(e,t,n)=>(0,$.jsx)(`button`,{onClick:()=>ee(e),title:n,"aria-label":n,className:`px-2 h-7 rounded-lg text-[10px] font-semibold touch-manipulation transition-colors
        ${x===e?`bg-black text-white`:`text-gray-500 active:bg-gray-100`}`,children:t},e);return(0,$.jsxs)(`div`,{className:`relative w-full h-96 rounded-2xl overflow-hidden touch-none select-none`,style:{background:M?`#0A0E1A`:`#E8EEF5`},children:[!y&&(0,$.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center z-10 pointer-events-none`,children:(0,$.jsx)(`p`,{className:`text-[11px] text-gray-500`,children:`Preparando tus cubos…`})}),y&&e.length===0&&(0,$.jsxs)(`div`,{className:`absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none text-center px-8`,children:[(0,$.jsx)(`span`,{className:`text-4xl mb-2`,children:`🧊`}),(0,$.jsx)(`p`,{className:`text-sm font-semibold text-gray-700`,children:`Agregá tu primer ambiente`}),(0,$.jsx)(`p`,{className:`text-xs text-gray-500 mt-1`,children:`Cada ambiente es un cubo que podés mover y configurar`})]}),(0,$.jsxs)(`div`,{className:`absolute top-3 left-3 z-10 flex flex-col gap-1.5`,children:[(0,$.jsxs)(`div`,{className:`flex gap-0.5 bg-white/90 backdrop-blur rounded-xl shadow border border-gray-200 p-1`,children:[F(`glass`,`🔲 Vidrio`,`Paredes transparentes`),F(`solid`,`🧱 Sólido`,`Paredes sólidas`),F(`low`,`▁ Bajos`,`Muros bajos (vista Sims)`)]}),(0,$.jsxs)(`div`,{className:`flex gap-1`,children:[(0,$.jsx)(`button`,{onClick:()=>C(e=>!e),"aria-pressed":S,className:`px-2.5 h-7 rounded-full text-[10px] font-semibold shadow border touch-manipulation
              ${S?`bg-black text-white border-black`:`bg-white/90 text-gray-600 border-gray-200`}`,children:`🏠 Techo`}),(0,$.jsx)(`button`,{onClick:()=>T(e=>!e),"aria-pressed":w,className:`px-2.5 h-7 rounded-full text-[10px] font-semibold shadow border touch-manipulation
              ${w?`bg-black text-white border-black`:`bg-white/90 text-gray-600 border-gray-200`}`,children:`🌙 Noche`})]})]}),p&&c.length>0&&(0,$.jsxs)(`div`,{className:`absolute bottom-3 left-3 z-10 flex items-center gap-1.5 bg-white/95 backdrop-blur rounded-full shadow border border-gray-200 pl-3 pr-1 py-1`,children:[(0,$.jsx)(`span`,{className:`text-[11px] text-gray-500`,children:c.length>1?`${c.length} ambientes`:`Ambiente`}),(0,$.jsx)(`button`,{onClick:p,"aria-label":`Rotar selección 90°`,title:`Rotar 90° (tecla R)`,className:`h-8 px-3 rounded-full bg-black text-white text-xs font-semibold active:scale-95 touch-manipulation`,children:`⟳ Rotar`})]}),n>1&&(0,$.jsx)(`div`,{className:`absolute top-3 right-3 z-10 flex flex-col gap-0.5 bg-white/90 backdrop-blur rounded-xl shadow border border-gray-200 p-1`,children:Array.from({length:n},(e,t)=>n-1-t).map(e=>(0,$.jsx)(`button`,{onClick:()=>a(e),"aria-pressed":e===r,className:`px-2 h-7 rounded-lg text-[10px] font-semibold touch-manipulation text-left
                ${e===r?`bg-black text-white`:`text-gray-500 active:bg-gray-100`}`,children:t(e)},e))}),(0,$.jsxs)(`div`,{className:`absolute bottom-3 left-3 z-10 flex gap-1.5`,children:[(0,$.jsx)(`button`,{onClick:k,"aria-label":`Encuadrar todos los ambientes`,className:`px-2.5 h-7 rounded-full text-[10px] font-semibold shadow border bg-white/90 text-gray-600 border-gray-200 touch-manipulation`,children:`⌖ Encuadrar`}),(0,$.jsx)(`button`,{onClick:()=>ne(e=>!e),"aria-pressed":E,"aria-label":E?`Modo mover: arrastrar un cubo lo mueve. Tocar para pasar a modo cámara`:`Modo cámara: arrastrar rota la vista. Tocar para pasar a modo mover`,className:`px-2.5 h-7 rounded-full text-[10px] font-semibold shadow border touch-manipulation
            ${E?`bg-white/90 text-gray-600 border-gray-200`:`bg-black text-white border-black`}`,children:E?`✋ Mover`:`🎥 Cámara`})]}),(0,$.jsxs)(`div`,{className:`absolute bottom-3 right-3 z-10 flex flex-col bg-white/90 backdrop-blur rounded-xl shadow border border-gray-200 overflow-hidden`,children:[(0,$.jsx)(`button`,{onClick:()=>{h.current?.dollyIn(1.18),h.current?.update()},"aria-label":`Acercar`,className:`w-8 h-8 flex items-center justify-center text-gray-700 active:bg-gray-100`,children:`+`}),(0,$.jsx)(`div`,{className:`h-px bg-gray-200`}),(0,$.jsx)(`button`,{onClick:()=>{h.current?.dollyOut(1.18),h.current?.update()},"aria-label":`Alejar`,className:`w-8 h-8 flex items-center justify-center text-gray-700 active:bg-gray-100`,children:`−`})]}),(0,$.jsx)(i,{label:`modular-viewer`,fallback:(0,$.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center text-center px-6 text-sm text-gray-600`,children:`No pudimos cargar la vista 3D. Tu diseño y el presupuesto se siguen calculando.`}),children:(0,$.jsxs)(pe,{dpr:O.dpr,frameloop:`demand`,shadows:O.tier===`low`?`basic`:`soft`,camera:{position:D.position,fov:D.fov,near:.1,far:300},gl:{antialias:!0,toneMapping:4,toneMappingExposure:M?.9:1.05,preserveDrawingBuffer:!0},onCreated:({gl:e})=>{e.outputColorSpace=ie,_.current=e,b(!0),f?.()},onPointerMissed:()=>u(null),children:[(0,$.jsx)(`fog`,{attach:`fog`,args:[M?`#0A0E1A`:`#E8EEF5`,60,140]}),(0,$.jsx)(re,{config:j,quality:O,shadowExtent:N}),(0,$.jsx)(le,{isNight:M,quality:O}),M&&(0,$.jsx)(`ambientLight`,{intensity:.55,color:`#8FA6D8`}),(0,$.jsxs)(`mesh`,{rotation:[-Math.PI/2,0,0],position:[0,-.1,0],receiveShadow:!0,children:[(0,$.jsx)(`circleGeometry`,{args:[160,48]}),(0,$.jsx)(`meshStandardMaterial`,{color:M?`#161C2B`:`#D3DCC8`,roughness:1})]}),(0,$.jsx)(Ce,{position:[0,-.095,0],args:[10,10],cellSize:.5,cellThickness:.5,sectionSize:2.5,sectionThickness:1,cellColor:M?`#2B3550`:`#BFC9B3`,sectionColor:M?`#3C4A70`:`#A5B195`,fadeDistance:55,fadeStrength:1.5,infiniteGrid:!0}),(0,$.jsx)(Ee,{rooms:e,offsets:P,activeFloor:r,selectedIds:c,multi:l,canDrag:E,onSelect:u,onMove:d,wallMode:x,showCeiling:S,night:M}),(0,$.jsx)(oe,{ref:h,makeDefault:!0,enableDamping:!0,dampingFactor:.08,minDistance:3,maxDistance:90,minPolarAngle:.1,maxPolarAngle:Math.PI/2.05,rotateSpeed:.5,zoomSpeed:.7,target:D.target,onStart:()=>{g.current=!1}}),(0,$.jsx)(de,{view:D,controlsRef:h,transitioningRef:g}),(0,$.jsx)(se,{quality:O})]})})]})});export{De as default};