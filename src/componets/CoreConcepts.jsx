import { CORE_CONCEPTS } from '../data.js';
import CoreConcept from './CoreConcept/CoreConcept';

function CoreConcepts({ inputTitle }) {
  const ReturnCore = CORE_CONCEPTS.filter((data) =>
    data.title.includes(inputTitle)
  );

  return (
    <section id='core-concepts'>
      <h2>Core Concepts</h2>
      <ul>
        {/*
      * 1.동적생성 방법
          1)객체구조분해
      {CORE_CONCEPTS.map((concepItem) => (
        <CoreConcept
          key={concepItem.title} ->고유값 key를 필수로 가져야 함
          title={concepItem.title}
          description={concepItem.description}
          image={concepItem.image}
        />
{CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}

      ))}
      */}
        {/**1.동적 생성방법
         *  2)spread 연산자 이용
         */}
        {/* 
        {returnCore.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))} */}
        <CoreConcept {...ReturnCore[0]} />
      </ul>
    </section>
  );
}

export default CoreConcepts;
