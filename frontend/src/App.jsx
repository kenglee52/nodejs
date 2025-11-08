import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
const App = () => {
  return (
    <div className='w-full h-full relative'>
       <div className="absolute inset-0 z-0 min-h-screen bg-linear-to-t from-amber-900 via-amber-950 to-black"></div>
       <div className="relative z-10 flex flex-col">
        <Navbar/>
        <Content/>
       </div>
    </div>
  );
}

export default App;

