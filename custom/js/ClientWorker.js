if (!!navigator.serviceWorker) {
    navigator.serviceWorker.register('/cw.js?t=' + new Date().getTime()).then(async (registration) => {
        if (localStorage.getItem('cw_installed') !== 'true') {
            const conf = () => {
                console.log('[CW] 注册成功...');
                fetch('/cw-cgi/api?type=config')
                    .then(res => res.text())
                    .then(text => {
                        if (text === 'ok') {
                            console.log('[CW] 安装成功...');
                            localStorage.setItem('cw_installed', 'true');
                            //如果你不希望重载页面，请移除下面七行
                            //重载标识 - 开始
                            fetch(window.location.href).then(res => res.text()).then(text => {
                                document.open()
                                document.write(text);
                                document.close();
                            });
                            //重载标识 - 结束
                        } else {
                            console.warn('[CW] 安装完成，重新加载...');
                            setTimeout(() => {
                                conf()
                            }, 200);
                        }
                    }).catch(err => {
                        console.log('[CW] 唔~安装可能还没有结束,请等待... ....');
                    });
            }
            setTimeout(() => {
                conf()
            }, 50);
        }
    }).catch(err => {
        console.error('[CW] 呀~安装失败: ' + err.message);
        btf.snackbarShow('[CW] 呀~安装失败: ' + err.message);
    });
} else {
    console.error('[CW] 您的浏览器不支持 service worker');
    btf.snackbarShow('[CW] 您的浏览器不支持 service worker');
}