import React, { useEffect, useState } from "react";

function Screen4() {
  const [desconto, setDesconto] = useState();

  useEffect(() => {
    setDesconto(localStorage.getItem("desconto"));
  }, []);
  return (
    <div>
      <p className="discount">Seu desconto é de: {desconto}.</p>
    </div>
  );
}

export default Screen4;
