import { createClient } from "redis";

const redisUrl = `redis://localhost:6379`;
const redisClient = createClient({
  url: redisUrl,
  password: process.env.REDIS_PASSWORD,
});

const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log("🚀 Redis client connected...");
    redisClient.set(
      "tRPC",
      "Welcome to tRPC with Next.js, Prisma and Typescript!"
    );
  } catch (err: any) {
    console.log(err.message);
    process.exit(1);
  }
};

connectRedis();

redisClient.on("error", (err) => console.log(err));

export default redisClient;
