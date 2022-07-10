import { Posts } from "./Posts";
import "./App.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// 1. 쿼리 클라이언트 생성
// Client를 생성하면 Provider를 모든 자식 컴포넌트에 클라이언트를 사용할 수 있게 한다.
const queryClient = new QueryClient();

function App() {
  return (
    // 2. Provider를 사용하여 모든 자식 컴포넌트에 클라이언트 추가, 이후 Posts로 이동
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Blog Posts</h1>
        <Posts />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
