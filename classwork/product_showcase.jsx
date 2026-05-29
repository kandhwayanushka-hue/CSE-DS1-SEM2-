const { useState, useEffect } = React;

function App() {
  return (
    <div style={{ backgroundColor: '#fffdee', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      {/* Main Centered and Bold Heading */}
      <h1 style={{ color: '#952626', textAlign: 'center', fontWeight: 'bold', marginBottom: '40px' }}>
        Product Showcase
      </h1>

      {/* Flexbox container for arranging and centering product cards */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: '30px', 
        padding: '20px' 
      }}>
        
        {/* Product 1: Wireless Mouse */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '350px',
          height: '150px',
          backgroundColor: '#63b3ed',
          border: '2px solid #3182ce',
          borderRadius: '23px',
          textAlign: 'center',
          padding: '15px',
          boxSizing: 'border-box'
        }}>
          <p style={{ color: '#002244', fontSize: '20px', fontWeight: 'bold', margin: '5px 0' }}>Wireless Mouse</p>
          <p style={{ color: '#ffffff', fontSize: '16px', margin: '5px 0' }}><span style={{ fontWeight: 'bold' }}>Price:</span> ₹799</p>
          <p style={{ color: '#ffffff', fontSize: '16px', margin: '5px 0' }}><span style={{ fontWeight: 'bold' }}>Category:</span> Electronics</p>
        </div>

        {/* Product 2: Running Shoes */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '350px',
          height: '150px',
          backgroundColor: '#48bb78',
          border: '2px solid #2f855a',
          borderRadius: '23px',
          textAlign: 'center',
          padding: '15px',
          boxSizing: 'border-box'
        }}>
          <p style={{ color: '#003311', fontSize: '20px', fontWeight: 'bold', margin: '5px 0' }}>Running Shoes</p>
          <p style={{ color: '#ffffff', fontSize: '16px', margin: '5px 0' }}><span style={{ fontWeight: 'bold' }}>Price:</span> ₹2499</p>
          <p style={{ color: '#ffffff', fontSize: '16px', margin: '5px 0' }}><span style={{ fontWeight: 'bold' }}>Category:</span> Footwear</p>
        </div>

        {/* Product 3: Smart Watch */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '350px',
          height: '150px',
          backgroundColor: '#feb2b2',
          border: '2px solid #e53e3e',
          borderRadius: '23px',
          textAlign: 'center',
          padding: '15px',
          boxSizing: 'border-box'
        }}>
          <p style={{ color: '#651a1a', fontSize: '20px', fontWeight: 'bold', margin: '5px 0' }}>Smart Watch</p>
          <p style={{ color: '#ffffff', fontSize: '16px', margin: '5px 0' }}><span style={{ fontWeight: 'bold' }}>Price:</span> ₹3999</p>
          <p style={{ color: '#ffffff', fontSize: '16px', margin: '5px 0' }}><span style={{ fontWeight: 'bold' }}>Category:</span> Gadgets</p>
        </div>

      </div>
    </div>
  );
}
