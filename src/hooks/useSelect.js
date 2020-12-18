import React, { useState } from 'react';

const useSelect = (stateInicial,opciones) => {

    const [state, actualizarSelect] = useState(stateInicial);

    const SelectNoticias = () => (
        <select 
            className="browser-default"
            value={state}
            onChange={e => actualizarSelect(e.target.value)}
        >
            {opciones.map(opcion => (
                <option  key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    );


    return [state,SelectNoticias];
}
 
export default useSelect;