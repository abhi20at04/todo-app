// App.jsx
import Appname from "./components/Appname";
import Entertodo from "./components/Entertodo";
import Todoitems from "./components/Todoitem";
import  "./App.css";
function App() {
  const todoitems=[{
    name:"buy milk",
    duedate:"4/10/23"
  },
{
    name:"go to college",
    duedate:"4/10/23"
  }]
  return (
    <div className="to-do-container  ">
      <Appname />
      <div className='item-container'>
       <Entertodo/>
       <Todoitems/>
      

             
      
     </div>
     </div>
  );
}

export default App;


