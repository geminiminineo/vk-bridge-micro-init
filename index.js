with(window)(p=parent)-this?p.postMessage({handler:"VKWebAppInit",type:"vk-connect"},"*"):AndroidBridge?.VKWebAppInit()||webkit?.messageHandlers.VKWebAppInit.postMessage()
