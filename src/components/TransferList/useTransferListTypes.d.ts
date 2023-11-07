import { TDirection } from "components/TransferList/useTransferListTypes";

export interface IUseTransferList {
  leftItems: number[];
  rightItems: number[];
  toggleItem: (item: number) => void;
  transferElement: (action: TDirection) => void;
}
