import { useState, useEffect } from "react";

export default function BottomSheet() {
  const [height, setHeight] = useState(4);
  const [dragStartY, setDragStartY] = useState(null);

  const handleMouseDown = (e) => {
    setDragStartY(e.pageY);
  };

  const handleMouseMove = (e) => {
    if (!dragStartY) return;
    const newY = e.pageY;
    const change = ((dragStartY - newY) / window.innerHeight) * 100;

    setHeight(height + change);
    setDragStartY(newY);
  };

  const handleMouseUp = () => {
    setDragStartY(null);
    if (height < 35) setHeight(10);
    else if (height > 75) setHeight(90);
    else setHeight(50);
  };

  const handleTouchStart = (e) => {
    setDragStartY(e.touches[0].pageY);
  };

  const handleTouchMove = (e) => {
    if (dragStartY === null) return;
    const newY = e.touches[0].pageY;
    const change = ((dragStartY - newY) / window.innerHeight) * 100;
    setHeight(height + change);
    setDragStartY(newY);
  };

  const handleTouchEnd = () => {
    setDragStartY(null);
    if (height < 35) setHeight(10);
    else if (height > 75) setHeight(90);
    else setHeight(50);
  };

  useEffect(() => {
    if (dragStartY !== null) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [dragStartY]);

  return (
    <div className="min-h-screen bg-gray-200 p-10 flex justify-center align-middle">
      <p className="font-serif text-blue-600 text-4xl font-semibold text-center ">
        React Bottom Sheet with Multiple Screen Snap Points and Spring Motion.
      </p>
      <div
        style={{ height: `${height}vh` }}
        className="fixed bottom-0 w-[70%] bg-black rounded-t-2xl p-2 transition-all duration-500"
      >
        <div className="static flex justify-center p-2 align-middle">
          <div
            onMouseDown={handleMouseDown}
            className="cursor-grab  w-50 h-4 bg-white rounded-full absolute -top-0 my-1"
          ></div>
        </div>

        <div className="bg-white rounded-md text-black p-2 h-full overflow-auto">
          <div className="mb-4 space-x-2">
            <button
              onClick={() => setHeight(50)}
              onDoubleClick={() => setHeight(90)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Open
            </button>
            <button
              onClick={() => setHeight(4)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
          <p>
            This is a bottom sheet. You can drag it or use the buttons to open
            and close it.
          </p>
        </div>
      </div>
    </div>
  );
}
