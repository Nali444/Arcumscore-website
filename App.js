import React from 'react';
import './App.css';

function App() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">ARCUM.SCORE</h1>
        <p className="text-xl md:text-2xl mb-8">Certified by Thought. Recognized by Leaders.</p>
        <p className="max-w-2xl mx-auto text-gray-300 mb-10">
          A Thinking Certificate for founders, strategists, and individuals who shape systems. ARCUM analyzes, scores, and honors clarity of thought and structural intelligence – with a physical totem as proof.
        </p>
        <button className="bg-white text-black px-8 py-4 rounded-2xl shadow-xl text-lg font-semibold hover:bg-gray-200 transition">Join the First 100 ARCUM Minds</button>
      </section>
    </main>
  );
}

export default App;
