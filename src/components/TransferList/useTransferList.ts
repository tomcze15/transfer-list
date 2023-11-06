import { useRef, useState } from "react";
import { TDirection } from "components/TransferList/TransferListTypes";
import { ITransferListProps } from "components/TransferList/TransferListTypes";
import { IUseTransferList } from "components/TransferList/useTransferListTypes";

export const useTransferList = ({
  data,
}: ITransferListProps): IUseTransferList => {
  const [leftItems, setLeftItems] = useState(data);
  const [rightItems, setRightItems] = useState([]);
  const checkedItems = useRef<number[]>([]);

  const toggleItem = (item: number): void => {
    const uncheckedItems = checkedItems.current.filter((i) => i !== item);
    const newCheckedItem = [...checkedItems.current, item];

    checkedItems.current = checkedItems.current.includes(item)
      ? uncheckedItems
      : newCheckedItem;
  };

  const transferElement = (action: TDirection): void => {};

  return {
    leftItems,
    rightItems,
    toggleItem,
  };
};
