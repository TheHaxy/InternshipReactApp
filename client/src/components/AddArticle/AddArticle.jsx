import React, { useEffect, useState } from "react";

import { EditorState, convertToRaw} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AddArticleClasses from "./AddArticle.module.css";
import imageNotFound from "../../assets/notImage.png"

const AddArticle = () => {
  const reader = new FileReader();
  const navigate = useNavigate();
  const [isDisableBth, setIsDisableBth] = useState(false);
  const [newImage, setNewImage] = useState("");
  const [inputValue, setInputValue] = useState({
    title: "",
    subtitle: "",
  });
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    if (!localStorage.USER_TOKEN) navigate("/login", { replace: true });
  }, [localStorage.USER_TOKEN]);

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const clickSubmitBth = async () => {

    const newArticle = {
      title: inputValue.title,
      category: inputValue.subtitle,
      text: convertToRaw(editorState.getCurrentContent()),
      image: newImage ? JSON.stringify(newImage) : imageNotFound,
      date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
      views: 0
    };
    await fetch("http://localhost:5000/api/create-article", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': localStorage.USER_TOKEN
      },
      body: JSON.stringify(newArticle)
    })
    const allArticles = fetch("http://localhost:5000/api/main-page", {
      method: "GET",
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    })
    await allArticles.then(res => res.json()).then(res => localStorage.setItem("ARTICLE_STORAGE", JSON.stringify(res)))

    const myArticles = fetch("http://localhost:5000/api/my-articles", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': localStorage.USER_TOKEN
      }
    })
    await myArticles.then(res => res.json()).then(res => localStorage.setItem("MY_ARTICLES", JSON.stringify(res)))

    navigate("/main-page", { replace: true });
  };

  const openImage = (e) => {
    const file = e.target.files[0];
    reader.onloadend = () => {
      const base64String = reader.result;
      setNewImage(base64String);
    };
    reader.readAsDataURL(file);
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
