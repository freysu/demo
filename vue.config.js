module.exports = {
	lintOnSave: false, //如果为false，就是取消eslint规则的检查
	devServer: {
		host: '0.0.0.0',
		port: 8080,
		proxy: {
			'/1.1': {
				target: 'https://jdykzx2w.api.lncldglobal.com', // 要跨域的域名
				changeOrigin: true, // 是否开启跨域
			},
			// '/': {
			//   target: 'https://xizhi.qqoq.net',// 要跨域的域名
			//   changeOrigin: true, // 是否开启跨域
			// }
		}
	},
	publicPath: process.env.NODE_ENV === "production" ? "/demo-website/" : "/",
}
