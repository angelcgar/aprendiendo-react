import { useEffect, useState } from "react";

function App() {
  const [enable, setEnable] = useState(false);

  useEffect(() => {
    console.log("Efect", { enable });

    const hanleMove = (e) => {
      const { clientx, clienty } = e;
      console.log("cursor", clientx, clienty);
    };

    if (enable) {
      window.addEventListener("pointermove", hanleMove);
    }
  }, [enable]);

  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transition: "translate(0px, 0px)",
        }}
      />
      <button onClick={() => setEnable(!enable)}>
        {enable ? "desactivar" : "activar"} seguir puntero
      </button>
    </main>
  );
}

export default App;
