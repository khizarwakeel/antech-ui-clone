function HowWeWork() {
  return (
    <div>
      <div className="bg-white w-[100%]">
        <div className="text-center pt-24">
          <h2 className="text-2xl mb-5 text-[#0d6efd]">How We Work</h2>
          <h3 className="text-5xl font-medium mb-16">Our Works Process</h3>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
          <div className="relative mx-auto  lg:block hidden">
            <img src="/assets/circle.png" alt="" />
            <div className="absolute top-7 left-7 py-24 px-8 h-72 w-72 shadow-xl text-center bg-slate-50 rounded-full">
              <h2 className="text-3xl mb-5 font-bold">Create a Plan</h2>
              <p className="text-lg">
                There are many variation of passages of Lorem Ips available, but
                them
              </p>
            </div>
          </div>
          <div className="relative mx-auto lg:block hidden">
            <img src="/assets/circle.png" alt="" />
            <div className="absolute top-7 left-7 py-24 px-8 h-72 w-72 shadow-xl text-center bg-slate-50 rounded-full">
              <h2 className="text-3xl mb-5 font-bold">Start Working</h2>
              <p className="text-lg">
                There are many variation of passages of Lorem Ips available, but
                them
              </p>
            </div>
          </div>
          <div className="relative mx-auto lg:block hidden">
            <img src="/assets/circle.png" alt="" />
            <div className="absolute top-7 left-7 py-24 px-8 h-72 w-72 shadow-xl text-center bg-slate-50 rounded-full">
              <h2 className="text-3xl mb-5 font-bold">Publish Busines</h2>
              <p className="text-lg">
                There are many variation of passages of Lorem Ips available, but
                them
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HowWeWork;