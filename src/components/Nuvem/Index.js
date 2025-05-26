import estilo from './Nuvem.module.css';

export default function Nuvem(){
    return(
        <div>
      <div className={`${estilo.nuvem} ${estilo.nuvem1}`}></div>
      <div className={`${estilo.nuvem} ${estilo.nuvem2}`}></div>
      <div className={`${estilo.nuvem} ${estilo.nuvem3}`}></div>
      <div className={`${estilo.nuvem} ${estilo.nuvem1}`}></div>
    </div>
    )
}