
import "../styles/ItemListContainer.css"

 const ItemListContainer = ({Greeting}) => {
    return (

            <div className="title">
                {Greeting}
            </div>   
            /* <div className="market" style={{textAlign:'center',fontSize:30,color:'lightblue',cursor:'pointer',transition: 'all 0.6s ease-out',marginTop:100 }}>
                {Greeting1}
            </div>    */
        

    )
};


export default ItemListContainer;