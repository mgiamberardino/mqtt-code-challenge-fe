import React from 'react';
// import logo from './logo.svg';
import './App.css';
import DeviceRow from './DeviceRow';
import range from 'lodash.range';

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App: React.FC = () => {
  return (
    <div className="App">
      <table>
        <tbody>
          {range(1,11).map((id: number) => (<DeviceRow id={id} key={id} />))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
