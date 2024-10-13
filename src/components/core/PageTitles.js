// ** React Imports
import React from "react";

// ** Framer Motion Imports
import { motion, useInView } from "framer-motion";

const PageTitles = ({ dark = true, title, bgtitle }) => {

    // ** Framer Motion's useInView Hook
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false, margin: '50px' });

    // Animation variants for Framer Motion
    const variants = {
        hidden: { y: -50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={'w-full relative lg:h-40 md:h-32 h-24'}
        >
      <span className={`text-[10vw] uppercase ${dark ? 'text-white' : 'text-gray-900'} absolute top-0 bottom-0 left-0 right-0 m-auto w-max h-max font-montserrat font-extrabold opacity-10`}>
        {bgtitle}
      </span>
            <span className={`text-[5vw] uppercase ${dark ? 'text-white' : 'text-gray-900'} absolute top-0 bottom-0 left-0 right-0 m-auto w-max h-max font-montserrat font-extrabold`}>
        {title}
      </span>
        </motion.div>
    );
};

export default PageTitles;
