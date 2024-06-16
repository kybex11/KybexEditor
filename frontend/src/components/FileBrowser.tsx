import '../styles/FileBrowser.scss';
import { useState, useEffect } from 'react';

import { CurrentProject } from '../../wailsjs/go/main/App';

export default function FileBrowser() {
    const [currentProjectName, setCurrentProjectName] = useState<string | null>(null);
    const [projectTextName, setProjectTextName] = useState<string | null>(null);
    
    useEffect(() => {
        async function fetchCurrentProjectName() {
            const result = await CurrentProject();
            setCurrentProjectName(result);
        }
        fetchCurrentProjectName();
    }, []);

    useEffect(() => {
        if (currentProjectName && currentProjectName?.length <= 1) {
            setProjectTextName("No workspace opened");
        } else {
            setProjectTextName(currentProjectName);
        }
    }, [currentProjectName]);

    return (
        <>
        <div className="FileBrowserContainer">
            <br/>
            <h2>{projectTextName}</h2>
        </div>
        </>
    )
}