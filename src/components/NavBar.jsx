export default function NavBar() {
  return (
    <nav className="w-full bg-[#2A7B9B] text-white px-6 py-3 flex items-center justify-between shadow-md fixed top-0 left-0 z-50">
      <div className="font-bold text-xl mx-5">Flam</div>
      <ul className="flex space-x-6 mx-5">
        <li>
          <a href="/" className="hover:text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-blue-500 cursor-pointer">Contact</a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            rel="github"
            className="hover:text-blue-500"
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  );
}
