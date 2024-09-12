import { useState } from 'react';
import Examples from './componets/CoreConcept/Examples.jsx';
import CoreConcepts from './componets/CoreConcepts.jsx';
import Header from './componets/Header/Header.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [inputTitle, setTitle] = useState('');
  //01. title 상태를 가져오는 const 선언
  //02. app.jsx title 출력
  //03. 하위 CoreConcept으로 props 전달
  //04. input만들어서 value한 내용이, title로 들어가게 타이핑

  const onIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const onDecrease = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const onInput = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <Header />
      <main>
        <CoreConcepts inputTitle={inputTitle} />
        <input type='text' id='text' onChange={onInput} />
        <Examples />
        <section>
          <label>{count}</label>
          <button onClick={onIncrease}>+1</button>
          <button onClick={onDecrease}>-1</button>
        </section>
      </main>
    </>
  );
}

export default App;
