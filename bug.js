```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will throw an error during build if there is a missing export in pages/index.js
  const { missingExport } = require('./index');

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>Missing export: {JSON.stringify(missingExport)}</p>
    </div>
  );
}
```