'use client';
import Head from 'next/head';

const Header = () => (
  <>
    <Head>
      <title>My App Header</title>
      <meta name="description" content="Description of your app" />
    </Head>
    <header style={{ display: 'flex', alignItems: 'center', padding: '0', background: '#ffffffc4', color: '#000000ff', height: '100px', position: 'relative' }}>
      <img src="/diablo-4-seeklogo.svg" alt="Logo" style={{ height: '100%', width: 'auto', objectFit: 'contain', flexShrink: 0 }} />
      <h1 style={{ position: 'absolute', left: 0, right: 0, margin: 0, textAlign: 'center', width: '100%', zIndex: 1, fontSize: '2rem' }}>D4Helper</h1>
      <button
        style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: '2px solid #000000ff', borderRadius: '6px', padding: '0.5rem 1rem', cursor: 'pointer', fontSize: '1rem', color: '#000000ff', zIndex: 2 }}
        aria-label="Menu"
        onClick={() => alert('Log in clicked!')}
      >
        Log in
      </button>
      {/* Add navigation or other elements here */}
    </header>
  </>
);

export default Header;