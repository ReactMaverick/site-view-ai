export const sliderStyles = {
    sliderContainer: {
        py: 4,
        backgroundColor: '#FFFFFF',
    },
    slideCard: {
        border: '1px solid #e0e0e0',
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        height: '134px',
        width: '430px',
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
        },
    },
    imageContainer: {
        width: '100%',
        height: '150px',
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        // backgroundColor: '#e3f2fd',
        // boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        // '&:hover': {
        //     transform: 'translateY(-2px)',
        //     boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
        // },
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        flex: 1,
        minWidth: 0,
    },
    slideTitle: {
        fontSize: '16px',
        fontWeight: 600,
        color: '#1a1a1a',
        lineHeight: 1.3,
        marginBottom: '4px',
    },
    slideDescription: {
        fontSize: '13px',
        color: '#666',
        lineHeight: 1.4,
        flex: 1,
    },
    awardBadge: {
        fontSize: '11px',
        color: '#2e7d32',
        fontWeight: 500,
        backgroundColor: '#e8f5e8',
        padding: '2px 6px',
        borderRadius: '4px',
        alignSelf: 'flex-start',
        marginTop: 'auto',
    },
    swiperStyles: {
        '& .swiper-pagination': {
            bottom: '-10px',
        },
        '& .swiper-pagination-bullet': {
            backgroundColor: '#ccc',
            opacity: 1,
            width: '10px',
            height: '10px',
        },
        '& .swiper-pagination-bullet-active': {
            backgroundColor: '#2e7d32',
        },
        '& .swiper-button-next, & .swiper-button-prev': {
            color: '#2e7d32',
            '&:after': {
                fontSize: '20px',
            },
        },
        '& .swiper-button-next': {
            right: '10px',
        },
        '& .swiper-button-prev': {
            left: '10px',
        },
    }
};
