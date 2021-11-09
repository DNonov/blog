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
          <b><i className="bi bi-calendar-date"></i>&nbsp;{data.publishDate} &nbsp;</b>
          <b><i className="bi bi-stopwatch"></i>&nbsp;{timeToFinishReading(data.content)} min read</b>
        </span>
          <b><span className="post-tags"><i className="bi bi-tags"></i>&nbsp;{data.tags}</span></b>
      </div>
    </aside>
  );
}
