import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoteFound from './pages/NoteFound/NoteFound';
import store from './store';
import { Provider } from 'react-redux';
import Templates from './components/Templates/Templates';
import NotesPage from './pages/NotesPage/NotesPage';
import NotePage from './pages/NotePage/NotePage';
import NoteCreatePage from './pages/NoteCreatePage/NoteCreatePage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<NoteFound />} />
          <Route element={<Templates />}>           
            <Route path="/" element={<NotesPage />} />        
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/note/:id" element={<NotePage />} />
            <Route path="/add" element={<NoteCreatePage />} />
            <Route path="/add/:id" element={<NoteCreatePage />} />     
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>    
  );
}

export default App;
