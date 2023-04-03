const Product = ({post}) => {
  return <div>
    <div>
      <p>{post.title}</p>
    </div>
    <div>
      <p>{post.description}</p>
    </div>
    <div>
      <img src={post.image} alt="postimage"/>
    </div>
    <button>
      {true?<p>Remove Item</p>:<p>Add to cart</p>}
    </button>
  </div>;
};

export default Product;
