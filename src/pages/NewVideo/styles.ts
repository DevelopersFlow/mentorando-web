import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: calc(100vh - 94px);
  display: flex;
  flex-direction: column;

  h1 {
    color: ${props =>
      props.theme.title === 'light'
        ? props.theme.colors.black
        : props.theme.colors.white};
    font-size: 36px;
    font-weight: normal;
  }
`;

export const Title = styled.div`
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentSection = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px ${props => props.theme.colors.primary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => shade(0.2, props.theme.colors.primary)};
  }
`;

export const Content = styled.div`
  width: 100%;

  margin: 0 0 50px 120px;
  padding: 0 60px;

  h1 {
    text-align: center;
    font-weight: 500;
    font-size: 2.5em;
  }
`;

interface ItemProps {
  enabled?: boolean;
  opacity?: number;
}

export const Item = styled.div<ItemProps>`
  span {
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
    display: block;
    margin-top: 25px;

    opacity: ${props =>
      props.enabled ? 1 : props.opacity ? props.opacity : 1};
  }

  > div.custom {
    width: 100%;

    display: flex;
    align-items: center;

    label {
      font-size: 22px;

      display: block;

      padding-left: 35px;
      margin-left: 8px;
      margin-bottom: 12px;

      position: relative;

      cursor: pointer;

      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    }

    label input {
      position: absolute;

      opacity: 0;

      cursor: pointer;

      height: 0;
      width: 0;
    }

    span {
      position: absolute;
      top: -36px;
      left: 0;

      height: 32px;
      width: 32px;

      background-color: ${props =>
        props.theme.title === 'light' ? '#eee' : props.theme.colors.black};

      border: 1px solid ${props => props.theme.colors.primaryLight};
      border-radius: 4px;

      opacity: initial;
    }

    label:hover input ~ span {
      background-color: ${props => props.theme.colors.primaryLighter};
      box-shadow: inset 0 0 0.8em transparent,
        0 0 0.2em ${props => props.theme.colors.primary};
    }

    label input:checked ~ span {
      background-color: ${props => props.theme.colors.primary};
    }

    span:after {
      content: '';

      position: absolute;

      display: none;
    }

    label input:checked ~ span:after {
      display: block;
    }

    label span:after {
      left: 11px;
      top: 7px;

      width: 5px;
      height: 10px;

      border: solid white;
      border-width: 0 3px 3px 0;

      transform: rotate(45deg);

      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
    }
  }
`;

export const ActionButons = styled.div`
  width: 100%;
  margin-top: 50px;

  display: flex;
  gap: 32px;
`;
