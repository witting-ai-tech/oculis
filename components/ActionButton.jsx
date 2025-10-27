const ActionButton = ({ onClick, label, isDisabled }) => (
  <button
    onClick={onClick}
    disabled={isDisabled}
    aria-disabled={isDisabled}
    aria-label={label}
    className={`w-full py-[10px] px-[16px] text-white text-center rounded-md transition duration-200 ease-in-out ${
      isDisabled
        ? "bg-[#a78bfa] cursor-not-allowed"
        : "bg-[#7b47db] hover:bg-[#6037ac]"
    }`}
  >
    {label}
  </button>
);
export default ActionButton;
