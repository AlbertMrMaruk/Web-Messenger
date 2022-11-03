export function last(list: any) {
  if (Array.isArray(list)) {
    return list.at(-1);
  }
}
