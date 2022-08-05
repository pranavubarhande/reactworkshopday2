import logo from './logo.svg';
import './App.css';
import FunComponentprops from './components/FunComponentprops'
import ClassComponentprops from './components/ClassComponentprops'
import StateClassCmp from './components/StateClassCmp';
import StateUseful from './components/StateUseful';

function App() {
  return (
    <div>
      {/* <FunComponentprops name = "Pranav" rn = "64"></FunComponentprops>
      <FunComponentprops name = "Harsh" rn = "36"></FunComponentprops>
      <FunComponentprops name = "Viraj" rn = "26"></FunComponentprops> */}

      {/* <ClassComponentprops name = "Pranav" rn = "64"></ClassComponentprops>
      <ClassComponentprops name = "Harsh" rn = "36"></ClassComponentprops>
      <ClassComponentprops name = "Viraj" rn = "26"></ClassComponentprops> */}

      {/* <StateClassCmp></StateClassCmp> */}

      <StateUseful></StateUseful>
    </div>
  );
}

export default App;
