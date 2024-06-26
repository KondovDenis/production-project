import { Currency } from "../../../Currency/model/types/currency"
import { Country } from "../../../Country/model/types/country"


export interface Profile {
	  "first"?: string
  	  "lastname"?: string
	  "dateOfBirth"?: string
	  "currency"?: Currency
	  "country"?: Country
	  "city"?: string
	  "username"?: string
	  "avatar"?: string
}


export interface ProfileSchema {
	readonly: boolean
	data?: Profile
	form?: Profile
	isLoading: boolean
	error?: string

}
