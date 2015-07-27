var common = module.exports = {};

common.config = function() {
	var node_env = process.env.NODE_ENV || 'development';
	return require('./' + node_env);
};
