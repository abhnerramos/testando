import React, {useCallback, useEffect, useState} from 'react';
import ClayForm, {ClayInput} from '@clayui/form';
import ClayButton from '@clayui/button';

import { getSite } from './site'


function DocumentsMedia() {
  return (
    <div>
        <PostDocument />
    </div>
  );
}

function PostDocument() {
  const [site, setSite] = useState('');

  useEffect(() => {
	getSite().then(res => {
      setSite(res.items[0].id);
	})
  }, []);

  const onButtonSubmit = useCallback(() => {
    const formData = new FormData();
        const fileAbhner = document.querySelector('input[type="file"]');

        formData.append('file', fileAbhner.files[0]);

        Liferay.Util.fetch('http://localhost:8080/o/headless-delivery/v1.0/sites/20121/documents', 
        {
        method: 'POST',
        body: formData,
      });
    });

  return (
    <div>      
     <br />
    <input type="file" id="myFile"></input> <br />
    <br />
    <ClayButton.Group>
			<ClayButton className="btn btn-primary" onClick={() => onButtonSubmit()} displayType="secondary">CREATE NEW DOCUMENT</ClayButton>
    </ClayButton.Group>

    </div>
    
  );
}


export default DocumentsMedia;