export function getSortedProductsData(){
    return products.map(product => {
        return {
          params: {
            id: product.id,
            title:product.title,
            price:product.price,
            image:product.image|| null
          }
        }
      })
}

export function getProductData(id){
    const product= products.find(product=>`${product.id}`===id);
    return {product}
    
}

export function getAllProductsIds() {  
    return products.map(product => {
      return {
        params: {
          id: product.id.toString(),
        }
      }
    })
  }
const products = [ 
    {
        id:1,
        title:"Set C/6 Pcs Porta Copos Cortiça FK Pixels",
        image:"/images/produto1.webp",
        description:"Conjunto com 6 porta copos.",
        price:"49,90"
    },
    {
        id:2,
        title:"Carteira Almoço Pitaya",
        image:"/images/produto2.webp",
        description:"Carteira.",
        price:"69,90"
    },
    {
        id:3,
        title:"Camiseta Árbol",
        image:"/images/produto3.jpg",
        description:`As camisetas Chico Rei são produzidas artesanalmente com 100% de fibra natural de algodão, refinada e penteada.

        A estampa é pintada com tinta a base de água e com padrão de cores exclusiva. Tudo feito à mão.
        
        Atenção: o tom da malha pode apresentar pequenas variações entre os lotes.`,
        price:"74,90"
    },
    {
        id:4,
        title:"Berloque Frida Kahlo Face Flor Rosa",
        image:"/images/produto4.png",
        description:`Como não se encantar por essa peça? Garanta a sua, coleção exclusiva Frida Kahlo.

        Berloque em Prata 925 com banho de ródio branco. Detalhes do rosto pintados a mão.
        
        Compatível com todas as marcas de pulseiras.
        
        Possuem garantia permanente quanto à sua composição.`,
        price:"129,90"
    },
]