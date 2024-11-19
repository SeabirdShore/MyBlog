"use strict";(self.webpackChunkakara=self.webpackChunkakara||[]).push([[253],{7329:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var n=r(6540),a=r(53),i=r(8956),s=r(5489),l=r(4586);const o={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};var c=r(8168);const h={features:"features_t9lD",featureSvg:"featureSvg_GfXr"},u=[{title:"Built By",description:n.createElement(n.Fragment,null,"Meta Platforms, Inc. ",n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://docusaurus.io/"},"Docusaurus"))},{title:"About Me",description:n.createElement(n.Fragment,null,"Now study at ",n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.cs.zju.edu.cn/"},"ZJUCCST"))},{title:"Contact Me",description:n.createElement(n.Fragment,null,"WeChat: _5e4b1rd5h0r3")}];function g(e){let{Svg:t,title:r,description:i}=e;return n.createElement("div",{className:(0,a.A)("col col--4")},n.createElement("div",{className:"text--center"}),n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement("h3",null,r),n.createElement("p",null,i)))}function m(){return n.createElement("section",{className:h.features},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},u.map(((e,t)=>n.createElement(g,(0,c.A)({key:t},e)))))))}const f=r.p+"assets/images/cindy-64f51267652fb3540c9d93e182b6046b.png",d=r.p+"assets/images/noise-1934aa47770dd85847de43aeeab8063c.png";function E(){const{siteConfig:e}=(0,l.A)();return(0,n.useEffect)((()=>{!async function(){const[e,t]=await Promise.all([p(f),p(d)]),r=new T(document.querySelector("canvas")),{gl:n}=r;r.init("\n      precision mediump float;\n\n      attribute vec2 aPosition;\n      attribute vec2 aUV;\n      \n      varying vec2 vUV;\n      varying vec2 vPos;\n      \n      void main() {\n          gl_Position = vec4(aPosition, 0.0, 1.0);\n          vUV = aUV;\n          vPos = aPosition;\n      }\n      ","\n      precision mediump float;\n      \n      uniform sampler2D uTexture1;\n      uniform sampler2D uTexture2;\n      \n      uniform float uVar;\n      \n      varying vec2 vUV;\n      varying vec2 vPos;\n      \n      \n      float random (vec2 st) {\n          return fract(sin(dot(st.xy,vec2(12.9898,78.233)))* 43758.5453123);\n      }\n      \n      void main() {\n          vec4 color1 = texture2D(uTexture1, vUV);\n          vec4 color2 = texture2D(uTexture2, vUV);\n          vec4 color3 = vec4(vec3(random(vUV)), 1.);\n      \n          if (color2.r - uVar < 0.0) {\n              discard;\n          }\n      \n          gl_FragColor = color1;\n      }\n     ").loadBuffer(new Float32Array([1,1,1,1,-1,1,0,1,-1,-1,0,0,-1,-1,0,0,1,-1,1,0,1,1,1,1])).setAttrib("aPosition",2,n.FLOAT,!1,16,0).setAttrib("aUV",2,n.FLOAT,!1,16,8).loadTexture(e).setUniform("uTexture1","uniform1i",0).loadTexture(t).setUniform("uTexture2","uniform1i",1);let a=0,i=!1;!function e(){const t=n.getUniformLocation(r.program,"uVar");n.uniform1f(t,i?a-=.01:a+=.01),a>=1&&(i=!0);a<=0&&(i=!1);r.draw(r.gl.TRIANGLES,6),requestAnimationFrame(e)}()}()}),[]),n.createElement("header",{className:(0,a.A)(o.heroBanner)},n.createElement("div",{className:"container"},n.createElement("canvas",{width:"300",height:"300",style:{borderRadius:"50%"}}),n.createElement("h1",{className:"hero__title"},e.title),n.createElement("p",{className:"hero__subtitle"},e.tagline),n.createElement("div",{className:o.buttons},n.createElement(s.A,{className:"button button--secondary button--lg",to:"/docs/Huggingface"},"Might Meet Me \u2192"))))}function v(){const{siteConfig:e}=(0,l.A)();return n.createElement(i.A,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />"},n.createElement(E,null),n.createElement("main",null,n.createElement(m,null)))}console.log(f);class T{gl;program;vs;fs;buffer;textures=[];constructor(e){if(e instanceof HTMLCanvasElement)return this.gl=e.getContext("webgl"),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this;throw new Error("please pass canvas element")}init(e,t){const r=this.vs=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(r,e),this.gl.compileShader(r);const n=this.fs=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(n,t),this.gl.compileShader(n);const a=this.program=this.gl.createProgram();return this.gl.attachShader(a,r),this.gl.attachShader(a,n),this.gl.linkProgram(a),this.gl.useProgram(a),this}loadBuffer(e){const t=this.buffer=this.gl.createBuffer();return this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t),this.gl.bufferData(this.gl.ARRAY_BUFFER,e,this.gl.STATIC_DRAW),this}loadTexture(e){const t=this.gl.createTexture();return this.gl.activeTexture(this.gl["TEXTURE"+this.textures.length]),this.gl.bindTexture(this.gl.TEXTURE_2D,t),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,e),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.textures.push(t),this}setAttrib(e,t,r,n,a,i){const s=this.gl.getAttribLocation(this.program,e);return this.gl.vertexAttribPointer(s,t,r,n,a,i),this.gl.enableVertexAttribArray(s),this}setUniform(e,t,r){const n=this.gl.getUniformLocation(this.program,e);return this.gl[t](n,r),this}draw(e,t){this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.drawArrays(e,0,t)}then(e){return e.call(this),this}}function p(e){return new Promise((t=>{const r=new Image;r.src=e,r.onload=function(){t(r)}}))}}}]);