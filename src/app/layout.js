import React from "react";

import "./styles.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>
          Page rendered on {''}
          <p> {new Date().toLocaleString()}</p>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
