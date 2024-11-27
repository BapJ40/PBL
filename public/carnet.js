class Carnet {
    constructor(img, estado) {
        this.img = img;
        this.estado = estado;
    }
}

const carnets = [];

const carnet1 = new Carnet("./carnet.jpg", "ACTIVO");
carnets.push(carnet1);
const carnet2 = new Carnet("./carnet 2.jpg", "INACTIVO");
carnets.push(carnet2);
const carnet3 = new Carnet("./carnet 3.jpg", "ACTIVO");
carnets.push(carnet3);
const carnet4 = new Carnet("./carnet 4.jpg", "ACTIVO");
carnets.push(carnet4);
const carnet5 = new Carnet("./carnet 5.jpg", "ACTIVO");
carnets.push(carnet5);

export default carnets