/*
Analog + Digital Indian Clock - React (Vite) + React-Bootstrap
File: App.jsx

Features:
- Analog clock with hour, minute, and second hands
- Digital time + date below the clock
- Time zone: Asia/Kolkata (IST)
- Responsive, with light/dark theme toggle

Steps:
1. Create a Vite React project: npm create vite@latest my-clock -- --template react
2. cd my-clock
3. Install dependencies: npm install react-bootstrap bootstrap
4. Import bootstrap CSS in main.jsx:
   import 'bootstrap/dist/css/bootstrap.min.css'
5. Replace src/App.jsx with this file and run: npm run dev
*/

import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  Button,
  Row,
  Col,
  ToggleButton,
  ButtonGroup,
} from "react-bootstrap";

export default function App() {
  const [now, setNow] = useState(new Date());
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // Convert system time to IST
  const istDate = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );

  const seconds = istDate.getSeconds();
  const minutes = istDate.getMinutes();
  const hours = istDate.getHours();

  // Hand angles
  const secondDeg = seconds * 6; // 360/60
  const minuteDeg = minutes * 6 + seconds * 0.1; // 360/60 + adjust for smoothness
  const hourDeg = (hours % 12) * 30 + minutes * 0.5; // 360/12 + adjust with minutes

  const timeStr = istDate.toLocaleTimeString("en-GB", { hour12: true });
  const dateStr = istDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const dayName = istDate.toLocaleDateString("en-GB", { weekday: "long" });

  return (
    <div
      className={
        dark
          ? "bg-dark text-light min-vh-100 d-flex align-items-center"
          : "bg-light text-dark min-vh-100 d-flex align-items-center"
      }
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Card
              className={dark ? "bg-secondary text-light shadow-lg" : "shadow"}
            >
              <Card.Body className="p-4 text-center">
                <h5 className="mb-3">Analog + Digital Indian Clock</h5>

                {/* Analog Clock */}
                <div
                  style={{
                    width: "280px",
                    height: "280px",
                    borderRadius: "50%",
                    border: dark ? "6px solid #ccc" : "6px solid #333",
                    margin: "0 auto",
                    position: "relative",
                    background: dark ? "#212529" : "#f8f9fa",
                    boxShadow: dark
                      ? "0 0 15px rgba(255,255,255,0.3)"
                      : "0 0 15px rgba(0,0,0,0.3)",
                  }}
                >
                  {/* Hour hand */}
                  <div
                    style={{
                      width: "6px",
                      height: "70px",
                      background: dark ? "#f8f9fa" : "#333",
                      position: "absolute",
                      top: "70px",
                      left: "calc(50% - 3px)",
                      transformOrigin: "bottom",
                      transform: `rotate(${hourDeg}deg)`,
                    }}
                  ></div>

                  {/* Minute hand */}
                  <div
                    style={{
                      width: "4px",
                      height: "90px",
                      background: dark ? "#f8f9fa" : "#007bff",
                      position: "absolute",
                      top: "50px",
                      left: "calc(50% - 2px)",
                      transformOrigin: "bottom",
                      transform: `rotate(${minuteDeg}deg)`,
                    }}
                  ></div>

                  {/* Second hand */}
                  <div
                    style={{
                      width: "2px",
                      height: "110px",
                      background: "red",
                      position: "absolute",
                      top: "30px",
                      left: "calc(50% - 1px)",
                      transformOrigin: "bottom",
                      transform: `rotate(${secondDeg}deg)`,
                    }}
                  ></div>

                  {/* Center knob */}
                  <div
                    style={{
                      width: "15px",
                      height: "15px",
                      background: "black",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "calc(50% - 7.5px)",
                      left: "calc(50% - 7.5px)",
                    }}
                  ></div>
                </div>

                {/* Digital Time */}
                <div className="mt-3" style={{ fontFamily: "monospace" }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 700 }}>
                    {timeStr}
                  </div>
                  <div style={{ fontSize: "1rem", opacity: 0.85 }}>
                    <strong>{dayName}</strong> • {dateStr} (IST)
                  </div>
                </div>

                <hr />

                {/* Theme Toggle */}
                <ButtonGroup>
                  <ToggleButton
                    id="toggle-theme"
                    type="checkbox"
                    variant={dark ? "dark" : "outline-dark"}
                    checked={dark}
                    onChange={() => setDark((d) => !d)}
                  >
                    {dark ? "Dark" : "Light"}
                  </ToggleButton>
                </ButtonGroup>

                <small className="d-block mt-3 text-muted">
                  Runs locally using your system clock — shown in Indian
                  Standard Time (UTC+05:30).
                </small>
              </Card.Body>
            </Card>

            <div className="text-center mt-3">
              <small className="text-muted">
                Made with React + Vite + React-Bootstrap
              </small>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
