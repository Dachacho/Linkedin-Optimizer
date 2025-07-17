import { useState } from "react";

interface PostInputProps {
  onSubmit: (post: string) => void;
}

function PostInput({ onSubmit }: PostInputProps) {
  const [post, setPost] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (post.trim()) {
      onSubmit(post);
      setPost("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 w-full">
      <textarea
        className="w-full h-32 p-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
        placeholder="Paste or write your LinkedIn post here..."
        value={post}
        onChange={e => setPost(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-slate-600 hover:bg-slate-700 text-white font-medium py-2 px-6 rounded transition duration-200 w-full"
      >
        Optimize Post
      </button>
    </form>
  );
}

export default PostInput;
