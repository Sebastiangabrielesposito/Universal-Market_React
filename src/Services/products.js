import products from '../assets/data.json'
// import producto from '../assets/data'

// export const getProducts = () => {
//     const task = new Promise((resolve, reject ) =>{
//         setTimeout(() =>{
//             resolve(producto);

//         },2000)
// });
// return task
// }

export const getProducts = () => {
    const task = new Promise((resolve, reject ) =>{
        setTimeout(() =>{
            resolve(products);

        },2000)
});
return task
}
