
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "../ConfigButton/configButton.css"

const ConfigButton = () => {

    const isDark= useSelector(state=>state.isDark)
    const {pokemonsPerPage} = useSelector(state=>state)
    const navigate= useNavigate()
    const dispatch= useDispatch()
    const setIsDark =()=>{
            dispatch({
                type: "SET_DARK"
            })
        }
    const handle=e=>{
      e.preventDefault()
      dispatch({
        type:"SET_POKEMONS_PER_PAGE",
        payload: e.target.value
      })
    }


    return (
      <div className={isDark? "dark": "light"} >
        <div className='config-container'>
             <div className='home-btn' onClick={()=>navigate(-1)}><i className="fa-solid fa-xmark"></i></div>
            <div className='config-card'>
              <img src="https://areajugones.sport.es/wp-content/uploads/2020/06/Clefairy-espacio.png" alt="" />
              <div className="toggle-container">
                  <div className='toggle-dark-mode'>
                    <h4>Dark mode</h4>
                    <div className="toggle" onClick={setIsDark}>
                        <div className='circle-toggle'></div>
                    </div>

                  </div>
                <div className='toggle-items'>
                    <h4>Pokemons Per Page</h4>
                    <select onChange={handle} defaultValue={+pokemonsPerPage}>
                        <option value={4}>4 pokemons</option>
                        <option value={8}>8 pokemons</option>
                        <option value={10}>10 pokemons</option>
                    </select>
                </div>

              </div>

            </div>
        </div>
      </div>
    );
};

export default ConfigButton;