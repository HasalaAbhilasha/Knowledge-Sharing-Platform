// app/layout.js
'use client';

import { useEffect, useState } from 'react';

export default function Layout({ children }) {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUsername(JSON.parse(storedUser).username);
    }
  }, []);

  return (
    <><html>
      <header className="bg-gray-800 text-white p-4">
        {username ? <p>Welcome, {username}!</p> : <p>Welcome, Guest!</p>}
      </header>
      <body>
      <main>{children}</main>
      </body>
      
    </html>
    </>
  );
}