const product = [
    {
        id: 0,
        image: 'img/oimg/bkbackgroundforstand/bk1.jpg',
        title: 'Agapanthus',
        price: 1200,
    }, 
    {
        id: 1,
        image: 'img/oimg/bkbackgroundforstand/bk.jpg',
        title: 'Allium',
        price: 600,
    },
    {
        id: 2,
        image: 'img/oimg/bkbackgroundforstand/bk2.jpg',
        title: 'Alsroemeria',
        price: 2330,
    },
    {
        id: 3,
        image: 'img/oimg/bkbackgroundforstand/bk3.jpg',
        title: 'Anemone',
        price: 1600,
    },
    {
        id: 4,
        image: 'img/oimg/bkbackgroundforstand/bk4.jpg',
        title: 'Aster',
        price: 1000,
    },
    {
        id: 5,
        image: 'img/oimg/bkbackgroundforstand/bk5.jpg',
        title: 'Azalea',
        price: 2000,
    },
    {
        id: 6,
        image: 'img/oimg/bkbackgroundforstand/bk6.jpg',
        title: 'Azalea',
        price: 2000,
    },
    {
        id: 7,
        image: 'img/oimg/bkbackgroundforstand/bk7.jpg',
        title: 'Begonia',
        price: 600,
    },
    {
        id: 8,
        image: 'img/oimg/bkbackgroundforstand/bk8.jpg',
        title: 'Black-Dyed Susan',
        price: 3000,
    },

    
   
];
const categories = [...new Set(product.map((item)=> 
    {return item}))]
    let i= 0;
document.getElementById('root').innerHTML = categories.map((item)=> 
{
    var{image, title, price} = item;
    return(
        `<div class='box'>
        <div class= 'img-box'>
            <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
    )
}).join('')




var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}
function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var{image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}