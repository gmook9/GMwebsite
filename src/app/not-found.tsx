'use client';
import ParticleBackground from '../app/components/ParticleBackground'; 
import Alert from '../app/components/Alert';

export default function NotFound() {
    return (
      <div style={{ position: 'relative', textAlign: 'center', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ParticleBackground speed={1} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Alert message="404 - Page Not Found" />
        </div>
      </div>
    );
}
