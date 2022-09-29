import React, {useCallback, useEffect, useState} from 'react';
import ClayForm, {ClayInput} from '@clayui/form';
import ClayButton from '@clayui/button';

import { getSite } from './site'


function BlogPostings() {
  return (
    <div>
        <PostBlogPosting />
    </div>
  );
}

function PostBlogPosting() {
  const [site, setSite] = useState('');
  const [headline, setHeadline] = useState('');
  const [articleBody, setArticleBody] = useState('');

  useEffect(() => {
	getSite().then(res => {
      setSite(res.items[0].id);
	})
  }, []);

  const onButtonSubmit = useCallback(() => {
    Liferay.Util.fetch(`/o/headless-delivery/v1.0/sites/${site}/blog-postings`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({'headline':headline, 'articleBody':articleBody})
    }).then(() => {
        setHeadline('');
        setArticleBody('');
    });
  },
  [
    headline,
    articleBody
  ]);

  return (
    <div>
      <ClayForm.Group>
        <label htmlFor='headline'>Headline</label>
        <ClayInput
          id="headline"
          component="textarea"
          onChange={event => setHeadline(event.target.value)}
          type="text"
          value={headline}
        />
      </ClayForm.Group>
      <ClayForm.Group>
        <label htmlFor='articleBody'>Article Body</label>
        <ClayInput
          id="articleBody"
          component="textarea"
          onChange={event => setArticleBody(event.target.value)}
          type="text"
          value={articleBody}
        />
      </ClayForm.Group>
      
    <ClayButton.Group>
			<ClayButton className="btn btn-primary" onClick={() => onButtonSubmit()} displayType="secondary">POST BLOG</ClayButton>
    </ClayButton.Group>

    </div>
    
  );
}


export default BlogPostings;