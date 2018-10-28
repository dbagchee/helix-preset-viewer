<template>
    <div class="header">
        <h1>Helix Preset Viewer</h1>
        <p>You can use this tool to view Helix preset details without having your hardware connected.</p>
        <ul>
            <li>Select "Choose File" to browse your computer and load a .hlx file.</li>
            <li>Click on the effects block to view its settings.</li>
        </ul>
        <input type="file" @change="this.$parent.onFileChange">
        <p>Note: This is very much a work in progress. Currently this tool has the following limitations:</p>
        <ul>
            <li>Doesn't render inputs, outputs, splits, or merges (yet).</li>
            <li>Some missing model data (mostly amps and cabs at this point) - you will see an asterisk (*) next to items that are not mapped at the moment (though you can still view the blocks parameters and probably figure out which one it is in the meantime).</li>
            <li>Some of the parameter data is a little raw (true/false instead of on/off, number formatting, etc).</li>
            <li>Could be other bugs!</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>