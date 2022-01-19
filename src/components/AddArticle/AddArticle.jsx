import React, { useEffect, useState } from "react";

import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AddArticleClasses from "./AddArticle.module.css";

const AddArticle = () => {
  const user = JSON.parse(localStorage.getItem("LOGIN_USER"));
  const navigate = useNavigate();
  const [articlesStorage, setArticlesStorage] = useState([]);
  const [isDisableBth, setIsDisableBth] = useState(false);
  const [newImage, setNewImage] = useState("");
  const [inputValue, setInputValue] = useState({
    title: "",
    subtitle: "",
  });
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  )

  useEffect(() => {
    if (localStorage.ARTICLES_STORAGE)
      setArticlesStorage(JSON.parse(localStorage.getItem("ARTICLES_STORAGE")));
  }, []);

  useEffect(() => {
    if (!localStorage.LOGIN_USER) navigate("/login", { replace: true })
  }, [localStorage.LOGIN_USER])

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const clickSubmitBth = () => {
    const selection = editorState.getSelection();
    const anchorKey = selection.getAnchorKey();
    const currentContent = editorState.getCurrentContent();
    const currentBlock = currentContent.getBlockForKey(anchorKey);
    const end = selection.getEndOffset();
    const selectedText = currentBlock.getText().slice(0, end);

    const newArticle = {
      title: inputValue.title,
      category: inputValue.subtitle,
      text: selectedText,
      image: newImage,
      author: `${user.firstName} ${user.lastName}`,
      email: user.email,
      date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
      views: 0,
      id: articlesStorage.length,
    };
    articlesStorage.push(newArticle);
    localStorage.setItem("ARTICLES_STORAGE", JSON.stringify(articlesStorage));
    navigate("/main-page", { replace: true });
  };

  const openImage = (e) => {
    setNewImage(btoa(e.target.files[0]));
    console.log(e.target.files[0].webkitRelativePath);
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
          />
        </div>
        <div className={AddArticleClasses.buttons}>
          <Button
            name="Publish an article"
            variant="contained__header"
            onClick={() => {
              clickSubmitBth();
            }}
            isDisable={isDisableBth}
          />
          <div className={AddArticleClasses[`upload__button`]}>
            <Button variant="upload" name="Upload image" />
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              className={AddArticleClasses[`upload`]}
              onChange={(e) => openImage(e)}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default AddArticle;
