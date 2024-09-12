/*
 * 이 컴포넌트의 목적 : 모든 종류의 탭에 적용해 앱의 다양한 위체이 있는 내용을 제어 하기 위함
 * => 재사용이 용이하게끔
 */
function Tabs({ children, buttons, buttonContainer }) {
  /**
   *꼭 기억하셔야 할 두 가지는 다음과 같습니다.
    먼저는 이 속성이 반드시
    받는 쪽 컴포넌트에서 커스텀 컴포넌트로서 사용 가능해야 함
    여기서는 탭 컴포넌트를 사용
    1.
    반드시 대문자로 시작하거나
    상수나 변수로서 재설정된 속성으로서
    대문자로 시작

    2.식별자에는 문자열 이름을 사용하는데
    내장 요소인 menu, ul, 혹 div가 그 예시
    그리고 컴포넌트 함수를 사용해야만
    커스텀 컴포넌트에 적용이 됨
    함수를 불러오는 것이 아니고
    홑화살괄호와 사용하는 것 또한 아님
    여기서는 함수 이름만 사용하여
    커스텀 컴포넌트의 식별자를
    속성의 값으로서 넘기고 있습니다
    여기에서 문자열 식별자를 사용한 이유는
    내장 컴포넌트인 menu(메뉴)를 사용하기 위함


   */
  const ButtonContainer = buttonContainer;

  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}

export default Tabs;
