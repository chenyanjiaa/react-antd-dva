import dva from 'dva';
import './index.css';

import { registerMicroApps, start } from 'qiankun';

// 1. Initialize
const app = dva({
    initialState: {
        products: [
        { name: 'dva', id: 1 },
        { name: 'antd', id: 2 },
        ],
    },
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/products').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');


registerMicroApps([
    {
      name: 'reactApp',
      entry: '//localhost:3000',
      container: '#container',
      activeRule: '/app-react',
    },
    {
      name: 'vueApp',
      entry: '//localhost:8080',
      container: '#container',
      activeRule: '/app-vue',
    },
    {
      name: 'angularApp',
      entry: '//localhost:4200',
      container: '#container',
      activeRule: '/app-angular',
    },
  ]);
  // 启动 qiankun
  start();