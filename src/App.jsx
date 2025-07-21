import "./App.css";
import BottomSheet from "./components/BottomSheet";
import NavBar from "./components/NavBar";
import DashBoard from "./components/Dashboard";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex pt-16 min-h-screen">
        <div className="hidden md:block">
          <SideBar />
        </div>
        <main className="flex-1 p-4 md:ml-56 w-full">
          <DashBoard />
          <BottomSheet />
        </main>
      </div>
    </>
  );
}

export default App;
