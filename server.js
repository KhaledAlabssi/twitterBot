import rwClient from "./twitterClinet.js";
import cron from 'node-cron'

const tweet = async () => {
    try {
        const m = await rwClient.v1.uploadMedia('./me.jpg')
        await rwClient.v1.tweet("Bot test", {media_ids: m})


    } catch (error) {
        console.error(error)
        
    }
}

tweet();

// cron.schedule('* 10 * * *', () => {

//     tweet();
// })


