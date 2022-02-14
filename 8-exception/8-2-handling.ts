{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new OfflineError('no network!');
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
      // 세부 레벨에서 에러를 캐치한다고 해도 처리를 해줄 수 있는 것이 딱히 없다.
      // result => 정확하게, 우하하게 처리할 수 있는 것이 아니라면 catch 하지 않는 것이 더 낫다.
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      // 어플리케이션 레벨에서 처리하는 것이 더 낫다.
      // why? => 조금 더 의미있는 처리를 해줄 수 있기 때문.
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
      }
    }
  }
  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
