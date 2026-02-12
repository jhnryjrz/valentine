import { useEffect, useState } from "react";

export default function ValentinePage() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [yesScale, setYesScale] = useState(1);
  const [isAccepted, setIsAccepted] = useState(false);

  let imagePath = `Images/cat${count}.png`;

  useEffect(() => {
    switch (count) {
      case 1:
        setText("Will you be my valentine?");

        break;
      case 2:
        setText("Why not? ");
        break;
      case 3:
        setText("Pleaseeeee???");
        break;
      case 4:
        setText("Maybe you are seeing someone else?");
        break;
      case 5:
        setText("Just click yes, it's not that hard");
        break;
      case 6:
        setText("You can't say no anymore");
        break;
    }
  }, [count]);

  if (isAccepted){
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-pink-200 text-center">
        <h1 className="text-5xl font-bold text-pink-600">YAY! ❤️</h1>
        <p className="mt-4 text-gray-600">See you on the 14th!</p>
      </div>
    );
  }

  const noButton = () => {
    setCount((c) => c + 1);
    setYesScale((prev) => prev + 0.5);
  };

  return (
    <div className="w-full h-screen bg-pink-200">
      <div className="flex flex-col justify-center items-center gap-20">
        <div>
          <img src={imagePath} className="mt-[10%] w-[20rem] h-[20rem]" />
        </div>

        <div>
          <h1 className="text-[1.5rem]">{text}</h1>
        </div>
        <div className="flex gap-7">
          <button
            style={{ transform: `scale(${yesScale})` }}
            className={`bg-[#005F02] px-7 py-3 rounded-md z-99`}
            onClick={() => setIsAccepted(true)}
          >
            Yes
          </button>
          <button
            onClick={noButton}
            className=" px-7 py-3 rounded-md bg-[#C3110C]"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
