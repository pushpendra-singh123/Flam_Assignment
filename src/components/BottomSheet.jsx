import { useState, useEffect } from "react";

const projects = [
  {
    title: "Portfolio Website [React, Tailwind CSS]",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=80&h=80&q=80",
    description:
      "A personal portfolio website to showcase my skills, projects, and experience. Built with React and Tailwind CSS.",
    link: "https://github.com/pushpendra-singh123/portfolio",
  },
  {
    title: "Social Net [MERN Stack]",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=80&h=80&q=80",
    description:
      " A Full Stack social media application. features: login & signup, post tweets, follow/unfollow, like/dislike posts, edit post etc. ",
    link: "https://github.com/pushpendra-singh123/social-net",
  },
  {
    title: "Stock Brokerage [React, Bootstrap]",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=80&h=80&q=80",
    description:
      "It helps to manage stock. better responsive Dashboard , login & signup page and other differnt pages...",
    link: "https://github.com/pushpendra-singh123/zerodha_clone",
  },
];

export default function BottomSheet() {
  const [height, setHeight] = useState(4);
  const [dragStartY, setDragStartY] = useState(null);

  const handleMouseDown = (e) => {
    setDragStartY(e.pageY);
  };

  const handleTouchStart = (e) => {
    setDragStartY(e.touches[0].pageY);
  };

  const handleMouseMove = (e) => {
    if (dragStartY === null) return;
    const newY = e.pageY;
    const change = ((dragStartY - newY) / window.innerHeight) * 100;
    setHeight((prev) => Math.max(4, Math.min(100, prev + change)));
    setDragStartY(newY);
  };

  const handleTouchMove = (e) => {
    if (dragStartY === null) return;
    const newY = e.touches[0].pageY;
    const change = ((dragStartY - newY) / window.innerHeight) * 100;
    setHeight((prev) => Math.max(4, Math.min(100, prev + change)));
    setDragStartY(newY);
  };

  const handleEnd = () => {
    setDragStartY(null);
    if (height < 35) setHeight(10);
    else if (height > 75) setHeight(90);
    else setHeight(50);
  };

  useEffect(() => {
    if (dragStartY !== null) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [dragStartY]);

  return (
    <div className="p-10 flex justify-center align-middle">
      <div
        style={{ height: `${height}vh` }}
        className="fixed bottom-0 w-[70%] bg-gradient-to-tr from-[#6ed052] to-[#005AA7] rounded-t-2xl p-2 transition-all duration-500"
      >
        <div className="static flex justify-center p-2 align-middle">
          <div
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            className="cursor-grab w-50 h-4 bg-gray-300 rounded-full absolute -top-0 my-1"
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
          <div className="space-y-4">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-blue-50 rounded-lg p-3 shadow"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-20 h-20 object-cover rounded-md border"
                />
                <div className=" mx-auto">
                  <h4 className="font-bold text-lg">{project.title}</h4>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel=""
                    className="text-blue-700 text-sm mt-1 inline-block"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
