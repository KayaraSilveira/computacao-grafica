var testex;
var testey;

const rolar = (nsteps, direcao) => {
    steps.push(nsteps);
    animationType.push({movementType: 'rolar', value: direcao});
};

const levantar = (direcao) => {
    steps.push(30);
    animationType.push({movementType: 'quicar', value: direcao});
};

const levantar2 = (nsteps, direcao) => {
    steps.push(nsteps);
    animationType.push({movementType: 'quicar', value: direcao});
};

const segurar = (nsteps) => {
    steps.push(nsteps);
    animationType.push({movementType: 'quicar', value: 0});
};

const cair = (nsteps, direcao) => {
    steps.push(nsteps);
    animationType.push({movementType: 'cair', value: direcao});
};

const cair2 = (nsteps, direcao) => {
    steps.push(nsteps);
    animationType.push({movementType: 'cair2', value: direcao});
};

const arremessar = (nsteps, direcao) => {
    steps.push(nsteps);
    animationType.push({movementType: 'arremessar1', value: direcao});
};

const animationBezier = (t, direcao) => {
    steps.push(1);
        testex = 3 * bezierx(t, {x: 0, y: 0}, {x: 0.91, y: 0.91}, {x: 0.8, y: 0.8}, {x: 1.08, y: -1.08});
        testey = 3 * beziery(t, {x: 0, y: 0}, {x: 0.91, y: 0.91}, {x: 0.8, y: 0.8}, {x: 1.08, y: -1.08});
        if(direcao == -1) {
            testex = -testex;
            //testey = -testex;
        }
        animationType.push({movementType: 'movementBezier', value: direcao, valuex: testex, valuey: testey});
};



const quicar = (vezes, tipo) => {
    var i;
    switch(tipo) {
        case 0:
            for(i = 0; i < vezes; i++) {
                steps.push(1);
                animationType.push({movementType: 'quicar', value: 0});
                steps.push(30);
                animationType.push({movementType: 'quicar', value: -0.8});   
                steps.push(30);
                animationType.push({movementType: 'quicar', value: 0.8}); 
            }
            break;
        case 1:
            for(i = 0; i < vezes; i++) {
                steps.push(1);
                animationType.push({movementType: 'quicar1', value: 0});
                steps.push(30);
                animationType.push({movementType: 'quicar1', value: -0.8});   
                steps.push(30);
                animationType.push({movementType: 'quicar1', value: 0.8}); 
            }
            break;
        case 2:
            for(i = 0; i < vezes; i++) {
                steps.push(1);
                animationType.push({movementType: 'quicar2', value: 0});
                steps.push(30);
                animationType.push({movementType: 'quicar2', value: -0.8});   
                steps.push(30);
                animationType.push({movementType: 'quicar2', value: 0.8}); 
            }
            break;
    }
};
