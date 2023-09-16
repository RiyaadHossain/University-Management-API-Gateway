import { createClient } from 'redis';
import logger from './logger';
import config from '../config';

const redisClient = createClient({
  url: config.redis_url
});

redisClient.on('connect', () => logger.info('✅ Redis connected'));
redisClient.on('error', (err) => logger.error(`RedisError: ${err}`));

const connect = async () => {
  await redisClient.connect();
};

export const RedisClient = {
  connect
};
