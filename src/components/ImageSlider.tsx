import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Button from "./Button";
import { BiChevronsRight, BiChevronsLeft } from "react-icons/bi";

interface ISlider {
    images: string[];
    duration: number;
    captions?: ISliderCaption[];
    autoPlay?: boolean;
}

interface ISliderCaption {
    title: string;
    description: string;
    href: string;
}


export default function ImageSlider({ images, duration, autoPlay= true }: ISlider) {

    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection: number) => {
        if (newDirection === 1) {
            setPage([page === images.length - 1 ? 0 : page + 1, 1]);
        } else {
            setPage([page === 0 ? images.length - 1 : page - 1, -1]);
        }
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

    useEffect(() => {
        if (autoPlay) {
            const interval = setInterval(() => {
                paginate(1);
            }, duration * 5000);
            return () => clearInterval(interval);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (<>
        <div className="relative w-full h-[60vh] border-b-2">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    className="object-cover w-full h-full absolute"
                    key={page}
                    src={images[imageIndex]}
                    custom={direction}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(_, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                        }
                    }}
                />
                <div className="absolute bottom-6 right-10 text-white flex items-center gap-4 ">
                    <Button onClick={() => paginate(-1)} label={<>
                        <BiChevronsLeft className="text-2xl text-center w-10" />
                    </>} className="bg-cyan-600 " />
                    <Button onClick={() => paginate(1)} label={<>
                        <BiChevronsRight className="text-2xl text-center w-10" />
                    </>} className="bg-cyan-600 "/>
                </div>
            </AnimatePresence>
        </div>
    </>)
}