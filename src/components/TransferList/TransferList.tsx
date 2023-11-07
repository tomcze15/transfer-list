import Actions from "components/TransferList/Actions/Actions";
import List from "components/TransferList/List/List";
import { ITransferListProps } from "components/TransferList/TransferListTypes";
import { useTransferList } from "components/TransferList/useTransferList";

function TransferList(props: ITransferListProps) {
  const { leftItems, rightItems, toggleItem, transferElement } =
    useTransferList(props);

  return (
    <div className="h-screen flex justify-center items-center">
      <List items={leftItems} toggleItem={toggleItem} />
      <Actions
        moveLeft={() => transferElement("left")}
        moveRight={() => transferElement("right")}
      />
      <List items={rightItems} toggleItem={toggleItem} />
    </div>
  );
}

export default TransferList;
