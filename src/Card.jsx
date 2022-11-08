//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (props) {
  return (
    <div className="color-card" style={{backgroundColor: props.colorData.colorCode}} >
      <h3>{props.colorData.colorName}</h3>
      <h2>{props.colorData.colorCode}</h2>
    </div>
  )
}