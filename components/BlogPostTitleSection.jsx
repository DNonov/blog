export default function BlogPostTitleSection({data}) {
  return(
    <aside className="post-title-section">
      <h2 className="post-title">{data.title}</h2>
      <div className="post-metadata">
        <span className="post-publish-date">Published at: &nbsp;{data.publishDate}</span>
        <span className="post-publish-date">Tags: &nbsp;{data.tags}</span>
      </div>
    </aside>
  );
}
