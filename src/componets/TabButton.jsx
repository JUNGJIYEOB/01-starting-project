export default function TabButton({children}){
    /*
        * 1.특별 내장 children prop
            <TabButton>Components</TabButton>  -> App.js
        * export default function TabButton({children}){
        * return <li><button>{children}</button></li>;
        * children prop: 은 컴포넌트 사이  내용 의미
        * 2.
    */

    return <li><button>{children}</button></li>;
}