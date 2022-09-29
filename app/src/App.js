import React, {useEffect, useState} from 'react';
import BlogPostings from './BlogPostings';
import DocumentsMedia from './DocumentsMedia';
import KnowledgeBase from './KnowledgeBase';

import {getSite} from './site';

function App() {
  return (
	<div>
    <h1>Posting a Blog</h1>
      <BlogPostings />

<br /> <br />
    <h1>Posting a Document</h1>
      <DocumentsMedia />

<br /> <br />
    <h1>Posting a KnowledgeBase</h1>
      <KnowledgeBase />
	</div>
  );
}

export default App;