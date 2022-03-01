import './App.css';
import FormField from './components/UI/FormField';

function App() {
  return (
    <section className='container'>
        <h1>User Information App</h1>
          <form>
            <FormField id={"username"} belongsTo={"username"} type={"input"} label="Username: "/>
            <FormField id={"age"} belongsTo={"age"} type={"input"} label="Age: "/>
          </form>
    </section>
    
  );
}

export default App;
