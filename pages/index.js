import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'My First Meetup',
        image: 'https://media.licdn.com/dms/image/D4D16AQHJpqThgdDs3Q/profile-displaybackgroundimage-shrink_350_1400/0/1671816287583?e=1677715200&v=beta&t=Dt0JA8EQUeRtpduCo-6B8Gm3j7LRcypMW28vYvNtC1g',
        address: 'Some Adress 5, 12345 Some City',
        description: 'This is my first meetup!'
    },
    {
        id: 'm2',
        title: 'My Second Meetup',
        image: 'https://media.licdn.com/dms/image/D4D16AQHJpqThgdDs3Q/profile-displaybackgroundimage-shrink_350_1400/0/1671816287583?e=1677715200&v=beta&t=Dt0JA8EQUeRtpduCo-6B8Gm3j7LRcypMW28vYvNtC1g',
        address: 'Some Adress 5, 12345 Some City',
        description: 'This is my second meetup!'
    },
];

function HomePage(props) {
    return <MeetupList meetups={props.meetups} />
};

// SSG: Static Site Generation

export async function getStaticProps() {
    // Fetch data from some API/DB
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
        revalidate: 3600 // one hour
    };
}

// SSR: Server Side Rendering

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     // Fetch data from some API/DB
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         },
//     };
// }

export default HomePage;