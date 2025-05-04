import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


const CountUpOnView = ({ target, label }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView && count === 0) {
            let start = 0;
            const step = Math.ceil(target / 100);
            const interval = setInterval(() => {
                start += step;
                if (start >= target) {
                    start = target;
                    clearInterval(interval);
                }
                setCount(start);
            }, 20);
        }
    }, [inView, target, count]);

    return (
        <motion.div
            ref={ref}
            className="flex flex-col items-center justify-center m-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
        >
            <span className="text-3xl md:text-4xl font-bold text-yellow-500">{count}</span>
            <span className="text-sm md:text-lg text-gray-300 mt-1">{label}</span>
        </motion.div>
    );
};

export default CountUpOnView;
