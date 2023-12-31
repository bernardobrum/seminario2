import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Screen2() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);
  const [error, setError] = useState("");

  const nextPage = () => {
    if (selected) {
      localStorage.setItem("ensino", selected);
      navigate("/screen3");
    } else {
      setError("Você deve selecionar um nível de ensino!");
    }
  };

  return (
    <div>
      <h1>Qual nível de ensino você quer fazer?</h1>
      <select className="select" onChange={(e) => setSelected(e.target.value)}>
        <option style={{ display: "none" }}>Escolher opção</option>
        <option className="opt1" value="Graduação">
          Gradução
        </option>
        <option className="opt2" value="Pós-graduação">
          Pós-graduação
        </option>
        <option className="opt3" value="Mestrado">
          Mestrado
        </option>
      </select>
      <button className="success" onClick={nextPage}>
        Continuar
      </button>
      <p className="error">{error}</p>
    </div>
  );
}

export default Screen2;
