import { TDirection } from "components/TransferList/TransferListTypes";

export const SIGNS: Record<TDirection, string> = {
  left: "<",
  right: ">",
} as const;
