// src/app/page.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Strategic Plan</h1>
      <p>
        <Link href="/calendar">Go to Calendar</Link>
      </p>
    </div>
  );
}
