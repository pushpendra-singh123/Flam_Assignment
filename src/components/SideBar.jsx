export default function SideBar() {
  return (
    <aside className=" w-70 bg-gray-800 text-white h-full fixed top-0 left-0 flex flex-col py-6 px-4 z-40">
      <div className="font-bold text-lg mb-6 cursor-pointer">Menu</div>
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="hover:text-blue-400 cursor-pointer">
              Dashboard
            </a>
          </li>
          <li>
            <button className="hover:text-blue-400 cursor-pointer">
              Bottom Sheet
            </button>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 cursor-pointer">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
