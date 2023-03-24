require('dotenv').config({ path: `${process.cwd()}/.env` });
const BullQueue = require('bull');
const {
  QUEUE_NAME, 
  QUEUE_ATTEMPTS, 
  QUEUE_BACKOFF_DELAY, 
  QUEUE_BACKOFF_TYPE, 
  REDIS_PORT, 
  REDIS_HOST 
} = process.env

/* let queue = null;
const connectQueue = (queueName, { port, host }) => {
  if (!queue)
    queue = new BullQueue(queueName, { port, host });
} */

const queue = new BullQueue(QUEUE_NAME || 'uploadQueue', {
  redis: { port: REDIS_PORT || 6379, host: REDIS_HOST || 'localhost' },
  defaultJobOptions: {
    attempts: QUEUE_ATTEMPTS || 5,
    backoff: {
      type: QUEUE_BACKOFF_TYPE || 'exponential',
      delay: QUEUE_BACKOFF_DELAY || 1000,
    },
    removeOnComplete: true
  }
});

module.exports = {
  //connectQueue,
  queue
};