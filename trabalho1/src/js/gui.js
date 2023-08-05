const gui = new dat.GUI();
var guiCamera = new dat.GUI();
var elementsGui = [];
var camerasGui = [];


var config = {
  rotate: degToRad(1),
  Random: () => {
    addElement(); //função do script elements
    addGuiElement();
  },
  Sphere: () => {
    addElement("Sphere");
    addGuiElement();
  },
  Cube: () => {
    addElement("Cube");
    addGuiElement();
  },
  Cone: () => {
    addElement("Cone");
    addGuiElement();
  },
  Cylinder: () => {
    addElement("Cylinder");
    addGuiElement();
  },
  AddCamera: () => {
    config.SelectCameras.push(cameras.length);
    addCamera();
    addGuiCamera();
  },
  fieldOfView: 60,
  lookCamera: 0,
  SelectCameras: [],
  lookElement: "none",
  elements: ["none"],
  fps: 60,
  isAnimationActive: false,
};

const loadGUI = () => { //Cria a barra de adicionar elementos
  const newElement = gui.addFolder("Add Element");
  newElement.add(config, "Random");
  newElement.add(config, "Sphere");
  newElement.add(config, "Cube");
  newElement.add(config, "Cone");
  newElement.add(config, "Cylinder");

  config.AddCamera();

  addElement(); 
  addGuiElement();

  for(let i = config.elements.length; i > 0; i--) {
    config.elements.pop();
  }
  objects.forEach(element => {
    config.elements.push(element.position);
  });
  config.elements.push("none");

  addGuiCamera();
};

const addGuiElement = () => { //cria as barras de transformações de cada elemento
  const element = gui.addFolder(objects[objects.length - 1].name);

  const elementOrbiting = element.addFolder("Point rotation");
  elementOrbiting.add(objects[objects.length - 1], "isOrbiting").name("Point rotation");
  elementOrbiting.add(objects[objects.length - 1], "pointOrbit", ['x', 'y', 'z']).name("Select point").listen();

  const elementRotation = element.addFolder("Rotação");
  elementRotation.add(objects[objects.length - 1].rotation, "x", 0, 100, 1);
  elementRotation.add(objects[objects.length - 1].rotation, "y", 0, 100, 1);
  elementRotation.add(objects[objects.length - 1].rotation, "z", 0, 100, 1);

  const elementTranslation = element.addFolder("Translação");
  elementTranslation.add(objects[objects.length - 1].translation, "x", -100, 100, 1);
  elementTranslation.add(objects[objects.length - 1].translation, "y", -50, 50, 1);
  elementTranslation.add(objects[objects.length - 1].translation, "z", -50, 50, 1);

  const elementScale = element.addFolder("Escala");
  elementScale.add(objects[objects.length - 1].scale, "x", 0, 5, 1);
  elementScale.add(objects[objects.length - 1].scale, "y", 0, 5, 1);
  elementScale.add(objects[objects.length - 1].scale, "z", 0, 5, 1);

  const elementAnimation = element.addFolder("Animations");
  elementAnimation.add(objects[objects.length - 1], "Animation1");
  elementAnimation.add(objects[objects.length - 1], "Animation2");
  elementAnimation.add(objects[objects.length - 1], "Animation3");

  if(objects.length > 1) {
    element.add(objects[objects.length - 1], "Delete");
  }
 
  elementsGui.push(element);
  for(let i = config.elements.length; i > 0; i--) {
    config.elements.pop();
  }
  objects.forEach(element => {
    config.elements.push(element.position);
  });
  config.elements.push("none");
  addGuiCamera();
};

const addGuiCamera = () => { 
  if(guiCamera) {
    guiCamera.destroy();
  }

  guiCamera = new dat.GUI();;

  guiCamera.add(config, "fieldOfView", 1, 170, 1).name("Zoom");

  const selectElement = guiCamera.add(config, "lookElement", config.elements).name("Look At").listen().onChange(() => {});

  const selectCam = guiCamera.add(config, "lookCamera", config.SelectCameras).name("Camera").listen();
  selectCam.onChange( () => {
  activateCamera(parseInt(config.lookCamera));
  addGuiCamera();
  });

  guiCamera.add(config, "AddCamera");

  const camera = guiCamera.addFolder(`Camera ${config.lookCamera}`);

  const cameraRotation = camera.addFolder("Rotation");
  cameraRotation.add(cameras[config.lookCamera].rotation, "x", -10, 10, 1);
  cameraRotation.add(cameras[config.lookCamera].rotation, "y", -10, 10, 1);
  cameraRotation.add(cameras[config.lookCamera].rotation, "z", -10, 10, 1);

  const cameraTranslation = camera.addFolder("Translation");
  cameraTranslation.add(cameras[config.lookCamera].translation, "x", -100, 100, 1);
  cameraTranslation.add(cameras[config.lookCamera].translation, "y", -50, 50, 1);
  cameraTranslation.add(cameras[config.lookCamera].translation, "z",-50, 50, 1);

  const cameraAnimation = camera.addFolder("Animations");
  cameraAnimation.add(cameras[config.lookCamera], "Animation1");
  cameraAnimation.add(cameras[config.lookCamera], "Animation2");
  cameraAnimation.add(cameras[config.lookCamera], "Animation3");
 
  camerasGui.push(camera);

  
};

