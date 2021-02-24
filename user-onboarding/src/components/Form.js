import React from 'react'

const Form = (props) => {
    const { data, change, errors, disabled, submit } = props

    return (
        <>
        <form onSubmit={submit}>
            <label>Name:
                <input
                    type='text'
                    name='name'
                    onChange={change}
                    value={data.name}
                />
            </label>
            <label>Email:
                <input
                    type='email'
                    name='email'
                    onChange={change}
                    value={data.email}
                />
            </label>
            <label>Password:
                <input
                    type='password'
                    name='password'
                    onChange={change}
                    value={data.password}
                />
            </label>
            <label>Terms of service:
                <input
                    type='checkbox'
                    name='tos'
                    onChange={change}
                    checked={data.tos}
                />
            </label>
            <button disabled={disabled}>Submit</button>
        </form>
        <div>
            <p>{errors.name}</p>
            <p>{errors.email}</p>
            <p>{errors.password}</p>
            <p>{errors.tos}</p>
        </div>
        </>
    )
}

export default Form