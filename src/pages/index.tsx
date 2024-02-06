import { GetStaticProps, NextPage } from 'next';
import ServiceCardList from "@/components/template/ServiceCardList";
import Banner from "@/components/template/Banner";
import ProductList from '@/components/template/ProductList';
import { IHome } from '@/types/props/IHome';
import ArticleList from '@/components/template/ArticleList';
import Footer from '@/components/module/Footer';

const Home: NextPage<IHome> = ({ data }) => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center font-Sans pt-2'>
      <Banner />
      <ServiceCardList />
      <ProductList data={data?.productsdata} />
      <ArticleList />
      <ServiceCardList />
      <Footer />
    </div>
  );
}

export default Home;

export const getStaticProps: GetStaticProps<IHome> = async () => {
  if (!process.env.URL_API_PRODUCTS) {
    console.error('It is not defined in environment variables.');
    return {
      props: {
        data: null
      }
    };
  }

  try {
    const res = await fetch(process.env.URL_API_PRODUCTS);
    const data = await res.json();

    return {
      props: {
        data
      }
    };
  } catch (error) {
    console.error('Error fetching data:', (error as Error).message);
    return {
      props: {
        data: null
      }
    };
  }
};
