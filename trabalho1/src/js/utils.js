const degToRad = (d) => (d * Math.PI) / 180;

const radToDeg = (r) => (r * 180) / Math.PI;
  
  const orbitObjectX = (angle, object) => {
    var cos = Math.cos(degToRad(angle));
    var sen = Math.sin(degToRad(angle));
  
    const y = object.translation.y * cos - object.translation.z * sen;
    const z = object.translation.z * cos + object.translation.y * sen;
  
    object.translation.y = y;
    object.translation.z = z;
  
    return object;
  };
  
  const orbitObjectY = (angle, object) => {
    var cos = Math.cos(degToRad(angle));
    var sen = Math.sin(degToRad(angle));
  
    const x = object.translation.x * cos - object.translation.z * sen;
    const z = object.translation.z * cos + object.translation.x * sen;
  
    object.translation.x = x;
    object.translation.z = z;
    return object;
  };
  
  const orbitObjectZ = (angle, object) => {
    var cos = Math.cos(degToRad(angle));
    var sen = Math.sin(degToRad(angle));
  
    const x = object.translation.x * cos - object.translation.y * sen;
    const y = object.translation.y * cos + object.translation.x * sen;

    object.translation.x = x;
    object.translation.y = y;
    return object;
  };
  
