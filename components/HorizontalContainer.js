export default function HorizontalContainer({children, borderPosition}) {
  return(
    <section className={`hz-container ${borderPosition}`}>
      <div className="hz-container-inner-wrapper">
        {children}
      </div>
    </section>
  );
}
