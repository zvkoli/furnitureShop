const Menubar = () => {
  return (
   <div className="w-full h-auto text-[0.90rem] flex flex-row justify-start items-center gap-4 text-[#ABB1BB]">
      <button className="hover:text-blue-900">
         خانه
      </button>
      <div className="ui compact menu !font-Sans !text-[0.90rem]" id="dropdown">
         <div className="ui simple dropdown item !text-[#ABB1BB] hover:!bg-[#f8fafc] hover:!text-blue-900">
             دسته بندی
            <div className="menu">
               <div className="item">1</div>
               <div className="item">2</div>
               <div className="item">3</div>
            </div>
         </div>
      </div>
      <button className="hover:text-blue-900">
      محصولات آماده تحویل فوری
      </button>
      <button className="hover:text-blue-900">
      وبلاگ
      </button>
      <button className="hover:text-blue-900">
      درباره ما
      </button>
      <button className="hover:text-blue-900">
      تماس با ما
      </button>
   </div>
  );
}

export default Menubar;
