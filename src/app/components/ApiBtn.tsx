type ApiBtnProps = {
  btnEtxt: string;
  btnStat: string;
  onBtnClicked: () => void;
};

export default function ApiBtn({btnEtxt, btnStat, onBtnClicked} : ApiBtnProps) {
  return (
    <div className="w-full flex">
      <div className="flex-1 p-1">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded-lg w-full"
          onClick={onBtnClicked}
        >
          {btnEtxt}
        </button>
      </div>
      <div className="flex-1 py-1 px-1 text-xl">
        <div className="border rounded-lg px-1 w-full h-full flex items-center justify-center">
          <p className="text-green-500 font-bold">{btnStat}</p>
        </div>
      </div>
    </div>
  );
}
