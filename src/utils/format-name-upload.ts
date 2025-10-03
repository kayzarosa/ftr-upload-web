export function truncateName(name: string, typeImage: string): string {
  const type = typeImage.split("/");
  const quantWords = name.length - type[1].length;

  if (quantWords <= 20) {
    return name;
  }

  const truncateName = name.substring(0, 20);

  return `${truncateName}... .${type[1]}`;
}
