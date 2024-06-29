


interface IAvatar {
    src: string;
    alt: string;
    size?: '10' | '16' | '20' | '24' | '32';
    color?: 'primary' | 'secondary' | 'neutral' | string;
    rounded?: boolean;
}

export function Avatar ({ src, alt, size = '24', rounded = false }: IAvatar) {

    return (<>
        <div className="avatar">
            <div className={`w-${size} h-${size} rounded-${rounded ? 'full' : 'md'}`}>
                <img src={src} alt={alt} />
            </div>
        </div>
    </>)
}


export function AvatarGroup ({ avatars }: { avatars: IAvatar[] }) {

    const groups = avatars.length > 3 ? avatars.slice(0, 3) : avatars;
    return (<>
        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
            {groups.map((avatar, index) => (
                <Avatar key={index} src={avatar.src} alt={avatar.alt} size="10" />
            ))}
            {avatars.length > 3 && <div className="avatar placeholder">
                <div className="w-12 bg-neutral text-neutral-content">
                    <span>+{avatars.length - 3}</span>
                </div>
            </div>}
        </div>
    </>)
}


export function AvatarRing ({ src, alt, size = '24', rounded = false, color = "primary" }: IAvatar) {

    const c = color === 'primary' ? 'primary' : color === 'secondary' ? 'secondary' : color === 'neutral' ? 'neutral' : '['+color+']'

    return (<>
        <div className="avatar-ring">
            <div className={`w-${size} h-${size} rounded-full ring ring-${c} ring-offset-base-100 ring-offset-2 rounded-${rounded ? 'full' : 'md'}`}>
                <img src={src} alt={alt} />
            </div>
        </div>
    </>)
}



export function AvatarIndicator ({ src, alt, size = '24', rounded = false, color = "primary" }: IAvatar) {

    const c = color === 'primary' ? 'primary' : color === 'secondary' ? 'secondary' : color === 'neutral' ? 'neutral' : '['+color+']'

    return (<>
        <div className="avatar-indicator">
            <div className={`w-${size} h-${size} rounded-full ring ring-${c} ring-offset-base-100 ring-offset-2 rounded-${rounded ? 'full' : 'md'}`}>
                <img src={src} alt={alt} />
            </div>
        </div>
    </>)
}