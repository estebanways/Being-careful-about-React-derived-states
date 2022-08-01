import './App.css';
import { useState } from 'react';

/*
 * If one state affects another one, just store its
 * id instead of creating a new object inside
 */
function App() {
  const [products, setProducts] = useState([
    { id: 1, title: "black sneakers", quantity: 1},
    { id: 2, title: "red t-shirt", quantity: 1},
    { id: 3, title: "blue jeans", quantity: 1},
  ]);

  /*
   * Increases the product in the Selected Product
   */
  const [selectedId, setSelectedId] = useState(null);
  const selectedProduct = products.find((p) => p.id === selectedId);

  /* 
   * Uses map through all the products
   * and increases the related one by id
   */
  const increment = (id) => {
    setProducts((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1};
        } else return product;
      });
    });
  };

  /*
   * When any product is selected it is just going to
   * update SelectedId
   */
  const handleChoose = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="App">
      <h4>All products</h4>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.title}
            <button onClick={() => handleChoose(product.id)}>Choose</button>
          </span>
          <div className="quantity">
            <button>-</button>
            <span>{product.quantity}</span>
            <button onClick={() => increment(product.id)}>+</button>
          </div>          
        </div>
      ))}
      <h4>Selected Product</h4>
      <span>{selectedProduct?.title}</span>
      <span>{selectedProduct?.quantity}</span>
    </div>
  );
}

export default App;
