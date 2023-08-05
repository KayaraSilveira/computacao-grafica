var objectsInfo = []; //informações do tipo de objeto
var objects = []; //cores e matrizes dos elementos na tela
var createdElements = 1;

const { gl, meshProgramInfo } = initializeWorld();

// criando as formas
const cubeBufferInfo = flattenedPrimitives.createCubeBufferInfo(gl, 20);
const sphereBufferInfo = flattenedPrimitives.createSphereBufferInfo(gl, 10, 12, 6);
const coneBufferInfo = flattenedPrimitives.createTruncatedConeBufferInfo(gl, 10, 0, 20, 12, 1, true, false);
const cylinderBufferInfo = flattenedPrimitives.createCylinderBufferInfo(gl, 7, 13, 14, 12);

//passando a informação das formas
const cubeVAO = twgl.createVAOFromBufferInfo(
    gl,
    meshProgramInfo,
    cubeBufferInfo,
);

const sphereVAO = twgl.createVAOFromBufferInfo(
    gl,
    meshProgramInfo,
    sphereBufferInfo,
);

const coneVAO = twgl.createVAOFromBufferInfo(
    gl,
    meshProgramInfo,
    coneBufferInfo,
);

const cylinderVAO = twgl.createVAOFromBufferInfo(
    gl,
    meshProgramInfo,
    cylinderBufferInfo,
);

const addElement = (elementType) =>{

    var colors = Array();

    colors[0] = Array(64,224,208); //amei
    colors[1] = Array(0,255,127); //amei

    var color = Math.floor(Math.random() * 2);

    const element = { //pega as cores e matriz do elemento
        name: `Element ${createdElements}`,
        position: createdElements,
        uniforms: {
            u_colorMult: [(colors[color][0])/255, (colors[color][1])/255, (colors[color][2])/255, 1],
            u_matrix: m4.identity(),
        },
        rotation: {
            x: degToRad(1),
            y: degToRad(1),
            z: degToRad(1),
        },
        translation: {
            x: 1,
            y: 1,
            z: 1,
        },
        scale: {
            x: 1,
            y: 1,
            z: 1,
        },
        isOrbiting: false,
        pointOrbit: "x",
        Delete: () => {
            const elementId = objects.indexOf(element);
            if((config.lookElement - 1) == elementId) {
                config.lookElement = "none";
                console.log(config.lookElement);
            }
            gui.removeFolder(elementsGui[elementId]); 
            objects = objects.filter((object, index) => index !== elementId);
            objectsInfo = objectsInfo.filter((object, index) => index !== elementId);
            elementsGui = elementsGui.filter((object, index) => index !== elementId);
            for(let i = config.elements.length; i > 0; i--) {
                config.elements.pop();
            }
            objects.forEach(element => {
            config.elements.push(element.position);
            });
            config.elements.push("none");
            addGuiCamera();
        },
        Animation1: () => {
            elementSelect = element.position - 1;
            console.log(elementSelect);
            steps.push(30);
            animationType.push({movementType: 'translation', axysType: 'x', value: 1});
            steps.push(30);
            animationType.push({movementType: 'rotation', axysType: 'x', value: 1});
            steps.push(30);
            animationType.push({movementType: 'translation', axysType: 'y', value: -1});
            steps.push(30);
            animationType.push({movementType: 'rotation', axysType: 'y', value: 1});
          },
          Animation2: () => {
            elementSelect = element.position - 1;
            steps.push(30);
            animationType.push({movementType: 'rotation', axysType: 'x', value: 1});
            steps.push(30);
            animationType.push({movementType: 'rotation', axysType: 'y', value: 1});
            steps.push(30);
            animationType.push({movementType: 'rotation', axysType: 'z', value: 1});
          },
          Animation3: () => {
            elementSelect = element.position - 1;
            steps.push(30);
            animationType.push({movementType: 'translation', axysType: 'x', value: 1});
            steps.push(30);
            animationType.push({movementType: 'translation', axysType: 'y', value: 1});
            steps.push(30);
            animationType.push({movementType: 'translation', axysType: 'z', value: 1});
          },
    };

    objects.push(element);

    //pega o tipo de elemento
    var elementTypeAux = -1;
    if(!elementType) {
        elementTypeAux = Math.floor(Math.random() * 4); 
    }

    if (elementType === 'Sphere' || elementTypeAux == 0) {
        var object = {
            programInfo: meshProgramInfo,
            bufferInfo: sphereBufferInfo,
            vertexArray: sphereVAO,
            uniforms: element.uniforms,
        };
        objectsInfo.push(object);
    }
    else if (elementType === 'Cube' || elementTypeAux == 1) {
        var object = {
            programInfo: meshProgramInfo,
            bufferInfo: cubeBufferInfo,
            vertexArray: cubeVAO,
            uniforms: element.uniforms,
        };
        objectsInfo.push(object);
    }
    else if (elementType === 'Cylinder' || elementTypeAux == 2) {
        var object = {
            programInfo: meshProgramInfo,
            bufferInfo: cylinderBufferInfo,
            vertexArray: cylinderVAO,
            uniforms: element.uniforms,
        };
        objectsInfo.push(object);
    }
    else if (elementType === 'Cone' || elementTypeAux == 3) {
        var object = {
            programInfo: meshProgramInfo,
            bufferInfo: coneBufferInfo,
            vertexArray: coneVAO,
            uniforms: element.uniforms,
        };
        objectsInfo.push(object);
    }
   createdElements++; 
};


