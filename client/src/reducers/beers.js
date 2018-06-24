import axios from 'axios'
const BEERS = 'BEERS'

export const getBeers = () => {
    return (dispatch) => {
        axios.get('/api/all_beers')
        .then ( res => {
            dispatch ({ type: BEERS, beers: res.data })
        })
    }
}
export default getBeers