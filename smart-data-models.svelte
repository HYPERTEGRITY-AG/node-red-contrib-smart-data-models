<script context="module">
  RED.nodes.registerType("smart data models", {
		category: "parser",
        defaults: {
			name: {
			    value: "",
			    label: "Name",
			    icon: "tag",
			    placeholder: "Name"
			}
        },
		inputs: 1,
		outputs: 1,
		color: "#DEBD5C",
		icon: "sdm.png",
        label: function() {
          if (this.name) return this.name;
                return "smart data models";
        },
        labelStyle: function() {
            return this.name?"node_label_italic":"";
        },
		oneditprepare: function () {
			render(this)
		},

		oneditsave: function () {
			update(this)
		},

		oneditcancel: function () {
			revert(this)
		}
	});
</script>

<script>
    export let node
    import { Input, Select, Callout } from 'svelte-integration-red/components'
</script>

<Input bind:node prop="name" />

