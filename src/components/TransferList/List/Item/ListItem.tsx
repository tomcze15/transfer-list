import { IListItemProps } from "components/TransferList/List/Item/ListItemTypes";

function ListItem({ item, handleToggleItem }: IListItemProps) {
  return (
    <div className="flex flex-row gap-1">
      <input
        className="peer relative appearance-none shrink-0 w-4 h-4 border-2 border-blue-900 rounded-sm mt-1 bg-white focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100 checked:bg-blue-500 checked:border-0 disabled:border-steel-400 disabled:bg-steel-400"
        type="checkbox"
        onClick={() => handleToggleItem(item)}
      />
      <span>{item}</span>
    </div>
  );
}

export default ListItem;
