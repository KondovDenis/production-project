import * as yup from 'yup';
import { Currency } from '../../../../Currency';
import { Country } from '../../../../Country';
import { getProfileData } from '../../selectors/getProfileData/getProfileData';

export const profileValidSchema = yup.object({
	  first: yup.string().matches(/^[a-zA-Z]+$/).required("Заполните поле Имя корректно"),
  	  lastname: yup.string().required("Заполните поле Фамилия корректно"),
	  dateOfBirth: yup.date().required("Заполните поле Дата рождения корректно"),
	  currency: yup.string().required("Заполните поле Валюта корректно").oneOf(Object.keys(Currency)),
	  country: yup.string().required("Заполните поле Страна корректно").oneOf(Object.keys(Country)),
	  city: yup.string().required("Заполните поле Город корректно"),
	  username: yup.string().required("Заполните поле Имя пользователя корректно"),
	  avatar: yup.string().url(),
})


