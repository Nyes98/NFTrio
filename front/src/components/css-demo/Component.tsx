import styled from "styled-components";
import "../../nftrio.css";
import ImageComponent from "../multer-test/Component";

type Props = {};

const CSSDemoComponent: React.FC<Props> = ({}) => {
  return (
    <DemoContainer className="nftrio-font">
      <h1 className="nftrio-h bg-dark fg-pink ac-pink">A tag</h1>

      <ul className="nftrio-ul">
        <li>
          <a href="#section-colors" className="nftrio-a ac-dark">
            Colors
          </a>
        </li>
        <li>
          <a href="#section-headings" className="nftrio-a ac-dark">
            Headings
          </a>
        </li>
        <li>
          <a href="#section-code" className="nftrio-a ac-dark">
            Source Code
          </a>
        </li>
        <li>
          <a href="#section-button" className="nftrio-a ac-dark">
            Button
          </a>
        </li>
      </ul>
      <div className="code">
        {` <a href="#section-colors" className="nftrio-a ac-dark">
            Colors
          </a>`}
      </div>

      <h1 id={"section-colors"} className={"nftrio-h"}>
        Colors
      </h1>
      <div className="bg-pink p">bg-pink</div>
      <div className="code">{`<div className="bg-pink p">-pink</div>`}</div>
      <p className="fg-dark bg-melon">fg-dark bg-melon</p>
      <div className="code">{`<p className="fg-black bg-melon">fg-black bg-melon</p>`}</div>
      <h4 className="nftrio-h">color lists</h4>
      <ul className="nftrio-ul">
        <li className="fg-pink ">-pink</li>
        <li className="fg-beige bg-dark ">-beige</li>
        <li className="fg-melon ">-melon</li>
        <li className="fg-green ">-green</li>
        <li className="fg-cyan ">-cyan</li>
        <li className="fg-dark ">-dark</li>
        <li className="fg-white bg-dark ac-white">-white</li>
        <li className="fg-black ">-black</li>
      </ul>
      <div className="code-block" data-title={"usage"}></div>
      <div className="code">
        {`<li className="fg-white bg-dark ac-white">-white</li>`}
        <p>폰트 색상 : fg-색상</p>
        <p>배경 색상 : bg-색상</p>
        <p>list style 색상 : ac-색상</p>
      </div>

      <h1 className="nftrio-h" id="section-headings">
        Headings
      </h1>
      <ul className="nftrio-ul">
        <h1 className="nftrio-h fg-melon bg-dark ac-beige">h1: content</h1>
        <h2 className="nftrio-h">h2 : content</h2>
        <h3 className="nftrio-h ac-green fg-green">h3: content</h3>
        <h4 className="nftrio-h">h4 : content</h4>
        <h5 className="nftrio-h">h5: content</h5>
        <div className="code-block" data-title={"usage"}></div>
        <div className="code">{`<h1 className="nftrio-h">h1 태그</h1>`}</div>
        <div className="code">{`<h3 className="nftrio-h ac-green fg-green">h3: content</h3>`}</div>
      </ul>

      <h1 className="nftrio-h" id="section-code">
        Code
      </h1>
      <div
        className="code-block"
        data-title="title"
      >{`code-block에서만 data-title 지정이 가능합니다.`}</div>
      <div className="code">
        {
          '<div className="code-block" data-title="title">{`code-block에서만 data-title 지정이 가능합니다.`}</div>'
        }
      </div>
      <div className="code">
        {"code 와 code-block 으로 display:block을 지정했습니다."}
      </div>

      <h1 className="nftrio-h" id="section-button">
        Button
      </h1>
      <button className="nftrio-button fg-dark bg-melon ac-white">
        Button
      </button>
      <div className="code">
        {`<button className="nftrio-button fg-dark bg-melon ac-white">Button</button>`}
      </div>
      <ImageComponent />
    </DemoContainer>
  );
};

export default CSSDemoComponent;

const DemoContainer = styled.div``;
// 단일 props 사용 시
// const ImgaeListWrapper = styled.div<{ height: string }>`
//   margin-top: 20px;
//   width: 860px;
//   height: ${props => props.height};
// `;

// 다수 props 사용 시 : interface 작성

// Container styled-components에 적용할 interfacer를 작성
// interface Container extends 상속타입 {
// isActive: boolean;
// height: string;
// 프롭스명: 타입지정;
// }
// styled-components에 interface 타입 지정하기
// const ImgaeListWrapper = styled.div<Container>`
//   margin-top: 20px;
//   width: 860px;
//   height: ${props => props.height};
//   background-color: ${(props) => (props.isActive ? 'red' : 'gray')};
// `;

// 상속 컴포넌트에 타입 지정
// 상속컴포넌트의 타입 상속받기
// interface Container {
//   isActive: boolean;
//   height: string;
//   프롭스명: 타입지정;
// }

// 상속받은 컴포넌트에 타입 추가하기
// const Container = styled(상속받을 컴포넌트명)<Container>`
/* margin-top: 20px; */
/* width: 860px; */
/* height: ${props => props.height}; */
/* background-color: ${(props) => (props.isActive ? 'red' : 'gray')}; */
// `;
