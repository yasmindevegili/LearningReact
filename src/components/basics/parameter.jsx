function Input(props) {
  const status = props.nota >= 7.0 ? 'Aprovado' : 'Recuperação';
  return (
    <div>
      <p>A nota de { props.nome } é { props.nota }. {status}</p>
    </div>
  );
}

export default Input;
