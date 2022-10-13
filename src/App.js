
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Children } from 'react';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Topic from './components/Topic/Topic';
import Statistics from './components/Statistics/Statistics';



function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          
          element: <Home></Home>
        },
        {
          path:'/topic',
          loder: (params) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element:<Topic></Topic>
    
        },
        {
          path:'/statistics',
          element:<Statistics></Statistics>
    
        },
        {
          path:'/blog',
          element:<Blog></Blog>
    
        },
        {
          path:'/blog',
          element:<Blog></Blog>
    
        }

      ]
      
    },
    
  ])
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
