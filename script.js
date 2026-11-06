const products = [
    {
        id: 1,
        name: "Smartphone Samsung Galaxy A54",
        price: 1899.99,
        discont: 15,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROFpe8T4lUSShfpKDPpJE1Al8MPCKKC3HUEPwK7_YAsg&s=10",
    },
    {
        id: 2,
        name: "Notebook Dell Inspiron",
        price: 3499.99,
        discont: 20,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFgeGyniOX3ThYEnP1FE9mK0zq78Vj8jK3XfCR2v9foQ&s=10",
    },
    {
        id: 3,
        name: "Tablet Apple iPad",
        price: 2999.99,
        discont: 10,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNupLiuP0spDoUB1OyBoh4JR-aHsZaBcQZrc7BQpP9GQ&s=10",
    },
    {
        id: 4,
        name: "Smartwatch Garmin Forerunner",
        price: 1299.99,
        discont: 5,
        image: "https://www.garminbrasil.com.br/cdn/shop/files/Relogio-Garmin-Forerunner-170-Music-Marfim-Azul-nuvem_010-03920-11_3.jpg?v=1779303124",
    },
    {
        id: 5,
        name: "Headphones Sony WH-1000XM4",
        price: 1999.99,
        discont: 25,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtbK4KusLvBZf3tNQnRVgdec-DZHejMQu0VSSQcIPNw&s=10",
    },
    {
        id: 6,
        name: "Speaker JBL Charge 5",
        price: 899.99,
        discont: 10,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIXKn2fRH2ht4ogfxjOZoMeJB9Y0zAGXF76VKxcL0Hxw&s=10",
    },
    {
        id: 7,
        name: "Tablet Samsung Galaxy Tab S8",
        price: 3999.99,
        discont: 15,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV7koOraRqMqu6Ce84UCvDEPHcbL4RrNthUV3MrvGZfQ&s=10",
    },
    {
        id: 8,
        name: "Laptop HP Pavilion",
        price: 4999.99,
        discont: 20,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLrs0j66vVShpT0lI702aEauvarB11M60MPWFqEh00NA&s=10",
    },
    {
        id: 9,
        name: "Monitor LG 27 inch",
        price: 1299.99,
        discont: 10,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0b7sMge_Eo6q5MvrgP-FXybtt_5eam8R9BJTC4IReOQ&s=10",
    },
    {
        id: 10,
        name: "Keyboard Logitech G Pro",
        price: 799.99,
        discont: 15,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZEdFgda5Ij-0wUM70xtSYHfrYdGjF4y5xj2BHuc62Kw&s=10",
    },
    {   
        id: 11,
        name: "Mouse Razer DeathAdder V2",
        price: 499.99,
        discont: 10,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rGoI4fk0Yhf6Ffdk-rTUCP7z8T1iDnKS2T124Ki7-w&s=10",
    },
    {
        id: 12,
        name: "Camera Canon EOS Rebel T7",
        price: 2499.99,
        discont: 20,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqMGo4VKCFOKMzIKbtk9_-ejAdw1PVos8h-cWxpsqUBQ&s=10",
    },
]

function formatPrice(price){
    return price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})
}

function createProductCard(product) {
    
    return `
    
        <div class="products-card">
            <img src="${product.image}" alt="${product.name}" class="products-image">
            <h3 class="products-title">${product.name}</h3>
            <div class="products-price">${formatPrice(product.price)}</div>
            <div class="products-discont">${product.discont}% OFF</div>
        </div> 

    `
}    

function renderProduct(products){
    const grid = document.getElementById('productsGrid')
    grid.innerHTML = products.map(createProductCard).join('')  
}

function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase()

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput))

    renderProduct(filteredProducts)

}

document.addEventListener('DOMContentLoaded', () => {
    renderProduct(products)

    document.getElementById('searchBtn').addEventListener('click', searchProducts)
})