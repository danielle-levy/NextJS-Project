import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta
                    name='description'
                    content={props.meetupData.description}
                />
            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>
    );
}

// SSG: Static Site Generation

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://<username>:<password>@cluster0.di5umik.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();

    const meetupCollection = db.collection('meetups');

    const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();

    client.close();

    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id.toString(),
            }
        }))

    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    // fetch data for a single meetup
    const client = await MongoClient.connect('mongodb+srv://<username>:<password>@cluster0.di5umik.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();

    const meetupCollection = db.collection('meetups');

    const selectedMeetup = await meetupCollection.findOne({
        _id: new ObjectId(meetupId),
    })

    client.close();

    // runs during built time so that console log will show in terminal - not in browser
    console.log(selectedMeetup)

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                image: selectedMeetup.image,
                address: selectedMeetup.address,
                description: selectedMeetup.description,
            },
        },
    };
}

export default MeetupDetails;