const PageLayout = () => {
    return (
      <div className="flex h-screen">
        {/* Left Background Section */}
        <div className="absolute left-0 top-0 w-1/2 h-full bg-[#FFF5DF]"></div>
  
        {/* Content Section */}
        <div className="relative w-full flex flex-row items-center justify-center p-8 gap-6">
          {[1, 2, 3, 4,5].map((num) => (
            <div key={num} className="relative w-3/4 h-1/4 border-2 border-[#FFD96C] rounded-lg flex justify-center items-center text-xl font-bold">
              Box {num}
  
              {/* Circle with Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#FFD96C] text-white flex justify-center items-center rounded-full text-lg font-semibold">
                {num}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PageLayout;
  