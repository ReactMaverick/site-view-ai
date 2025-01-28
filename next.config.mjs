/** @type {import('next').NextConfig} */

const nextConfigDevelopment = {
    env: {
        BASE_URL: 'http://localhost:3000',
    },
}

const nextConfigProduction = {
    env: {
        BASE_URL: 'https://sitepace.ai',
    },
}

const nextConfig = (phase, { defaultConfig }) => {
    // console.log('phase', phase);
    
    if (phase === 'phase-development-server') {
        return nextConfigDevelopment
    }

    return nextConfigProduction
}

export default nextConfig;
