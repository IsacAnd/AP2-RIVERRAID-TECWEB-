const areaDoJogo = document.querySelector('[wv-riverraid]')

function mapas() {
    this.centro = [
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    ];

    this.direita = [
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    ];

    this.esquerda = [
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    ];

    this.bifurcacao = [
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    ]

    this.zigzag = [
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    ]

    this.mapas = [this.centro, this.direita, this.esquerda, this.bifurcacao, this.zigzag]

    return this.mapas[Math.floor(Math.random() * this.mapas.length)]
}

function novoElemento(tagName, className) {
    const elemento = document.createElement(tagName)
    elemento.className = className
    return elemento
}

function criarMapas() {
    this.area = novoElemento('div', 'area')
    this.area.style.position = `absolute`
    this.area.style.display = `grid`
    this.area.style.gridTemplateColumns = `repeat(20, 1fr)`;
    this.area.style.gridTemplateRows = `repeat(20, 1fr)`;

    this.area.style.width = "60%";
    this.area.style.height = "100%";
    this.area.style.top = "-690px";
    this.area.style.left = '300px'

    // Relativo à construção de mapas
    let mapa = new mapas()

    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    for (let linha = 0; linha < 20; linha++) {
        for (let coluna = 0; coluna < 20; coluna++) {
            if (mapa[linha][coluna] === 0) {
                if (getRandomArbitrary(0, 200) === 2) {
                    mapa[linha][coluna] = 2
                }
                else if (getRandomArbitrary(0, 250) === 3) {
                    mapa[linha][coluna] = 3
                }
            }
        }
    }

    for (let linha = 0; linha < 20; linha++) {
        for (let coluna = 0; coluna < 20; coluna++) {
            if (mapa[linha][coluna] === 0) {
                const chao = novoElemento('div', 'chao')
                this.area.appendChild(chao)
            }
            else if (mapa[linha][coluna] === 1) {
                const barreira = novoElemento('div', 'barreira')
                this.area.appendChild(barreira)
            }
            else if (mapa[linha][coluna] === 2) {
                const combustivel = novoElemento('div', 'combustivel')
                this.area.appendChild(combustivel)
            }
            else {
                const moeda = novoElemento('div', 'moeda')
                this.area.appendChild(moeda)
            }
        }
    }

    areaDoJogo.insertAdjacentElement('afterbegin', this.area);

    this.getY = () => parseInt(this.area.style.top.split('px')[0]);
    this.setY = (y) => this.area.style.top = `${y}px`;

    this.animar = () => {
        const motion = 5
        let newYposition = this.getY();
        newYposition = this.getY() + motion;
        this.setY(newYposition)
    }

    this.delete = () => {
        this.area.parentNode.removeChild(this.area)
    }
}

function cenario() {

    let novoCenario = new criarMapas()
    let velhoCenario
    novoCenario.animar()

    this.animar = () => {

        novoCenario.animar()

        if (typeof velhoCenario === 'object' && velhoCenario !== null) {
            velhoCenario.animar()
            if (velhoCenario.getY() == 690) {
                velhoCenario.delete()
                pontos.incrementarContador()
            }
        }

        if (novoCenario.getY() == 0) {
            velhoCenario = novoCenario
            novoCenario = new criarMapas()
        }
    }
}

function jogador() {

    this.elemento = document.getElementById('jogador')
    this.elemento.style.maxHeight = '70px'
    this.elemento.style.maxWidth = '70px'
    this.elemento.style.width = 'auto'
    this.elemento.style.height = 'auto'
    this.elemento.src = 'nave.gif'

    this.animar = () => {
        let obj1 = new Objeto(this.elemento, 0, 0, 0, 600, 2);

        function Objeto(objeto, dirX, dirY, posX, posY, vel) {
            this.objeto = objeto;
            this.dirX = dirX;
            this.dirY = dirY;
            this.posX = posX;
            this.posY = posY;
            this.vel = vel;

            this.getDirX = function () {
                return this.dirX;
            }

            this.getDirY = function () {
                return this.dirY;
            }

            this.getPosX = function () {
                return this.posX;
            }

            this.getPosY = function () {
                return this.posY;
            }

            this.getVel = function () {
                return this.vel;
            }

            this.getObj = function () {
                return this.objeto;
            }


            this.setDirX = function (dx) {
                this.dirX = dx;
            }

            this.setDirY = function (dy) {
                this.dirY = dy;
            }

            this.setPosX = function (px) {
                this.posX = px;
            }

            this.setPosY = function (py) {
                this.posY = py;
            }

            this.setVel = function (vel) {
                this.vel = vel;
            }

            this.setProperty = function () {
                return this.objeto.style;
            }

            this.setPosition = function (posX, posY) {
                this.objeto.style.transform = `translate(${posX}px, ${posY}px)`;
            }
        }

        function keyPress(e, flag) {
            let tecla = e.keyCode;

            switch (tecla) {

                case 65: case 97: {

                    if (flag) {
                        obj1.setDirX(-1);
                    } else {
                        obj1.setDirX(0);
                    }

                    break;
                }

                case 38: case 87: {

                    if (flag) {
                        obj1.setDirY(-1);
                    } else {
                        obj1.setDirY(0);
                    }

                    break;
                }

                case 39: case 68: {

                    if (flag) {
                        obj1.setDirX(1);
                    } else {
                        obj1.setDirX(0);
                    }

                    break;
                }

                case 40: case 83: {

                    if (flag) {
                        obj1.setDirY(1);
                    } else {
                        obj1.setDirY(0);
                    }

                    break;
                }
            }
        }

        function frame() {
            let posX = obj1.getPosX(),
                posY = obj1.getPosY(),
                dirX = obj1.getDirX(),
                dirY = obj1.getDirY(),
                vel = obj1.getVel();

            obj1.setPosX(posX + (dirX * vel));
            obj1.setPosY(posY + (dirY * vel));

            obj1.setPosition(obj1.getPosX(), obj1.getPosY());
        }

        let body = document.body;

        body.addEventListener("keydown", function () { keyPress(event, 1); });

        body.addEventListener("keyup", function () { keyPress(event, 0); });

        setInterval(frame, 1)
    }
}

