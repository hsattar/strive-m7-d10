export const ACTIONS = {
    UPDATE_CITY_AND_COUNTRY: 'UPDATE_CITY_AND_COUNTRY'
}

export const updateCityAndCountryAction = (city: string, country: string) => ({
    type: ACTIONS.UPDATE_CITY_AND_COUNTRY,
    payload: { city, country }
})