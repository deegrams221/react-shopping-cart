import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import {ProductContext} from './Contexts/ProductContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		// Step 2 - Providing data with ProductContext
	  <ProductContext.Provider value={{ products, addItem }} >
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
				component={Products} />}
			/>
		</div>
	  </ProductContext.Provider>
	);
}

export default App;
