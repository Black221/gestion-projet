

interface IBadge {
    text: string;
    color?: 'primary' | 'secondary' | 'neutral' | string;
}

export function Badge({ text, color = 'primary' }: IBadge) {

    const c = color === 'primary' ? 'primary' : color === 'secondary' ? 'secondary' : color === 'neutral' ? 'neutral' : '['+color+']'

    return (<>
        <div className={`badge badge-${c}`}>
            {text}
        </div>
    </>)
}

export function BadgeOutline({ text }: IBadge) {


    return (<>
        <div className={`badge badge-outline`}>
            {text}
        </div>
    </>)
}