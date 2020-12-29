import React from 'react';
import { Link } from "react-router-dom";

export type NavBarLink = {
    label: string,
    path: string,
};

type Props = {
    home?: NavBarLink,
    links: Array<NavBarLink>,
};

export function NavBar({ home, links }: Props) {
    return (
        <div className="nav-bar">
            <ul>
                {!!home && (
                    <li>
                        <Link to={home.path}>
                            {home.label}
                        </Link>
                    </li>
                )}

                {links.map(link => (
                    <li>
                        <Link to={link.path}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}