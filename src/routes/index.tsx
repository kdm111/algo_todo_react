import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Problems from '../pages/Problems/Problems';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import Todo from '../pages/Todo/Todo'
import ProblemSolving from '../pages/ProblemSolving/ProblemSolving';
import ProblemCategory from '../pages/ProblemCategory/ProblemCategory';
import Chat from '../pages/Chat/Chat';
import ChatRoom from '../pages/ChatRoom/ChatRoom';

const routes = [
  {path: '/', element: <Main />},
  {path: '/problems', element: <Problems />},
  {path: '/Signup', element: <SignUp />},
  {path: '/signin', element: <SignIn />},
  {path: '/todo', element: <Todo />},
  {path: '/problems/:problemId', element: <ProblemSolving />},
  {path: '/problems/category/:category', element: <ProblemCategory />},
  {path: '/chat', element: <Chat />},
  {path: '/chat/:chatRoomId', element: <ChatRoom />},
]

export default routes
