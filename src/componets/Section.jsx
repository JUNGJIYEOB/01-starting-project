function Section({ title, children, ...props }) {
  /*
   * 구조 분해 하면 속성이 추가될때마다 건by건으로 추가해야 함으로 비효율적 -> id,class 등등 태그
   * 이 패턴은 forwarded props(전달 속성) 혹은 proxy props(대리 속성)
   * ...-> js 내장 문법
   * 자바스크립트가 이 구역 컴포넌트에서 사용할 수 있는 모든 다른 props를 모아서 props objecty(속성 개체)로 병합
   * 즉 하나의 자바스크립트 객체에 props로 분류되는 모든 것이 모여서 해당 컴포넌트로 들어옴
   */
  console.log('...props : ', { ...props });
  return (
    <section {...props}>
      {' '}
      {/** -> spread 함수  */}
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
