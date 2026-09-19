export const instrumentIcons: { [key: string]: string } = {
  'composition': '🎼',
  'percussion': '🥁',
  'piano': '🎹',
  'vocal - tenor': '🎤',
  'vocal - bass': '🎤'
};

export function formatInstrumentLabel(name: string): string {
  return name.replace(/\b\w/g, (c) => c.toUpperCase());
}
