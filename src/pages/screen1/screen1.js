import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Screen1() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState();
  const [error, setError] = useState('');

  const nextPage = () => {
    if (checked === 1) {
      navigate("/screen2");
    } else {
      setError('Você deve ter completado o ensino médio para se matricular!')
    }
  };

  return (
    <div>
      <h1>Possui ensino médio completo?</h1>
      <input
        className="checkbox1"
        type="checkbox"
        checked={checked === 1 ? true : false}
        onChange={() => setChecked(1)}
      />
      Sim
      <br />
      <input
        className="checkbox2"
        type="checkbox"
        checked={checked === 0 ? true : false}
        onChange={() => setChecked(0)}
      />
      Não
      <br />
      <button className="success" onClick={nextPage}>Continuar</button>
      <br />
      <p className="error">{error}</p>
    </div>
  );
}

export default Screen1;
