export interface CountriesState {
    allCountries: any[];
    filteredCountries: any[];
    selectedCountry: any | null;
}
  
export type CountriesAction =
    | { type: "set_data"; data: any[] }
    | { type: "filter_by_region"; value: string }
    | { type: "filter_by_name"; value: string }
    | { type: "display_all_items"}
    | { type: "get_country_details";value:any}
  
export const countriesReducer = (
    state: CountriesState,
    action: CountriesAction
): CountriesState => {
    switch (action.type) {
        case "set_data":
            return {
                ...state,
                allCountries: action.data,
                filteredCountries: action.data
            };
        case "get_country_details":
            const selected = state.allCountries.find(
                (country: any) => country.name.common === action.value
            );
            return {
                ...state,
                selectedCountry: selected || null,
            };
            
        case 'display_all_items':
            return { 
                ...state, 
                filteredCountries: state.allCountries 
            };
        case 'filter_by_region':
            return { 
                ...state, 
                filteredCountries: state.allCountries.filter((country: any) =>
                    country.region.includes(action.value)
                ) 
            };
        case 'filter_by_name':
            return { 
                ...state, 
                filteredCountries: state.allCountries.filter((country: any) =>
                    country.name.common.toLowerCase().includes(action.value.toLowerCase())
                )
            };

        default:
            throw Error('Unknown action: ' + action);;
    }
};
  
