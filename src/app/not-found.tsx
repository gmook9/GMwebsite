'use client'
import ParticleBackground from '../app/components/ParticleBackground'; // Adjust the import path as needed

export default function NotFound() {
    return (
      <div style={{ position: 'relative', textAlign: 'center', padding: '50px', height: '100vh', overflow: 'hidden' }}>
        <ParticleBackground speed={1} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: '#ffffff' }}>404 - Page Not Found</h1>
        </div>
      </div>
    );
}
