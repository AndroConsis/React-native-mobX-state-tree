import axios from 'axios';
import { GBOOKS_KEY } from '../../constants/keys';

const baseUrl = `https://www.googleapis.com/books/v1/volumes`

const fetchBooks = () => axios.get(`${baseUrl}?q=books&printType=books&key=${GBOOKS_KEY}`)

export default {
    fetchBooks
}