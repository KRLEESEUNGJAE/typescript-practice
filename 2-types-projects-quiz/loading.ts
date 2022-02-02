{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState = (resource: ResourceLoadState) => {
    if (resource.state === "loading") {
      console.log("👀 loading...");
    } else if (resource.state === "success") {
      console.log("😃", resource.response.body);
    } else if (resource.state === "fail") {
      console.log("😱", resource.reason);
    }
  };

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
