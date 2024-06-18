import { useEffect, useState } from 'react';
import { CheckLatestWorkspace } from '../../wailsjs/go/main/App';

import LatestWorkspace from './LatestWorkspace';
import NoneWorkspace from './NoneWorkspace';
import Editor from './windows/Editor';

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
            <>
                <Editor/>
                <LatestWorkspace/>
            </>
        )
    } else {
        return (
            <>
                <Editor/>
                <NoneWorkspace/>
            </>

        ) 
    }

}
