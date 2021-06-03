export function getContext(canvasSelector: string) {
    const canvas = document.querySelector(canvasSelector) as HTMLCanvasElement;
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
    function tick(now: number) {
        now *= 0.001;  // convert to seconds
        const deltaTime = now - then;
        then = now;
        draw(deltaTime)
        requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
}