import products from '../assets/data.json'
// import dataHome from '../assets/data-Home';


export const getProducts = (idCategoria) => {
    const task = new Promise((resolve, reject ) =>{
        setTimeout(() =>{
            resolve(idCategoria ? 
                products.filter(prod  => prod.categoria === idCategoria)
                : products);
        },1000)
        
});
return task
}
// console.log(products.categoria);

export const getProducto = (id) => {
    const task = new Promise((resolve, reject ) =>{
        setTimeout(() =>{
            resolve(products);
        },100)
});
return task
}



export const HomeProducts = (id) => {
    const task1 = new Promise((resolve, reject) => {
        
        resolve(products.filter(prod => prod.$ === "$"))
    });
    return task1
};