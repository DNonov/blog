import Link from 'next/link';

export default function BlogPostTitleSection({data}) {
  return(
    <aside className="post-title-section">
      <h1 className="post-title">{data.title}</h1>
      <div className="post-metadata">
        <span className="post-publish-date">Published at: {data.publishDate}</span>
        <span className="post-publish-date">Tags: {data.tags}</span>
      </div>
    </aside>
  );
}
