"use client";
import Image from "next/image";
import ApiBtn from "./components/ApiBtn";

export default function Home() {
  function btnClicked() {
    console.log("Button was clicked");
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[500px] h-96 border-2 rounded-2xl shadow-2xl p-3">
        <div className="w-full flex">
          <div className="flex-1 p-1">
            <div className="text-blue-500 text-center text-xl font-bold py-2 px-4 rounded-lg w-full">
              Endpoint
            </div>
          </div>
          <div className="flex-1 py-1 px-1 text-xl">
            <div className="rounded-lg px-1 w-full h-full flex items-center justify-center">
              <p>Status</p>
            </div>
          </div>
        </div>
        <ApiBtn btnEtxt="Hello" btnStat="Success" onBtnClicked={btnClicked} />
      </div>
    </div>
  );
}
