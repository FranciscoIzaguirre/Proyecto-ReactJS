const products = [
    {
        id: '1',
        name: 'Cerveza Salta',
        price: 2000,
        category:'Cervezas',
        img:'https://www.ccu.com.ar/wp-content/uploads/2021/06/saltarubia.png',
        stock:15,
        description:'Descripcion de cerveza salta'
    },
    {
        id: '2',
        name: 'Vino Rutini Cabernet Malbec',
        price: 7000,
        category:'Vinos',
        img:'https://01almacen.com.ar/cdn/shop/products/VINO-RUTINI-CABERNET-MALBEC-750ML_e6ea4e_14801.jpg?v=1627075220',
        stock:10,
        description:'Descpripcion vino rutini'
    },
    {
        id: '3',
        name: 'Licor Sheridans',
        price:20000,
        category:'Licores',
        img:'https://gobar.vtexassets.com/arquivos/ids/159254-800-auto?v=638107902129770000&width=800&height=auto&aspect=true',
        stock:8,
        description:'Descripcion licor sheridans'
    }
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
            }, 500)
            })
}

export const getProductByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
            }, 500)
            })
}