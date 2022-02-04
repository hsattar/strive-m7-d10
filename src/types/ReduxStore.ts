export interface IReduxStore {
    inputs: IInputs,
    weatherInfo: IWeatherInfo
}

export interface IInputs {
    city: string
    country: string
}

export interface IWeatherInfo {
    data: []
}