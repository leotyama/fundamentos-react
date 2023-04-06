import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Conditional from './components/Conditional'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="flex">
      <Card titulo="Primeiro Componente">
        <Primeiro />
      </Card>
      <Card titulo="Componente Com Parametro">
        <ComParametro
          titulo='Esse é o título'
          subtitulo='Esse é o subtítulo'
        />
      </Card>
      <Card titulo="Componente Com Filhos">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
          </ul>
        </ComFilhos>
      </Card>
      <Card titulo="Repetição">
        <Repeticao></Repeticao>
      </Card>
      <Card titulo="Condicional">
        <Conditional numero={11}></Conditional>
      </Card>
    </div>
    <App />
  </React.StrictMode>,
)
