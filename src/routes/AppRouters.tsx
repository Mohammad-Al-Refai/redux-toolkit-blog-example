import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ArticlePage } from "../pages/Article/ArticlePage";
import { ArticlesPage } from "../pages/Articles/ArticlesPage";
import { HomePage } from "../pages/Home/HomePage";

export function AppRoutes() {

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users/:uid/articles" element={<ArticlesPage />} />
            <Route path="/users/:uid/article/:articleId" element={<ArticlePage />} />
        </Routes>
    </BrowserRouter>
}