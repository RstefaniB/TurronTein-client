import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "../PersonalInfo";
import OtherInfo from "../OtherInfo";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
  });

  return (
    <div className="form">
      < div className="progressbar" >

        <p>
          CON QUÉ FRECUENCIA SUELES COMPRAR BARRAS ENERGÉTICAS??
        </p>

      </ div>

      <div className="header">

        <p>
          TE GUSTARÍA INCORPORAR PROTEÍNAS A TUS HÁBITOS ALIMENTICIOS A TRAVÉS DE TURRONES?
        </p>

      </div>
      <div className="header">

        <p>
          QUE SABORES TE GUSTAN MAS
        </p>

      </div>

      <div className="header">

        <p>
          DUREZA DEL TURRON
        </p>

      </div>

      <div className="header">

        <p>
          CONSUMES ALGUN OTRO PRODUCTO A BASE DE PROTEINAS?
        </p>

      </div>

      {/* this button should enable any user to move backward  */}
      <button
        disabled={page == 0}
        onClick={() => {
          page(() => { });
        }}

      >
        Prev
      </button>

      {/* this button should enable any user to move backward  */}

      <button
        onClick={() => {
          if (page == 1) {
            console.log();
          } else {
            page(() => { });
          }
        }}
      >
      </button>
    </div>
  );
}

export default Form;

//renderizado condiional
