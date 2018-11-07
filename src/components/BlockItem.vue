<template>
    <div class="block" v-bind:class="{
        'block--unknown': type === 'unknown',
        'block--none': type === 'none',
        'block--delay': type === 'delay',
        'block--amp': type === 'amp',
        'block--preamp': type === 'preamp',
        'block--amp-cab': type === 'amp-cab',
        'block--cab': type === 'cab',
        'block--dist': type === 'dist',
        'block--comp': type === 'comp',
        'block--eq': type === 'eq',
        'block--mod': type === 'mod',
        'block--reverb': type === 'reverb',
        'block--pitch': type === 'pitch',
        'block--filter': type === 'filter',
        'block--wah': type === 'wah',
        'block--input': type === 'input',
        'block--output': type === 'output',
        'block--ir': type === 'ir',
        'block--vol-pan': type === 'vol-pan',
        'block--send-return': type === 'send-return',
        'block--looper': type === 'looper',
        'block--delay': type === 'delay',
        'block--split': type === 'split',
        'block--join': type === 'join',
        'block--is-active': isActive === 1, 
        'block--position-1': position === 0,
        'block--position-2': position === 1,
        'block--position-3': position === 2,
        'block--position-4': position === 3,
        'block--position-5': position === 4,
        'block--position-6': position === 5,
        'block--position-7': position === 6,
        'block--position-8': position === 7,
        'block--position-9': position === 8,
        'block--position-20': position === 20}" v-on:click="displayParameters(id)">
        <div class="block__icon">
            <i v-bind:class="blockTypes[type].icon"></i>
        </div>
        <div class="block__name">{{ blockTypes[type].name }}</div>
    </div>
</template>

<script>
export default {
    name: 'BlockItem',
    data: function() {
        return {
            isActive: 0,
            blockTypes: {
                "delay": {
                    "name": "Delay",
                    "icon": "far fa-clone"
                },
                "dist": {
                    "name": "Dist",
                    "icon": "fas fa-signature"
                },
                "eq": {
                    "name": "EQ",
                    "icon": "fas fa-sliders-h"
                },
                "amp": {
                    "name": "Amp",
                    "icon": "fas fa-hdd"
                },
                "preamp": {
                    "name": "Pre",
                    "icon": "fas fa-hdd"
                },
                "amp-cab": {
                    "name": "Amp+Cab",
                    "icon": "fas fa-hdd"
                },
                "cab": {
                    "name": "Cab",
                    "icon": "fas fa-volume-off"
                },
                "ir": {
                    "name": "IR",
                    "icon": "fas fa-volume-down"
                },
                "wah": {
                    "name": "Wah",
                    "icon": "fas fa-shoe-prints"
                },
                "pitch": {
                    "name": "Pitch",
                    "icon": "fab fa-itunes-note"
                },
                "filter": {
                    "name": "Filter",
                    "icon": "fas fa-layer-group"
                },
                "comp": {
                    "name": "Dyn",
                    "icon": "fas fa-slash"
                },
                "mod": {
                    "name": "Mod",
                    "icon": "fas fa-adjust"
                },
                "reverb": {
                    "name": "Verb",
                    "icon": "fas fa-cube"
                },
                "vol-pan": {
                    "name": "Vol/Pan",
                    "icon": "fas fa-signal"
                },
                "send-return": {
                    "name": "Send/Return",
                    "icon": "fas fa-exchange-alt"
                },
                "looper": {
                    "name": "Looper",
                    "icon": "fas fa-sync"
                },
                "input": {
                    "name": "Input",
                    "icon": "far fa-arrow-alt-circle-right"
                },
                "output": {
                    "name": "Output",
                    "icon": "far fa-arrow-alt-circle-right"
                },
                "unknown": {
                    "name": "Unknown",
                    "icon": "fas fa-question"
                },
                "none": {
                    "name": "None",
                    "icon": ""
                },
                "split": {
                    "name": "Split",
                    "icon": "far fa-arrow-alt-circle-down"
                },
                "join": {
                    "name": "Merge",
                    "icon": "far fa-arrow-alt-circle-up"
                }
                
            }
        }
    },
    props: ['type', 'id', 'currentBlock', 'position'],
    methods: {
        displayParameters: function (id) {
            /* remove active from all blocks, probably can be improved */
            for (var i = 0; i < this.$parent.$children.length; i++) {
                this.$parent.$children[i].isActive = 0;
            }
            /* display parameter table */
            this.$parent.currentBlock = id;
            /* set block to active */
            this.isActive = 1;
        }
    }
}
</script>


<style>
.block {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 20px;
    z-index: 5;
}

.block__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    margin: 0 auto 5px auto;
    border: 1px solid #666;
    border-radius: 6px;
    font-size: 24px;
    background-color: #000;
}

.block__name {
    font-size: 12px;
}

.block--is-active .block__icon {
    border-color: #fff;
}

.block--input,
.block--output,
.block--split,
.block--join {
    color: #666;
}

.block--input .block__icon,
.block--output .block__icon {
    border-radius: 50px;
}

.block--position-1 {
    order: 1;
}

.block--position-2 {
    order: 2;
}

.block--position-3 {
    order: 3;
}

.block--position-4 {
    order: 4;
}

.block--position-5 {
    order: 5;
}

.block--position-6 {
    order: 6;
}

.block--position-7 {
    order: 7;
}

.block--position-8 {
    order: 8;
}
    
.block--position-9 {
    order: 9;
}
    
.block--position-10 {
    order: 10;
}
    
.block--position-20 {
    order: 20;
}

.block--amp,
.block--preamp,
.block--amp-cab,
.block--cab {
    color: darkred;
}

.block--ir {
    color: hotpink;
}

.block--dist {
    color: orange;
}

.block--comp,
.block--eq {
    color: yellow;
}

.block--delay {
    color: forestgreen;
}

.block--mod {
    color: royalblue;
}

.block--reverb {
    color: orangered;
}

.block--filter,
.block--pitch,
.block--wah {
    color: purple;
}

.block--vol-pan,
.block--send-return {
    color: deepskyblue;
}

.block--looper {
    color: #ccc;
}

.block--split .block__icon,
.block--join .block__icon {
    
}

.block--none {
    width: 52px;
    height: 52px;
} 

.block--none .block__icon {
   display: none; 
} 

.block--none .block__name {
   display: none; 
} 
</style>