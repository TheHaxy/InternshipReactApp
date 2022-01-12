import React from 'react';
import mainClasses from './MainPage.module.css'
import Article from "../Article/Article";
import ArticleList from "../ArticleList/ArticleList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MainPage = () => {
    return (
        <>
            <Header/>
            <main className={mainClasses.main}>
                <div className={mainClasses.wrap}>
                    <Article location='main_page'/>
                    <ArticleList/>
                </div>
            </main>
            <Footer/>
        </>
    )
        ;
};

export default MainPage;