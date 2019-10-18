import styled from 'styled-components';

export const Nav = styled.div`
  background: #0747a6;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Message = styled.p`
  padding: 20px;
  font-style: italic;
`;

export const Trigger = styled.div`
  background: transparent;
  border: 0;
  color: #fff;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  margin-left: 24px;
`;

export const DestroyButton = styled.div`
  font-size: 14px;
  margin: 10px;
`;

export const Container = styled.div`
  position: fixed;
  background: #fff;
  top: 60px;
  right: 16px;
  width: 360px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 0 8px;
  display: none;
  margin: 5px;
  vertical-align: top;
  box-shadow: 0 8px 16px -4px rgba(9, 30, 66, 0.25),
    0 0 0 1px rgba(9, 30, 66, 0.08);
`;
