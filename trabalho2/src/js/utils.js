const degToRad = (d) => (d * Math.PI) / 180;

const radToDeg = (r) => (r * 180) / Math.PI;
  
const bezierx = (t, p1, p2, p3, p4) => {
    var invT = (1 - t)
    var x = ((p1.x) * invT * invT * invT) +
              ((p2.x) * 3 * t * invT * invT) +
              (p3.x * 3 * invT * t * t) +
              (p4.x * t * t * t);
    return x;
  }

  var beziery = (t, p1, p2, p3, p4) => {
    var invT = (1 - t)
    var y = ((p1.y) * invT * invT * invT) +
              (p2.y * 3 * t * invT * invT) +
              (p3.y * 3 * invT * t * t) +
              ((p4.y) * t * t * t);
    return y;
  }
  
