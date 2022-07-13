module.exports = function(RED) {
    function SmartDataModelsNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        const globalContext = node.context().global;

        node.on('close', function() {
            // TODO: Inform THE health checks node
        });

        node.on('input', function(msg) {
        });
    }

    RED.nodes.registerType("smart data models", SmartDataModelsNode, {
    });
}

