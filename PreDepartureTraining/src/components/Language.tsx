import React from 'react';

const Language = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold text-gray-800">Language Learning</h1>
      </header>

      <main>
        <section className="my-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Voice-Activated Language Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Voice Recognition</h3>
              <p className="text-gray-600 mb-4">Speak phrases or words, and get feedback on your pronunciation accuracy.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Start Speaking
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Speech Practice</h3>
              <p className="text-gray-600 mb-4">Practice speaking words and sentences aloud and hear them repeated correctly.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Practice Speaking
              </button>
            </div>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Real-Time Language Translation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Text Translator</h3>
              <p className="text-gray-600 mb-4">Translate text from your language to the target language in real-time.</p>
              <textarea className="w-full p-2 border border-gray-300 rounded mb-4" rows={4} placeholder="Enter text to translate..."></textarea>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Translate
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Speech-to-Text Translation</h3>
              <p className="text-gray-600 mb-4">Speak into the app, and it translates your speech to text in the target language.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Start Speaking
              </button>
              <textarea className="w-full p-2 border border-gray-300 rounded mt-4" rows={4} placeholder="Translated text will appear here..."></textarea>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Language;