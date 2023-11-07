import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Screen3() {
  const navigate = useNavigate();
  const [discount, setDiscount] = useState();
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");

  const validateScore = (e) => {
    const score = parseInt(e.target.value);
    if (score < 600) {
      setError("");
      setDiscount("20%");
      setDisabled(false);
    }
    if (score >= 600) {
      setError("");
      setDiscount("30%");
      setDisabled(false);
    }
    if (score >= 700) {
      setError("");
      setDiscount("50%");
      setDisabled(false);
    }
    if (score < 0 || score > 1000) {
      setError("Nota inválida");
      setDisabled(true);
    }
  };

  const nextPage = () => {
    localStorage.setItem("desconto", discount);
    if (!disabled) navigate("/screen4");
  };

  return (
    <div>
      <h1>Insira sua média no ENEM:</h1>
      <input
        className="input"
        onChange={validateScore}
        placeholder="Digite aqui"
      />
      <button className="success" onClick={nextPage} disabled={disabled}>
        Continuar
      </button>
      <p className="error">{error}</p>
    </div>
  );
}

export default Screen3;
