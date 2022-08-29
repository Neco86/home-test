import { Menu } from 'antd';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { history } from 'umi';
import styles from './index.less';
import { MenuOutlined } from '@ant-design/icons';

export const DEFAULT_CONFIG = {
    title: '',
    icon: '',
    footer: '',
    pages: [],
    styles: {
        title: {},
        footer: {},
        home: {
            photo: {},
            title: {},
            description: {},
            welcome: {},
            content: {},
        },
        research: {
            title: {},
            card: {
                title: {},
                subtitle: {},
                description: {},
                buttons: {},
            },
        },
    },
};

const GlobalContext = createContext(DEFAULT_CONFIG);
const { SubMenu } = Menu;

export const useConfigStyle: any = () => {
    const config = useContext(GlobalContext);
    return config.styles;
};

export const usePageInfo: any = () => {
    const config = useContext(GlobalContext);
    const pageInfo =
        (config.pages.find((item: any) => item.target === history.location.pathname) as any)
            ?.info ?? {};
    return pageInfo;
};

export default ({ children }: any) => {
    const [config, setConfig] = useState<any>(DEFAULT_CONFIG);
    useEffect(() => {
        fetch(`./config.json?t=${Date.now()}`)
            .then((res) => res.json())
            .then((res) => {
                setConfig(res);
                document.title = res.title;
                const link = document.createElement('link');
                link.type = 'image/x-icon';
                link.rel = 'shortcut icon';
                link.href = res.icon;
                document.getElementsByTagName('head')[0].appendChild(link);
            });
    }, []);

    const handleClick = useCallback(({ key: target }) => {
        if (['/', '/research'].includes(target)) {
            history.push(target);
        } else if (target) {
            window.open(target, '_blank');
        }
    }, []);

    return (
        <div className={styles.wrapper}>
            <header>
                <a href="/">
                    <h1 style={config.styles.title}>{config.title}</h1>
                </a>
                <Menu
                    mode="horizontal"
                    selectedKeys={[history.location.pathname]}
                    onClick={handleClick}
                    className={styles.menu1}
                >
                    {config.pages.map(({ title, target }: any) => (
                        <Menu.Item key={target}>{title}</Menu.Item>
                    ))}
                </Menu>
                <Menu
                    mode="horizontal"
                    selectedKeys={[]}
                    onClick={handleClick}
                    className={styles.menu2}
                >
                    <SubMenu title={<MenuOutlined className={styles.expend} />}>
                        {config.pages.map(({ title, target }: any) => (
                            <Menu.Item key={target}>{title}</Menu.Item>
                        ))}
                    </SubMenu>
                </Menu>
            </header>
            <GlobalContext.Provider value={config}>
                <div className={styles.contentWrapper}>
                    <div className={styles.content}>{children}</div>
                    <footer style={config.styles.footer}>{config.footer}</footer>
                </div>
            </GlobalContext.Provider>
        </div>
    );
};
