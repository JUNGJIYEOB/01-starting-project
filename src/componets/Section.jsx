function Section({ title, id, children }) {
  //구조 분해 하면 속성이 추가될때마다 건by건으로 추가해야 함으로 비효율적
  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
