export default class Environment {
  public static isLocal(): boolean {

    if (process.env.IS_OFFLINE) {
      return true;
    }

    return false;
  }
}
