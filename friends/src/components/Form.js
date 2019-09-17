import React from 'react';

const Form = () => {

    if(isLoading)
    return (
        <>
        <form>
            <input
            type='text'
            // value=''
            placeholder='name'
            >
            </input>
            <input
            type='text'
            // value=''
            placeholder='password'
            >
            </input>
            <button type='submit'>Log in</button>
        </form>
        </>
    )
}

export default Form;