import React from "react";

interface DataProps {
  data: any;
}

const Card: React.FC<DataProps> = ({ data }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <div className="w-[100%] flex justify-center items-center">
      <div className="bg-[#181A2A] border-[#242535] border max-w-[392px] min-h-[488px] flex flex-col">
        <div className="flex justify-center items-center flex-col">
          <div className="p-4">
            <img src={data.image} alt="img" />
          </div>
          <div className="ml-4 w-[344px]">
            <p className="text-blue-600 ">Technology</p>
            <h1 className="font-Wsans text-2xl">{data.title}</h1>
            <div className="flex items-center mt-8 gap-3">
              <img src={data.image} alt="" className="rounded-full w-6 h-6" />
              <p className="font-Wsans text-gray-600 font-semibold">
                {data.name}
              </p>
              <p className="text-sm text-gray-300">
                CreatedAt : {formatDate(data.createdAt)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
