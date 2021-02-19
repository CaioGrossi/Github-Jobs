export default function formatLocation(location: string) {
  return location.replace(' ', '-').toLocaleLowerCase();
}
