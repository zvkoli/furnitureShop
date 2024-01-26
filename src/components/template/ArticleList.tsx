import { useEffect, useState } from "react";
import ArticleCard from "../module/ArticleCard";
import { IArticle } from "@/types/IArticle";

const LoadingSkeleton = () => (
  <div className="w-2/12 h-auto flex flex-col justify-center items-start gap-4 bg-gray-200 rounded-xl shadow p-5 animate-pulse">
    <div className="w-3/4 h-4 bg-gray-300 rounded-xl"></div>
    <div className="w-5/6 h-4 bg-gray-300 rounded-xl"></div>
    <div className="w-4/6 h-4 bg-gray-300 rounded-xl"></div>
  </div>
);

const ArticleList = () => {
  const [data, setData] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState<string>("");

  useEffect(() => {

    const callApi = async () => {
      try {
        const res = await fetch(process.env.URL_API_ARTICLES || "http://localhost:3000/api/articles");
        const data = await res.json();

        setData(data.articlesdata);
        setLoading(false);
      } catch (err) {
        if (typeof err === "string") {
          setErr(err);
        } else {
          setErr("An unknown error occurred");
        }
        setLoading(false);
      }
    };

    callApi();
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full h-full flex flex-col justify-center items-center flex-wrap gap-10 pt-20">
          <p className="text-[1.25rem] cursor-default">جدیدترین مطالب وبلاگ</p>
          <div className="w-full h-full flex flex-row justify-center items-center flex-wrap gap-4">
            {[...Array(4)].map((_, index) => (
              <LoadingSkeleton key={index} />
            ))}
          </div>
        </div>
      ) : err ? (
        <div className="w-full h-full flex flex-col justify-center items-center flex-wrap gap-10 pt-20">
          <p className="text-[1.25rem] cursor-default">جدیدترین مطالب وبلاگ</p>
          <p className="text-[1.25rem] cursor-default">{err}</p>
        </div>
      ) : (
        <div className="w-full h-full flex flex-row justify-center items-center flex-wrap gap-10 pt-20">
          <p className="text-[1.25rem] cursor-default">جدیدترین مطالب وبلاگ</p>
          <div className="w-full h-full flex flex-row justify-center items-center flex-wrap gap-4">
            {data.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleList;
