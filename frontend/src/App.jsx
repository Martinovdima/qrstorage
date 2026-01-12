import { useEffect } from "react";
import api from "./api/axios";

function App() {
  useEffect(() => {
    api.get("/health")
      .then(res => console.log("Backend says:", res.data))
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h1>Frontend + Backend соединены</h1>
      <p>Проверь консоль браузера</p>
    </div>
  );
}

export default App;

