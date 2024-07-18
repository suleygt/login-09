import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
       <div className="background-form flex items-center justify-center bg-white p-8">
      
        <img 
          src="/Ellipse 3.png" 
          alt="Ellipse" 
          className="absolute bottom-24 right-10 image-ellipse"
        />
        <img 
          src="/undraw_jogging_re_k28i 1.png" 
          alt="Jogging" 
          className="absolute bottom-0 right-0 image-jogging"
        />


        <div className="inner-form flex flex-col items-center justify-center p-8">
          <h2 className="text-2xl font-bold mb-4">LOGIN</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
             
              </label>
              <input 
                type="text" 
                id="username" 
                className="username mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Username'
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
             
              </label>
              <input 
                type="password" 
                id="password" 
                className="password mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder='Password'
              />
            </div>
            <div>
              <button 
                type="submit" 
                className="button w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  );
}

export default App;
