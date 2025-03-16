import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Image src="/assets/error/404.png" alt="404" width={100} height={100} />
      <br />
      <h3>404 | Not Found</h3>
      <small style={{ color: 'gray', marginTop: '5px' }}>Could not find requested resource</small>
      <br />
      <Link
        style={{
          background: 'black',
          color: 'white',
          padding: '10px 30px',
          marginTop: '10px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
