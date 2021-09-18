import Link from 'next/link';
import timeToFinishReading from '../lib/timeToFinishReading';

export default function BlogPostTitleSection({data}) {
  return(
    <aside className="post-title-section">
      <Link href={"/"+data.slug}>
        <h2 className="post-title">{data.title}</h2>
      </Link>
      <div className="post-metadata">
        <span className="post-publish-date">
          Published at: &nbsp;{data.publishDate} &nbsp; &nbsp;
          Reading time: &nbsp;{timeToFinishReading(data.content)} min
        </span>
        <span className="post-publish-date">Tags: &nbsp;{data.tags}</span>
      </div>
    </aside>
  );
}
