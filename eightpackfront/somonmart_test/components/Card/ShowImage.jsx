const API = 'http://localhost:8000/api';



const ShowImage = ({ item, url }) => {

    return(
        <div className="product-img">
        <img
            src={`${API}/${url}/photo/${item._id}`}
            alt={item.name}
            className="mb-3"
            style={{ maxHeight: "240px", maxWidth: "240px" }}
        />
        <style jsx>
            {`
            .product-img{
                text-align: center;
            }
            `}
        </style>

    </div>
    )
}
    
    


export default ShowImage;