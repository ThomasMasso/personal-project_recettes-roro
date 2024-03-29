import { NavLink } from 'react-router-dom'

export default function CtaNav({ path, className, children }) {
    return (
        <>
            <NavLink to={path} className={className}>
                {children}
            </NavLink>
        </>
    )
}