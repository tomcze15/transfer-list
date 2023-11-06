import Button from "components/TransferList/Button/Button";

function Actions() {
  return (
    <div className="flex flex-col p-5 gap-5">
      <Button direction="left" />
      <Button direction="right" />
    </div>
  );
}

export default Actions;
