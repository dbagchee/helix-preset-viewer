var hxPreset = {
    "data": {
        "device": 2162694,
        "device_version": 40894464,
        "meta": {
            "application": "HX Edit",
            "appversion": 40894464,
            "build_sha": "5dc01f9",
            "modifieddate": 1539979165,
            "name": "No Preset Loaded"
        },
        "tone": {
            "dsp0": {

                "cab0": {
                    "@enabled": true,
                    "@mic": 0,
                    "@model": "HD2_Cab4X12CaliV30",
                    "Distance": 1.0,
                    "EarlyReflections": 0.0,
                    "HighCut": 20100.0,
                    "Level": 0.0,
                    "LowCut": 19.90
                },
                "inputA": {
                    "@input": 1,
                    "@model": "HelixStomp_AppDSPFlowInput",
                    "decay": 0.50,
                    "noiseGate": true,
                    "threshold": -48.0
                },
                "inputB": {
                    "@input": 0,
                    "@model": "HelixStomp_AppDSPFlowInput",
                    "decay": 0.50,
                    "noiseGate": false,
                    "threshold": -48.0
                },
                "join": {
                    "@enabled": true,
                    "@model": "HD2_AppDSPFlowJoin",
                    "@position": 6,
                    "A Level": 0.0,
                    "A Pan": 0.50,
                    "B Level": 0.0,
                    "B Pan": 0.50,
                    "B Polarity": false,
                    "Level": 0.0
                },
                "outputA": {
                    "@model": "HelixStomp_AppDSPFlowOutputMain",
                    "@output": 1,
                    "gain": 0.0,
                    "pan": 0.50
                },
                "outputB": {
                    "@model": "HelixStomp_AppDSPFlowOutputSend",
                    "@output": 0,
                    "Type": true,
                    "gain": 0.0,
                    "pan": 0.50
                },
                "split": {
                    "@enabled": true,
                    "@model": "HD2_AppDSPFlowSplitY",
                    "@position": 0,
                    "BalanceA": 0.50,
                    "BalanceB": 0.50,
                    "bypass": false
                }
            },
            "dsp1": {},
            "footswitch": {
                "dsp0": {
                    "block2": {
                        "@fs_enabled": false,
                        "@fs_index": 2,
                        "@fs_label": "Simple Delay",
                        "@fs_ledcolor": 67840,
                        "@fs_momentary": false,
                        "@fs_primary": true
                    }
                }
            },
            "global": {
                "@current_snapshot": 0,
                "@cursor_dsp": 0,
                "@cursor_group": "block1",
                "@cursor_path": 0,
                "@cursor_position": 2,
                "@guitarinputZ": 0,
                "@model": "@global_params",
                "@pedalstate": 2,
                "@tempo": 120.0,
                "@topology0": "A",
                "@topology1": 0,
                "@variax_customtuning": true,
                "@variax_lockctrls": 0,
                "@variax_magmode": false,
                "@variax_model": 0,
                "@variax_str1tuning": 0,
                "@variax_str2tuning": 0,
                "@variax_str3tuning": 0,
                "@variax_str4tuning": 0,
                "@variax_str5tuning": 0,
                "@variax_str6tuning": 0,
                "@variax_toneknob": -0.10,
                "@variax_volumeknob": -0.10
            },
            "snapshot0": {
                "@ledcolor": 0,
                "@name": "SNAPSHOT 1",
                "@pedalstate": 0,
                "@tempo": 120.0,
                "@valid": true,
                "blocks": {
                    "dsp0": {
                        "block0": true,
                        "block1": true,
                        "block2": false,
                        "block3": true,
                        "split": true
                    }
                }
            },
            "snapshot1": {
                "@ledcolor": 0,
                "@name": "SNAPSHOT 2",
                "@pedalstate": 0,
                "@tempo": 120.0,
                "@valid": false,
                "blocks": {
                    "dsp0": {
                        "block0": true,
                        "block1": true,
                        "block2": true,
                        "block3": true,
                        "split": true
                    }
                }
            },
            "snapshot2": {
                "@ledcolor": 0,
                "@name": "SNAPSHOT 3",
                "@pedalstate": 0,
                "@tempo": 120.0,
                "@valid": false,
                "blocks": {
                    "dsp0": {
                        "block0": true,
                        "block1": true,
                        "block2": true,
                        "block3": true,
                        "split": true
                    }
                }
            }
        }
    },
    "meta": {
        "original": 0,
        "pbn": 0,
        "premium": 0
    },
    "schema": "L6Preset",
    "version": 6
}; 

export { hxPreset };