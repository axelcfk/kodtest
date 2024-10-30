function Tile({
  index,
  value,
  onClick,
}: {
  index: number;
  value: number;
  onClick: () => void;
}) {
  return (
    <div
      className={`flex items-center justify-center border-2 text-xl font-semibold h-16 w-16 md:h-24 md:w-24 rounded-lg transition-transform duration-150 ${
        value === 0
          ? "bg-gray-100/20 border-none"
          : "bg-gray-200 border-gray-800"
      } cursor-pointer ${
        value !== 0 ? "shadow-lg hover:shadow-xl hover:scale-105" : ""
      }`}
      onClick={value !== 0 ? onClick : undefined}
    >
      {value !== 0 ? value : ""}
    </div>
  );
}

export default Tile;
