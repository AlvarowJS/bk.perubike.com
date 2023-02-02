import React from "react";

export default function Informacion({data}) {
   return (
      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
         <div className="row">
            <div className="col-lg-12">
               <div className="tab-content-1">
                  <div className="p-overview">
                     <h5>Vision General</h5>
                     <p>{data?.overview}</p>
                  </div>
                  <div className="p-details-table" style={{marginTop: '1rem'}}>
                     <table className="table caption-top">
                        <tbody>
                           <tr>
                              <td>Destino</td>
                              <td>{data?.destino}</td>
                           </tr>
                           <tr>
                              <td>Partida</td>
                              <td>{data?.partida}</td>
                           </tr>
                           <tr>
                              <td>Duracion</td>
                              <td>{data?.duracion}</td>
                           </tr>
                           <tr>
                              <td>Horario</td>
                              <td>{data?.horario}</td>
                           </tr>
                           <tr>
                              <td>Incluye</td>
                              <td>
                                 {data?.incluye.map((item, id) => (
                                    <ul className="table-list-allow" key={id}>
                                       <li>
                                          <i className="bx bx-check" /> {item}
                                       </li>
                                    </ul>
                                 ))}
                              </td>
                           </tr>
                           <tr>
                              <td>No Incluye</td>
                              <td>
										{data?.no_incluye.map((item, id) => (
                                    <ul className="table-list-disallow" key={id}>
                                       <li>
                                          <i className="bx bx-x" /> {item}
                                       </li>
                                    </ul>
                                 ))}
                              </td>
                           </tr>
                           <tr>
                              <td>Precio</td>
                              <td>
										1 Persona / {data?.tarifa.una_persona} (Privado Estandar)
                              <br />
										2 Personas a mas / {data?.tarifa.mas_dos_personas.privado_estandar} c/u (Privado Estandar) <br />
										2 Personas a mas / {data?.tarifa.mas_dos_personas.privado_premium} c/u (Privado Premium)
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
