const params = new URLSearchParams(window.location.search);
const kanapID = params.get('id');

const preUrl = 'http://localhost:3000/api/products/';
////// ÉLÉMENTS DU DOC //////
let itemImg = document.querySelector('.item__img');
let itemTitle = document.getElementById('title');
let itemPrice = document.getElementById('price');
let itemDscrp = document.getElementById('description');
let itemColor = document.getElementById('colors');
let itemQuantity = document.getElementById('quantity');
let ajtPanier = document.getElementById('addToCart');

if (kanapID) {
    const URL = preUrl + kanapID;

    async function getValue() {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            console.log(data);

            const imageHtml = `<img src="${data.imageUrl}" alt="image du produit">`;
            itemImg.innerHTML = imageHtml;

            itemTitle.textContent = data.name;
            itemPrice.textContent = data.price;
            itemDscrp.textContent = data.description;

            const colorsHtml = data.colors.map(color => `<option value="${color}">${color}</option>`).join('');
            itemColor.innerHTML = colorsHtml;

        } catch (error) {
            console.log("error", error);
        }
    }
    getValue();

    ajtPanier.addEventListener('click', () => {
        if (itemQuantity.value == 0) {
            alert('Veuillez sélectionner au moins un article');
        } else if (itemColor.value === '') {
            alert("Veuillez sélectionner une couleur !");
        } else {
            let tableau = [];
            const lclStorage = localStorage.getItem('kanapInfo');
            if (lclStorage) {
                tableau = JSON.parse(lclStorage);
            }

            const dataKanap = {
                id: kanapID,
                name: itemTitle.textContent,
                price: itemPrice.textContent,
                color: itemColor.value,
                quantity: parseInt(itemQuantity.value),
                imageUrl: itemImg.querySelector('img').src
            };

            const produitClean = tableau.findIndex(item => item.id === dataKanap.id && item.color === dataKanap.color);

            if (produitClean !== -1) {
                tableau[produitClean].quantity += dataKanap.quantity;
            } else {
                tableau.push(dataKanap);
            }

            const jsonKanap = JSON.stringify(tableau);
            localStorage.setItem("kanapInfo", jsonKanap);

            if (localStorage.getItem("kanapInfo")) {
                alert("Ajouté au panier");
                window.location.href = "cart.html";
            }
        }
    });
}

