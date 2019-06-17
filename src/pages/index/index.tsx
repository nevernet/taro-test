import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';

// 导入失败，会提示： node_modules/taro-lib-test/dist/weapp/index'
// import { A1 } from 'taro-lib-test';

// 导入失败， 会提示： 缺少npm包taro-lib-test/dist/weapp/index，开始安装...
import { A1 } from 'taro-lib-test/dist/weapp/index';

// 上面方式必须再config/index.js里面配置path alias
// 配置 alias 之后在成功编译
// 'taro-lib-test': path.resolve(__dirname, '..', 'node_modules/taro-lib-test'),

export default class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *5
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  };

  componentWillMount() {
    const obj = new A1();
    obj.test();
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
      </View>
    );
  }
}
