


export type SlideImg = {
    src: string;
    title: string;
    description: string;
}


export type SlideItem = {
    key: number;
    src: string;
    title: string;
    description: string;
    position: "current" | "next" | "prev";
    className?: string;
}

export type CaptionItem = {
    key: number;
    title: string;
    description: string;
    btn?: string;
    position: "current" | "next" | "prev";
}