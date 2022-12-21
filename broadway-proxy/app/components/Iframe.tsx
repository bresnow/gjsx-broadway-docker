import React, { ComponentType } from 'react';
import objectAssign from 'object-assign';
import jsesc from 'jsesc';

export interface IIframe {
    url?: string;
    src?: string;
    allowFullScreen?: boolean;
    position?:
    | 'relative'
    | 'absolute'
    | 'fixed'
    | 'sticky'
    | 'static'
    | 'inherit'
    | 'initial'
    | 'unset';
    display?: 'block' | 'none' | 'inline';
    height?: string;
    width?: string;
    loading?: 'auto' | 'eager' | 'lazy';
    target?: string;
    srcdocument?: string;
    importance?: 'auto' | 'high' | 'low';
    overflow?: string;
    styles?: object;
    name?: string;
    allowpaymentrequest?: boolean;
    referrerpolicy?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url';
    onLoad?: (e: Event) => void;
    onMouseOver?: () => void;
    onMouseOut?: () => void;
    onMessage?: (e: MessageEvent) => void;
    frameBorder?: number;
    scrolling?: 'auto' | 'yes' | 'no';
    id?: string;
    ariaHidden?: boolean;
    ariaLabel?: string;
    ariaLabelledby?: string;
    reference?: React.MutableRefObject<HTMLIFrameElement | null>;
    sandbox?: string | boolean | SandBox;
    allow?: string;
    className?: string;
    title?: string;
}
export enum SandBox {
    allowForms = 'allow-forms',
    allowModals = 'allow-modals',
    allowOrientationLock = 'allow-orientation-lock',
    allowPointerLock = 'allow-pointer-lock',
    allowPopups = 'allow-popups',
    allowPopupsToEscapeSandbox = 'allow-popups-to-escape-sandbox',
    allowPresentation = 'allow-presentation',
    allowSameOrigin = 'allow-same-origin',
    allowScripts = 'allow-scripts',
    allowStorageAccessByUserActivation = 'allow-storage-access-by-user-activation',
    allowTopNavigation = 'allow-top-navigation',
    allowTopNavigationByUserActivation = 'allow-top-navigation-by-user-activation',
}
const Iframe: ComponentType<IIframe> = ({
    url,
    allowFullScreen,
    position,
    display,
    height,
    width,
    overflow,
    styles,
    onLoad,
    onMouseOver,
    onMouseOut,

    scrolling,
    srcdocument,
    reference,
    id,
    frameBorder,
    ariaHidden,
    sandbox,
    allow,
    className,
    title,
    ariaLabel,
    ariaLabelledby,
    name,
    target,
    loading,
    importance,
    referrerpolicy,
    allowpaymentrequest,
    src,
}: IIframe) => {
    const defaultProps = objectAssign({
        src: src || url,
        target: target || null,
        style: {
            position: position || null,
            display: display || 'block',
            overflow: overflow || null,
        },
        scrolling: scrolling || null,
        srcDoc: srcdocument || null,
        allowpaymentrequest: allowpaymentrequest || null,
        importance: importance || null,
        sandbox: sandbox || null,
        loading: loading || null,
        ref: reference || null,
        styles: styles || null,
        name: name || null,
        className: className || null,
        referrerPolicy: referrerpolicy || null,
        title: title || null,
        allow: allow || null,
        id: id || null,
        'aria-labelledby': ariaLabelledby || null,
        'aria-hidden': ariaHidden || null,
        'aria-label': ariaLabel || null,
        width: width || null,
        height: height || null,
        onLoad: onLoad || null,
        onMouseOver: onMouseOver || null,
        onMouseOut: onMouseOut || null,
    });
    let props = Object.create(null);
    for (let prop of Object.keys(defaultProps)) {
        if (defaultProps[prop] != null) {
            props[prop] = defaultProps[prop];
        }
    }

    for (let i of Object.keys(props.style)) {
        if (props.style[i] == null) {
            delete props.style[i];
        }
    }

    if (allowFullScreen) {
        if ('allow' in props) {
            const currentAllow = props.allow.replace('fullscreen', '');
            props.allow = `fullscreen ${currentAllow.trim()}`.trim();
        } else {
            props.allow = 'fullscreen';
        }
    }

    if (frameBorder && frameBorder >= 0) {
        if (!props.style.hasOwnProperty('border')) {
            props.style.border = frameBorder;
        }
    }

    return <iframe {...props} />;
};

export default Iframe;

export function useEventListener(
    eventType: string,
    callback: (e: Event) => void,
    element = window
) {
    const callbackRef = React.useRef(callback);

    React.useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    React.useEffect(() => {
        if (element == null) return;
        const handler = (e: Event) => callbackRef.current(e);
        element.addEventListener(eventType, handler);

        return () => element.removeEventListener(eventType, handler);
    }, [eventType, element]);
}