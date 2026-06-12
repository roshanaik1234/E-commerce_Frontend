import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async(e) => {
    e.preventDefault();
    if (!email || !password) {
    setError('Please fill in all fields');
     return;
    }
    try {
      const response=await fetch("http://localhost:3000/login",{
         method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password
    }),
      })

        const data = await response.json();

    
   
  if (!data.success) {
    alert(data.message); // Email already exists
    return;
  }

  if(data.success){
sessionStorage.setItem("token",data?.token)
sessionStorage.setItem("userName",data?.user?.name)
 navigate("/")
  }

  // alert("User added successfully");
   
    } catch (error) { 
       console.error(error);
    }
  };

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f4f4f4',
      fontFamily: 'Arial, sans-serif'
    }}>
      <form
        onSubmit={handleLogin}
        style={{
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          maxWidth: '400px',
          width: '100%'
        }}
      >
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Login to Your Account</h2>
        {error && (
          <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>
            {error}
          </div>
        )}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '94%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '94%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#ff6600',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;