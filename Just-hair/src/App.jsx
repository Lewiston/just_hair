import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Product';
import Product from './components/Sidebar';


function App() {
return (
<>
<Navbar />
<Hero />
<div style={{ padding: '2rem' }}>
{/* <Product /> */}
</div>
</>
);
}
export default App;