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
  const [isDisableBth, setIsDisableBth] = useState(true);
  const [inputValue, setInputValue] = useState("");
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

  const clickSubmitBth = (e) => {};
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
          />
        </div>
        <Button
          name="Publish an article"
          variant="contained__header"
          onClick={(e) => {
            clickSubmitBth(e);
          }}
          isDisable={isDisableBth}
        />
      </main>
      <Footer />
    </>
  );
};
export default AddArticle;
