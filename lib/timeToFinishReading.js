
/**
 * It returns the amount of minutes required to read the post.
 *
 * @param text
 */
export default function timeToFinishReading(text) {
  // averageReaderWPM value has been researched very lightly online.
  const averageReaderWPM = 300;
  const numberOfWords = text.split(' ').length;
  const minutesToReadText = parseInt( numberOfWords / averageReaderWPM, 10);

  if (minutesToReadText <= 0) {
    return 1;
  }

  return minutesToReadText;
}
