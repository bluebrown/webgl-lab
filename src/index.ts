'use strict'

const canvas = document.getElementById("screen") as HTMLCanvasElement;

canvas.width = 800;
canvas.height = 600;

const gl = canvas.getContext('webgl2');

if (gl) {
    setup(gl);
}

function setup(gl: WebGL2RenderingContext) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);



}
