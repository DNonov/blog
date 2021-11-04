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
          <b>Published:</b>&nbsp;{data.publishDate} &nbsp; &nbsp;
          <b>Time:</b>&nbsp;{timeToFinishReading(data.content)} min read
        </span>
        <span className="post-publish-date"><b>Tags:</b>&nbsp;{data.tags}</span>
      </div>
    </aside>
  );
}
