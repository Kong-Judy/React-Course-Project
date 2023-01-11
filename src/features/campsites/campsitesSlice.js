import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
    return CAMPSITES;
};

export const selectCampsiteById = id => {
    return CAMPSITES.find(camspite => camspite.id === id);
};

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find(campsite => campsite.featured);
};

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// };