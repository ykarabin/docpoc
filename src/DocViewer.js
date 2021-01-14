import React, {useEffect, useRef} from 'react';
import WebViewer from '@pdftron/webviewer'

export const DocViewer = ({url}) => {
    const viewer = useRef(null);

    useEffect(() => {
        WebViewer(
            {
                path: '/webviewer/lib',
            },
            viewer.current,
        ).then(instance => {
            instance.loadDocument(url);
            instance.disableElements([ 'header' ]);


        });
    }, []);

    return (
        <div ref={viewer} style={{height: "500px"}}/>
    );
};