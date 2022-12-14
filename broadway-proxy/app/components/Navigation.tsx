import React from 'react';
import { useMatches, useLocation } from '@remix-run/react';

import InputText, { InputTextProps } from './Input';
export type MenuLinks = {
    id: string;
    link: string;
    label: string;
    icon?: JSX.Element;
    subMenu?: MenuLinks;
}[];
const ACTION_TYPE: {
    [key: string]: 'wallet-toggle' | 'menu-toggle' | 'user-menu';
} = {
    WALLET_TOGGLE: 'wallet-toggle',
    MENU_TOGGLE: 'menu-toggle',
    USER_MENU: 'user-menu',
};
function reduce(
    state: any,
    { type }: { type: 'wallet-toggle' | 'menu-toggle' | 'user-menu' }
) {
    switch (type) {
        case ACTION_TYPE.WALLET_TOGGLE:
            return {
                ...state,
                wallet: !state.menu_close,
            };
        case ACTION_TYPE.MENU_TOGGLE:
            return {
                ...state,
                menu: !state.menu_collapse,
            };
        case ACTION_TYPE.USER_MENU:
            return {
                ...state,
                user: !state.user_menu,
            };
        default:
            return state;
    }
}
export function Navigation({
    search,
    logo,
    links,
}: {
    logo?: JSX.Element;
    search?: InputTextProps;
    links?: MenuLinks;
}) {
    let matches = useMatches();
    let root = matches.find((match) => match.pathname === '/');
    const menuarr: MenuLinks = links || root?.handle?.links;
    let { pathname } = useLocation();
    const isActive = (link: string) => pathname === link;
    const [toggle, dispatch] = React.useReducer(reduce, {
        wallet: false,
        menu: false,
        user: false,
    });
    search = {
        type: 'search',
        required: true,
        name: 'path',
        shadow: true,

        ...search,
    } || { ...search };
    return (
        <header className='fixed top-0 z-20 w-full backdrop-blur bg-opacity-20 transition-colors'>
            <div className='flex items-center px-6 py-6 xl:px-24'>
                {/* <!-- Logo --> */}
                {logo}
            </div>
        </header>
    );
}