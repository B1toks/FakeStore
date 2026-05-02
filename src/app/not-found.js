import Link from 'next/link';

export const metadata = {
  title: 'Not found',
};

export default function NotFound() {
  return (
    <div style={{ padding: '60px 0', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', margin: '0 0 12px' }}>404</h1>
      <p style={{ color: '#666', margin: '0 0 24px' }}>This page does not exist.</p>
      <Link href="/" style={{ color: '#007bff' }}>← Back to catalog</Link>
    </div>
  );
}
