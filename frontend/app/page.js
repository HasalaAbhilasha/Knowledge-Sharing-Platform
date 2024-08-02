// app/page.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Knowledge Sharing Platform</h1>
      <p>This is a platform where employees can share their knowledge and resources.</p>
      <Link href="/login">Go to Login</Link>
      {/* Add more content and components here */}
    </div>
  );
}
