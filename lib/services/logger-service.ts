export enum LogLevel {
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
  DEBUG = "DEBUG",
}

export class LoggerService {
  private static instance: LoggerService

  private constructor() {}

  public static getInstance(): LoggerService {
    if (!LoggerService.instance) {
      LoggerService.instance = new LoggerService()
    }
    return LoggerService.instance
  }

  log(level: LogLevel, message: string, data?: any): void {
    const timestamp = new Date().toISOString()
    const logEntry = {
      timestamp,
      level,
      message,
      data,
    }

    switch (level) {
      case LogLevel.INFO:
        console.info(JSON.stringify(logEntry))
        break
      case LogLevel.WARN:
        console.warn(JSON.stringify(logEntry))
        break
      case LogLevel.ERROR:
        console.error(JSON.stringify(logEntry))
        break
      case LogLevel.DEBUG:
        if (process.env.NODE_ENV === "development") {
          console.debug(JSON.stringify(logEntry))
        }
        break
      default:
        console.log(JSON.stringify(logEntry))
    }

    // In a production environment, you might want to send logs to a service like Sentry, Loggly, etc.
    // or store them in a database for later analysis
  }

  info(message: string, data?: any): void {
    this.log(LogLevel.INFO, message, data)
  }

  warn(message: string, data?: any): void {
    this.log(LogLevel.WARN, message, data)
  }

  error(message: string, data?: any): void {
    this.log(LogLevel.ERROR, message, data)
  }

  debug(message: string, data?: any): void {
    this.log(LogLevel.DEBUG, message, data)
  }
}

export default LoggerService.getInstance()
