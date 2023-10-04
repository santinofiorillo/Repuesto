
const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img:'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        description: 'Descripcion de Iphone 12'
    },
    {id:'2', name: 'Samsung S21', price: 800, category: 'celular', img:'https://img.freepik.com/vector-premium/imagen-dibujos-animados-hongo-palabra-hongo_587001-200.jpg' ,       stock: 25,
    description: 'Descripcion de Iphone 12'},
    {id:'3', name: 'Tablet S6', price: 800, category: 'celular', img:'https://img.freepik.com/vector-premium/imagen-dibujos-animados-hongo-palabra-hongo_587001-200.jpg',        stock: 25,
    description: 'Descripcion de Iphone 12'}
]

export const getProducts = () => {
    return new Promise ((resolve) => {
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

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter((product) => product.category === categoryId);
            resolve(filteredProducts);
        }, 500);
    });
};