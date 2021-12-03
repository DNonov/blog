/**
 * Sorts posts by their publish date.
 *
 * @param posts
 */
export default function sortPostsByDate(posts) {
  return posts.sort((firstPost, secondPost) => {
    let firstPostUNIXTimestamp = new Date(firstPost.publishDate).valueOf();
    let secondPostUNIXTimestamp = new Date(secondPost.publishDate).valueOf();

    // sortPostsByDate will return the same array of posts if publishDate is
    // undefined.
    if (!firstPostUNIXTimestamp) firstPostUNIXTimestamp = 0;
    if (!secondPostUNIXTimestamp) secondPostUNIXTimestamp = 0;

    if (firstPostUNIXTimestamp < secondPostUNIXTimestamp) return 1;
    if (firstPostUNIXTimestamp > secondPostUNIXTimestamp) return -1;
    return 0;
  });
};
