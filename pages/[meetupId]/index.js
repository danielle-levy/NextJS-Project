import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
    return (
        <MeetupDetail
            image='https://media.licdn.com/dms/image/D4D16AQHJpqThgdDs3Q/profile-displaybackgroundimage-shrink_350_1400/0/1671816287583?e=1677715200&v=beta&t=Dt0JA8EQUeRtpduCo-6B8Gm3j7LRcypMW28vYvNtC1g'
            title='First Meetup'
            address='Some Street 5, Some City'
            description='The first meetup description'
        />
    );
}

// SSG: Static Site Generation

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                }
            },
            {
                params: {
                    meetupId: 'm2',
                }
            }
        ]
    }
}

export async function getStaticProps(context) {    
    // fetch data for a single meetup

    const meetupId = context.params.meetupId;

    // runs during built time so that console log will show in terminal - not in browser
    console.log(meetupId)

    return {
        props: {
            meetupData: {
                id: meetupId,
                image: 'https://media.licdn.com/dms/image/D4D16AQHJpqThgdDs3Q/profile-displaybackgroundimage-shrink_350_1400/0/1671816287583?e=1677715200&v=beta&t=Dt0JA8EQUeRtpduCo-6B8Gm3j7LRcypMW28vYvNtC1g',
                title: 'First Meetup',
                address: 'Some Street 5, Some City',
                description: 'The first meetup description',
            },
        },
    };
}

export default MeetupDetails;