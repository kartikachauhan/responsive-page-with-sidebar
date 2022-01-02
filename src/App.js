import React, { useState, useRef } from 'react';
import Header from './components/header/header';
import Sidebar from './components/sideBar/Sidebar';
import Content from './components/content/content';
import styled from 'styled-components';
import { useWindowSize, useOnClickOutside } from './components/hooks';
import './App.css';

function App() {
  const size = useWindowSize();
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const Burger = styled.button`
    position: absolute;
    top: 18%;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    @media (max-width: 500px) {
      position: fixed;
      top: 10px
    }

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: ${({ open }) => open ? '#0D0C1D' : '#000000'};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      }

      :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
      }

      :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    }
  `;

  const StyledMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 0.2;
    background: purple;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;
    text-align: left;
    transition: transform 0.3s ease-in-out;

    @media (max-width: 767px) {
      width: ${({ open }) => open ? '200px' : '0px'};
      flex: unset;
      z-index: ${({ open }) => open ? '1' : 'unset'};
      position: absolute;
    }

    @media (max-width: 500px) {
      position: fixed;
      top: 0px
    }

    @media (max-width: 400px) {
        width: 100%;
    }

    a {
      font-size: 2rem;
      text-transform: uppercase;
      padding: 2rem 0;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: #0D0C1D;
      text-decoration: none;
      transition: color 0.3s linear;

      @media (max-width: 576px) {
        font-size: 1.5rem;
        text-align: center;
      }

      &:hover {
        color: #343078;
      }
    }
  `;


  return (
    <div className="App">
      {size.width < 768 ? (
        <div ref={node} style={{ position: "absolute", top: "10px" }}>
          <Burger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
          </Burger>
        </div>
      ) : null}

      {size.width < 768 ? (
        <StyledMenu open={open}>
          <Sidebar />
        </StyledMenu>
      ) : <Sidebar />}
      <div className='main'>
        <Header open={open} />
        <Content />
      </div>
    </div>
  );
}

export default App;
