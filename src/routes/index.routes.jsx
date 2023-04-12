import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from '../components/Login'
import { Tables } from '../components/tables'

export const IndexRouter = () => {
    return <Router>
        <Routes>
            <Route path='/' element = {<Login />}></Route>
            <Route path='/tables' element = {<Tables />}></Route>
        </Routes>
    </Router>
}



