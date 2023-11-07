import { SIGNS } from "components/TransferList/Button/ButtonConstants";
import { IButtonProps } from "components/TransferList/Button/ButtonTypes";

function Button({ direction, handleOnClick }: IButtonProps) {
  return (
    <button
      onClick={handleOnClick}
      className="bg-gray-300 p-2 w-12 border-solid border-2 hover:bg-gray-400 hover:shadow-lg transition-colors"
    >
      {SIGNS[direction]}
    </button>
  );
}

export default Button;
