import { CORE_CONCEPTS } from '../data';
import CoreConcept from './CoreConcept/CoreConcept';

function CoreConcepts() {
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
      ))}
      */}
        {/**1.동적 생성방법
         *  2)spread 연산자 이용
         */}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;
