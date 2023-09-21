import path from 'path';
import winston, { format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const { combine, timestamp, label, printf } = format;

//Customm Log Format
const myFormat = printf(({ level, message, timestamp }) => {
  const date = new Date(timestamp);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `[${level.toUpperCase()}]: ${message} - 🕑 [Time]: ${date.toDateString()} ${hour}:${minutes}:${seconds}`;
});

const logger = winston.createLogger({
  level: 'info',
  format: combine(label({ label: 'PH' }), timestamp(), myFormat),
  transports: [
    new DailyRotateFile({
      filename: path.join(process.cwd(), 'logs', 'winston', 'success', 'success-%DATE%.log'),
      datePattern: 'YYYY-MM-DD',
      level: 'info'
    }),
    new DailyRotateFile({
      filename: path.join(process.cwd(), 'logs', 'winston', 'error', 'error-%DATE%.log'),
      datePattern: 'YYYY-MM-DD',
      level: 'error'
    }),
    new winston.transports.Console({
      stderrLevels: ['error']
    })
  ]
});

export default logger;
