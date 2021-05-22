import * as S from './styles'

const Main = ({ title = 'Boilerplate' }) => (
  <S.Wrapper>
    <S.Logo src="/img/icon-512.png" alt="Logo de um atomo do React" />
    <h1>{title}</h1>
  </S.Wrapper>
)

export default Main
