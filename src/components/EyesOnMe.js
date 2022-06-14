// Code EyesOnMe Component Here


function EyesOnMe() {

function handleOnFocus(){
    console.log('Good!')
}

function handleBlur(){
    console.log('Hey! Eyes on me!')
}

return (
    <button onFocus={handleOnFocus} onBlur={handleBlur}>Eyes on Me</button>
    
)

}


export default EyesOnMe 