import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { MongoClient, ServerApiVersion } from 'mongodb';

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sahilvasava2000:<password>@cluster0.hculbwh.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);

const WelcomeScreen = () => {
    return (
        <View style={{
            backgroundColor: 'darkgreen',
            height: '100%',
        }}>
            <Text style={styles.welcometitle}>WelcomeScreen</Text>
        </View >
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    welcometitle: {
        color: 'black',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 40,
        flex: 1,
    },
})