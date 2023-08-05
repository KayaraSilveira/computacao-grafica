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

  loadGUI(); //carrega a primeira barra

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

    if (config.lookElement != "none") {
      objects.forEach((object) => {
        if(object.position == config.lookElement) {
          target = [
            object.translation.x,
            object.translation.y,
            object.translation.z,
          ];
        }
      });
    }
    else {
      target = [0, 0, 0];
    }

    var cameraLookAt = m4.lookAt(cameraPosition, target, up);
    var camRotationX = m4.xRotation(
      radToDeg(cameras[guiCam.index].rotation.x)
    );
    var camRotationY = m4.yRotation(
      radToDeg(cameras[guiCam.index].rotation.y)
    );
    var camRotationZ = m4.zRotation(
      radToDeg(cameras[guiCam.index].rotation.z)
    );
    cameraMatrix = m4.multiply(
      cameraLookAt,
      m4.multiply(camRotationX, m4.multiply(camRotationY, camRotationZ))
    );
    cameraMatrix = m4.translate(
      cameraMatrix,
      cameras[guiCam.index].translation.x,
      cameras[guiCam.index].translation.y,
      cameras[guiCam.index].translation.z
    ); 

    // Make a view matrix from the camera matrix.
    var viewMatrix = m4.inverse(cameraMatrix);

    var viewProjectionMatrix = m4.multiply(projectionMatrix, viewMatrix);

    objects.forEach((object) => {
      if (object.isOrbiting) {
        switch(object.pointOrbit) {
          case 'x':
            object = orbitObjectX(1, object);
            break;
          case 'y':
            object = orbitObjectY(1, object);
            break;
          case 'z':
            object = orbitObjectZ(1, object);
            break;
        }
      }
      object.uniforms.u_matrix = computeMatrix(
        viewProjectionMatrix,
        object.translation,
        object.rotation,
        object.scale
      );
    });

    objectsInfo.forEach(function (object) {
      const programInfo = object.programInfo;

      gl.useProgram(programInfo.program);
      // Setup all the needed attributes.
      gl.bindVertexArray(object.vertexArray);
      // Set the uniforms we just computed
      twgl.setUniforms(programInfo, object.uniforms);
      twgl.drawBufferInfo(gl, object.bufferInfo);
    });

    if (steps.length || stepsCam.length) {
      if (steps.length) {
        if (steps[0] > 0) {
          setTimeout(() => {
            requestAnimationFrame(render);
            steps[0]--;
            animation(objects);
          }, 1000 / config.fps);
        } else {
          steps.shift();
          count++;
          requestAnimationFrame(render);
        }
      }
      else {
        if (stepsCam[0] > 0) {
          setTimeout(() => {
            requestAnimationFrame(render);
            stepsCam[0]--;
            animationCam(cameras);
          }, 1000 / config.fps);
        }
        else {
          stepsCam.shift();
          countCam++;
          requestAnimationFrame(render);
        }
      }
    } else {
      requestAnimationFrame(render);
    }
  }

  requestAnimationFrame(render);
}

main();
