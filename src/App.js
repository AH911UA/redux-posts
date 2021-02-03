import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TodoList from './components/todolist/todolist'

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
      
        <TodoList/>
        
      </Container>
    </>
  );
}

export default App;




 