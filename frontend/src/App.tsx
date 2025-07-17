
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import PostInput from './components/PostInput';
import ResultDisplay from './components/ResultDisplay';
import Footer from './components/Footer';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleOptimize = async (post: string) => {
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const response = await fetch('http://localhost:8000/optimize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: post }),
      });
      if (!response.ok) {
        throw new Error('Failed to optimize post');
      }
      const data = await response.json();
      setResult(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="w-full flex justify-center items-center py-16">
        <div className="max-w-xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-blue-100">
            <div className="w-20 h-1 mx-auto mb-8 bg-slate-600 rounded-full" />
            <Header />
            <div className="my-10">
            <PostInput onSubmit={handleOptimize} />
          </div>
          {loading && <div className="text-slate-500 mb-8 animate-pulse font-semibold">Optimizing post...</div>}
          {error && <div className="text-red-500 mb-8 font-semibold">{error}</div>}
          <div className="my-10">
            <ResultDisplay result={result} />
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App
