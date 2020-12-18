import React from 'react'
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = () => {

    const OPCIONES = [
        { value:'general', label:'General'},
        { value:'business', label:'Negocios'},
        { value:'entretainment', label:'Entretenimiento'},
        { value:'health', label:'Salud'},
        { value:'science', label:'Ciencia'},
        { value:'sports', label:'Deportes'},
        { value:'technology', label:'Tecnología'}
    ];



    // utilizar useSelect
    const [categoria, SelectNoticas] = useSelect('science',OPCIONES);

    return (
        <div className={`row ${styles.buscador}`}>
            <div className="col s12 m8 offset-m2">
                <h2 className={styles.heading}>Encuentra Noticias por Categorías</h2>
                <SelectNoticas/>

                <div className="input-field col s12">
                    <input type="submit" className={`btn-large amber darken-2 ${styles.btn_block}`} value="Buscar"/>
                </div>
            </div>
        </div>
    );
}
 
export default Formulario;