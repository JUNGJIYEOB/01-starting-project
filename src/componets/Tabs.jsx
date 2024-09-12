/*
 * 이 컴포넌트의 목적 : 모든 종류의 탭에 적용해 앱의 다양한 위체이 있는 내용을 제어 하기 위한 컴포넌트
 *
 *
 */
function Tabs({ children,buttons}) {
  return (
    <>
      <menu>
        {buttons}
      </menu>
      {children}
    </>
  );
}

export default Tabs;
