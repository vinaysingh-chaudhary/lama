import React from "react";
import UploadFromFile from "../../../../../components/UploadFromFile/UploadFromFile";
import uploadCardDetails from "../../../../../static/uploadCard";
import UploadCards from "../../../../../components/UploadCards/UploadCards";
import Link from "next/link";
import { Home } from "lucide-react";

const page = () => {
  return (
    <div className="max-w-screen-xl px-12 flex flex-col justify-center items-start gap-10">
      <div className="border-primary border px-3 py-1 rounded-full flex  justify-center items-center gap-1">
        <Link href={"/"}><Home /></Link>  / <Link href={"/projects"}>Projects</Link>
      </div>
      <p className="text-5xl text-primary font-bold">Upload</p>

      <div className="w-full flex justify-between items-start gap-2">
        {uploadCardDetails.map((item) => (
          <UploadCards
            key={item.index}
            detail={item}
            cardWidthHeight={" w-[300px] h-[100px] "}
            imgaeWidth={60}
            imageHeight={60}
            fontSize={"2xl"}
          />
        ))}
      </div>

      <UploadFromFile />
    </div>
  );
};

export default page;
