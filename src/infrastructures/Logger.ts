export class Logger {

  public static emergency(value: any) {
    const logLevel = "Emergency".toUpperCase();
    console.trace(logLevel, value);
  }

  public static alert(value: any) {
    const logLevel = "Alert".toUpperCase();
    console.trace(logLevel, value);
  }

  public static critical(value: any) {
    const logLevel = "Critical".toUpperCase();
    console.trace(logLevel, value);
  }

  public static error(value: any) {
    const logLevel = "Error".toUpperCase();
    console.trace(logLevel, value);
  }

  public static warning(value: any) {
    const logLevel = "Warning".toUpperCase();
    console.trace(logLevel, value);
  }

  public static notice(value: any) {
    const logLevel = "Notice".toUpperCase();
    console.trace(logLevel, value);
  }

  public static informational(value: any) {
    const logLevel = "Informational".toUpperCase();
    console.trace(logLevel, value);
  }

  public static debug(value: any) {
    const logLevel = "Debug".toUpperCase();
    console.trace(logLevel, value);
  }
}
