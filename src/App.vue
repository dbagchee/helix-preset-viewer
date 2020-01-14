<template>
    <div id="app">
        <div class="container">
            <Header/>
            <div v-if="!presetLoaded" class="path">
                <BlockItem type="input"></BlockItem>
                <BlockItem type="dist"></BlockItem>
                <BlockItem type="comp"></BlockItem>
                <BlockItem type="eq"></BlockItem>
                <BlockItem type="mod"></BlockItem>
                <BlockItem type="delay"></BlockItem>
                <BlockItem type="reverb"></BlockItem>
                <BlockItem type="pitch"></BlockItem>
                <BlockItem type="filter"></BlockItem>
                <BlockItem type="output"></BlockItem>
            </div>
            <div v-if="!presetLoaded" class="path">
                <BlockItem type="split"></BlockItem>
                <BlockItem type="wah"></BlockItem>
                <BlockItem type="amp-cab"></BlockItem>
                <BlockItem type="amp"></BlockItem>
                <BlockItem type="none"></BlockItem>
                <BlockItem type="preamp"></BlockItem>
                <BlockItem type="cab"></BlockItem>
                <BlockItem type="ir"></BlockItem>
                <BlockItem type="vol-pan"></BlockItem>
                <BlockItem type="send-return"></BlockItem>
                <BlockItem type="looper"></BlockItem>
                <BlockItem type="join"></BlockItem>
            </div>

            <h2 v-if="presetLoaded">Preset Name: {{ preset.data.meta.name }}</h2>

            <div v-if="presetLoaded" class="path">
                <BlockItem
                    v-for="(value, key) in preset.data.tone.dsp0"
                    v-if="key === 'inputA'"
                    v-bind:type="value['@model'] | getModel('type')" v-bind:id="value" v-bind:position="0">
                </BlockItem>
                <BlockItem
                    v-for="(value, key) in preset.data.tone.dsp0"
                    v-if="key === 'split' || key === 'join'"
                    v-bind:type="value['@model'] | getModel('type')" v-bind:id="value" v-bind:position="value['@position']" v-bind:enabled="value['@enabled']">
                </BlockItem>
                <BlockItem
                    v-for="(value, key) in preset.data.tone.dsp0"
                    v-if="value['@path'] === 0 && key.startsWith('block')"
                    v-bind:type="value['@model'] | getModel('type')" v-bind:id="value" v-bind:position="value['@position']" v-bind:enabled="value['@enabled']">
                </BlockItem>
                <BlockItem
                    v-for="(value, key) in preset.data.tone.dsp0"
                    v-if="key === 'outputA'"
                    v-bind:type="value['@model'] | getModel('type')" v-bind:id="value" v-bind:position="20">
                </BlockItem>
            </div>
            <div v-if="presetLoaded" class="path">
                <BlockItem
                    v-for="(value, key) in preset.data.tone.dsp0"
                    v-if="key === 'inputB'"
                    v-bind:type="value['@model'] | getModel('type')" v-bind:id="value" v-bind:position="0">
                </BlockItem>
                <BlockItem
                    v-for="(value, key) in preset.data.tone.dsp0"
                    v-if="value['@path'] === 1 && key.startsWith('block')"
                    v-bind:type="value['@model'] | getModel('type')" v-bind:id="value" v-bind:position="value['@position']" v-bind:enabled="value['@enabled']">
                </BlockItem>
                <BlockItem
                    v-for="(value, key) in preset.data.tone.dsp0"
                    v-if="key === 'outputB'"
                    v-bind:type="value['@model'] | getModel('type')" v-bind:id="value" v-bind:position="20">
                </BlockItem>
            </div>
            <div v-if="presetLoaded" class="path">
                <BlockItem
                    v-for="(value, key) in preset.data.tone.dsp1"
                    v-if="key === 'inputA'"
                    v-bind:type="value['@model'] | getModel('type')" v-bind:id="value" v-bind:position="0">
                </BlockItem>
                <BlockItem
                    v-for="(value, key) in preset.data.tone.dsp1"
                    v-if="key === 'split' || key === 'join'"
                    v-bind:type="value['@model'] | getModel('type')" v-bind:id="value" v-bind:position="value['@position']" v-bind:enabled="value['@enabled']">
                </BlockItem>
                <BlockItem
                    v-for="(value, key) in preset.data.tone.dsp1"
                    v-if="value['@path'] === 0 && key.startsWith('block')"
                    v-bind:type="value['@model'] | getModel('type')" v-bind:id="value" v-bind:position="value['@position']" v-bind:enabled="value['@enabled']">
                </BlockItem>
                <BlockItem
                    v-for="(value, key) in preset.data.tone.dsp1"
                    v-if="key === 'outputA'"
                    v-bind:type="value['@model'] | getModel('type')" v-bind:id="value" v-bind:position="20">
                </BlockItem>
            </div>
            <div v-if="presetLoaded" class="path">
                <BlockItem
                    v-for="(value, key) in preset.data.tone.dsp1"
                    v-if="key === 'inputB'"
                    v-bind:type="value['@model'] | getModel('type')" v-bind:id="value" v-bind:position="0">
                </BlockItem>
                <BlockItem
                    v-for="(value, key) in preset.data.tone.dsp1"
                    v-if="value['@path'] === 1 && key.startsWith('block')"
                    v-bind:type="value['@model'] | getModel('type')" v-bind:id="value" v-bind:position="value['@position']" v-bind:enabled="value['@enabled']">
                </BlockItem>
                <BlockItem
                    v-for="(value, key) in preset.data.tone.dsp1"
                    v-if="key === 'outputB'"
                    v-bind:type="value['@model'] | getModel('type')" v-bind:id="value" v-bind:position="20">
                </BlockItem>
            </div>

            <ParametersTable v-bind:block="currentBlock"></ParametersTable>

            <Footer/>
        </div>
    </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import BlockItem from './components/BlockItem.vue'
import ParametersTable from './components/ParametersTable.vue'

export default {
    name: 'app',
    components: {
        Header,
        Footer,
        BlockItem,
        ParametersTable
    },
    data: function() {
        return {
            preset: this.$root.hxPreset,
            models: this.$root.hxModels,
            currentBlock: {},
            presetLoaded: false
        }
    },
    methods: {
        /* file upload based on help from https://codepen.io/Atinux/pen/qOvawK & https://stackoverflow.com/questions/14740927/using-html-5-file-api-to-load-a-json-file */
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.loadPreset(files[0]);
        },
        loadPreset(file) {
              var preset = null;
              var reader = new FileReader();
              var vm = this;

              reader.onload = (e) => {
                preset = JSON.parse(e.target.result);
                vm.presetLoaded = true;
                vm.preset = preset;
              };
              reader.readAsText(file);
        }
    }
}

</script>

<style>
body {
    color: #ccc;
    background-color: #000;
    font-family: Helvetica, Arial, sans-serif;
}

a:link {
    color: #ccc;
}

a:visited {
    color: #ccc;
}

a:hover {
    color: #fff;
}

a:active {
    color: #fff;
}

li {
    margin-bottom: 5px;
}

.container {
    width: 80%;
    margin: 0 auto;
}

.header {
    width: 80%;
    margin: 50px auto;
}

.footer {
    font-size: 14px;
    text-align: center;
    margin: 50px auto;
}

.path {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
    min-height: 70px;
}

.path::before {
    content: " ";
    width: 100%;
    position: absolute;
    height: 3px;
    background-color: #666;
    top: 40%;
}
</style>
