import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '0c3b50ff24mshf43fc73e7204496p1384bcjsn8189afced25b'
    }
  };

// const options = {
//     // method: 'POST',
//     // url: 'https://travel-advisor.p.rapidapi.com/restaurants/v2/list',
//     // params: {currency: 'USD', units: 'km', lang: 'en_US'},
//     headers: {
//       'content-type': 'application/json',
//       'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//       'x-rapidapi-key': '0c3b50ff24mshf43fc73e7204496p1384bcjsn8189afced25b'
//     },
//     data: {
//       geoId: 293928,
//     //   partySize: 2,
//     //   reservationTime: '2022-03-07T20:00',
//     //   sort: 'POPULARITY',
//     //   sortOrder: 'desc',
//     //   filters: [{id: 'establishment', value: ['10591']}],
//       boundingBox: {
//         northEastCorner: {latitude: 12.248278039408776, longitude: 109.1981618106365},
//         southWestCorner: {latitude: 12.243407232845051, longitude: 109.1921640560031}
//       },
//     //   updateToken: ''
//     }
//   };

export const getPlacesData = async(sw, ne)=>{
    try{
        const { data: { data } } = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '0c3b50ff24mshf43fc73e7204496p1384bcjsn8189afced25b'
            }
          });
        console.log(`getPlacesData`, sw, ne, data)
        return data;
    }catch(err){
        console.log(err);
    }
}
