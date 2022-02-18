export default (props) => {
    console.log(props)
    console.log(props.min)
    console.log(props.max)

    let result = props.min + props.max;

    return (
        <>
            <h2>O valor de {props.max} é maior que o valor de {props.min}</h2>
            <h2>O resultado de {props.min} somado a {props.max} é {result}</h2>
        </>
    )
    
}