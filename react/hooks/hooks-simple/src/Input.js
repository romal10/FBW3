import React, {useState} from 'react';

export default function Input () {
    const [value, setValue]=useState('');
    return ( 
        <div>
            <form onSubmit={ (e) => {e.preventDefault(); } }>
            <label> Please write Your name</label>
                <input onChange = {(e)=> setValue(e.target.value)} type="text">

                </input>
            </form>
            <p> {value}</p>
        </div>
     );
}
