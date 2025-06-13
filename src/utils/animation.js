export const iconVariants = {
    hidden: {x: 50, opacity: 0},
    visible: (i) => ({
        x:0, 
        opacity: 1,
        transition: {
            delay: i * 0.1, duration: 0.5, ease: "easeOut"
        }
    })
}

export const motionVariants = {
    hidden: {x: -50, opacity: 0},
    visible: (i) => ({
        x:0, 
        opacity: 1,
        transition: {
            delay: i * 0.3, duration: 0.5, ease: "easeOut"
        }
    })
}

export const imgVariants = {
    hidden: {x: 120, opacity: 0},
    visible: () => ({
        x:0, 
        opacity: 1,
        transition: {
            delay: 0.3, duration: 0.9, ease: "easeOut"
        }
    })
}

export const slideInVariants = (
    direction = "left",
    duration = 0.5,
    distance = 100,
    useCustom = true,
) => {
    const x = direction === "left" ? -distance : direction === "right" ? distance : 0;
    const y = direction === "top" ? -distance : direction === "bottom" ? distance : 0;

    return {
        hidden: { x, y, opacity: 0 },
        visible: (i) => {
            const animation = {
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                    delay: useCustom ? i * 0.3 : 0,
                    duration,
                    ease: "easeOut"
                }
            };

            if (useCustom) {
                animation.custom = i;
            }

            return animation;
        }
    };
};

export const titleVariants = {
    hidden: { y: -50, opacity: 0},
    visible: { y:0, opacity:0.1, transition: {duration: 0.8} }
}

export const subtitleVariant = {
    hidden: {y: -45, opacity: 0},
    visible: {
        y:0,
        opacity: 1,
        transition: {duration: 0.8, delay: 0.4}
    },
};