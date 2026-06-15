import React from 'react';
import Card from './components/Card';

const App = () => {
  return (
    <div className="parent">
    <Card user='Akash' age={21}/>
    <Card user='Salman' age={25}/>

    </div>
  );
};

export default App;