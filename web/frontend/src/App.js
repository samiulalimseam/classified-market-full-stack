import logo from './logo.svg';
import './App.css';
import Main from './Pages/Main';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
     <RouterProvider router={router}></RouterProvider>
     <Toaster 
     toastOptions={{
      className: '',
      style: {
        
        border: '1px solid #713200',
        padding: '16px',
        color: 'white',
        background: '#3F0071',
      },
    }}
     ></Toaster>
    </div>
  );
}

export default App;
