// TODO: 여기 jest.setup.js 위치 맞는지 체크하기

import { server } from './src/mocks/server';

// 테스트 시작 전에 서버를 실행한다.
beforeAll(() => server.listen());

// 테스트가 끝날 때마다 리퀘스트 핸들러를 초기화하여 서로 영향을 미치지 않도록 한다.
afterEach(() => server.resetHandlers());

// 테스트가 완료되면 서버를 종료한다.
afterAll(() => server.close());
