<컨벤션><BR/>
1.React 컨벤션<BR/>
		+> 컴포넌트는 대문자로 시작 해야 함수<BR/>
		+> 함수에서 렌더링 가능한 값이 반환되어야 함<BR/>
		+> 한 파일에 컨포넌트가 많을 수록 찾기도 어려워지고 무거워짐<BR/>
			++>두 개의 컴포넌트의 연관성이 매우 높거나 둘이 함께 있어야 작동하는 경우는 예외<BR/>
<CSS><BR/>
컴포넌트별 css 파일로 구분을 하면 어떤 스타일이 어떤 컴포넌트에 적용되는지 구분하는 것과 스타일을 조정하는 것이 훨신 용이함<BR/>
스타일의 범위를 설정하는 것 차후 기재<BR/><BR/><BR/>


<리엑트 이론><BR/>
1.개발자의 관점에서: 컴포넌트를 조합하여 UI를 구축하는 것에 대한 장점 중 하나는 무엇입니까?<BR/>
	=> 작고 재사용 가능한 빌딩 블록<BR/><BR/>
	
2.리액트로 작업할 때: 어떻게 새로운 컴포넌트를 정의합니까?<BR/>
	=> JSX 코드를 반환하는 함수를 생성한다.<BR/><BR/>
	
3.JSX 목적은 무엇인가?<BR/>
	=> 컴포넌트 내 타겟 HTML 코드를 정의할 수 있도록 합니다.<BR/><BR/>
	
4.리액트는 JSX 코드에서 사용한 컴포넌트로 하는 일은 무엇입니까?<BR/>
	=> 웹사이트 DOM을 업데이트할 명령어를 수행하는 컴포넌트 트리를 불러온다<BR/><BR/>

5.커스텀 컴포넌트는 주로 어떻게 사용됩니까?<BR/>
	=> 커스텀 컴포넌트는 JSX 코드 내 HTML 요소처럼 사용된다.<BR/><BR/>
	
6.커스텀 컴포넌트에 대한 설명<BR/>
	->커스텀 컴포넌트는 자바스크립트 함수로 생성될 수 있다.<BR/><BR/>
	-> JSX에서 커스텀 컴포넌트를 사용하려면, 첫 무자가 대문자여야 한다.<BR/>
	-> 커스텀 컴포넌트는 무조건 렌더링할 수 있는 내용을 반환해야 한다.(주로JSX)<BR/>






<컴포넌트 합성>
	: 컴포넌트가 다른 컴포넌트나 내용을 감싸서 컴포넌트를 구축하는 것<br><br>

1.Using "children"<br>
<children Prop><br>
	: 컴포넌트 사이  내용 의미(필요에 따른 복잡한 jsx 구조, 단순 String 도 가능)<br><br>
	

ex)<br>
	*App Component<br>
		<Modal><br>
			<h2>Warnning<h2><br>
			<p>Do you want to delete this file?</p><br>
		</Modal><br><br>
		
	*Modal Component<br>
		1)	<br>
			function Modal(props){<br>
				return <div id='modal'>{props.children}</div>;<br>
			}<br><br>
			
		2)객체 구조 분해	<br>
			function Modal({children}){<br>
				return <div id='modal'>{children}</div>;<br>
			}<br><br>
			
2.Using Attributes<br>
	*App Component<br>
		<Modal label='Component'><br>
		</Modal><br><br>
		
	*Modal Component<br>
		function Modal({label}){<br>
			return <div id='modal'>{label}</div>;<br>
		}<br>
