import '../styles/FileBrowser.scss';
import { useState, useEffect } from 'react';
import { CurrentProject, ListFilesAndFolders } from '../../wailsjs/go/main/App';

export default function FileBrowser() {
  const [currentProjectName, setCurrentProjectName] = useState<string | null>(null);
  const [projectTextName, setProjectTextName] = useState<string | null>(null);
  const [projectFiles, setProjectFiles] = useState<string[] | null>(null);
  const [projectPath, setProjectPath] = useState();

  useEffect(() => {
    async function fetchListProj(path: any) {
      try {
        const response = await ListFilesAndFolders(path);
        if (response !== undefined && response !== null) {
          setProjectFiles(response);
        } else {
          setProjectFiles(null);
        }
      } catch (error) {
        console.error("Failed to fetch files:", error);
        setProjectFiles(null);
      }
    }
    fetchListProj(projectPath);
  })


  useEffect(() => {
    async function fetchCurrentProjectName() {
      const result = await CurrentProject();
      setCurrentProjectName(result);
      console.log(result);
    }
    fetchCurrentProjectName();
  }, []);

  useEffect(() => {
    if (currentProjectName && currentProjectName?.length <= 1) {
      setProjectTextName("No workspace opened");
      console.log("No workspace opened");
    } else {
      setProjectTextName(currentProjectName);
    }
  }, [currentProjectName]);

  return (
    <>
      <div className="FileBrowserContainer">
        <br />
        <h2>{projectTextName}</h2>
        <br />
        <h2>{projectFiles}</h2>
      </div>
    </>
  )
}
