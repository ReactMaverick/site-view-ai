/** @type {import('next').NextConfig} */

const imageDomains = ['site-view-ai.s3.us-east-1.amazonaws.com'];

const nextConfigDevelopment = {
    env: {
        BASE_URL: 'http://localhost:3000',
        GOOGLE_SITE_KEY: '6Lc77-cqAAAAAFtLG42JpP3HPAgEhppYFLIWKOH4',
        GOOGLE_SECRET_KEY: '6Lc77-cqAAAAAF0WyMRDR4UnIQGx_0DNipUyJQhb',
    },
    images: {
        domains: imageDomains,
    },
}

const nextConfigProduction = {
    env: {
        BASE_URL: 'https://sitepace.ai',
        GOOGLE_SITE_KEY: '6Lc77-cqAAAAAFtLG42JpP3HPAgEhppYFLIWKOH4',
        GOOGLE_SECRET_KEY: '6Lc77-cqAAAAAF0WyMRDR4UnIQGx_0DNipUyJQhb',
    },
    images: {
        domains: imageDomains,
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
