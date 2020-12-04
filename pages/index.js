import ClaseComponent from '../componentes/ClaseComponent';
import Header from '../componentes/comunes/Header';
import {matematicas, ciencias} from '../data/estudiantes';
import BarraTitulo from '../componentes/comunes/BarraTitulo';

export default () => (
    <div>
        <Header/>
        <BarraTitulo/>
        <h1 style={{textAlign: "center"}}>El curso del plan</h1>
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <ClaseComponent nombre="Matématicas" clase={matematicas}/>
            <ClaseComponent nombre="Ciencias Naturales" clase={ciencias}/>
        </div>
        <style jsx global>
            {
                `
                body{
                    background:#ffca20;
                }
                `
            }
        </style>
    </div>
)
