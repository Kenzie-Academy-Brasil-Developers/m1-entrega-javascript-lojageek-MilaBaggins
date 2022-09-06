

let listPainting = [];
console.log(listPainting)

let listFigure = [];
console.log(listFigure)

function createPaintingItem(arr) {
    let container_paintings = document.querySelector(".container_paintings")
    arr.forEach(produto => {
        if (produto.categoria == 'paintings') {
            container_paintings.innerHTML += `
            <div class="painting_card">
                        <ul>
                            <li>
                                <div class="img_card">
                                    <img src= ${produto.imagem} alt="">
                                </div>
                                <div class="info_produtos">
                                    <h2> ${produto.nome} </h2>
                                    <p> ${produto.valor} </p>
                                </div>
                            </li>
                        </ul>
                    </div>`
        }

    });
};

function createActionItem(itens) {
    let container_actionfigures = document.querySelector(".container_actionfigures")
    itens.forEach(produto => {
        if (produto.categoria == 'actionfigure') {
            container_actionfigures.innerHTML += ` 
            <div class="actionfigure_card">
            <ul>
                <li>
                    <div class="img_card">
                        <img src= ${produto.imagem} alt="">
                    </div>
                    <div class="info_produtos">
                        <h2>${produto.nome}</h2>
                        <p>${produto.valor}</p>
                    </div>
                </li>
            </ul>
        </div>`

        }

    });
};


createPaintingItem(itens);
createActionItem(itens);