import { BadgeOutline } from "./Badge";



interface ICard {
    title: string;
    description: string;
    buttonLabel?: string;
    href?: string;
    image: string;
    color?: 'primary' | 'secondary' | 'neutral' | string;
    size?: '72' | '80' | '96' | '104' | '120';
    rounded?: boolean;
    badges?: IBadge[];
}

interface IBadge {
    text: string;
    color?: 'primary' | 'secondary' | 'neutral' | string;
}

export function CardCompact ({ title, description, buttonLabel, image, size = '72' }: ICard) {

    return (<>
        <div className={`card card-compact w-${size} bg-base-100 shadow-xl`}>
            <figure><img src={image} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">{buttonLabel}</button>
                </div>
            </div>
        </div>
    </>)
}


export function Card ({ title, description, buttonLabel, image, size} : ICard) {

    return (<>
        <div className={`card w-${size} bg-base-100 shadow-xl`}>
            <figure><img src={image} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">{buttonLabel}</button>
                </div>
            </div>
        </div>
    </>)
}


export function CardBadge ({ title, description, image, size, badges } : ICard) {

    return (<>
        <div className={`card w-${size} bg-base-100 shadow-xl`}>
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    {badges?.map((badge) => (<>
                        <BadgeOutline text={badge.text}/>
                    </>))}
                </div>
            </div>
        </div>
    </>)
}


export function CardBottomImg ({ title, description, image, size } : ICard) {

    return (<>
        <div className={`card w-${size} bg-base-100 shadow-xl`}>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
            <figure><img src={image} alt="Shoes" /></figure>
        </div>
    </>)
}