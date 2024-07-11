//Je définit une constante qui contenu mon ID 'items'
const itemsKanap = document.getElementById("items"); 

//Je définit une constante qui contient l'URL de mon API
const URL ='http://localhost:3000/api/products';
//J'utilise la fonction asynchrone pour faire un fecth
 function mesProds() {
    //Je fais une requete a l'URL de l'api
  fetch(URL)
   //Je traite la réponse requête et la convertit au format JSON
   .then(response => response.json())
  //Je traite les données extraite en JSON
   .then(data => {
  //J'assigne les données récup a la var 'kanap'
     let kanap = data;
        //Je vérifie si kanap contient mes données grace a if conditions
     if(kanap){
        //Je crée une boucle a travers chaque produits 
         for(let myKanap of kanap){
             let HTML =`
            <a href="./product.html?id=${myKanap._id}">
            <article>
              <img src="${myKanap.imageUrl}"  alt="${myKanap.altTxt}">
              <h3 class="productName">${myKanap.name}</h3>
              <p class="productDescription">${myKanap.description}</p>
            </article>
          </a>  `
     
            //J'ajoute mes donnée au html via l'id 'items'
             itemsKanap.innerHTML += HTML ;
           }
          }
        }
       )
   .catch(error => console.error("Erreur",error))
}
//Je rappelle ma fonction pour qu'elle s'execute
mesProds()
