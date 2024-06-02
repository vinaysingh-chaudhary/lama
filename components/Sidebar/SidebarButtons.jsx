import Link from "next/link";

const SidebarButtons = ({ route, pathname, index, value }) => {
  const projectId = pathname.split("/")[2];
  const isActive = pathname.split("/")[3] === route;

  return (
    <Link
      href={route === undefined ? `/projects/${projectId}` : `/projects/${projectId}/${route}`}
      className={`w-full px-2 py-3 rounded-full text-white flex justify-start items-center gap-2 font-bold text-sm ${
        isActive ? "bg-primary text-white" : "bg-transparent text-[#49454F] hover:bg-[#1d1b2031]"
      }`}
    >
      <div className="w-6 h-6 rounded-full bg-[#211935] flex justify-center items-center">
        {index + 1}
      </div>

      <p className={isActive ? "text-white" : "text-[#49454F]"}>
        {value}
      </p>
    </Link>
  );
};

export default SidebarButtons;

