import redis from 'redis';
import logger from './logger';
import config from '../config';

const redisClient = redis.createClient({
  url: config.redis_url
});

redisClient.on('connect', () => logger.info('Redis Connected Successfully'));
redisClient.on('error', (err) => logger.error(err));

const connect = async () => {
  await redisClient.connect();
};

export const RedisClient = {
  connect
};
