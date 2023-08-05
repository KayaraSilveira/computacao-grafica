var objectInfo; //informações do tipo de objeto
var object; //cores e matrizes dos elementos na tela
var i;
var t = 0;

const { gl, meshProgramInfo } = initializeWorld();

const sphereBufferInfo = flattenedPrimitives.createSphereBufferInfo(gl, 6, 18, 8);

const sphereVAO = twgl.createVAOFromBufferInfo(
    gl,
    meshProgramInfo,
    sphereBufferInfo,
);

const addElement = () =>{

    const element = { //pega as cores e matriz do elemento
        uniforms: {
            u_colorMult: [255/255, 117/255, 24/255, 1],
            u_matrix: m4.identity(),
        },
        rotation: {
            x: degToRad(1),
            y: degToRad(1),
            z: degToRad(1),
        },
        translation: {
            x: 1,
            y: -40,
            z: 1,
        },
        scale: {
            x: 1,
            y: 1,
            z: 1,
        },
        Game: () => {
            levantar(0.8);
            segurar(60);
            levantar2(15, 1.2);
            cair2(20, -1);
            levantar2(1, 1);
            
            quicar(1, 0);
            quicar(2, 1);
            quicar(2, 0);
            segurar(5);
            arremessar(5, 1);
            quicar(3, 1); 
            quicar(1, 0);
            segurar(10);
            for(t = 0; t <= 1; t += 0.05) {
                animationBezier(t, 1);
            }
            arremessar(15, -1);
            quicar(3, 2);
            quicar(1, 0);
            segurar(5);
            arremessar(8, -1);
            segurar(25);
            arremessar(15, -1);
            quicar(2, 0);
            segurar(5);
            arremessar(15, -1);
            segurar(5);
            for(t = 0; t <= 1; t += 0.04) {
                animationBezier(t, -1);
            }
            cair(40, -1);
            rolar(25, 1);
            rolar(15, 0.5);
            rolar(5, 0.25);
            levantar(0.8);
            segurar(60);
            arremessar(16, 1);
            segurar(60);
            arremessar(16, 1);
            segurar(60);
            levantar(-0.8);
        },
    };

    object = element;

    var elementInfo = {
        programInfo: meshProgramInfo,
        bufferInfo: sphereBufferInfo,
        vertexArray: sphereVAO,
        uniforms: element.uniforms,
    };
    objectInfo = elementInfo;
};


