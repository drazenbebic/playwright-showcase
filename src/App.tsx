import { ThemeProvider, BaseStyles } from '@primer/react';
import AddParticipantForm from './components/AddParticipant/AddParticipantForm'
import useStore from './store';
import './App.css'

function App() {
  const data = useStore((state: any) => state.data);
  console.log(data, 'zustand');

  return (
    <ThemeProvider>
      <BaseStyles>
        <div>
          <AddParticipantForm />
        </div>
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App