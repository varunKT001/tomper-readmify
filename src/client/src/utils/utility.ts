export function set(obj: any, path: string[], value: any) {
  if (path.length === 1) {
    obj[path[0]] = value;
    return;
  }

  set(obj[path[0]], path.slice(1), value);
}
