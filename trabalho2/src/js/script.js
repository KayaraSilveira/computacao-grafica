function main() {

  function computeMatrix(viewProjectionMatrix, translation, rotation, scale) {
    var matrix;
    matrix = m4.translate(viewProjectionMatrix, translation.x, translation.y, translation.z);
    matrix = m4.xRotate(matrix, rotation.x);
    matrix = m4.yRotate(matrix, rotation.y);
    matrix = m4.zRotate(matrix, rotation.z);
    matrix = m4.scale(matrix, scale.x, scale.y, scale.z);
    return matrix;
  }

  var config = {
    rotate: degToRad(1),
    fieldOfView: 60,
    fps: 60,
    isAnimationActive: false,
  };

  addElement();

  function render() {
    twgl.resizeCanvasToDisplaySize(gl.canvas);

    
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);

    var fieldOfViewRadians = degToRad(config.fieldOfView);
    var aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    var projectionMatrix = m4.perspective(fieldOfViewRadians, aspect, 1, 2000);

    //Compute the camera's matrix using look at.
    var cameraPosition = [0, 0, 100];
    var target = [0, 0, 0];
    var up = [0, 1, 0];

    var cameraMatrix = m4.lookAt(cameraPosition, target, up);

    // Make a view matrix from the camera matrix.
    var viewMatrix = m4.inverse(cameraMatrix);

    var viewProjectionMatrix = m4.multiply(projectionMatrix, viewMatrix);
    object.uniforms.u_matrix = computeMatrix(
      viewProjectionMatrix,
      object.translation,
      object.rotation,
      object.scale
    );

    const programInfo = objectInfo.programInfo;

    gl.useProgram(programInfo.program);
    // Setup all the needed attributes.
    gl.bindVertexArray(objectInfo.vertexArray);
    // Set the uniforms we just computed
    twgl.setUniforms(programInfo, objectInfo.uniforms);
    twgl.drawBufferInfo(gl, objectInfo.bufferInfo);


    if (steps.length) {
        if (steps[0] > 0) {
          setTimeout(() => {
            requestAnimationFrame(render);
            steps[0]--;
            animation(object);
          }, 1000 / config.fps);
        } else {
          steps.shift();
          count++;
          requestAnimationFrame(render);
        }
    } else {
      habilitar();
      requestAnimationFrame(render);
    }
  }

  requestAnimationFrame(render);
}

main();
