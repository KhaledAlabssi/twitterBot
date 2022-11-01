import rwClient from "./twitterClinet.js";
import cron from 'node-cron'
import axios from "axios";
import qoutes from './quotes.json' assert {type: "json"};

const tweet = async () => {
    try {
        const q = qoutes[Math.floor(Math.random()*qoutes.length)]
        await rwClient.v1.tweet(`${q.text}\n\n${q.author && q.author}`)


    } catch (error) {
        console.error(error)
        
    }
}

// Media tweet

// const MediaTweet = async () => {
//   try {
//     const m = await rwClient.v1.uploadMedia("./me.jpg")
//     await rwClient.v1.tweet("Bot test", {
//       media_ids: m,
//     })
//   } catch (error) {
//     console.error(error)
//   }
// }

// tweet();

cron.schedule('1 29 7 * * *', () => {

    tweet();
})


