export default function formatLocation(location: string) {
  if (location != 'Unspecified') {
    return location.replace(' ', '-').toLocaleLowerCase();
  }

  return '';
}
