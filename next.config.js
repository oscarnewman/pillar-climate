module.exports = {
	images: {
		domains: [''],
		path: '/_next/image',
		loader: 'default',
	},
	async redirects() {
		return [{ source: '/', destination: '/to/climate', permanent: true }]
	},
}
