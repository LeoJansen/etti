
import App from "./App";


export default function Home() {
  return (
    <div id="page1" className="relative w-full min-h-screen overflow-visible pointer-events-none">
      {/* Reabilita eventos no conteúdo real */}
      <div className="pointer-events-auto">
        <App />
      </div>
    </div>
  );
}
