import { IListItemProps } from "components/TransferList/List/Item/ListItemTypes";

function ListItem({ item, handleToggleItem }: IListItemProps) {
  return (
    <div>
      <input type="checkbox" onClick={() => handleToggleItem(item)} />
      <span>{item}</span>
    </div>
  );
}

export default ListItem;
