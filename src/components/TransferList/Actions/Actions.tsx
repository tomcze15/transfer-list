import Button from "components/TransferList/Button/Button";
import { IActionProps } from "components/TransferList/Actions/ActionsTypes";

function Actions({ moveLeft, moveRight }: IActionProps) {
  return (
    <div className="flex flex-col p-5 gap-5">
      <Button handleOnClick={moveRight} direction="right" />
      <Button handleOnClick={moveLeft} direction="left" />
    </div>
  );
}

export default Actions;
