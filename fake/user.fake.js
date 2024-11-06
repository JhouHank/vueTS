import Mock from 'mockjs';
import { defineFakeRoute } from 'vite-plugin-fake-server/client';

const data = Mock.mock({
  'users|150': [
    {
      id: '@guid',
      username: '@first',
      email: '@email',
      avatar: '@image("200x200")',
      role: '@pick(["admin", "user", "dealer"])',
    },
  ],
}).users;

export default defineFakeRoute([
  {
    url: '/mock/getUserInfo',
    timeout: 1000,
    method: 'GET',
    response: () => {
      return {
        status: 'success',
        code: 200,
        data: Mock.mock({
          'users|1-2': [
            {
              id: '@guid',
              username: '@first',
              email: '@email',
              avatar: '@image("200x200")',
              role: '@pick(["admin", "user", "dealer"])',
            },
          ],
        }),
      };
    },
  },
  {
    url: '/mock/getUserList',
    timeout: 1000,
    method: 'GET',
    response: ({ query }) => {
      const page = parseInt(query.page, 10) || 1;
      const perPage = parseInt(query.per_page, 10) || 10;
      const sort = query.sort ? JSON.parse(query.sort) : [];
      const filter = query.filter || '';

      // 篩選功能
      let filteredData = data.filter(
        (user) => user.username.includes(filter) || user.email.includes(filter),
      );

      // 排序功能
      if (sort.length) {
        filteredData.sort((a, b) => {
          for (let i = 0; i < sort.length; i++) {
            const { id, desc } = sort[i];
            const dir = desc ? -1 : 1;
            if (a[id] < b[id]) return -dir;
            if (a[id] > b[id]) return dir;
          }
          return 0;
        });
      }

      const start = (page - 1) * perPage;
      const end = page * perPage;
      const paginatedData = filteredData.slice(start, end);

      return {
        status: 'success',
        code: 200,
        data: {
          total: filteredData.length,
          page,
          per_page: perPage,
          total_pages: Math.ceil(filteredData.length / perPage),
          users: paginatedData,
        },
      };
    },
  },
  {
    url: '/mock/errorAPI',
    timeout: 1000,
    method: 'GET',
    response: () => {
      return {
        status: 'error',
        code: 404,
        message: 'Not found',
      };
    },
  },
  {
    url: '/mock/echo',
    timeout: 1000, // 延遲1秒
    method: 'POST',
    response: ({ body }) => {
      return {
        status: 'success',
        code: 200,
        data: body, // 直接回傳請求中的 body
      };
    },
  },
]);
