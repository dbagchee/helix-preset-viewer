<template>
    <table class="parameters">
        <tr v-for="(value,key) in block" v-if="key === '@model'">
            <th>{{ key | getLabel }}</th><th> {{ value | getModel('name') }}</th>
        </tr>
        <tr v-for="(value,key) in block" v-if="key !== '@model' && key !== '@path' && key !== 'Voice' && key !== '@type' && key !== '@bypassvolume' && key !== '@cab' && key !== '@enabled' && key !== 'SSwitch'">
            <td>{{ key | getLabel }}</td><td> {{ value }} </td>
        </tr>    
    </table>
</template>


<script>
export default {
    name: 'ParametersTable',
    data: function() {
        return {
            preset: this.$root.hxPreset
        }
    },
    props: ['block']
}
</script>

<style>
.parameters {
    font-size: 16px;
    background-color: #111;
    margin: 0 auto;
}

.parameters th {
    padding: 15px;
    text-align: left;
    background-color: #222;
}

.parameters td {
    padding: 8px 15px;
    text-align: left;
    background-color: #333;
}
</style>