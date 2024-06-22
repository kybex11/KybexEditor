import './styles/App.scss';
import CheckLatestWorkspaceComponent from './components/CheckLatestWorkspaceComponent';
import Upper from './components/Upper';
import FileBrowser from './components/FileBrowser';

export default function App() {  
  return (
    <>
      <Upper />
      <FileBrowser />
      <CheckLatestWorkspaceComponent />
    </>
  )
}
