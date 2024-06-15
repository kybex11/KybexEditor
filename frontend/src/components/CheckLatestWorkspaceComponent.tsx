import { useEffect, useState } from 'react';
import { CheckLatestWorkspace } from '../../wailsjs/go/main/App';

export default function CheckLatestWorkspaceComponent() {
    const [latest, setLatest] = useState<string | null>(null);

    useEffect(() => {
        async function fetchLatestWorkspace() {
            const result = await CheckLatestWorkspace();
            setLatest(result);
        }
        fetchLatestWorkspace();
    })

    if (latest) {
        return (
            <div>{latest}</div>
        )
    } else {
        return (
            <div>Loading...</div> 
        ) 
    }

}
