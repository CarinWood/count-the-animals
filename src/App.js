import './App.css';
import { Level1 } from './pages/level1/Level1';
import { Route, Routes } from 'react-router-dom';
import Overworld from './pages/overworld/Overworld';
import { Level2 } from './pages/level2/Level2';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
        <Routes>
              <Route path="/overworld" element={<Overworld />} />
              <Route path="/level1" element={<Level1 />} />
              <Route path="/level2" element={<Level2 />} />
        </Routes>
    </DndProvider>
  );
}

export default App;
