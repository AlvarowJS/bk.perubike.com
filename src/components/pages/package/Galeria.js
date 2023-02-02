import React, { useState } from "react";
import GaleriaCentroHistorico from "./Galeria/GaleriaCentroHistorico";
import GaleriaLimaBahia from "./Galeria/GaleriaLimaBahia";
import GaleriaLimaBohemian from "./Galeria/GaleriaLimaBohemian";

export default function Galeria({data}) {
    const [dataInfo, setDataInfo] = useState(data)
   return (
      <>
         {
            dataInfo.name.toLowerCase() === 'centro historico' ? <GaleriaCentroHistorico /> :
            dataInfo.name.toLowerCase() === 'lima bahia'?  <GaleriaLimaBahia /> :
            dataInfo.name.toLowerCase() === 'lima bohemian'?  <GaleriaLimaBohemian /> : null
         }
      </>
   );
}
