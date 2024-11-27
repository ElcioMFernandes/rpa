import { Input } from "./components/Input";
import { Form } from "./components/Form";

const App = () => {
  return (
    <Form>
      <Input id="name" type="text" placeholder="Digite seu nome">
        Nome
      </Input>
      <Input id="email" type="email" placeholder="Digite seu email">
        Email
      </Input>
      <Input id="password" type="password" placeholder="Digite sua senha">
        Senha
      </Input>
    </Form>
  );
};

export default App;
