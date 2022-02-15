{
  /* TypeScript에서 구현된 catch()에는 어떠한 타입정보도 전달되지 않아서 instanceOf를 사용할 수 없다.
  그러므로 exception(try ~ catch)은 정말 예상하지 못한 에러처리를 위해서 사용하는 것이 좋고
  세부적인 에러처리는 Error State를 사용해서 처리해주는 것이 좋다. */

  // 아래는 Error State 예시
  type SuccessState = {
    result: 'success';
  };

  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  };

  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      return {
        result: 'success',
      };
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
