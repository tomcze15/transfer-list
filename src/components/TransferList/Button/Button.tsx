import { SIGNS } from "components/TransferList/Button/ButtonConstants";
import { IButtonProps } from "components/TransferList/Button/ButtonTypes";

function Button({ direction }: IButtonProps) {
  return (
    <button className="bg-gray-300 w-6 border-solid border-2 hover:bg-gray-400 transition-colors">
      {SIGNS[direction]}
    </button>
  );
}

export default Button;
