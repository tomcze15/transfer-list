import { useRef, useState } from "react";
import { TDirection } from "components/TransferList/TransferListTypes";
import { ITransferListProps } from "components/TransferList/TransferListTypes";
import { IUseTransferList } from "components/TransferList/useTransferListTypes";
import { intersection, exclude } from "utils";

export const useTransferList = ({
  data,
}: ITransferListProps): IUseTransferList => {
  const [leftItems, setLeftItems] = useState(data);
  const [rightItems, setRightItems] = useState<number[]>([]);
  const checkedItems = useRef<number[]>([]);

  const toggleItem = (item: number): void => {
    const uncheckedItems = checkedItems.current.filter((i) => i !== item);
    const newCheckedItem = [...checkedItems.current, item];

    checkedItems.current = checkedItems.current.includes(item)
      ? uncheckedItems
      : newCheckedItem;
  };

  const transferElement = (action: TDirection): void => {
    const [sourceItems, setSourceItems, targetItems, setTargetItems] =
      action === "right"
        ? [leftItems, setLeftItems, rightItems, setRightItems]
        : [rightItems, setRightItems, leftItems, setLeftItems];

    const sourceCheckedItems = intersection(sourceItems, checkedItems.current);

    checkedItems.current = exclude(checkedItems.current, sourceCheckedItems);

    setTargetItems(targetItems.concat(sourceCheckedItems));
    setSourceItems(exclude(sourceItems, sourceCheckedItems));
  };

  return {
    leftItems,
    rightItems,
    toggleItem,
    transferElement,
  };
};
