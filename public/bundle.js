(()=>{"use strict";(()=>{const t=new class{constructor(t){const r=document.querySelector(t).getContext("webgl2");if(!r)throw new Error("no gl");this.gl=r}setup(t){console.log("setup function")}tick(t){console.log("run function")}loop(){this.tick(this),window.requestAnimationFrame(this.loop.bind(this))}run(){this.setup(this)}loadShader(t,r){const o=this.gl.createShader(t);if(!o)throw new Error("could not get shader");if(this.gl.shaderSource(o,r),this.gl.compileShader(o),!this.gl.getShaderParameter(o,this.gl.COMPILE_STATUS))throw alert("An error occurred compiling the shaders: "+this.gl.getShaderInfoLog(o)),this.gl.deleteShader(o),new Error("could not compile shader");return o}initShader(t,r){const o=this.loadShader(this.gl.VERTEX_SHADER,t),e=this.loadShader(this.gl.FRAGMENT_SHADER,r);if(!o||!e)throw new Error("could not load shader");const i=this.gl.createProgram();if(!i)throw new Error("could not create shader program");if(this.gl.attachShader(i,o),this.gl.attachShader(i,e),this.gl.linkProgram(i),!this.gl.getProgramParameter(i,this.gl.LINK_STATUS))throw new Error("Unable to initialize the shader program: "+this.gl.getProgramInfoLog(i));return i}}("#glcanvas");t.setup=function({gl:t}){t.clearColor(0,0,0,1),t.clearDepth(1),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL);const r=this.initShader("attribute vec4 aVertexPosition;\n        uniform mat4 uModelViewMatrix;\n        uniform mat4 uProjectionMatrix;\n        void main() {\n            gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\n        }","void main() {\n            gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n          }");t.getAttribLocation(r,"aVertexPosition"),t.getUniformLocation(r,"uProjectionMatrix"),t.getUniformLocation(r,"uModelViewMatrix")},t.tick=function({gl:t}){console.log(t)},t.run()})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYW52YXMvLi9zcmMvZW5naW5lLnRzIl0sIm5hbWVzIjpbImVuZ2luZSIsImNvbnRleHRTZWxlY3RvciIsImdsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Q29udGV4dCIsIkVycm9yIiwidGhpcyIsImNvbnNvbGUiLCJsb2ciLCJ0aWNrIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibG9vcCIsImJpbmQiLCJzZXR1cCIsInR5cGUiLCJzb3VyY2UiLCJzaGFkZXIiLCJjcmVhdGVTaGFkZXIiLCJzaGFkZXJTb3VyY2UiLCJjb21waWxlU2hhZGVyIiwiZ2V0U2hhZGVyUGFyYW1ldGVyIiwiQ09NUElMRV9TVEFUVVMiLCJhbGVydCIsImdldFNoYWRlckluZm9Mb2ciLCJkZWxldGVTaGFkZXIiLCJ2ZXJ0ZXhTb3VyY2UiLCJmcmFnbWVudFNvdXJjZSIsInZlcnRleFNoYWRlciIsImxvYWRTaGFkZXIiLCJWRVJURVhfU0hBREVSIiwiZnJhZ21lbnRTaGFkZXIiLCJGUkFHTUVOVF9TSEFERVIiLCJzaGFkZXJQcm9ncmFtIiwiY3JlYXRlUHJvZ3JhbSIsImF0dGFjaFNoYWRlciIsImxpbmtQcm9ncmFtIiwiZ2V0UHJvZ3JhbVBhcmFtZXRlciIsIkxJTktfU1RBVFVTIiwiZ2V0UHJvZ3JhbUluZm9Mb2ciLCJjbGVhckNvbG9yIiwiY2xlYXJEZXB0aCIsImVuYWJsZSIsIkRFUFRIX1RFU1QiLCJkZXB0aEZ1bmMiLCJMRVFVQUwiLCJpbml0U2hhZGVyIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJydW4iXSwibWFwcGluZ3MiOiJ5QkFzREEsTUFBTUEsRUFBUyxJQWxEZixNQUVJLFlBQVlDLEdBQ1IsTUFDTUMsRUFEU0MsU0FBU0MsY0FBY0gsR0FDcEJJLFdBQVcsVUFDN0IsSUFBS0gsRUFBSSxNQUFNLElBQUlJLE1BQU0sU0FDekJDLEtBQUtMLEdBQUtBLEVBRWQsTUFBTUYsR0FDRlEsUUFBUUMsSUFBSSxrQkFFaEIsS0FBS1QsR0FDRFEsUUFBUUMsSUFBSSxnQkFFUixPQUNKRixLQUFLRyxLQUFLSCxNQUNWSSxPQUFPQyxzQkFBc0JMLEtBQUtNLEtBQUtDLEtBQUtQLE9BRWhELE1BQ0lBLEtBQUtRLE1BQU1SLE1BR1AsV0FBV1MsRUFBY0MsR0FDN0IsTUFBTUMsRUFBU1gsS0FBS0wsR0FBR2lCLGFBQWFILEdBQ3BDLElBQUtFLEVBQVEsTUFBTSxJQUFJWixNQUFNLHdCQUc3QixHQUZBQyxLQUFLTCxHQUFHa0IsYUFBYUYsRUFBUUQsR0FDN0JWLEtBQUtMLEdBQUdtQixjQUFjSCxJQUNqQlgsS0FBS0wsR0FBR29CLG1CQUFtQkosRUFBUVgsS0FBS0wsR0FBR3FCLGdCQUc1QyxNQUZBQyxNQUFNLDRDQUE4Q2pCLEtBQUtMLEdBQUd1QixpQkFBaUJQLElBQzdFWCxLQUFLTCxHQUFHd0IsYUFBYVIsR0FDZixJQUFJWixNQUFNLDRCQUVwQixPQUFPWSxFQUVYLFdBQVdTLEVBQXNCQyxHQUM3QixNQUFNQyxFQUFldEIsS0FBS3VCLFdBQVd2QixLQUFLTCxHQUFHNkIsY0FBZUosR0FDdERLLEVBQWlCekIsS0FBS3VCLFdBQVd2QixLQUFLTCxHQUFHK0IsZ0JBQWlCTCxHQUNoRSxJQUFLQyxJQUFpQkcsRUFBZ0IsTUFBTSxJQUFJMUIsTUFBTSx5QkFDdEQsTUFBTTRCLEVBQWdCM0IsS0FBS0wsR0FBR2lDLGdCQUM5QixJQUFLRCxFQUFlLE1BQU0sSUFBSTVCLE1BQU0sbUNBSXBDLEdBSEFDLEtBQUtMLEdBQUdrQyxhQUFhRixFQUFlTCxHQUNwQ3RCLEtBQUtMLEdBQUdrQyxhQUFhRixFQUFlRixHQUNwQ3pCLEtBQUtMLEdBQUdtQyxZQUFZSCxJQUNmM0IsS0FBS0wsR0FBR29DLG9CQUFvQkosRUFBZTNCLEtBQUtMLEdBQUdxQyxhQUNwRCxNQUFNLElBQUlqQyxNQUFNLDRDQUE4Q0MsS0FBS0wsR0FBR3NDLGtCQUFrQk4sSUFFNUYsT0FBT0EsSUFJVyxhQUUxQmxDLEVBQU9lLE1BQVEsVUFBVSxHQUFFYixJQUV2QkEsRUFBR3VDLFdBQVcsRUFBSyxFQUFLLEVBQUssR0FDN0J2QyxFQUFHd0MsV0FBVyxHQUNkeEMsRUFBR3lDLE9BQU96QyxFQUFHMEMsWUFDYjFDLEVBQUcyQyxVQUFVM0MsRUFBRzRDLFFBRWhCLE1BQU1aLEVBQWdCM0IsS0FBS3dDLFdBQ3ZCLHdPQU1BLG9GQVFvQjdDLEVBQUc4QyxrQkFBa0JkLEVBQWUsbUJBR2xDaEMsRUFBRytDLG1CQUFtQmYsRUFBZSxxQkFDdENoQyxFQUFHK0MsbUJBQW1CZixFQUFlLHFCQU1sRWxDLEVBQU9VLEtBQU8sVUFBVSxHQUFFUixJQUN0Qk0sUUFBUUMsSUFBSVAsSUFHaEJGLEVBQU9rRCxPIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgbWF0NCB9IGZyb20gJ2dsLW1hdHJpeCdcblxuY2xhc3MgRW5naW5lIHtcbiAgICBwdWJsaWMgZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQ7XG4gICAgY29uc3RydWN0b3IoY29udGV4dFNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250ZXh0U2VsZWN0b3IpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgICAgICBjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInKVxuICAgICAgICBpZiAoIWdsKSB0aHJvdyBuZXcgRXJyb3IoXCJubyBnbFwiKVxuICAgICAgICB0aGlzLmdsID0gZ2xcbiAgICB9XG4gICAgc2V0dXAoZW5naW5lOiBFbmdpbmUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NldHVwIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHRpY2soZW5naW5lOiBFbmdpbmUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3J1biBmdW5jdGlvbicpO1xuICAgIH1cbiAgICBwcml2YXRlIGxvb3AoKSB7XG4gICAgICAgIHRoaXMudGljayh0aGlzKVxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKVxuICAgIH1cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMuc2V0dXAodGhpcylcbiAgICAgICAgLy8gdGhpcy5sb29wKClcbiAgICB9XG4gICAgcHJpdmF0ZSBsb2FkU2hhZGVyKHR5cGU6IG51bWJlciwgc291cmNlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc2hhZGVyID0gdGhpcy5nbC5jcmVhdGVTaGFkZXIodHlwZSk7XG4gICAgICAgIGlmICghc2hhZGVyKSB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCBnZXQgc2hhZGVyJyk7XG4gICAgICAgIHRoaXMuZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcbiAgICAgICAgdGhpcy5nbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG4gICAgICAgIGlmICghdGhpcy5nbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCB0aGlzLmdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgICAgICAgICAgYWxlcnQoJ0FuIGVycm9yIG9jY3VycmVkIGNvbXBpbGluZyB0aGUgc2hhZGVyczogJyArIHRoaXMuZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKTtcbiAgICAgICAgICAgIHRoaXMuZ2wuZGVsZXRlU2hhZGVyKHNoYWRlcik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb3VsZCBub3QgY29tcGlsZSBzaGFkZXJcIilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hhZGVyO1xuICAgIH1cbiAgICBpbml0U2hhZGVyKHZlcnRleFNvdXJjZTogc3RyaW5nLCBmcmFnbWVudFNvdXJjZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHZlcnRleFNoYWRlciA9IHRoaXMubG9hZFNoYWRlcih0aGlzLmdsLlZFUlRFWF9TSEFERVIsIHZlcnRleFNvdXJjZSk7XG4gICAgICAgIGNvbnN0IGZyYWdtZW50U2hhZGVyID0gdGhpcy5sb2FkU2hhZGVyKHRoaXMuZ2wuRlJBR01FTlRfU0hBREVSLCBmcmFnbWVudFNvdXJjZSk7XG4gICAgICAgIGlmICghdmVydGV4U2hhZGVyIHx8ICFmcmFnbWVudFNoYWRlcikgdGhyb3cgbmV3IEVycm9yKFwiY291bGQgbm90IGxvYWQgc2hhZGVyXCIpXG4gICAgICAgIGNvbnN0IHNoYWRlclByb2dyYW0gPSB0aGlzLmdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgICAgICAgaWYgKCFzaGFkZXJQcm9ncmFtKSB0aHJvdyBuZXcgRXJyb3IoXCJjb3VsZCBub3QgY3JlYXRlIHNoYWRlciBwcm9ncmFtXCIpXG4gICAgICAgIHRoaXMuZ2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIHZlcnRleFNoYWRlcik7XG4gICAgICAgIHRoaXMuZ2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcbiAgICAgICAgdGhpcy5nbC5saW5rUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcbiAgICAgICAgaWYgKCF0aGlzLmdsLmdldFByb2dyYW1QYXJhbWV0ZXIoc2hhZGVyUHJvZ3JhbSwgdGhpcy5nbC5MSU5LX1NUQVRVUykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGluaXRpYWxpemUgdGhlIHNoYWRlciBwcm9ncmFtOiAnICsgdGhpcy5nbC5nZXRQcm9ncmFtSW5mb0xvZyhzaGFkZXJQcm9ncmFtKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoYWRlclByb2dyYW07XG4gICAgfVxufVxuXG5jb25zdCBlbmdpbmUgPSBuZXcgRW5naW5lKCcjZ2xjYW52YXMnKVxuXG5lbmdpbmUuc2V0dXAgPSBmdW5jdGlvbiAoeyBnbCB9KSB7XG4gICAgLy8gZ2wudmlld3BvcnQoMCwgMCwgZ2wuZHJhd2luZ0J1ZmZlcldpZHRoLCBnbC5kcmF3aW5nQnVmZmVySGVpZ2h0KTtcbiAgICBnbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMCk7ICAvLyBDbGVhciB0byBibGFjaywgZnVsbHkgb3BhcXVlXG4gICAgZ2wuY2xlYXJEZXB0aCgxLjApOyAgICAgICAgICAgICAgICAgLy8gQ2xlYXIgZXZlcnl0aGluZ1xuICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTsgICAgICAgICAgIC8vIEVuYWJsZSBkZXB0aCB0ZXN0aW5nXG4gICAgZ2wuZGVwdGhGdW5jKGdsLkxFUVVBTCk7ICAgICAgICAgICAgLy8gTmVhciB0aGluZ3Mgb2JzY3VyZSBmYXIgdGhpbmdzXG5cbiAgICBjb25zdCBzaGFkZXJQcm9ncmFtID0gdGhpcy5pbml0U2hhZGVyKFxuICAgICAgICBgYXR0cmlidXRlIHZlYzQgYVZlcnRleFBvc2l0aW9uO1xuICAgICAgICB1bmlmb3JtIG1hdDQgdU1vZGVsVmlld01hdHJpeDtcbiAgICAgICAgdW5pZm9ybSBtYXQ0IHVQcm9qZWN0aW9uTWF0cml4O1xuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHVQcm9qZWN0aW9uTWF0cml4ICogdU1vZGVsVmlld01hdHJpeCAqIGFWZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgfWAsXG4gICAgICAgIGB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDEuMCwgMS4wLCAxLjAsIDEuMCk7XG4gICAgICAgICAgfWBcbiAgICApO1xuXG4gICAgY29uc3QgcHJvZ3JhbUluZm8gPSB7XG4gICAgICAgIHByb2dyYW06IHNoYWRlclByb2dyYW0sXG4gICAgICAgIGF0dHJpYkxvY2F0aW9uczoge1xuICAgICAgICAgICAgdmVydGV4UG9zaXRpb246IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlclByb2dyYW0sICdhVmVydGV4UG9zaXRpb24nKSxcbiAgICAgICAgfSxcbiAgICAgICAgdW5pZm9ybUxvY2F0aW9uczoge1xuICAgICAgICAgICAgcHJvamVjdGlvbk1hdHJpeDogZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHNoYWRlclByb2dyYW0sICd1UHJvamVjdGlvbk1hdHJpeCcpLFxuICAgICAgICAgICAgbW9kZWxWaWV3TWF0cml4OiBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyUHJvZ3JhbSwgJ3VNb2RlbFZpZXdNYXRyaXgnKSxcbiAgICAgICAgfSxcbiAgICB9O1xuXG59XG5cbmVuZ2luZS50aWNrID0gZnVuY3Rpb24gKHsgZ2wgfSkge1xuICAgIGNvbnNvbGUubG9nKGdsKTtcbn1cblxuZW5naW5lLnJ1bigpIl0sInNvdXJjZVJvb3QiOiIifQ==