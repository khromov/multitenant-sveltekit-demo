import type { Reroute } from '@sveltejs/kit';

export const reroute: Reroute = ({ url }) => {
    if(url.hostname === 'localhost') { // Eg: brand-one.com
        return `/brand-one${url.pathname}`;
    } 

    if(url.hostname === '127.0.0.1') { // Eg: brand-two.com 
        return `/brand-two${url.pathname}`;
    }

     // Default fallback to eg: brand-two.com 
    return `/brand-two${url.pathname}`;
};