import React from "react";

export default function AdminProfile(AdminProfileProps) {
  return (
    <>
      <div className=" hidden lg:block space-y-2">
        <div
          className={`duration-300 ring-4 border-4 border-blue-50 rounded-md shadow-md shadow-slate-600 w-[100px]  h-[100px] bg-cover bg-center  hover:bg-contain bg-[url('${AdminProfileProps.ProfileImgUrl}')]`}
        ></div>
        <div className=" text-center font-['Roboto']">
          <h1 className=" font-semibold text-[19px] capitalize">{AdminProfileProps.userName}</h1>
          <p className=" text-sm">{AdminProfileProps.userPossition}</p>
        </div>
      </div>
    </>
  );
}
