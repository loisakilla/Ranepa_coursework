import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';
import {ConfigProvider} from "antd";
import locale from 'antd/locale/ru_RU';
import "dayjs/locale/ru";

const root = createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <ConfigProvider locale={locale}
                        theme={{
                            token: {
                                colorTextDisabled: "rgba(0, 0, 0, 0.4)",
                                fontFamily: "Montserrat",
                                colorPrimary: "#9147ff",
                                fontSize: 16,
                                borderRadius: 12,
                            },
                            components: {
                                Modal: { titleFontSize: 24 },
                            }
                        }}
        >
            <App />
        </ConfigProvider>
    </React.StrictMode>
);