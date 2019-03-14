const withChange1 = Comp => props => <Comp {...props} />;

const withChange2 = Comp => props => <Comp {...props} />;

const Comp_0 = () => <p>Hello!</p>;

const Comp_1 = withChange1(Comp_0);
const Comp_2 = withChange2(Comp_1);

const App = () => <Comp_2 isTrue={0} />;

const Teste = () => <App />;

export default Teste;
