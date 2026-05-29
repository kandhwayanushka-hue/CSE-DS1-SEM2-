const { useState, useEffect } = React;

function App() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "blue",
          padding: "15px 25px"
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "28px",
            fontWeight: "bold",
            margin: 0
          }}
        >
          MyWebsite
        </h1>

        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            gap: "15px",
            margin: 0,
            padding: 0
          }}
        >
          <li>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "8px 14px",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              HOME
            </a>
          </li>

          <li>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "8px 14px",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              ABOUT
            </a>
          </li>

          <li>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "8px 14px",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              SERVICES
            </a>
          </li>

          <li>
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "8px 14px",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
