import React, { useState } from "react";

const preguntas = [
  "¿Cómo te sientes hoy?",
  "¿Qué esperás de esta aplicación?",
  "¿Te gustaría recibir recordatorios emocionales?",
];

export default function TestEmocional() {
  const [respuestas, setRespuestas] = useState(Array(preguntas.length).fill(""));
  const [enviada, setEnviada] = useState(false);

  const handleChange = (i, value) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[i] = value;
    setRespuestas(nuevasRespuestas);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviada(true);
    // Aquí podrías guardar las respuestas en backend o localStorage
    // localStorage.setItem("encuesta", JSON.stringify(respuestas));
  };

  return (
    <div style={{ maxWidth: 500, margin: "2rem auto", padding: "2rem", border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>Encuesta emocional</h2>
      {!enviada ? (
        <form onSubmit={handleSubmit}>
          {preguntas.map((preg, i) => (
            <div key={i} style={{ marginBottom: 16 }}>
              <label>
                {preg}
                <input
                  type="text"
                  value={respuestas[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                  required
                  style={{ width: "100%", marginTop: 4 }}
                />
              </label>
            </div>
          ))}
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <div>
          <p>¡Gracias por responder!</p>
          <ul>
            {preguntas.map((preg, i) => (
              <li key={i}><b>{preg}</b>: {respuestas[i]}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
