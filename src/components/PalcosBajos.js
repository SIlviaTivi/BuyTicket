import React from 'react';
import {connect} from 'react-redux'

const PalcosBajos = ({data, seleccionarSeccion, navigateTo}) => {
  
  data = data[3].types
  return (
    <ul className="PalcosBajos">
      {
        data.map((element,index) =>
          <li className="List-PalcoBajo" key={index} onClick={()=> {seleccionarSeccion(element),navigateTo('pagina-1')}}>
            {element.name}
          </li>
        )
      }
    </ul>
    )
}

export default connect(
  (state) => ({

  }),
  (dispatch) => ({
    seleccionarSeccion(seccion) {
      dispatch({type: 'SELECCIONAR_SECCION',seccion})
    },
    navigateTo: (pagina) => {
      dispatch({
        type: 'NAVIGATE_TO',
        pagina
      })
    }
  })
)(PalcosBajos)