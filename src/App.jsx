import { useState } from 'react';
import CoreConcept from './componets/CoreConcept/CoreConcept.jsx';
import Header from './componets/Header/Header.jsx';
import TabButton from './componets/TabButton.jsx';
import { EXAMPLES } from './data.js';

import { CORE_CONCEPTS } from './data.js'; //이름이 대문자로 시작하는 것 매우 중요
/*
*		+> 컴포넌트는 대문자로 시작 해야 함수
		+> 함수에서 렌더링 가능한 값이 반환되어야 함
		+> 한 파일에 컨포넌트가 많을 수록 찾기도 어려워지고 무거워짐
			++>두 개의 컴포넌트의 연관성이 매우 높거나 둘이 함께 있어야 작동하는 경우는 예외
*
*/


function App() {
  const [selectedTopic,setSelectedTopic] =useState('components');//useState를 사용할 때 나오는 요소는 항상 2개
  
  function handleClick(selectButton){
    //selectButton => 'components','jsx','props','state'
    console.log('selectButton : ',selectButton);
    setSelectedTopic(selectButton); 
}
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
        <section id='examples'> 
          <h2>Exmaple</h2>
          <menu>
             <TabButton onSelect={()=>handleClick('components')}>Components</TabButton> 
             <TabButton onSelect={()=>handleClick('jsx')}>JSX</TabButton> 
             <TabButton onSelect={()=>handleClick('props')}>Props</TabButton> 
             <TabButton onSelect={()=>handleClick('state')}>State</TabButton> 
          </menu>
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;