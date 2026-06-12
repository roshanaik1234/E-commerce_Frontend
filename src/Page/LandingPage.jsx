import { useState, useEffect } from 'react';

const LandingPage = () => {
  const[products,setproducts]=useState([]);
        const [userAvailable, setUserAvailable] = useState(null);
  // Sample product data
  // const products = [
  //   { id: 1, name: 'Product 1', price: '$99', image: 'https://i.pinimg.com/736x/cb/6c/23/cb6c23a8fe7ced98a17b23703fb3279c.jpg' },
  //   { id: 2, name: 'Product 2', price: '$149', image: 'https://i.pinimg.com/736x/cb/6c/23/cb6c23a8fe7ced98a17b23703fb3279c.jpg' },
  //   { id: 3, name: 'Product 3', price: '$79', image: 'https://i.pinimg.com/736x/cb/6c/23/cb6c23a8fe7ced98a17b23703fb3279c.jpg' },
  //   { id: 4, name: 'Product 4', price: '$199', image: 'https://i.pinimg.com/736x/cb/6c/23/cb6c23a8fe7ced98a17b23703fb3279c.jpg' },
  //       { id: 1, name: 'Product 1', price: '$99', image: 'https://i.pinimg.com/736x/cb/6c/23/cb6c23a8fe7ced98a17b23703fb3279c.jpg' },
  //   { id: 2, name: 'Product 2', price: '$149', image: 'https://i.pinimg.com/736x/cb/6c/23/cb6c23a8fe7ced98a17b23703fb3279c.jpg' },
  //   { id: 3, name: 'Product 3', price: '$79', image: 'https://i.pinimg.com/736x/cb/6c/23/cb6c23a8fe7ced98a17b23703fb3279c.jpg' },
  //   { id: 4, name: 'Product 4', price: '$199', image: 'https://i.pinimg.com/736x/cb/6c/23/cb6c23a8fe7ced98a17b23703fb3279c.jpg' },    { id: 1, name: 'Product 1', price: '$99', image: 'https://i.pinimg.com/736x/cb/6c/23/cb6c23a8fe7ced98a17b23703fb3279c.jpg' },
  //   { id: 2, name: 'Product 2', price: '$149', image: 'https://i.pinimg.com/736x/cb/6c/23/cb6c23a8fe7ced98a17b23703fb3279c.jpg' },
  //   { id: 3, name: 'Product 3', price: '$79', image: 'https://i.pinimg.com/736x/cb/6c/23/cb6c23a8fe7ced98a17b23703fb3279c.jpg' },
  //   { id: 4, name: 'Product 4', price: '$199', image: 'https://i.pinimg.com/736x/cb/6c/23/cb6c23a8fe7ced98a17b23703fb3279c.jpg' },
  // ];


 const getProductList = async () => {
  try {
    const response = await fetch("http://localhost:3000/");

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    if(data.Success){
      setproducts(data.data)
    }else{
      alert("somethimg is wrong!")
    }

    console.log("Products:", data);
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

useEffect(()=>{
getProductList()
},[])

  const categories = ['Electronics', 'Fashion', 'Home & Garden', 'Beauty'];

  // Background images for slider
  const backgroundImages = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.1&auto=format&fit=crop&w=1950&q=80',
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

    useEffect(() => {
    const user = sessionStorage.getItem("userName");
    setUserAvailable(user);
  }, [location]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section with Background Slider */}
      <section
        style={{
          position: 'relative',
          height: '100vh',
          backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
        }}
      >
        {/* Overlay for darkening background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}
        />
        {/* Content inside hero */}
        <div
          style={{
            position: 'relative',
            textAlign: 'center',
            maxWidth: '800px',
            padding: '20px',
            zIndex: 1,
          }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>{userAvailable?`Welcome ${userAvailable}`:"Welcome to MyShop"}</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
            Discover the best products at unbeatable prices!
          </p>
          {/* Offer Card */}
          <div
            style={{
              backgroundColor: '#fff',
              color: '#000',
              padding: '20px',
              borderRadius: '10px',
              maxWidth: '400px',
              margin: '0 auto',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
          >
            <h2 style={{ marginBottom: '10px' }}>Special Offer!</h2>
            <p style={{ marginBottom: '15px' }}>
              Get 20% off on your first purchase. Limited time offer!
            </p>
            <button
              style={{
                padding: '10px 20px',
                backgroundColor: '#ff6600',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" style={{
        padding: '40px 20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {categories.map((category, index) => (
          <div key={index} style={{
            flex: '1 1 200px',
            margin: '10px',
            padding: '20px',
            backgroundColor: '#e2e2e2',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3>{category}</h3>
          </div>
        ))}
      </section>

      {/* Featured Products */}
      <section id="products" style={{
        padding: '20px 20px',
        backgroundColor: '#fafafa'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Featured Products</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {products.map(product => (
            <div key={product.id} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              margin: '10px',
              width: '200px',
              textAlign: 'center'
            }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <h3 style={{ margin: '10px 0' }}>{product.name}</h3>
              <p style={{ fontWeight: 'bold' }}>{product.price}</p>
              <button style={{
                padding: '8px 16px',
                marginTop: '10px',
                cursor: 'pointer'
              }}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section style={{
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <h2>About Us</h2>
        <p>We are committed to providing the best shopping experience with top-quality products and excellent customer service.</p>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#111',
        color: '#fff',
        textAlign: 'center',
        padding: '4px'
      }}>
        <p style={{fontSize:"14px"}}>&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;