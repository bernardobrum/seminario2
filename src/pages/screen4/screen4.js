import React, { useEffect, useState } from "react";

function Screen4() {
  const [desconto, setDesconto] = useState();
  const [ensino, setEnsino] = useState();

  useEffect(() => {
    setDesconto(localStorage.getItem("desconto"));
    setEnsino(localStorage.getItem("ensino"));
  }, []);
  return (
    <div>
      <p className="discount">
        Seu desconto no nível de ensino {ensino} é de: {desconto}.
      </p>
    </div>
  );
}

export default Screen4;
