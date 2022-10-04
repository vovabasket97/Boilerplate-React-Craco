const path = require('path');

const resolvePath = p => path.resolve(__dirname, p);
module.exports = {
	devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
		return devServerConfig;
	},
	webpack: {
		alias: {
			components: resolvePath('./src/components'),
			utils: resolvePath('./src/utils'),
			styles: resolvePath('./src/styles'),
			images: resolvePath('./src/images'),
			slices: resolvePath('./src/slices'),
			hooks: resolvePath('./src/hooks'),
			services: resolvePath('./src/services'),
			store: resolvePath('./src/store'),
			pages: resolvePath('./src/pages')
		},
		configure: (webpackConfig, { env, paths }) => {
			return webpackConfig;
		}
	}
};
