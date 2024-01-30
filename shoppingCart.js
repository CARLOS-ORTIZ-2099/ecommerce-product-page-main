const btnBuy = document.querySelectorAll('.btn-buy')
const quantityText = document.querySelectorAll('.quantity')
const shoppingCartContainer = document.querySelector('.shopping-cart-container')
const sectionProducts = document.querySelector('.section-products')
const imageCart = document.querySelector('.image-cart')
const  menuImage = document.querySelector('.menu-image')

let shoppingCart = []  
console.log(quantityText);
console.log(btnBuy);

btnBuy.forEach((btn) => {
    btn.addEventListener('click', handleBuyButtonClick )
})

function handleBuyButtonClick(e){
        const id = e.target.parentElement.parentElement.id
        console.log(id);
        if(quantityText[id].textContent <=0){
            alert('Agrega al menos un producto')
            return
        }
        const name = document.querySelectorAll('.name-product')[id].textContent
        const price = parseFloat(document.querySelectorAll('.price')[id].textContent.slice(1))
        const quantity= parseFloat(document.querySelectorAll('.quantity')[id].textContent)
        const total = price*quantity

        if(shoppingCart.some((product) => product.id === id)){
            shoppingCart = shoppingCart.map((product) => product.id === id ?
             {...product, quantity:product.quantity + quantity, total : product.total+total} : product)
            console.log(shoppingCart);     
        }

        else {
            shoppingCart.push({id, name, price, quantity, total})
            console.log(shoppingCart);
        } 
       quantityText[id].textContent = 0   
       renderProductsCart()
}

sectionProducts.addEventListener('click', handleProductQuantityChange)

function handleProductQuantityChange(e) {
        let id = e.target.parentElement.parentElement.id
        if(e.target.matches('.more')){
            let quantity =  quantityText[id].textContent++
        }
        if(e.target.matches('.less')){
            if(quantityText[id].textContent >0 ){
                let quantity =  quantityText[id].textContent--
            }  
            
        }
}

function renderProductsCart(){
    let data = ``

    shoppingCart.forEach((product) => {
        data+= `
            <div>
                <h1>name :${product.name}</h1>
                <h1>price :  ${product.price}</h1>
                <h1>quantity: ${product.quantity}</h1>
                <h1>total : ${product.total}</h1>
                <button class = 'checkout'>Checkout</button>
            </div>
        `
    })
    shoppingCartContainer.innerHTML = data
    const checkout = document.querySelector('.checkout')
    checkout.addEventListener('click', (e) => {
        alert()
        shoppingCartContainer.innerHTML ='your cart empty'
    })
}

imageCart.addEventListener('mouseover', (e) => {
    shoppingCartContainer.style.display = 'block'
})

imageCart.addEventListener('mouseleave', (e) => {
    shoppingCartContainer.style.display = 'none'
})


