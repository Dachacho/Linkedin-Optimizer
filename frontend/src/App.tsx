import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white rounded-lg shadow-md p-10 max-w-lg w-full text-center border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">LinkedIn Post Optimizer</h1>
        <p className="text-base text-gray-600 mb-8">
          Effortlessly improve your LinkedIn posts and maximize engagement with AI.
        </p>
        <button className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded transition duration-200">
          Get Started
        </button>
      </div>
      <footer className="mt-12 text-gray-400 text-xs">&copy; 2025 LinkedIn Optimizer. All rights reserved.</footer>
    </div>
  );
}

export default App
