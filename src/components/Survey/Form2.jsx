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
          CON CUAL FRECUENCIA SUELES COMPRAR BARRAS ENERGETICAS??
        </p>

      </ div>

      <div className="header">

        <p>
          TE GUSTARIA INCORPORAR PROTEINAS A TUS HABITOS ALIMENTICIOS A TRAVES DE TURRONES?
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
