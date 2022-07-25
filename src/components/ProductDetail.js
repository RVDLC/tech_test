const ProductDetail = (props) => {

    const addToCart = e => { props.cartManagement(cartContent => [...cartContent, props.completeProduct]) }
    const removeFromCart = e => props.cartManagement(cartContent => cartContent.filter(product => product.id !== props.completeProduct.id))

    return (
        <div className='productDetail'>
            <div className='detailContainer'>
                <button className='closeButton' onClick={e => props.hideDetail(current => !current)}>X</button>
                <div className='detailInfo'>
                    <div className='detailImage'>
                        <img src={props.completeProduct.thumbnail} />
                    </div>
                    <div className='detailName'>{props.completeProduct.title}</div>
                    <div className="detailPriceContainer">
                        <div className='detailPrice'>{props.completeProduct.price} €</div>
                        {
                            props.inCart ? <button className="cartButton" onClick={removeFromCart}>Remove from cart</button>
                            : <button className="cartButton" onClick={addToCart}>Add to cart</button>
                        }
                    </div>
                </div>
                <div className='detailDescription'>{props.completeProduct.description}</div>
            </div>
        </div>
      );
}

export default ProductDetail;