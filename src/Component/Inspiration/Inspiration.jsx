

const Inspiration = () => {
    return (
        <div>
            <div className="flex justify-center items-center flex-col mt-8">
                <h2 className="text-[#0D1321] text-[32px] font-semibold">My Inspiration</h2>
                <p className="pt-2 text-center mb-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br />Ipsum has been the industry's standard dummy text.</p>
            </div>

         
          <div>
            <iframe className="mx-auto rounded-xl"  width="100%" height="720" src="https://www.youtube.com/embed/1iPmovRsYi8?si=vAlJbfLor03xB_H7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        

        </div>
    );
};

export default Inspiration;