import { HiOutlineSearch } from "react-icons/hi";
import { RiMapPin2Line } from "react-icons/ri";
import estilo from './Search-bar.module.css';
import * as fun from './Funtions-API';
export default function Searchbar(onSearch) {
  fun.showAlert('')
  return (
    <div className={estilo.boxsearch}>
      <div className={estilo.headersearch}>
        <input
        type="text"
        className={estilo.pesqPais}
        placeholder="Cód do Pais"
        id="pais"
        maxLength={2}
        style={{ textTransform: 'touppercase' }}
      />
        <RiMapPin2Line size={30} />
        <input type='text' className={estilo.pesqCidade} placeholder='Pequise uma cidade...' id="cidade">
        </input>
        <a
          onClick={async () => {
            try {
          
              const resultado = await fun.requestAPI();

              
              if (resultado) {
                onSearch.onSearch(resultado); // ← envia os dados pro App
              }

            } catch (error) {
              console.error(error);
              fun.showAlert('Erro ao buscar dados do clima.');
            }
          }}
        ><HiOutlineSearch size={25} />
        </a>
      </div>
    </div>
  )
} 
