import React from "react";
type Props = {
  isVisible: boolean;
//   onClose: boolean;
};
function Model(source: Props) {
  if (!source.isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[1000px] flex flex-col">
        <button
          className="text-white text-xl place-self-end"
        //   onClick={() => source.onClose}
        >
          x
        </button>
        <div className="bg-white p-10 ">MODel</div>
      </div>
    </div>
  );
}

export default Model;
