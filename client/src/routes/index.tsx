import { Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <>
            <Route path="/" element={<div> Home </div>}/>
            <Route path="/login" element={<div> SignIn </div>}/>
            <Route path="/signUp" element={<div> Sign UP </div>}/>
    </>
  )
}

export default AppRoutes;