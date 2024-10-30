import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Overlay({
  message,
  onClose,
  resetGame,
}: {
  message: string;
  onClose: () => void;
  resetGame: () => void;
}) {
  const handleClick = () => {
    onClose();
    resetGame();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 px-20">
      <div className="text-center relative">
        <button
          className="hover:bg-[#40F99B] hover:text-black transition duration-500 ease-in-out  border-2 border-solid border-[#40F99B] w-14 h-14 rounded-full p-2 text-white mb-4"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </button>
        <h2 className="text-4xl font-bold text-white">{message}</h2>
      </div>
    </div>
  );
}

export default Overlay;
