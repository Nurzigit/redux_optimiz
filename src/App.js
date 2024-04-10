import React, { Suspense, lazy } from 'react';
import './App.css';
const LazyLoadedComponent = lazy(() => import('./components/AnnouncementsBoard'));

function App() {
  
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='App'>
          <LazyLoadedComponent />
        </div>
      </Suspense>
    </>

   
  );
}

export default App;
