export default function formatLocation(location: string) {
  if (location != 'None') {
    return location.replace(' ', '-').toLocaleLowerCase();
  }

  return '';
}
