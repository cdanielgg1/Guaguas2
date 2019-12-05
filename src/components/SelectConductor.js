import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
import Select from 'react-select'

//import './styles.css'

const POPULATE_STATE = 'populateState'
const CLEAR = 'clear'

const data = {
  grupos: [
    {
      value: 'GRUPO1',
      label: 'Grupo1',
      conductores: [
        { value: 'aaaa', label: 'aaaaa' },
        { value: 'C.P:128', label: 'C.P:128' },
        { value: 'C.P:129', label: 'C.P:129' },
        { value: 'C.P:130', label: 'C.P:130' },
        { value: 'C.P:131', label: 'C.P:131' },
        { value: 'C.P:132', label: 'C.P:132' }
      ]
    },
    {
      value: 'GRUPO2',
      label: 'Grupo2',
      conductores: [
        { value: 'C.P:127', label: 'C.P:127' },
        { value: 'C.P:128', label: 'C.P:128' },
        { value: 'C.P:129', label: 'C.P:129' },
        { value: 'C.P:130', label: 'C.P:130' },
        { value: 'C.P:131', label: 'C.P:131' },
        { value: 'C.P:132', label: 'C.P:132' }
      ]
    },
    {
      value: 'GRUPO3',
      label: 'Grupo3',
      conductores: [
        { value: 'C.P:133', label: 'C.P:133' },
        { value: 'C.P:134', label: 'C.P:134' },
        { value: 'C.P:135', label: 'C.P:135' },
        { value: 'C.P:136', label: 'C.P:136' },

      ]

    }
  ],

}

const initialState = {
  disableGrupo: false,
  disableState: true,
  loadingState: false,
  conductoresToBeLoaded: []
}


function reducer(state, action) {
  switch (action.type) {
    case POPULATE_STATE:
      return {
        ...state,
        disableGrupo: false,
        disableState: false,
        loadingState: true,
        conductoresToBeLoaded: data.grupos.find(
          grupo => grupo.value === action.grupo
        ).conductores
      }
    case CLEAR:
    default:
      return initialState
  }
}

export default function SelectConductor() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="SelectConductor">
      <h1>Grupo y conductor</h1>

      <Select
        isDisabled={state.disableGrupo}
        isLoading={state.loadingState}
        isClearable
        isSearchable
        placeholder="Seleccione grupo..."
        name="grupo"
        options={data.grupos}
        onChange={e => {
          dispatch({ type: POPULATE_STATE, grupo: e.value })
          
        }}
      />

      <br />

      {!state.disableState && (
        <>
          <Select
            isDisabled={state.disableState}
            isLoading={false}
            isClearable
            isSearchable
            isMulti={true}

            placeholder="Seleccion conductor..."
            name="conductor"

            options={state.conductoresToBeLoaded}

          />

          <br />

          <button type="button" onClick={() => dispatch({ type: CLEAR })}>
            Limpiar
          </button>
        </>
      )}
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<SelectConductor />, rootElement)
