import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (<>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo percentual={92} nome="Bruno Alves" image="https://avatars.githubusercontent.com/u/97115934?v=4"  />
          <UserInfo percentual={87} nome="Bruno Alves" image="https://avatars.githubusercontent.com/u/97115934?v=4"  />
          <UserInfo percentual={78} nome="Bruno Alves" image="https://avatars.githubusercontent.com/u/97115934?v=4"  />
          <UserInfo percentual={67} nome="Bruno Alves" image="https://avatars.githubusercontent.com/u/97115934?v=4"  />
          <UserInfo percentual={47} nome="Bruno Alves" image="https://avatars.githubusercontent.com/u/97115934?v=4"  />
        </Column>
        
      </Container>
    </>
  );
};

export { Feed };
