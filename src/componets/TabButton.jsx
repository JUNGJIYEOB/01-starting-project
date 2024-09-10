export default function TabButton({children,onSelect}){
   /*
    // onSelect => on 으로 시작하면 특정 이벤트에 기반해 실행되는 함수에 의해 실행된다는 것을 명시 +역할
    //특정 이벤트가 발생할 때 호출해야 하는 함수는 이와 같이 작명 하는 것이 보통임
    //해당 컴포넌트를 사용할때 해당 이벤트를 불러와야 하기에 안에 작성
    function handleClick(selectButton){
        //selectButton => 'components','jsx','props','state'
        console.log('Hello world');
    }
    */
    
    /*
        * 1.특별 내장 children prop
            <TabButton>Components</TabButton>  -> App.js
        * export default function TabButton({children}){
        * return <li><button>{children}</button></li>;
        * children prop: 은 컴포넌트 사이  내용 의미
        * 2.
    */
    //이벤트에 () 를 붙이면 코드 라인이 실행될때 마다 실행됨
    return (<li> 
                <button onClick={onSelect}>{children}</button>
            </li>);
}