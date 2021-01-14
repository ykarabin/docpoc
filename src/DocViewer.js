import React, {useEffect, useRef} from 'react';
import WebViewer from '@pdftron/webviewer'

export const DocViewer = ({url, className}) => {
    const viewer = useRef(null);

    useEffect(() => {
        WebViewer(
            {
                path: '/docpoc/webviewer/lib',
            },
            viewer.current,
        ).then(instance => {
            instance.loadDocument(url);
            instance.disableElements([ 'header' ]);


        });
    }, [url]);

    return (
        <div key={url} ref={viewer} className={className}/>
    );
};