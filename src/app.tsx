import { Suspense } from "solid-js";
import { FileRoutes } from "@solidjs/start/router";
import { Router } from "@solidjs/router";
import { MetaProvider, Title, Link } from "@solidjs/meta";
import "./app.css";

export default function App() {
  return (
    <MetaProvider>
      <Title>Job Visualizer</Title>

      {/* Fonts */}
      <Link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
      />
      <Link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700"
      />

      <Suspense>
        <Router>
          <FileRoutes />
        </Router>
      </Suspense>
    </MetaProvider>
  );
}
