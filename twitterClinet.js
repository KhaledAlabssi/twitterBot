import { TwitterApi } from "twitter-api-v2";
import dotenv from 'dotenv'
dotenv.config();

const client = new TwitterApi({
    appKey: "",
    appSecret: "",
    accessToken: "",
    accessSecret: "",
    


})