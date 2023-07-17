import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IntroBubble from './components/IntroBubble';
import FunBubble from './components/FunBubble';

function App() {
  return (
    <div>
      <IntroBubble name='Kobe' age={20} school='Vanderbilt University' major='Computer Science' />
      <IntroBubble name='Allen' age={20} school='UCI' major='Software Engineering' />
      <FunBubble />
    </div>
  );
}

export default App;
