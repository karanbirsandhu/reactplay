import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID b_nwMcMbkxb7WMZU6Lr3ZfqgRRnbISOutCrVF-IShfA'
    }
})