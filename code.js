import React, { useState } from 'react';
import './App.css';

const articles = [
  {
    title: 'Understanding the difference between grid-template and grid-auto',
    date: 'Oct 09, 2018',
    content: 'With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties...',
  },
  {
    title: 'A Guide to Flexbox',
    date: 'Mar 10, 2018',
    content: 'Flexbox is a powerful layout module. Learn how it compares to CSS Grid and when to use each...',
  },
  {
    title: 'CSS Grid: Auto-Fill vs Auto-Fit',
    date: 'Feb 20, 2019',
    content: 'What is the difference between auto-fill and auto-fit in CSS Grid? Let’s find out...',
  },
  // Add more article objects here...
];

function highlightText(text, query) {
  if (!query) return text;
  const parts = text.split(new RegExp(($ (query)), 'gi'));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase()
      ? <mark key={i}>{part}</mark>
      : part
  );
}

function App() {
  const [query, setQuery] = useState('');

  const filtered = articles.filter(article =>
    article.title.toLowerCase().includes(query.toLowerCase()) ||
    article.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="App">
      <h2>Search</h2>
      <input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <p>{filtered.length} posts were found.</p>
      {filtered.map((article, idx) => (
        <div key={idx} className="article">
          <h3>{highlightText(article.title, query)}</h3>
          <small>{article.date}</small>
          <p>{highlightText(article.content, query)}</p>
        </div>
      ))}
    </div>
  );
}
export default App;
