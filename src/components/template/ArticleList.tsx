import { useQuery } from 'react-query';
import ArticleCard from "@/components/module/ArticleCard";
import LoadingSkeletonArticleCard from "../module/LoadingSkeletonArticleCard";
import { IArticle } from '@/types/IArticle';

const fetchData = async () => {
  const response = await fetch('http://localhost:3000/api/articles');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const ArticleList: React.FC = () => {

  const { isLoading, error, data } = useQuery('data', fetchData);
    
  return (
    <>
      {isLoading ? (
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
          <p className="text-[1.25rem] cursor-default">{(error as Error).message}</p>
        </div>
      ) : (
        <div className="w-full h-full flex flex-row justify-center items-center flex-wrap gap-10 pt-20">
          <p className="text-[1.25rem] cursor-default">جدیدترین مطالب وبلاگ</p>
          <div className="w-full h-full flex flex-row justify-center items-center flex-wrap gap-4">
            {data.articlesdata.map((article: IArticle) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleList;