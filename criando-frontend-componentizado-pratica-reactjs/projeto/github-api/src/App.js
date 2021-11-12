import React from 'react';
import Layout from './components/layout';

function App() {
  return (
    <main>
      <Layout>
        <div>
          <img source="https://avatars.githubusercontent.com/u/19575296?v=4" alt="Avatar of user" />

          <h1>Leonardo Klestadt Luz</h1>
          <h3>Username: </h3>
          <span>Leonardo</span>
          <div>
            <div>
              <h4>Folowers</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Starreds</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span>5</span>
            </div>
          </div>



        </div>




        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;