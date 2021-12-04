import  generateUNIXTimestamp from './generateUNIXTimestamp';

/**
 * Sorts posts by their publish date.
 *
 * @param {Array} posts
 * @returns {Array} sorted posts
 */
export default function sortPostsByDate(posts) {
  return posts.sort((firstPost, secondPost) => {
    let firstPostUNIXTimestamp = generateUNIXTimestamp(firstPost.publishDate);
    let secondPostUNIXTimestamp = generateUNIXTimestamp(secondPost.publishDate);

    // sortPostsByDate will return the same array of posts if publishDate is
    // undefined.
    if (!firstPostUNIXTimestamp) firstPostUNIXTimestamp = 0;
    if (!secondPostUNIXTimestamp) secondPostUNIXTimestamp = 0;

    if (firstPostUNIXTimestamp < secondPostUNIXTimestamp) return 1;
    if (firstPostUNIXTimestamp > secondPostUNIXTimestamp) return -1;
    return 0;
  });
};
