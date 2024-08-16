'use client';
import ParticleBackground from '../app/components/ParticleBackground'; 
import Alert from '../app/components/Alert';

export default function NotFound() {
    return (
      <div style={{ position: 'relative', textAlign: 'center', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <ParticleBackground speed={1} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Alert message="404 - Page Not Found" />
          <a href="https://garretmook.com/home" style={{ marginTop: '20px', display: 'inline-block' }}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="white"
              style={{ cursor: 'pointer' }}
            >
              <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/>
            </svg>
          </a>
        </div>
      </div>
    );
}
