import { mat4, ReadonlyVec2, ReadonlyVec3 } from 'gl-matrix'

export function getContext(canvasSelector: string) {
    const canvas = document.querySelector(canvasSelector) as HTMLCanvasElement | null;
    if (!canvas) throw new Error("canvas selector not found")
    const gl = canvas.getContext('webgl2')
    if (!gl) throw new Error("could not create rendering context")
    return gl
}

export function loadShader(gl: WebGL2RenderingContext, type: number, source: string) {
    const shader = gl.createShader(type);
    if (!shader) return null
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const info = 'An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader)
        gl.deleteShader(shader);
        throw new Error(info)
    }
    return shader;
}


export function compileShader(gl: WebGL2RenderingContext, vsSource: string, fsSource: string) {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vertexShader || !fragmentShader) {
        throw new Error("could not create shader")
    }

    const shaderProgram = gl.createProgram();
    if (!shaderProgram) {
        throw new Error("could not create shader program")
    }

    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);

    gl.linkProgram(shaderProgram);
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        throw new Error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
    }

    return shaderProgram;
}

export function animationLoop(draw: (deltaTime: number) => void) {
    let then = 0.0
    let frameId: number | null
    function tick(now: number) {
        now *= 0.001;  // convert to seconds
        const deltaTime = now - then;
        then = now;
        draw(deltaTime)
        frameId = requestAnimationFrame(tick)
    }
    return function toggle() {
        if (!frameId) {
            frameId = requestAnimationFrame(tick)
            return true
        }
        cancelAnimationFrame(frameId)
        frameId = null
        return false

    }
}

export function writeBuf(
    gl: WebGL2RenderingContext,
    buf: WebGLBuffer | null,
    data: any, target = gl.ARRAY_BUFFER,
    usage = gl.STATIC_DRAW
) {
    gl.bindBuffer(target, buf)
    gl.bufferData(target, new Float32Array(data), usage)
}


export function oscillator(freq: number) {
    const value = -1
    return function oscillate(timeDelta: number) {
        return value
    }
}