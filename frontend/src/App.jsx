import TeacherDashboard from "./pages/TeacherDashboard"
import {Routes, Route} from 'react-router-dom'
import SignupPage from "./pages/SignUp"
import TeacherWorkspace from "./pages/TeacherWorkspace"
import UpdateStudent from "./pages/StudentUpdatePage"
import StudentDashboard from "./pages/StudentDashboard"

import Login from "./pages/Login"

const  App = ()=> {

  return (
    <>

      <Routes>
        <Route path="/" element = {<TeacherDashboard />}/>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/:name/workspace" element={<TeacherWorkspace />}/>
        <Route path="/update-student" element = {<UpdateStudent />}/>
        <Route path="/student-dashboard" element={<StudentDashboard />}/>

      </Routes>
    </>
  )
}

export default App
