import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import AddArticleClasses from "./AddArticle.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const AddArticle = () => {
  const [isDisableBth, setIsDisableBth] = useState(false);
  const [inputValue, setInputValue] = useState({
    title: "",
    subtitle: "",
  });
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  const clickSubmitBth = () => {
    const selection = editorState.getSelection();
    const anchorKey = selection.getAnchorKey();
    const currentContent = editorState.getCurrentContent();
    const currentBlock = currentContent.getBlockForKey(anchorKey);
    const end = selection.getEndOffset();
    const selectedImage = currentBlock.getCharacterList().get(2)
    const selectedText = currentBlock.getText().slice(0, end);
    console.log(currentContent.getBlockForKey("9pgtn"));
  };

  const editorChange = () => {

  };
  return (
    <>
      <Header />
      <main className={AddArticleClasses[`editor__section`]}>
        <h1 className={AddArticleClasses.title}>Add Article</h1>
        <Input
          text=""
          name="title"
          placeholder="Enter a title"
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <Input
          text=""
          name="subtitle"
          placeholder="Enter the category name..."
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <div className={AddArticleClasses.editor}>
          <Editor
            onEditorStateChange={handleEditorChange}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            placeholder="Enter the text..."
            editorState={editorState}
            onChange={() => editorChange()}
          />
        </div>
        <Button
          name="Publish an article"
          variant="contained__header"
          onClick={() => {
            clickSubmitBth();
          }}
          isDisable={isDisableBth}
        />
      </main>
      <Footer />
    </>
  );
};
export default AddArticle;
