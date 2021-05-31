'use strict';
const canvas = document.getElementById("screen");
// set canvas size to same as in css in order to avoid stretching
canvas.width = 800;
canvas.height = 600;
const gl = canvas.getContext('webgl2');
if (gl) {
    setup(gl);
}
function setup(gl) {
    // initialize screen
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    // create 2 shader objects
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader)
        return;
    // add shader source code to shader objects
    gl.shaderSource(vertexShader, `#version 100
        void main() {
            gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
            gl_PointSize = 64.0;
        }`);
    gl.shaderSource(fragmentShader, `#version 100
        void main() {
            gl_FragColor = vec4(0.18, 0.54, 0.34, 1.0);
        }`);
    // compile c code
    gl.compileShader(fragmentShader);
    gl.compileShader(vertexShader);
    // create a new webgl program
    const program = gl.createProgram();
    if (!program)
        return;
    // attach the shader
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    // link the program
    gl.linkProgram(program);
    // clean up shader objects
    gl.detachShader(program, vertexShader);
    gl.detachShader(program, fragmentShader);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    // check if program was successfully linked
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        gl.useProgram(null);
        if (program)
            gl.deleteProgram(program);
        console.log(gl.getProgramInfoLog(program));
        return;
    }
    // initialize buffer
    gl.enableVertexAttribArray(0);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.vertexAttribPointer(0, 1, gl.FLOAT, false, 0, 0);
    // start program and draw vertices
    gl.useProgram(program);
    gl.drawArrays(gl.POINTS, 0, 1);
    // clean up
    gl.useProgram(null);
    if (buffer)
        gl.deleteBuffer(buffer);
    if (program)
        gl.deleteProgram(program);
}
