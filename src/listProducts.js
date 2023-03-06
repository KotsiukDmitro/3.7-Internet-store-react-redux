import img1 from './assets/foto/img-1.jpg';
import img2 from './assets/foto/img-2.jpg';
import img3 from './assets/foto/img-3.jpg';
import img4 from './assets/foto/img-4.jpg';
import img5 from './assets/foto/img-5.jpg';
import img6 from './assets/foto/img-6.jpg';
import img7 from './assets/foto/img-7.jpg';
import img8 from './assets/foto/img-8.jpg';
import img9 from './assets/foto/img-9.jpg';
import img10 from './assets/foto/img-10.jpg';
import img11 from './assets/foto/img-11.jpg';
import img12 from './assets/foto/img-12.jpg';

import { uniq } from 'lodash'

export const listProducts = [
    {
        name: 'High-Back Bench', store: 'ikea', image: img1, price: 20.95, id: 1,
        about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quod provident pariatur culpa aperiam corrupti fugiat nam expedita, et error, iure nemo sint, at quidem sapiente fuga harum nesciunt aut quaerat'
    },
    {
        name: 'Albony Table', store: 'marcos', image: img2, price: 80.95, id: 2,
        about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quod provident pariatur culpa aperiam corrupti fugiat nam expedita, et error, iure nemo sint, at quidem sapiente fuga harum nesciunt aut quaera'
    },
    {
        name: 'Accent Cheir', store: 'caressa', image: img3, price: 50.95, id: 3,
        about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quod provident pariatur culpa aperiam corrupti fugiat nam expedita, et error, iure nemo sint, at quidem sapiente fuga harum nesciunt aut quaerat'
    },
    {
        name: 'Wooden Table', store: 'liddy', image: img4, price: 30.65, id: 4,
        about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quod provident pariatur culpa aperiam corrupti fugiat nam expedita, et error, iure nemo sint, at quidem sapiente fuga harum nesciunt aut quaerat'
    },
    {
        name: 'Dining Table', store: 'ikea', image: img5, price: 20.05, id: 5,
        about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quod provident pariatur culpa aperiam corrupti fugiat nam expedita, et error, iure nemo sint, at quidem sapiente fuga harum nesciunt aut quaerat'
    },
    {
        name: 'Sofa Set', store: 'marcos', image: img6, price: 78.95, id: 6,
        about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quod provident pariatur culpa aperiam corrupti fugiat nam expedita, et error, iure nemo sint, at quidem sapiente fuga harum nesciunt aut quaerat'
    },
    {
        name: 'Modern Bookshelf', store: 'caressa', image: img7, price: 7.95, id: 7,
        about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quod provident pariatur culpa aperiam corrupti fugiat nam expedita, et error, iure nemo sint, at quidem sapiente fuga harum nesciunt aut quaerat'
    },
    {
        name: 'Emperor Bad', store: 'liddy', image: img8, price: 8.75, id: 8,
        about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quod provident pariatur culpa aperiam corrupti fugiat nam expedita, et error, iure nemo sint, at quidem sapiente fuga harum nesciunt aut quaerat'
    },
    {
        name: 'Utopia sofa', store: 'ikea', image: img9, price: 35.05, id: 9,
        about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quod provident pariatur culpa aperiam corrupti fugiat nam expedita, et error, iure nemo sint, at quidem sapiente fuga harum nesciunt aut quaerat'
    },
    {
        name: 'Sofa', store: 'marcos', image: img10, price: 14.55, id: 10,
        about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quod provident pariatur culpa aperiam corrupti fugiat nam expedita, et error, iure nemo sint, at quidem sapiente fuga harum nesciunt aut quaerat'
    },
    {
        name: 'Sectional', store: 'caressa', image: img11, price: 30.50, id: 11,
        about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quod provident pariatur culpa aperiam corrupti fugiat nam expedita, et error, iure nemo sint, at quidem sapiente fuga harum nesciunt aut quaerat'
    },
    {
        name: 'Centre', store: 'liddy', image: img12, price: 50.25, id: 12,
        about: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quod provident pariatur culpa aperiam corrupti fugiat nam expedita, et error, iure nemo sint, at quidem sapiente fuga harum nesciunt aut quaerat'
    }
]

const shop = listProducts.map(item => {
    return (item.store)
})
export const stores = uniq(shop)


