'use client';
import ParticleBackground from '../app/components/ParticleBackground'; 
import Alert from '../app/components/Alert';

export default function NotFound() {
    return (
      <div style={{ position: 'relative', textAlign: 'center', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <ParticleBackground speed={1} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Alert message="404 - Page Not Found" />
          <button
            onClick={() => window.location.href = 'https://garretmook.com/home'}
            style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#1D4ED8', color: '#FFF', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
          >
            Back home
          </button>
        </div>
      </div>
    );
}
