export default function HorizontalContainer({children}) {
  return(
    <nav className="hz-container">
      <div className="hz-container-inner-wrapper">
        {children}
      </div>
    </nav>
  );
}
