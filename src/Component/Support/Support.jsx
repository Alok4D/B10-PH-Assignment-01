import './support.css';

const Support = () => {
    return (
  
         <div className="support-photo hero w-full h-[450px] mb-10">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h2 className='text-[32px] text-[#FFF] font-bold'>I need Support</h2>
            <p className="mb-5 text-[#FFF]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            
            <div className="flex flex-row">
			<input type="text" placeholder="Suggest me any feedback for me" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
			<button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-600 text-gray-50">Submit</button>
		</div>
          </div>
        </div>
      </div>
    
    );
};

export default Support;