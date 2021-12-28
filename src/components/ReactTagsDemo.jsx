import React, { useState, useEffect } from "react";
import { withContext as ReactTags } from "react-tag-input";
const ReactTagsDemo = () => {

  const KeyCodes = {
    comma: 188,
    enter: 13,
  };

  const delimiters = [KeyCodes.comma, KeyCodes.enter];


  const [tags, setTags] = useState([{"id":"Thailand","text":"Thailand"},{"id":"India","text":"India"},{"id":"Vietnam","text":"Vietnam"},{"id":"Turkey","text":"Turkey"}]);
  
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = [...tags].slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };

  const onClearAll = () => {
    setTags([]);
  };

  const onTagUpdate = (i, newTag) => {
    const updatedTags = tags.slice();
    updatedTags.splice(i, 1, newTag);
    setTags(updatedTags);
  };

  return (
    <div>
      
      <ReactTags
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        delimiters={delimiters}
        handleTagClick={handleTagClick}
        onClearAll={onClearAll}
        onTagUpdate={onTagUpdate}
        suggestions={[{"id":"1","text":"Albania"},{"id":"2","text":"Australia"},{"id":"3","text":"France"},{"id":"4","text":"India"},{"id":"5","text":"Oman"},{"id":"6","text":"Russia"},{"id":"7","text":"Serbia"},{"id":"8","text":"Swaziland"},{"id":"9","text":"United States of America"},{"id":"10","text":"Vietnam"}]}
        placeholder="Search..."
        minQueryLength={2}
        maxLength={5}
        autofocus={false}
        allowDeleteFromEmptyInput={true}
        autocomplete={true}
        readOnly={false}
        allowUnique={true}
        allowDragDrop={true}
        inline={true}
        allowAdditionFromPaste={true}
        editable={true}
        clearAll={true}
        tags={tags}
      />

    </div>
  )
}

export default ReactTagsDemo
