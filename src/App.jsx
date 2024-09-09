import CoreConcept from './componets/CoreConcept/CoreConcept.jsx';
import Header from './componets/Header/Header.jsx';
import { CORE_CONCEPTS } from './data.js'; //이름이 대문자로 시작하는 것 매우 중요
/*
*		+> 컴포넌트는 대문자로 시작 해야 함수
		+> 함수에서 렌더링 가능한 값이 반환되어야 함
		+> 한 파일에 컨포넌트가 많을 수록 찾기도 어려워지고 무거워짐
			++>두 개의 컴포넌트의 연관성이 매우 높거나 둘이 함께 있어야 작동하는 경우는 예외
*
*/


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts' >
          <h2>Core Concepts</h2>
          <ul>
            
            <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
           

          </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;