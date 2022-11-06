import products from '../assets/data.json'
import dataHome from '../assets/data-Home';

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

        },100)
});
return task
}

export const HomeProducts = () => {
    const task1 = new Promise((resolve, reject) =>{
        resolve(dataHome)
    });
    return task1
};