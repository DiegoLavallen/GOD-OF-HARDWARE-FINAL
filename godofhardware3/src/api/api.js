const products = [
    {
        id: 1,
        title: 'Dell G5 SE',
        description: 'Ryzen 4600h, AMD radeon 5600H, 8gb de ram',
        price: 189.000,
        pictureUrl: 'https://m.media-amazon.com/images/I/61TcN9RouEL._AC_SL1500_.jpg'
    },

    {
        id: 2,
        title: 'Acer Pretador Helios 300',
        description: 'Intel i7, RTX 2060, 16gb Ram',
        price: 339.000,
        pictureUrl: 'https://i.ytimg.com/vi/GC-xa9pl6Ao/maxresdefault.jpg'
    },

    {
        id: 3,
        title: 'Lenovo Legion 5',
        description: 'AMD Ryzen 4800H, GTX 1650, 8gb Ram',
        price: 174.000,
        pictureUrl: 'https://www.izalo.com.ar/img/14/4zu3_Lenovo_Legion_5_15IMH05H.jpg'
    },


];

const promesa = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve(products);
    }, 2000)
})

function getProducts(){
    return promesa;
}

export {
    getProducts,
} 