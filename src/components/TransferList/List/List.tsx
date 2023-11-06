import { IListProps } from "components/TransferList/List/ListTypes";
import ListItem from "components/TransferList/List/Item/ListItem";

function List({ items, toggleItem }: IListProps) {
  return (
    <div className="h-36 w-28 border-2 border-solid border-black border-ra rounded-xl flex-center flex-col">
      {items.map((item, index) => (
        <ListItem key={index} item={item} handleToggleItem={toggleItem} />
      ))}
    </div>
  );
}

export default List;
