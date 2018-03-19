import styled from 'styled-components'

export const Header = styled.header`
  margin: 3rem auto;
  text-align: center;
`

export const Title = styled.h1`
  color: ${({theme}) => theme.title};
  font-family: ${({theme}) => theme.fontFamily};
  line-height: 1.3;
  margin: auto;
  max-width: 500px;
  width: 95%;

  strong {
    font-size: 160%;
  }
`

export const Main = styled.main``

export const Charts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  max-width: 1024px;
  width: 95%;
`

export const Chart = styled.div`
  background: ${({theme}) => theme.lightBk};
  border-radius: 10px;
  display: flex;
  max-width: 100%;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  margin: 0 auto 1vw;
  overflow: hidden;
  padding: 2.5rem;
  

  @media (min-width: 650px) {
    max-width: 49%;
    &:last-child {
      flex-basis: 99%;
      max-width: 99%
    }
  };
`

export const ChartTitle = styled.h2`
  font-family: ${({theme}) => theme.fontFamily};
  font-size: 160%;
  line-height: 1.2;
  margin-bottom: 3rem;
  text-align:center;
`

export const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 3rem auto 0;
  max-width: 300px;
  width: 100%;
`

export const LegendItem = styled.div`
  flex: 0 0 ${(props) => ((1 / props.amount) < .33) ? '50%' : `${1 / props.amount}%`};
  font-size: 200%;
  display:flex;
  align-items: center;
  justify-content: center;
`
export const LegendColorBlock = styled.div`
  border: 1px solid #fff;
  width: 30px;
  height: 15px;
  margin-right: 10px;
  background: ${({color}) => color};
`

export const Emoj =  styled.div`
  display: inline-block;
  min-width: 2rem;
`

export const Footer = styled.footer`
  color: ${({theme}) => theme.title};  
  line-height: 1.5;
  margin: 2rem;
  text-align: center;
`