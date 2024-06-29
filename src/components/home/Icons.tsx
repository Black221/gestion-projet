

interface IconProps {
    className?: string;
    color?: string;
}

export function ChevronLeft({ className, color= "#FFF" }: IconProps) {
    return (
        <svg width="64px" height="64px" viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 17L13 12L18 7M11 17L6 12L11 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
    )
}

export function ChevronRight({ className, color= "#FFF" }: IconProps) {
    return (
        <svg width="64px" height="64px" viewBox="0 0 24 24"  className={className} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 17L11 12L6 7M13 17L18 12L13 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
    )
}