import {
    SET_NEWSLETTERS,
    FETCH_NEWSLETTER_ID
} from './types';

export function fetchNewsletters() {
    const response = {
        data: [
            {
                _id: '115',
                title: 'Lovely vaction',
                body: 'is simply dummy text of the printing and typesetting industry. please ignore what you are seeing this is all a trick you will ignore it and accept it. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum\n is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                date: new Date(),
                imageUrl: 'https://images.unsplash.com/photo-1528920304568-7aa06b3dda8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
            },
            {
                _id: '935',
                title: 'Second Newsletter',
                body: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum\n is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                date: new Date(),
                imageUrl: 'https://nwei.org/assets/ws_holiday_lights_1280x960.jpg'
            }
        ]
    }

    return {
        type: SET_NEWSLETTERS,
        payload: response.data
    }
}


export function fetchNewsletterWithId(id) {
    return {
        type: FETCH_NEWSLETTER_ID,
        payload: id
    }
}