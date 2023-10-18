import React from "react";

export default function card(props) {
    
  return (
    <>
      <div class="w-80 h-64 rounded-xl flex-col bg-slate-100 text-center text-clip shadow-md mx-6 my-4">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 ">
            <p class="font-bold text-md text-white">{props.no}</p>
        </div>

        <p class="font-bold text-lg">{props.title}</p>
        <p class="w-30px text-clip text-sm pb-4">
          {props.desc}
        </p>

        <div class="flex justify-between bg-zinc-300 rounded-lg m-2 h-24">
          <div class="flex-col px-4 py-2">
            <p class="font-bold text-md text-blue-500">Due date</p>
            <p class="text-sm">{props.due}</p>
          </div>

          <div class="flex-col px-4 py-2">
            <p class="font-bold text-md text-red-500">Penulty fees</p>
            <p class="text-sm">{props.penulty}</p>
          </div>
        </div>
      </div>
    </>
  );
}
