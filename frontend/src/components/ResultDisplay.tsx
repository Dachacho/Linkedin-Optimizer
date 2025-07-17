interface ResultData {
  original_prediction: number;
  original_reason: string;
  optimized_post: string;
  optimized_prediction: number;
}

interface ResultDisplayProps {
  result: ResultData | null;
}

function ResultDisplay({ result }: ResultDisplayProps) {
  if (!result) return null;

  return (
    <div className="bg-gray-100 rounded-lg shadow p-6 mb-8 w-full max-w-lg mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Results</h2>
      <div className="mb-4">
        <span className="font-medium text-gray-700">Original Prediction:</span>
        <span className="ml-2 text-slate-600 font-bold">{result.original_prediction}</span>
      </div>
      <div className="mb-4">
        <span className="font-medium text-gray-700">Reason:</span>
        <span className="ml-2 text-gray-600">{result.original_reason}</span>
      </div>
      <div className="mb-4">
        <span className="font-medium text-gray-700">Optimized Post:</span>
        <div className="mt-2 p-3 bg-white rounded border border-gray-200 text-gray-800 whitespace-pre-line">
          {result.optimized_post}
        </div>
      </div>
      <div>
        <span className="font-medium text-gray-700">Optimized Prediction:</span>
        <span className="ml-2 text-slate-700 font-bold">{result.optimized_prediction}</span>
      </div>
    </div>
  );
}

export default ResultDisplay;
