import {Route, Routes} from "react-router-dom";
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Layout from "./components/common/Layout";
import PostProvider from "./api/providers/PostProvider";
import useAuth from "./hooks/useAuth";

function App() {


    return (
      <>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<PostProvider />} />
            <Route path="login" element={<SignIn />}/>
            <Route path="signup" element={<SignUp />}/>
        </Route>
      </Routes>
      </>


  );
}





export default App;






