import style from './Card.module.css'
import React from "react";

export default props =>
  <div className={style.Card}>
    <div className={style.Conteudo}>
      {props.children}
    </div>
    <div className={style.Footer}>
      {props.titulo}
    </div>
  </div>
