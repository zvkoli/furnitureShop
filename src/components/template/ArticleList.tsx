import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux_toolkit/store";
import { fetchArticles } from "@/redux_toolkit/features/articlesSlice";
import ArticleCard from "@/components/module/ArticleCard";
import LoadingSkeletonArticleCard from "../module/LoadingSkeletonArticleCard";

const ArticleList = () => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>();

  const articles = useSelector((state: RootState) => state.articles.articles);
  const loading = useSelector((state: RootState) => state.articles.loading);
  const error = useSelector((state: RootState) => state.articles.error);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="w-full h-full flex flex-col justify-center items-center flex-wrap gap-10 pt-20">
          <p className="text-[1.25rem] cursor-default">جدیدترین مطالب وبلاگ</p>
          <div className="w-full h-full flex flex-row justify-center items-center flex-wrap gap-4">
            {[...Array(4)].map((_, index) => (
              <LoadingSkeletonArticleCard key={index} />
            ))}
          </div>
        </div>
      ) : error ? (
        <div className="w-full h-full flex flex-col justify-center items-center flex-wrap gap-10 pt-20">
          <p className="text-[1.25rem] cursor-default">جدیدترین مطالب وبلاگ</p>
          <p className="text-[1.25rem] cursor-default">{error}</p>
        </div>
      ) : (
        <div className="w-full h-full flex flex-row justify-center items-center flex-wrap gap-10 pt-20">
          <p className="text-[1.25rem] cursor-default">جدیدترین مطالب وبلاگ</p>
          <div className="w-full h-full flex flex-row justify-center items-center flex-wrap gap-4">
            {articles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleList;
