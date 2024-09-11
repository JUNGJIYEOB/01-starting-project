import { useState } from 'react';
import { EXAMPLES } from '../../data'; //이름이 대문자로 시작하는 것 매우 중요
import Section from '../Section';
import TabButton from '../TabButton';

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(); //useState를 사용할 때 나오는 요소는 항상 2개

  function handleClick(selectButton) {
    //selectButton => 'components','jsx','props','state'
    setSelectedTopic(selectButton);
  }

  //1.조건부 랜더링_컴포넌트 내부에서 if문 내부에서 변수에 재할당
  let tabContents = <p>Please selct a topic</p>;
  if (selectedTopic) {
    tabContents = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>

        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title={'Example'} id={'examples'}>
      <menu>
        <TabButton
          isSelected={selectedTopic === 'components'}
          onSelect={() => handleClick('components')}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'jsx'}
          onSelect={() => handleClick('jsx')}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'props'}
          onSelect={() => handleClick('props')}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'state'}
          onSelect={() => handleClick('state')}
        >
          State
        </TabButton>
      </menu>
      {/* 
          1.조건부 랜더링
            1) 삼항연산자_null 사용 
          null : JSX 코드로 출력할 수 있으며 단순히 아무것도 렌더링 되지 않는 것
          {!selectedTopic?(<p>Please selct a topic</p>):null}
          {selectedTopic?(
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        ) :null}
      */}
      {/**
       * 1.조건부 랜더링
       *  2) 삼항연산자
      {!selectedTopic?(<p>Please selct a topic</p>)
      :( 
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
          {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
      )}
       */}
      {/*
        * 1.조건부 랜더링-
            3) && 연산자
        * true && expression은 항상 expression으로 평가되고 false && expression은 항상 false로 평가
        {!selectedTopic&&(<p>Please selct a topic</p>)}
        {selectedTopic&&(
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
              
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
        ) }
       */}
      {/*1.조건부 랜더링
       *  3)컴포넌트 내부에서 if문 내부에서 변수에 재할당
       */}
      {tabContents}
    </Section>
  );
}

export default Examples;
