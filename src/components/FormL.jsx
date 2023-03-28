


import { useRef } from 'react'
export const FormL = () => {
    const formLogin = useRef(null)
    const preventF = (e) => {
        e.preventDefault();
        //console.log(formLogin.current);

        const arrayForm = new FormData(formLogin.current)
        console.log(...arrayForm.entries());

        const { login, password } = Object.fromEntries([...arrayForm.entries()])
        console.log(login, password);
    }

    return <form onSubmit = { preventF } ref = { formLogin }>
        <label htmlFor="Login">Email</label>
        <input type="email" name="login"  placeholder='Email' />
        <label htmlFor="Login">Password</label>
        <input type="password" name="password" placeholder='*********' />
        <input type="submit" value="Login" />
    </form>
}