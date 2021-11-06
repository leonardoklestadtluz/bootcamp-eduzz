import React, { Fragment } from 'react';

const store = [{
  type: 'Calça'
}, {
  type: 'Calçado'
}, {
  type: 'Camiseta'
}]

function Column({ type }) {
  return (
    <tr>
      <td>{type.name.console}</td>
    </tr>
  )
}

function App() {

  const renderColumns = (element, key) => {
    <Fragment key={`column - ${key}`}>
      <Column type={element.type} />
    </Fragment>
  }
  return (
    <table>
      <tr>
        {store.map(renderColumns)}
      </tr>
    </table>
  );
}

export default App;
