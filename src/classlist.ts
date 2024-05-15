import { isArray, isBoolean, isNonEmptyString } from "./utils";

export type ClassListItem =
  | boolean
  | string
  | undefined
  | null
  | ClassListItem[];

export const classlist = (...args: ClassListItem[]): string => {
  const acc: ClassListItem[] = [];
  addArray(acc, args);
  return acc.filter(isNonEmptyString).join(" ");
};

const addArray = (acc: ClassListItem[], arr: ClassListItem[]) => {
  const predicate = arr[0];
  const length = arr.length;
  let start = 0;
  if (isBoolean(predicate)) {
    start = predicate ? 1 : length;
  }

  for (; start < length; start++) {
    addItem(acc, arr[start]);
  }
};

const addItem = (acc: ClassListItem[], item: ClassListItem) => {
  if (isArray(item)) {
    addArray(acc, item);
  } else {
    acc.push(item);
  }
};
