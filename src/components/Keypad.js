// Code Keypad Component Here

function KeyPad() {

function handleChange(){
    console.log('Entering password...')
}

    return(
        <input onChange={handleChange} type="password" />
    )
}

export default KeyPad