import React from "react";

export default function Page() {
  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-3 text-sm font-medium w-3/4 mx-auto my-12">
      <div className="flex justify-start items-center gap-2">
        <span className="w-6 h-6 rounded-md bg-pink-500"></span>
        <p>Alkali Metals</p>
      </div>
      <div className="flex justify-start items-center gap-2">
        <span className="w-6 h-6 rounded-md bg-sky-500"></span>
        <p>Transition Metals</p>
      </div>
      <div className="flex justify-start items-center gap-2">
        <span className="w-6 h-6 rounded-md bg-green-600"></span>
        <p>SemiMetals</p>
      </div>
      <div className="flex justify-start items-center gap-2">
        <span className="w-6 h-6 rounded-md bg-yellow-400"></span>
        <p>Halogen</p>
      </div>
      <div className="flex justify-start items-center gap-2">
        <span className="w-6 h-6 rounded-md bg-lime-500"></span>
        <p>Lanthanides</p>
      </div>
      <div className="flex justify-start items-center gap-2">
        <span className="w-6 h-6 rounded-md bg-purple-600"></span>
        <p>Alkaline Earth Metals</p>
      </div>
      <div className="flex justify-start items-center gap-2">
        <span className="w-6 h-6 rounded-md bg-orange-400"></span>
        <p>Basic Metals</p>
      </div>
      <div className="flex justify-start items-center gap-2">
        <span className="w-6 h-6 rounded-md bg-blue-700"></span>
        <p>Nonmetals</p>
      </div>
      <div className="flex justify-start items-center gap-2">
        <span className="w-6 h-6 rounded-md bg-orange-600"></span>
        <p>Noble Gases</p>
      </div>
      <div className="flex justify-start items-center gap-2">
        <span className="w-6 h-6 rounded-md bg-red-600"></span>
        <p>Actinides</p>
      </div>
    </div>
  );
}
