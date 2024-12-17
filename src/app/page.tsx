export default function Layout2() {
  return (
    <div className="container mx-auto p-4 h-screen">
      {/* Parent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-[auto_1fr_auto] gap-4 h-full">
        
        {/* Box 1: Header */}
        <div className="col-span-1 md:col-span-4 bg-yellow-500 flex justify-center items-center h-20 md:h-28">
          <p className="text-white font-bold">box1</p>
        </div>

        {/* Box 2: Sidebar Left */}
        <div className="col-span-1 md:col-span-1 bg-yellow-500 flex justify-center items-center h-full">
          <p className="text-white font-bold">box2</p>
        </div>

        {/* Box 3: Main Content */}
        <div className="col-span-1 md:col-span-2 bg-yellow-500 flex justify-center items-center h-full">
          <p className="text-white font-bold">box3</p>
        </div>

        {/* Box 4: Sidebar Right */}
        <div className="col-span-1 md:col-span-1 bg-yellow-500 flex justify-center items-center h-full">
          <p className="text-white font-bold">box4</p>
        </div>

        {/* Box 5: Footer */}
        <div className="col-span-1 md:col-span-4 bg-yellow-500 flex justify-center items-center h-20 md:h-28">
          <p className="text-white font-bold">box5</p>
        </div>
        
      </div>
    </div>
  );
}
