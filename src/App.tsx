import React from 'react';
import './App.css';
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'

function App() {
    return (
        <div className="slides">
            <section>
                <h2>Examples of embedded Video, Audio and Iframes</h2>
            </section>

            <section>
                <h2>Iframe</h2>
            </section>

            <section>
                <h2>Video</h2>
            </section>

            <section data-background-video="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4">
                <h2>Background Video</h2>
            </section>
        </div>
    );
}

export default App;
