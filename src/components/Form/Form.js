import React from 'react';
import './Form.css'

const Form = (props) => {
    return (
        <div className={'formBox'}>
            <form>
                <input className='inputOne formElem' onChange={props.change}  name="text" required   type="text" placeholder={'Item name'}/>

                <button onClick={props.save} className='btnOne formElem' type='submit'>Add</button>
            </form>
        </div>
    );
};

export default Form;