import React from 'react'
import { ThemeContext } from './Theme'
import Card from './Card'

function App() {
  return (
    <ThemeContext.Provider>
      <Card />
    </ThemeContext.Provider>
  )
}

export default App;







// AULA ANTERIOR
/**
 *
 *
 class App extends Component {

   state = {
     loading: false,
     actived: true
   }

   componentDidMount() {
     setTimeout(() => {
       this.setState({
         loading: true
       })
     }, 3000);
   }

   onRemove = () => {
     this.setState({
       actived: false
     })
   }

   render() {
     const posts = [{
       title: 'xpto',
       description: 'foo'
     }, {
       title: 'xpto',
       description: 'foo'
     }]

     return (
       <div>
         <button
           onClick={this.onRemove}
         >Remover Componente</button>

         {this.state.actived && (
           <Twitter posts={posts} loading={this.state.loading} />
         )}
       </div>
     )
   }
 }

 export default App;
 */