function colisao() {

    this.verificarColisao = () => {
        if (this.estaColidindo()) return true
    }

    this.estaColidindo = () => {

        let tamanhoBarreira = document.getElementsByClassName("barreira").length
        let nave = document.getElementById("jogador")

        for (let i = 0; i < tamanhoBarreira; i++) {
            let barreira = document.getElementsByClassName("barreira")[i]
            const a = nave.getBoundingClientRect()
            const b = barreira.getBoundingClientRect()
            const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
            const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

            if (horizontal && vertical)
                return true
        }
        return false
    }

    this.pegouCombustivel = () => {

        let tamanhoChao = document.getElementsByClassName("combustivel").length
        let nave = document.getElementById("jogador")

        for (let i = 0; i < tamanhoChao; i++) {
            let chao = document.getElementsByClassName("combustivel")[i]
            const a = nave.getBoundingClientRect()
            const b = chao.getBoundingClientRect()
            const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
            const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

            if (horizontal && vertical)
                return true
        }
        return false
    }

    this.pegouMoeda = () => {

        let tamanhoMoeda = document.getElementsByClassName("moeda").length
        let nave = document.getElementById("jogador")

        for (let i = 0; i < tamanhoMoeda; i++) {
            let moeda = document.getElementsByClassName("moeda")[i]
            const a = nave.getBoundingClientRect()
            const b = moeda.getBoundingClientRect()
            const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
            const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

            if (horizontal && vertical)
                return true
        }
        return false
    }

}

function barraProgresso() {
    const elemento = novoElemento('div', 'progresso')
    const elemento2 = novoElemento('div', 'porcentagemProgresso')

    areaDoJogo.appendChild(elemento)
    elemento.appendChild(elemento2)

    let width = 400
    let qntCombustivel = 0

    this.diminuirCombustivel = () => {
        width--;
        elemento2.style.width = `${width}px`;
        return width
    }

    this.aumentarCombustivel = () => {
        qntCombustivel++
        if (width < 370) {
            aux = width + 30
            let id2 = setInterval(aumentar, 30)

            function aumentar() {
                if (width == aux) {
                    clearInterval(id2);
                } else {
                    width++;
                    elemento2.style.width = `${width}px`;
                }
            }
        }
    }

    this.qntdCombustivel = () => {
        return qntCombustivel
    }

}

function contarMoedas() {
    
    const elemento = novoElemento('div', 'contador')
    let aux = 0
    elemento.innerHTML = `<h1>${aux}</h1>`
    areaDoJogo.appendChild(elemento)
    
    this.incrementarContador = () => {
        Math.floor((aux++/18))
        elemento.innerHTML = `<h1>${aux}</h1>`
    }

    this.qntdMoedas = () => {
        return aux
    }
}

function telaGameOver() {

    this.telaFinal = () => {
        let pnts = pontos.qntdMoedas()
        let combustivel = barra.qntdCombustivel()
        const elemento = novoElemento('div', 'telaGameOver')
        areaDoJogo.appendChild(elemento)
        elemento.innerHTML = `<h1>Você obteve ${pnts} pontos e pegou ${combustivel} combustíveis!</h1><br>`
        elemento.style.top = '-700px'
        elemento.style.left = '300px'

        let aux = 0
        let id = setInterval(frame, 10)

        function frame() {
            aux = aux + 10
            elemento.style.transform = `translateY(${aux}px)`
            if (aux == 700) clearInterval(id)
        }
    }
}

function inicializar() {
    let nave = new jogador() 
    const mapa = new cenario()
    const colisoes = new colisao()
    const telaGO = new telaGameOver()

    nave.animar()
    areaDoJogo.appendChild(nave.elemento)

    // const colisao = new colisao()

    this.iniciar = () => {
        const timer = setInterval(() => {

            mapa.animar()
            
            if (colisoes.pegouMoeda()) { // incrementa moeda para o jogador
                pontos.incrementarContador()
            }

            if (colisoes.pegouCombustivel()) { // caso o jogador pegue um combustível, aumenta a barra de combustível
                barra.aumentarCombustivel()
            }

            if (barra.diminuirCombustivel() === 0) { // caso o combustivel acabe, o jogo para
                clearInterval(timer)
                telaGO.telaFinal()
            }

            if (colisoes.verificarColisao()) { // caso o jogador esbarre em uma parede, o jogo acaba
                clearInterval(timer)
                telaGO.telaFinal()
            }

        }, 20)
    }
}

const barra = new barraProgresso()
const pontos = new contarMoedas()

new inicializar().iniciar()







