import axios from 'axios'
import qs from 'qs'

const HOST: string = process.env.NODE_ENV === 'production' ? '' : ''

export const Headers: any = {} 

const RequestErrorMessage = {
  400: ''
}