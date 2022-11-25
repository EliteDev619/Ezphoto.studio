import React, { useState } from 'react';
import { Collapse } from 'react-collapse';

const ImageType = () => {
  const [collapseOpen, setCollapseOpen] = useState(false);

  const collapseChange = (prop) => {
    setCollapseOpen(!prop);
    console.log(!prop);
  }
  return (
    <div>
      <button onClick={() => collapseChange(collapseOpen)}>Collapse</button>
      <Collapse isOpened={collapseOpen}>
        <div>Random content</div>
      </Collapse>
    </div>
  );
}

export default ImageType;