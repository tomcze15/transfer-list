import { TDirection } from "components/TransferList/TransferListTypes";

export interface IButtonProps {
  direction: TDirection;
  handleOnClick: () => void;
}
