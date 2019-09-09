import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import {ProductContext} from './Contexts/ProductContext';
import {CartContext} from './Contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	// Stretch Goal - Create a removeItem function
	const removeItem = (id) => {
	  const newCart = cart.filter(product => product.id !== id);
	  setCart(newCart);
	}

	return (
		// Step 2 - Providing data with ProductContext
	  <ProductContext.Provider value={{products, addItem}}>
		  {/* Step 5 - Providing data with CartContext */}
		  <CartContext.Provider value={{cart, removeItem}}>
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route
				exact
				path="/"
				render={() => (
					<Products
						products={products}
						addItem={addItem}
					/>
				)}
			/>

			<Route
				path="/cart"
				component={ShoppingCart} />
		</div>
		</CartContext.Provider>
	  </ProductContext.Provider>
	);
}

export default App;
