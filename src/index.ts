
'use strict'

import { mat4 } from 'gl-matrix'
import { getContext, compileShader, animationLoop, writeBuf } from './engine'

// initialize gl
const gl = getContext('#canvas')

gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
gl.clearDepth(1.0);                 // Clear everything
gl.enable(gl.DEPTH_TEST);           // Enable depth testing
gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

// create shader program
const simpleShader = compileShader(
  gl,
  `attribute vec4 aVertexPosition;
  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;
  void main() {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
  }
  `,
  `void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  }`,
)

// get arg ids
const aVertexPosition = gl.getAttribLocation(simpleShader, 'aVertexPosition')
const uModelViewMatrix = gl.getUniformLocation(simpleShader, 'uModelViewMatrix')
const uProjectionMatrix = gl.getUniformLocation(simpleShader, 'uProjectionMatrix')

const canvas = gl.canvas as HTMLCanvasElement
const projectionMatrix = mat4.create();
const modelViewMatrix = mat4.create();

// set up perspective matrix
mat4.perspective(projectionMatrix, 45 * Math.PI / 180, canvas.clientWidth / canvas.clientHeight, 0.1, 255);

// set up model matrix
mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, 0.0, -12.0]);

// create position buffer
const positionBuffer = gl.createBuffer();

writeBuf(gl, positionBuffer, [
  1.0, 1.0,
  -1.0, 1.0,
  1.0, -1.0,
  -1.0, -1.0,
])

// start using the shader program
gl.useProgram(simpleShader);

// set perspective and model vectors of current program
gl.uniformMatrix4fv(uProjectionMatrix, false, projectionMatrix);
gl.uniformMatrix4fv(uModelViewMatrix, false, modelViewMatrix);

// attach position buffer to the vertex variable
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
gl.vertexAttribPointer(aVertexPosition, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(aVertexPosition);

// draw the scene
animationLoop((deltaTime) => {

  // manipulate buffers a bit

  // ...

  // the clear screen and redraw
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
})
