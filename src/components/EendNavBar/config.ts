/**
 * @作者: Seale
 * @时间: 2022/1/13
 * @版本: V1.0
 * @说明: NavBar配置项
 * @网站: https://www.imsle.com
 */
interface NavBarConfig{
    title: string,          // 名称
    link: string,           // 链接
    isRoute?: boolean,      // 是否为路由
    subNav?: NavBarConfig[]
}


export const navBarConfig: NavBarConfig[] = [
    {
        title: "首页",
        link: "/"
    },
    {
        title: "开放平台",
        link: "/open"
    },
    {
        title: '加入我们',
        link: '/join'
    }
]
