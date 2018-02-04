import React from 'react';

export default () => {
  return (
    <div>
      <h2>Super Secret React Tips</h2>
      <ul>
        <li>One Component per file.</li>
        <li>shouldComponentUpdate for increased performance.</li>
        <li>Always use stateless function unless you need to use react's life cycle methods, refs or state.</li>
      </ul>
    </div>
  )
}
