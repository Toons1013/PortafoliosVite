
const imgs = [
    {title:"Estudiante en la UNICAH", description:"", url:"http://drive.google.com/uc?export=view&id=16LDbugXmbTkXeR0JBKBFUMntNnujjmtT"},
    {title:"Conocimientos en C#", description:"", url:"http://drive.google.com/uc?export=view&id=1DTz96Qr4LAcsCEBcSDa2he7RqAQ3YI8Y"},
    {title:"Conocimientos en Unity", description:"", url:"http://drive.google.com/uc?export=view&id=1u77Q8ztDwFFbEEF4-2PENIHpEBsd2Izn"},


];

const imgs2 = [

    {title:"APP para Semana Santa", description:"", url:"http://drive.google.com/uc?export=view&id=1_UBEWToDkROGrGtrUfzIhX3WFU37w0Um"},
    {title:"Contador en React", description:"", url:"http://drive.google.com/uc?export=view&id=1pybW1uH1A7xZNE8NwNiVWDUWKpQvyFwe"},
    {title:"Calculadora basica", description:"", url:"http://drive.google.com/uc?export=view&id=1fJQ7X_Llm5UM9Nv4w_lfaI4lTgnIdD6Z"},
];




const handlerBarsContext = {
    "/index.html": {
        
        "imgs": imgs,
        "imgs2": imgs2,
    },

}
const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;