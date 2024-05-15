export function isString(value: any): value is string {
  return typeof value === "string";
}

export const isDefined = <T>(t: T | null | undefined): t is T =>
  t !== null && t !== undefined;

export function isBoolean(value: any): value is boolean {
  return (
    typeof value === "boolean" ||
    (typeof value === "object" &&
      value !== null &&
      typeof value.valueOf() === "boolean")
  );
}

export function isArray<T>(value?: any): value is any[] {
  return Array.isArray(value);
}

export function isNonEmptyString(val: any) {
  if (!isString(val)) {
    return false;
  }
  if (val === "") {
    return false;
  }
  return true;
}
