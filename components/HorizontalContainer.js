export default function HorizontalContainer({children, classN}) {
  return(
    <section className={`hz-container ${classN}`}>
      <div className="hz-container-inner-wrapper">
        {children}
      </div>
    </section>
  );
}
