import * as actionTypes from '../../action-types';

const initialState = {
    searchResults: [
        {id: 1, name: 'Rixos', location: 'Almaty', photo: 'https://q-cf.bstatic.com/xdata/images/hotel/square600/71307723.webp?k=8dd2d202c20fe6efbaa76f9f5f0445e4b501900765749f9896d04c98e608b599&o=',
            descr: 'Лучший отель города', price: '50 000 тг', rank: '4.5'},
        {id: 2, name: 'Garder Park Inn', location: 'Almaty', photo: 'https://q-cf.bstatic.com/xdata/images/hotel/square600/122933731.webp?k=d7a94e430f53f5c5623eb4c99f6d0dff500ef21a422bf2880d90695b7e414313&o=',
            descr: 'Лучший отель города', price: '50 000 тг', rank: '3.4'},
        {id: 3, name: 'Kazakhstan Express', location: 'Almaty', photo: 'https://q-cf.bstatic.com/xdata/images/hotel/square600/232929366.webp?k=2af565bebd79aef4384a525ca269eb4048d1b17671d5625c67122dd38e2ad2bc&o=',
            descr: 'Лучший отель города', price: '50 000 тг', rank: '3.2'},
        {id: 4, name: 'Туркестан Отель', location: 'Almaty', photo: 'https://r-cf.bstatic.com/xdata/images/hotel/square600/133071961.webp?k=22d7a6f175ab14061db9a02ac8e3a8cb48fafd72ac98a378692b5a0ec865bc4a&o=',
            descr: 'Лучший отель города', price: '50 000 тг', rank: '4.1'},
        {id: 5, name: 'BM Hotel Almaty', location: 'Almaty', photo: 'https://r-cf.bstatic.com/xdata/images/hotel/square600/227821087.webp?k=0313b437861fae91416f3beee39c4406a3070b4c17ba9e85c9b3b72206a4692b&o=',
            descr: 'Лучший отель города', price: '50 000 тг', rank: '4.0'},
        {id: 6, name: 'Отель Казахстан', location: 'Almaty', photo: 'https://r-cf.bstatic.com/xdata/images/hotel/square600/16723416.webp?k=10a4c7adfe60342b3e5a91e75a59290b1f0f62fb5cec350b3c83865776359c86&o=',
            descr: 'Лучший отель города', price: '50 000 тг', rank: '4.8'},
        {id: 7, name: 'Altai Business Hotel', location: 'Almaty', photo: 'https://q-cf.bstatic.com/xdata/images/hotel/square600/172059979.webp?k=7ebeebda4b82525d0d8da4c108dc603bf05d862856348bde0453251274754e09&o=',
            descr: 'Лучший отель города', price: '50 000 тг', rank: '3.0'},
        {id: 8, name: 'Mildom Premium Hotel', location: 'Almaty', photo: 'https://q-cf.bstatic.com/xdata/images/hotel/square600/91809783.webp?k=b8539b865f3591601458ac8da26119ad136b02edf77bff396cb908872cf029b2&o=',
            descr: 'Лучший отель города', price: '50 000 тг', rank: '3.9'},
        {id: 9, name: 'Отель Сапар Делюкс', location: 'Almaty', photo: 'https://q-cf.bstatic.com/xdata/images/hotel/square600/148232464.webp?k=1d93843b40d3ca46fcca71046e6c512355ab61376db81a53f564da548122240c&o=',
            descr: 'Лучший отель города', price: '50 000 тг', rank: '4.3'},
        {id: 10, name: 'Maqan Hotel Almaty', location: 'Almaty', photo: 'https://r-cf.bstatic.com/xdata/images/hotel/square600/97706156.webp?k=32e7caf157c11d173d6f92ce557ca630e2f2efa6dcdbce1a540fcc4242b4eacd&o=',
            descr: 'Лучший отель города', price: '50 000 тг', rank: '3.7'},
        {id: 11, name: 'Parasat Hotel', location: 'Almaty', photo: 'https://r-cf.bstatic.com/xdata/images/hotel/square600/77896468.webp?k=18e3fdc18348da99d406b4d87e1db70b5f543fde83b35a4c05da4b683c83c51e&o=',
            descr: 'Лучший отель города', price: '50 000 тг', rank: '2.9'},
        {id: 12, name: 'Namaste Shalle 2000M', location: 'Almaty', photo: 'https://q-cf.bstatic.com/xdata/images/hotel/square600/250979983.webp?k=a04fad780170ae9f956483c0ec0d9203a233083c59d46f815bf857bda64c3839&o=',
            descr: 'Лучший отель города', price: '50 000 тг', rank: '3.3'},
        {id: 13, name: 'Mildom Hotel', location: 'Almaty', photo: 'https://r-cf.bstatic.com/xdata/images/hotel/square600/243981730.webp?k=3ae896cecd958d89121b3c2b86f6027ed31f386902ba08f4554beb0d96f45786&o=',
            descr: 'Лучший отель города', price: '50 000 тг', rank: '3.4'}
    ],

    currentHotel: {
        name: 'Rixos',
        phone: '7771112233',
        address: 'Almaty, Somewhere',
        email: 'example@mail.ru',
        price: 70000,
        rank: '4.5',
        descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam architecto beatae consectetur, consequuntur corporis, deserunt doloremque error fugit illum nobis, nostrum officiis pariatur rem tenetur! Accusamus aliquam at consectetur consequatur cupiditate delectus dolores eum, exercitationem explicabo molestias nemo neque nobis nulla optio, perferendis qui saepe tempora veritatis vitae, voluptatibus!',
        starsCount: '5',
        commentsInfo: {
            amount: 2,
            comments: [
                {
                    name: 'Joe Rose', date: '04-11-2019', rank: '4.5',
                    photo: 'https://cm1.narvii.com/6845/c8c00e69d6a20b6aa4d1dcf946744071ffe1c87a_00.jpg',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut culpa cum cupiditate deleniti dicta dolores eligendi enim est exercitationem harum incidunt necessitatibus nesciunt non, possimus sint temporibus ut voluptas.'
                },
                {
                    name: 'Sam Will', date: '12-04-2019', rank: '4.2',
                    photo: 'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut culpa cum cupiditate deleniti dicta dolores eligendi enim est exercitationem harum incidunt necessitatibus nesciunt non, possimus sint temporibus ut voluptas.'
                },
            ]
        },
        mainPhoto: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        photos: [],
        availableRooms: [
            {
                name: 'Simple room',
                photos: [],
                description: 'Simple room for simple people with basic requirements',
                pricePerPerson: '10000',
                services: []
            }
        ]

    }
};

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INIT_APP: {
            return {
                ...state,
                hotHotels: action.payload
            }
        }
        default:
            return state;

    }
}
