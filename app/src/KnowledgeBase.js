import React, {useCallback, useEffect, useState} from 'react';
import ClayForm, {ClayInput} from '@clayui/form';
import ClayButton from '@clayui/button';

import { getSite } from './site'


function KnowledgeBase() {
  return (
    <div>
        <PostKnowledgeBase />
    </div>
  );
}

function PostKnowledgeBase() {
  const [site, setSite] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
	getSite().then(res => {
      setSite(res.items[0].id);
	})
  }, []);


  const onButtonSubmit = useCallback(() => {
    Liferay.Util.fetch(`/o/headless-delivery/v1.0/sites/${site}/knowledge-base-folders`, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({'name':name, 'description':description})
    }).then(() => {
        setName('');
        setDescription('');
    });
  },
  [
    name,
    description
  ]);

  return (
    <div>
      <ClayForm.Group>
        <label htmlFor='name'>Name</label>
        <ClayInput
          id="name"
          component="textarea"
          onChange={event => setName(event.target.value)}
          type="text"
          value={name}
        />
      </ClayForm.Group>
      <ClayForm.Group>
        <label htmlFor='description'>Article Body</label>
        <ClayInput
          id="description"
          component="textarea"
          onChange={event => setDescription(event.target.value)}
          type="text"
          value={description}
        />
      </ClayForm.Group>
      
    <ClayButton.Group>
			<ClayButton className="btn btn-primary" onClick={() => onButtonSubmit()} displayType="secondary">POST FOLDER</ClayButton>
    </ClayButton.Group>

    </div>
    
  );
}


export default KnowledgeBase;