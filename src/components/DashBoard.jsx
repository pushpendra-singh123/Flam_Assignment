function Card({ title, subtitle, content, className = "", children }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-center ${className}`}
    >
      {title && <h3 className="font-bold text-lg mb-2">{title}</h3>}
      {subtitle && <h4 className="text-base text-gray-500 mb-2">{subtitle}</h4>}
      {content && <p className="text-gray-700 text-base mb-2">{content}</p>}
      {children}
    </div>
  );
}

export default function DashBoard() {
  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 items-stretch">
        <div className="md:col-span-2">
          <Card className="h-72 flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-blue-500">
            <img
              src="#"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white shadow mb-4"
            />
            <p className="font-semibold text-2xl mb-1">Pushpendra Raghav</p>
            <p className="text-gray-600 mb-2">Full Stack Developer</p>
          </Card>
        </div>
        <div className="flex flex-col gap-6">
          <Card
            title="Today's Visits"
            content="1,234"
            className="h-28 flex flex-col justify-center bg-gradient-to-r from-cyan-200 to-blue-500"
          />
          <Card
            title="Active Users"
            content="87"
            className="h-28 flex flex-col justify-center bg-gradient-to-r from-cyan-200 to-blue-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        <Card
          title="Revenue"
          content="12,340/-Rs"
          className="h-24 bg-gradient-to-r from-cyan-200 to-blue-500"
        />
        <Card
          title="Tasks"
          content="24 Pending"
          className="h-24 bg-gradient-to-r from-cyan-200 to-blue-500"
        />
        <Card
          title="Feedback"
          content="16 New"
          className="h-24 bg-gradient-to-r from-cyan-200 to-blue-500"
        />
        <Card
          title="Support"
          content="5 Tickets"
          className="h-24 bg-gradient-to-r from-cyan-200 to-blue-500"
        />
      </div>
    </section>
  );
}
