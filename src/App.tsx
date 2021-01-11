import React from 'react';
import './App.css';
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'
// @ts-ignore
import recursion from './docs/recursion.md'
// @ts-ignore
import basics from './docs/basics.md'
// @ts-ignore
import interfaces from './docs/interfaces.md'
// @ts-ignore
import generics from './docs/generics.md'

function App() {
  return (
    <div className="slides r-fit-text">
      <section data-markdown={basics} data-separator="^\n\n\n" data-separator-vertical="^\n\n"/>
      <section data-markdown={interfaces} data-separator="^\n\n\n" data-separator-vertical="^\n\n"/>
      <section data-markdown={generics} data-separator="^\n\n\n" data-separator-vertical="^\n\n"/>
      <section data-markdown={recursion} data-separator="^\n\n\n" data-separator-vertical="^\n\n"/>

    </div>
  );
}

export default App;
