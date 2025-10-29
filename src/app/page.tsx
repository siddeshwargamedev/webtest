"use client";
import Image from "next/image";
import ApiBtn from "./components/ApiBtn";
import useSWR, { mutate } from "swr";
import { useEffect, useState } from "react";

//const fetcher = (url: string | URL | Request) => fetch(url).then((res) => res.json());

export default function Home() {
  //const [shouldFetch, setShouldFetch] = useState(false);

  const [resData, setResData] = useState({ msg: "waiting" });

  const [fetch_hello, setFetchHello] = useState(false);
  const [helloData, setHelloData] = useState(null);

  const [fetch_svTime, setFetch_svTime] = useState(false);
  const [svTimeData, set_svTimeData] = useState(null);

  const [fetch_div, setFetchDiv] = useState(false);
  const [divData, setDivData] = useState(null);

  const [ntfData, setNftData] = useState(null);

  // const { data, error, isLoading } = useSWR(
  //   shouldFetch ? "http://localhost:3002/hello" : null, // only call API if shouldFetch is true
  //   fetcher
  // );

  useEffect(() => {
    if (fetch_hello) {
      fetch(
        "https://webend-fxbnc4dwd3eeemcn.centralindia-01.azurewebsites.net/hello"
      )
        .then((res) => res.json())
        .then((data) => {
          setHelloData(data);
          setResData(data);
        });
    }
    setFetchHello(false);
  }, [fetch_hello]);

  useEffect(() => {
    if (fetch_svTime) {
      fetch(
        "https://webend-fxbnc4dwd3eeemcn.centralindia-01.azurewebsites.net/time"
      )
        .then((res) => res.json())
        .then((data) => {
          set_svTimeData(data);
          setResData(data);
        });
    }
    setFetch_svTime(false);
  }, [fetch_svTime]);

  useEffect(() => {
    if (fetch_div) {
      fetch("https://webend-fxbnc4dwd3eeemcn.centralindia-01.azurewebsites.net/throw")
        .then((res) => res.json())
        .then((data) => {
          setDivData(data);
          setResData(data);
        })
        .catch((err) => {
          setResData({ msg: "5xx error" });
          setDivData(err);
        });
    }
    setFetchDiv(false);
  }, [fetch_div]);

  const triggerNotFoundError = async () => {
    try {
      const res = await fetch(`https://webend-fxbnc4dwd3eeemcn.centralindia-01.azurewebsites.net/notfound`);  
      const data = await res.json();
      setNftData(data);
      setResData({ msg: "4xx error" });
    } catch (err) {
      console.error("Caught error:", err);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[500px] border-2 rounded-2xl shadow-2xl p-3 flex flex-col">
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
        <ApiBtn
          btnEtxt="/hello"
          btnStat={helloData == null ? "Waiting" : "Success"}
          onBtnClicked={() => setFetchHello(true)}
        />
        <ApiBtn
          btnEtxt="/sv_time"
          btnStat={svTimeData == null ? "Waiting" : "Success"}
          onBtnClicked={() => setFetch_svTime(true)}
        />
        <ApiBtn
          btnEtxt="/throw"
          btnStat={divData == null ? "Waiting" : "Failed"}
          onBtnClicked={() => setFetchDiv(true)}
        />
        <ApiBtn
          btnEtxt="/notfound"
          btnStat={ntfData == null ? "Waiting" : "Failed"}
          onBtnClicked={() => triggerNotFoundError()}
        />
        <div className=" h-24 border rounded-lg mt-1 mx-1 text-center pt-1">
          {resData == null ? "" : JSON.stringify(resData, null, 2)}
        </div>
      </div>
    </div>
  );
}
