import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

var hxPreset = {
  "version" : 6,
  "data" : {
    "meta" : {
      "name" : "Ashwagandha",
      "application" : "Helix",
      "build_sha" : "61d1df5",
      "modifieddate" : 1496188265,
      "appversion" : 35651584
    },
    "device" : 2162689,
    "tone" : {
      "snapshot7" : {
        "@pedalstate" : 2,
        "@ledcolor" : 0,
        "@name" : "SNAPSHOT 8",
        "@tempo" : 109.8231
      },
      "snapshot4" : {
        "@pedalstate" : 2,
        "@ledcolor" : 0,
        "@name" : "SNAPSHOT 5",
        "@tempo" : 109.8231
      },
      "dsp1" : {
        "join" : {
          "@model" : "HD2_AppDSPFlowJoin",
          "B Pan" : 0.5,
          "B Level" : 0,
          "A Level" : 0,
          "A Pan" : 0.5,
          "@position" : 8,
          "Level" : 0,
          "@enabled" : true,
          "B Polarity" : false
        },
        "block3" : {
          "@model" : "HD2_DelayElephantMan",
          "@position" : 5,
          "Feedback" : 0.71,
          "SyncSelect1" : 6,
          "TempoSync1" : true,
          "Scale" : 1,
          "@enabled" : true,
          "@path" : 1,
          "@trails" : true,
          "@type" : 7,
          "Headroom" : 0,
          "Mix" : 1,
          "Noise" : 0.1,
          "Time" : 0.375,
          "Level" : 0,
          "@stereo" : true,
          "Mode" : false,
          "Spread" : 0.41,
          "Depth" : 0.28
        },
        "block2" : {
          "Time2" : 0,
          "@model" : "HD2_PitchDualPitch",
          "Cents1" : -15,
          "@position" : 4,
          "Interval2" : 12,
          "PanVoice2" : 0.875,
          "Time1" : 0,
          "@enabled" : true,
          "@path" : 1,
          "@type" : 0,
          "Mix" : 0.5,
          "LevelVoice1" : 1,
          "LevelVoice2" : 1,
          "Interval1" : -12,
          "Level" : -0.6999998,
          "@stereo" : false,
          "PanDry" : 0.5,
          "Cents2" : 15,
          "PanVoice1" : 0.125
        },
        "inputB" : {
          "@input" : 0,
          "@model" : "HD2_AppDSPFlow2Input",
          "noiseGate" : false,
          "decay" : 0.5,
          "threshold" : -48
        },
        "block1" : {
          "@model" : "HD2_ReverbPlate",
          "@position" : 5,
          "LowCut" : 90,
          "@enabled" : true,
          "@path" : 0,
          "@trails" : false,
          "@type" : 7,
          "Mix" : 0.39,
          "Level" : 0,
          "Decay" : 0.74,
          "HighCut" : 4570,
          "Predelay" : 0.01499999
        },
        "outputB" : {
          "@model" : "HD2_AppDSPFlowOutput",
          "@output" : 0,
          "pan" : 0.5,
          "gain" : 0
        },
        "inputA" : {
          "@input" : 0,
          "@model" : "HD2_AppDSPFlow1Input",
          "noiseGate" : false,
          "decay" : 0.5,
          "threshold" : -48
        },
        "split" : {
          "BalanceA" : 0.5,
          "@model" : "HD2_AppDSPFlowSplitY",
          "@enabled" : true,
          "bypass" : false,
          "@position" : 4,
          "BalanceB" : 0.5
        },
        "block0" : {
          "@model" : "HD2_DelayReverseDelay",
          "@position" : 4,
          "Feedback" : 0.5,
          "LowCut" : 19.9,
          "Speed" : 0.01999998,
          "SyncSelect1" : 6,
          "@enabled" : true,
          "TempoSync1" : true,
          "@path" : 0,
          "@trails" : false,
          "@type" : 7,
          "Mix" : 0.3099999,
          "ModulationMode" : 0,
          "Time" : 1,
          "Level" : 0,
          "@stereo" : true,
          "Spread" : 1,
          "HighCut" : 20100,
          "Depth" : 0.5
        },
        "block5" : {
          "@model" : "HD2_TremoloOpticalTrem",
          "@position" : 7,
          "SyncSelect1" : 1,
          "TempoSync1" : true,
          "Intensity" : 0.6700001,
          "Speed" : 0.6600001,
          "@enabled" : true,
          "@path" : 1,
          "@type" : 0,
          "Level" : -7.4,
          "@stereo" : true,
          "Spread" : 1
        },
        "outputA" : {
          "@model" : "HD2_AppDSPFlowOutput",
          "@output" : 1,
          "pan" : 0.5,
          "gain" : 0
        },
        "block4" : {
          "@model" : "HD2_ReverbCave",
          "@position" : 6,
          "LowCut" : 59,
          "@enabled" : true,
          "@path" : 1,
          "@trails" : false,
          "@type" : 7,
          "Mix" : 0.8199999,
          "Level" : 0,
          "Decay" : 0.9300001,
          "HighCut" : 9400,
          "Predelay" : 0.04999995
        }
      },
      "snapshot1" : {
        "@pedalstate" : 2,
        "@ledcolor" : 0,
        "@name" : "SNAPSHOT 2",
        "@tempo" : 109.8231
      },
      "snapshot5" : {
        "@pedalstate" : 2,
        "@ledcolor" : 0,
        "@name" : "SNAPSHOT 6",
        "@tempo" : 109.8231
      },
      "dsp0" : {
        "block0" : {
          "@model" : "HD2_DistScream808",
          "@path" : 0,
          "@stereo" : false,
          "@type" : 0,
          "Gain" : 0.4,
          "@position" : 2,
          "Level" : 0.76,
          "Tone" : 0.34,
          "@enabled" : false
        },
        "block1" : {
          "Bias" : 0.5,
          "@model" : "HD2_AmpMatchstickCh1",
          "Master" : 1,
          "@position" : 3,
          "Cut" : 0,
          "Treble" : 0.5,
          "ChVol" : 0.9300001,
          "@enabled" : true,
          "Ripple" : 0.5,
          "@path" : 0,
          "@type" : 1,
          "Bass" : 0.55,
          "BiasX" : 0.5,
          "Hum" : 0.5,
          "Ch1Drive" : 0.14,
          "@bypassvolume" : 1,
          "Presence" : 0.1900001,
          "Sag" : 0.5
        },
        "block2" : {
          "@model" : "HD2_ImpulseResponse1024",
          "LowCut" : 100,
          "@path" : 0,
          "@type" : 5,
          "Index" : 108,
          "@position" : 4,
          "Level" : -18,
          "Mix" : 1,
          "@enabled" : false,
          "HighCut" : 20100
        },
        "block3" : {
          "@model" : "HD2_Cab4X12CaliV30",
          "Level" : 0,
          "LowCut" : 19.9,
          "@path" : 0,
          "@mic" : 4,
          "@type" : 2,
          "@position" : 5,
          "Distance" : 2,
          "EarlyReflections" : 0,
          "@enabled" : true,
          "HighCut" : 20100
        },
        "inputA" : {
          "@input" : 1,
          "@model" : "HD2_AppDSPFlow1Input",
          "noiseGate" : false,
          "decay" : 0.5,
          "threshold" : -48
        },
        "inputB" : {
          "@input" : 0,
          "@model" : "HD2_AppDSPFlow2Input",
          "noiseGate" : false,
          "decay" : 0.5,
          "threshold" : -48
        },
        "join" : {
          "@model" : "HD2_AppDSPFlowJoin",
          "B Pan" : 0.5,
          "B Level" : 0,
          "A Level" : 0,
          "A Pan" : 0.5,
          "@position" : 8,
          "Level" : 0,
          "@enabled" : true,
          "B Polarity" : false
        },
        "split" : {
          "BalanceA" : 0.5,
          "@model" : "HD2_AppDSPFlowSplitY",
          "@enabled" : true,
          "bypass" : false,
          "@position" : 0,
          "BalanceB" : 0.5
        },
        "outputB" : {
          "@model" : "HD2_AppDSPFlowOutput",
          "@output" : 0,
          "pan" : 0.5,
          "gain" : 0
        },
        "outputA" : {
          "@model" : "HD2_AppDSPFlowOutput",
          "@output" : 2,
          "pan" : 0.5,
          "gain" : 0
        }
      },
      "snapshot2" : {
        "@pedalstate" : 2,
        "@ledcolor" : 0,
        "@name" : "SNAPSHOT 3",
        "@tempo" : 109.8231
      },
      "global" : {
        "@variax_volumeknob" : -0.1,
        "@pedalstate" : 2,
        "@variax_customtuning" : false,
        "@variax_str1tuning" : 0,
        "@variax_str2tuning" : 0,
        "@variax_str4tuning" : 0,
        "@variax_str6tuning" : 0,
        "@variax_model" : 0,
        "@model" : "@global_params",
        "@topology0" : "A",
        "@cursor_dsp" : 0,
        "@cursor_path" : 0,
        "@guitarinputZ" : 0,
        "@tempo" : 48.23151,
        "@topology1" : "SABJ",
        "@cursor_position" : 2,
        "@variax_lockctrls" : 0,
        "@variax_magmode" : true,
        "@variax_str3tuning" : 0,
        "@variax_str5tuning" : 0,
        "@variax_toneknob" : -0.1,
        "@current_snapshot" : 0,
        "@cursor_group" : "block0"
      },
      "snapshot6" : {
        "@pedalstate" : 2,
        "@ledcolor" : 0,
        "@name" : "SNAPSHOT 7",
        "@tempo" : 109.8231
      },
      "footswitch" : {
        "dsp1" : {
          "block0" : {
            "@fs_label" : "Reverse Delay",
            "@fs_enabled" : true,
            "@fs_index" : 10,
            "@fs_ledcolor" : 458496,
            "@fs_momentary" : false
          },
          "block4" : {
            "@fs_momentary" : false,
            "@fs_customcolor" : 8,
            "@fs_index" : 5,
            "@fs_enabled" : true,
            "@fs_ledcolor" : 16723200,
            "@fs_customlabel" : "Ambience",
            "@fs_label" : "Cave"
          },
          "block1" : {
            "@fs_label" : "Plate",
            "@fs_enabled" : true,
            "@fs_index" : 11,
            "@fs_ledcolor" : 16723200,
            "@fs_momentary" : false
          },
          "block5" : {
            "@fs_momentary" : false,
            "@fs_customcolor" : 8,
            "@fs_index" : 5,
            "@fs_enabled" : true,
            "@fs_ledcolor" : 13055,
            "@fs_customlabel" : "Ambience",
            "@fs_label" : "Optical Trem"
          },
          "block2" : {
            "@fs_momentary" : false,
            "@fs_customcolor" : 8,
            "@fs_index" : 5,
            "@fs_enabled" : true,
            "@fs_ledcolor" : 3277055,
            "@fs_customlabel" : "Ambience",
            "@fs_label" : "Dual Pitch"
          },
          "block3" : {
            "@fs_momentary" : false,
            "@fs_customcolor" : 8,
            "@fs_index" : 5,
            "@fs_enabled" : true,
            "@fs_ledcolor" : 458496,
            "@fs_customlabel" : "Ambience",
            "@fs_label" : "Elephant Man"
          }
        },
        "dsp0" : {
          "block1" : {
            "@fs_label" : "Matchstick Ch1",
            "@fs_enabled" : true,
            "@fs_index" : 13,
            "@fs_ledcolor" : 16711683,
            "@fs_momentary" : false
          },
          "block0" : {
            "@fs_label" : "Scream 808",
            "@fs_enabled" : false,
            "@fs_index" : 2,
            "@fs_ledcolor" : 525824,
            "@fs_momentary" : false
          }
        }
      },
      "snapshot3" : {
        "@pedalstate" : 2,
        "@ledcolor" : 0,
        "@name" : "SNAPSHOT 4",
        "@tempo" : 109.8231
      },
      "snapshot0" : {
        "blocks" : {
          "dsp1" : {
            "block0" : true,
            "block4" : true,
            "block1" : true,
            "block5" : true,
            "block2" : true,
            "block3" : true
          },
          "dsp0" : {
            "block0" : false,
            "block1" : true,
            "block2" : false,
            "block3" : true
          }
        },
        "@pedalstate" : 2,
        "@ledcolor" : 0,
        "@name" : "SNAPSHOT 1",
        "@tempo" : 109.8231
      }
    },
    "device_version" : 35717152
  },
  "schema" : "L6Preset"
};

var hxModels = {
    // TODO: Add all models and type mappings

    /* Distortion */

    "HD2_DistKinkyBoost": {
        "type": "dist",
        "name": "Kinky Boost"
    },
    "HD2_DistDerangedMaster": {
        "type": "dist",
        "name": "Deranged Master"
    },
    "HD2_DistMinotaur": {
        "type": "dist",
        "name": "Minotaur"
    },
    "HD2_DistTeemah": {
        "type": "dist",
        "name": "Teemah!"
    },
    "HD2_DistCompulsiveDrive": {
        "type": "dist",
        "name": "Compulsive Drive"
    },
    "HD2_DistValveDriver": {
        "type": "dist",
        "name": "Valve Driver"
    },
    "HD2_DistTopSecretOD": {
        "type": "dist",
        "name": "Top Secret OD"
    },
    "HD2_DistScream808": {
        "type": "dist",
        "name": "Scream 808"
    },
    "HD2_DistHedgehogD9": {
        "type": "dist",
        "name": "Hedgehog D9"
    },
    "HD2_DistStuporOD": {
        "type": "dist",
        "name": "Stupor OD"
    },
    "HD2_DistDeezOneVintage": {
        "type": "dist",
        "name": "Deez One Vintage"
    },
    "HD2_DistDeezOneMod": {
        "type": "dist",
        "name": "Deez One Mod"
    },
    "HD2_DistVerminDist": {
        "type": "dist",
        "name": "Vermin Dist"
    },
    "HD2_DistKWB": {
        "type": "dist",
        "name": "KWB"
    },
    "HD2_DistArbitratorFuzz": {
        "type": "dist",
        "name": "Arbitrator Fuzz"
    },
    "HD2_DistTriangleFuzz": {
        "type": "dist",
        "name": "Triangle Fuzz"
    },
    "HD2_DistIndustrialFuzz": {
        "type": "dist",
        "name": "Industrial Fuzz"
    },
    "HD2_DistTycoctaviaFuzz": {
        "type": "dist",
        "name": "Tycoctavia Fuzz"
    },
   "HD2_DistWringerFuzz": {
        "type": "dist",
        "name": "Wringer Fuzz"
    },
   "HD2_DistThrifterFuzz": {
        "type": "dist",
        "name": "ThrifterFuzz"
    },
    "HD2_DistMegaphone": {
        "type": "dist",
        "name": "Megaphone"
    },
    "HD2_DistBitcrusher": {
        "type": "dist",
        "name": "Bitcrusher"
    },
    "HD2_DistObsidian7000": {
        "type": "dist",
        "name": "Obsidian 7000"
    },
    "HD2_DistClawthornDrive": {
        "type": "dist",
        "name": "Clawthorn Drive"
    },
    "HD2_DM4TubeDrive": {
        "type": "dist",
        "name": "Tube Drive"
    },
    "HD2_DM4Screamer": {
        "type": "dist",
        "name": "Screamer"
    },
    "HD2_DM4Overdrive": {
        "type": "dist",
        "name": "Overdrive"
    },
    "HD2_DM4ClassicDistortion": {
        "type": "dist",
        "name": "Classic Dist"
    },
    "HD2_DM4HeavyDistortion": {
        "type": "dist",
        "name": "Heavy Dist"
    },
    "HD2_DM4ColorDrive": {
        "type": "dist",
        "name": "Colordrive"
    },
    "HD2_DM4BuzzSaw": {
        "type": "dist",
        "name": "Buzz Saw"
    },
    "HD2_DM4FacialFuzz": {
        "type": "dist",
        "name": "Facial Fuzz"
    },
    "HD2_DM4JumboFuzz": {
        "type": "dist",
        "name": "Jumbo Fuzz"
    },
    "HD2_DM4FuzzPi": {
        "type": "dist",
        "name": "Fuzz Pi"
    },
    "HD2_DM4JetFuzz": {
        "type": "dist",
        "name": "Jet Fuzz"
    },
    "HD2_DM4Line6Drive": {
        "type": "dist",
        "name": "L6 Drive"
    },
    "HD2_DM4Line6Distortion": {
        "type": "dist",
        "name": "L6 Distortion"
    },
    "HD2_DM4SubOctFuzz": {
        "type": "dist",
        "name": "Sub Oct Fuzz"
    },
    "HD2_DM4OctaveFuzz": {
        "type": "dist",
        "name": "Octave Fuzz"
    },

    /* EQ */

    "HD2_EQSimple3Band": {
        "type": "eq",
        "name": "Simple EQ"
    },
    "HD2_EQLowCutHighCut": {
        "type": "eq",
        "name": "Low and High Cut"
    },
    "HD2_EQParametric": {
        "type": "eq",
        "name": "Parametric"
    },
    "HD2_EQGraphic10Band": {
        "type": "eq",
        "name": "10 Band Graphic"
    },
    "HD2_CaliQ": {
        "type": "eq",
        "name": "Cali Q Graphic"
    },

    /* Amps */

    "HD2_AmpWhoWatt100": {
        "type":"amp",
        "name":"WhoWatt 100"
    },
    "HD2_AmpSoupPro": {
        "type":"amp",
        "name":"Soup Pro"
    },
    "HD2_AmpStoneAge185": {
        "type":"amp",
        "name":"Stone Age 185"
    },
    "HD2_AmpVoltageQueen": {
        "type":"amp",
        "name":"Voltage Queen"
    },
    "HD2_AmpTweedBluesNrm": {
        "type":"amp",
        "name":"Tweed Blues Nrm"
    },
    "HD2_AmpTweedBluesBrt": {
        "type":"amp",
        "name":"Tweed Blues Brt"
    },
    "HD2_AmpUSSmallTweed": {
        "type":"amp",
        "name":"US Small Tweed"
    },
    "HD2_AmpUSDeluxeNrm": {
        "type":"amp",
        "name":"US Deluxe Nrm"
    },
    "HD2_AmpUSDeluxeVib": {
        "type":"amp",
        "name":"US Deluxe Vib"
    },
    "HD2_AmpUSDoubleNrm": {
        "type":"amp",
        "name":"US Double Nrm"
    },
    "HD2_AmpUSDoubleVib": {
        "type":"amp",
        "name":"US Double Vib"
    },
    "HD2_AmpMailOrderTwin": {
        "type":"amp",
        "name":"Mail Order Twin"
    },
    "HD2_AmpDividedDuo": {
        "type":"amp",
        "name":"Divided Duo"
    },
    "HD2_AmpInterstateZed": {
        "type":"amp",
        "name":"Interstate Zed"
    },
    "HD2_AmpDerailedIngrid": {
        "type":"amp",
        "name":"Derailed Ingrid"
    },
    "HD2_AmpJazzRivet120": {
        "type":"amp",
        "name":"Jazz Rivet 120"
    },
    "HD2_AmpEssexA15": {
        "type":"amp",
        "name":"Essex A15"
    },
    "HD2_AmpEssexA30": {
        "type":"amp",
        "name":"Essex A30"
    },
    "HD2_AmpA30FawnNrm": {
        "type":"amp",
        "name":"A30 Fawn Nrm"
    },
    "HD2_AmpA30FawnBrt": {
        "type":"amp",
        "name":"A30 Fawn Brt"
    },
    "HD2_AmpMatchstickCh1": {
        "type":"amp",
        "name":"Matchstick Ch1"
    },
    "HD2_AmpMatchstickCh2": {
        "type":"amp",
        "name":"Matchstick Ch2"
    },
    "HD2_AmpMatchstickJump": {
        "type":"amp",
        "name":"Matchstick Jump"
    },
    "HD2_AmpMandarin80": {
        "type":"amp",
        "name":"Mandarin 80"
    },
    "HD2_AmpBritJ45Nrm": {
        "type":"amp",
        "name":"Brit J45 Nrm"
    },
    "HD2_AmpBritJ45Brt": {
        "type":"amp",
        "name":"Brit J45 Brt"
    },
    "HD2_AmpBritTremNrm": {
        "type":"amp",
        "name":"Brit Trem Nrm"
    },
    "HD2_AmpBritTremBrt": {
        "type":"amp",
        "name":"Brit Trem Brt"
    },
    "HD2_AmpBritTremJump": {
        "type":"amp",
        "name":"Brit Trem Jump"
    },
    "HD2_AmpBritPlexiNrm": {
        "type":"amp",
        "name":"Brit Plexi Nrm"
    },
    "HD2_AmpBritPlexiBrt": {
        "type":"amp",
        "name":"Brit Plexi Brt"
    },
    "HD2_AmpBritPlexiJump": {
        "type":"amp",
        "name":"Brit Plexi Jump"
    },
    "HD2_AmpBritP75Nrm": {
        "type":"amp",
        "name":"Brit P75 Nrm"
    },
    "HD2_AmpBritP75Brt": {
        "type":"amp",
        "name":"Brit P75 Brt"
    },
    "HD2_AmpBrit2204": {
        "type":"amp",
        "name":"Brit 2204"
    },
    "HD2_AmpPlacaterClean": {
        "type":"amp",
        "name":"Placater Clean"
    },
    "HD2_AmpPlacaterDirty": {
            "type":"amp",
            "name":"Placater Dirty"
        },
    "HD2_AmpCartographer": {
        "type":"amp",
        "name":"Cartographer"
    },
    "HD2_AmpGermanMahadeva": {
        "type":"amp",
        "name":"German Mahadeva"
    },
    "HD2_AmpGermanUbersonic": {
        "type":"amp",
        "name":"German Ubersonic"
    },
    "HD2_AmpCaliTexasCh1": {
        "type":"amp",
        "name":"Cali Texas Ch1"
    },
    "HD2_AmpCaliTexasCh2": {
        "type":"amp",
        "name":"Cali Texas Ch2"
    },
    "HD2_AmpCaliIVR1": {
        "type":"amp",
        "name":"Cali IV Rhythm 1"
    },
    "HD2_AmpCaliIVR2": {
        "type":"amp",
        "name":"Cali IV Rhythm 2"
    },
    "HD2_AmpCaliIVLead": {
        "type":"amp",
        "name":"Cali IV Lead"
    },
    "HD2_AmpCaliRectifire": {
        "type":"amp",
        "name":"Cali Rectifire"
    },
    "HD2_AmpArchetypeClean": {
        "type":"amp",
        "name":"Archetype Clean"
    },
    "HD2_AmpArchetypeLead": {
        "type":"amp",
        "name":"Archetype Lead"
    },
    "HD2_AmpANGLMeteor": {
        "type":"amp",
        "name":"ANGL Meteor"
    },
    "HD2_AmpSoloLeadClean": {
        "type":"amp",
        "name":"Solo Lead Clean"
    },
    "HD2_AmpSoloLeadCrunch": {
        "type":"amp",
        "name":"Solo Lead Crunch"
    },
    "HD2_AmpSoloLeadOD": {
        "type":"amp",
        "name":"Solo Lead OD"
    },
    "HD2_AmpPVPanama": {
            "type":"amp",
            "name":"PV Panama"
        },
    "HD2_AmpLine6Elektrik": {
        "type":"amp",
        "name":"Line 6 Elektrik"
    },
    "HD2_AmpLine6Doom": {
        "type":"amp",
        "name":"Line 6 Doom"
    },
    "HD2_AmpLine6Epic": {
        "type":"amp",
        "name":"Line 6 Epic"
    },
    "HD2_AmpLine62204Mod": {
        "type":"amp",
        "name":"Line 6 2204 Mod"
    },
    "HD2_AmpLine6Fatality": {
        "type":"amp",
        "name":"Line 6 Fatality"
    },
    "HD2_AmpLine6Litigator": {
        "type":"amp",
        "name":"Line 6 Litigator"
    },
    "HD2_AmpLine6Badonk": {
        "type":"amp",
        "name":"Line 6 Badonk"
    },
    "HD2_AmpTucknGo": {
        "type":"amp",
        "name":"Tuck n' Go"
    },
    "HD2_AmpSVBeastNrm": {
        "type":"amp",
        "name":"SV Beast Nrm"
    },
    "HD2_AmpSVBeastBrt": {
        "type":"amp",
        "name":"SV Beast Brt"
    },
    "HD2_AmpWoodyBlue": {
        "type":"amp",
        "name":"Woody Blue"
    },
    "HD2_AmpAgua51": {
        "type":"amp",
        "name":"Agua 51"
    },
    "HD2_AmpCaliBass": {
        "type":"amp",
        "name":"Cali Bass"
    },
    "HD2_AmpCali400Ch1": {
        "type":"amp",
        "name":"Cali 400 Ch1"
    },
    "HD2_AmpCali400Ch2": {
        "type":"amp",
        "name":"Cali 400 Ch2"
    },
    "HD2_AmpGCougar800": {
        "type":"amp",
        "name":"G Cougar 800"
    },
    "HD2_AmpDelSol300": {
        "type":"amp",
        "name":"Del Sol 300"
    },
    "HD2_AmpBusyOneCh1": {
        "type":"amp",
        "name":"Busy One Ch1"
    },
    "HD2_AmpBusyOneCh2": {
        "type":"amp",
        "name":"Busy One Ch2"
    },
    "HD2_AmpBusyOneJump": {
        "type":"amp",
        "name":"Busy One Jump"
    },

    /* Preamps */

    "HD2_PreampWhoWatt100": {
        "type":"preamp",
        "name":"WhoWatt 100"
    },
    "HD2_PreampSoupPro": {
        "type":"preamp",
        "name":"Soup Pro"
    },
    "HD2_PreampStoneAge185": {
        "type":"preamp",
        "name":"Stone Age 185"
    },
    "HD2_PreampVoltageQueen": {
        "type":"preamp",
        "name":"Voltage Queen"
    },
    "HD2_PreampTweedBluesNrm": {
        "type":"preamp",
        "name":"Tweed Blues Nrm"
    },
    "HD2_PreampTweedBluesBrt": {
        "type":"preamp",
        "name":"Tweed Blues Brt"
    },
    "HD2_PreampUSSmallTweed": {
        "type":"preamp",
        "name":"US Small Tweed"
    },
    "HD2_PreampUSDeluxeNrm": {
        "type":"preamp",
        "name":"US Deluxe Nrm"
    },
    "HD2_PreampUSDeluxeVib": {
        "type":"preamp",
        "name":"US Deluxe Vib"
    },
    "HD2_PreampUSDoubleNrm": {
        "type":"preamp",
        "name":"US Double Nrm"
    },
    "HD2_PreampUSDoubleVib": {
        "type":"preamp",
        "name":"US Double Vib"
    },
    "HD2_PreampMailOrderTwin": {
        "type":"preamp",
        "name":"Mail Order Twin"
    },
    "HD2_PreampDividedDuo": {
        "type":"preamp",
        "name":"Divided Duo"
    },
    "HD2_PreampInterstateZed": {
        "type":"preamp",
        "name":"Interstate Zed"
    },
    "HD2_PreampDerailedIngrid": {
        "type":"preamp",
        "name":"Derailed Ingrid"
    },
    "HD2_PreampJazzRivet120": {
        "type":"preamp",
        "name":"Jazz Rivet 120"
    },
    "HD2_PreampEssexA15": {
        "type":"preamp",
        "name":"Essex A15"
    },
    "HD2_PreampEssexA30": {
        "type":"preamp",
        "name":"Essex A30"
    },
    "HD2_PreampA30FawnNrm": {
        "type":"preamp",
        "name":"A30 Fawn Nrm"
    },
    "HD2_PreampA30FawnBrt": {
        "type":"preamp",
        "name":"A30 Fawn Brt"
    },
    "HD2_PreampMatchstickCh1": {
        "type":"preamp",
        "name":"Matchstick Ch1"
    },
    "HD2_PreampMatchstickCh2": {
        "type":"preamp",
        "name":"Matchstick Ch2"
    },
    "HD2_PreampMatchstickJump": {
        "type":"preamp",
        "name":"Matchstick Jump"
    },
    "HD2_PreampMandarin80": {
        "type":"preamp",
        "name":"Mandarin 80"
    },
    "HD2_PreampBritJ45Nrm": {
        "type":"preamp",
        "name":"Brit J45 Nrm"
    },
    "HD2_PreampBritJ45Brt": {
        "type":"preamp",
        "name":"Brit J45 Brt"
    },
    "HD2_PreampBritTremNrm": {
        "type":"preamp",
        "name":"Brit Trem Nrm"
    },
    "HD2_PreampBritTremBrt": {
        "type":"preamp",
        "name":"Brit Trem Brt"
    },
    "HD2_PreampBritTremJump": {
        "type":"preamp",
        "name":"Brit Trem Jump"
    },
    "HD2_PreampBritPlexiNrm": {
        "type":"preamp",
        "name":"Brit Plexi Nrm"
    },
    "HD2_PreampBritPlexiBrt": {
        "type":"preamp",
        "name":"Brit Plexi Brt"
    },
    "HD2_PreampBritPlexiJump": {
        "type":"preamp",
        "name":"Brit Plexi Jump"
    },
    "HD2_PreampBritP75Nrm": {
        "type":"preamp",
        "name":"Brit P75 Nrm"
    },
    "HD2_PreampBritP75Brt": {
        "type":"preamp",
        "name":"Brit P75 Brt"
    },
    "HD2_PreampBrit2204": {
        "type":"preamp",
        "name":"Brit 2204"
    },
    "HD2_PreampPlacaterClean": {
        "type":"preamp",
        "name":"Placater Clean"
    },
    "HD2_PreampPlacaterDirty": {
        "type":"preamp",
        "name":"Placater Dirty"
    },
    "HD2_PreampCartographer": {
        "type":"preamp",
        "name":"Cartographer"
    },
    "HD2_PreampGermanMahadeva": {
        "type":"preamp",
        "name":"German Mahadeva"
    },
    "HD2_PreampGermanUbersonic": {
        "type":"preamp",
        "name":"German Ubersonic"
    },
    "HD2_PreampCaliTexasCh1": {
        "type":"preamp",
        "name":"Cali Texas Ch1"
    },
    "HD2_PreampCaliTexasCh2": {
        "type":"preamp",
        "name":"Cali Texas Ch2"
    },
    "HD2_PreampCaliIVR1": {
        "type":"preamp",
        "name":"Cali IV Rhythm 1"
    },
    "HD2_PreampCaliIVR2": {
        "type":"preamp",
        "name":"Cali IV Rhythm 2"
    },
    "HD2_PreampCaliIVLead": {
        "type":"preamp",
        "name":"Cali IV Lead"
    },
    "HD2_PreampCaliRectifire": {
        "type":"preamp",
        "name":"Cali Rectifire"
    },
    "HD2_PreampArchetypeClean": {
        "type":"preamp",
        "name":"Archetype Clean"
    },
    "HD2_PreampArchetypeLead": {
        "type":"preamp",
        "name":"Archetype Lead"
    },
    "HD2_PreampANGLMeteor": {
        "type":"preamp",
        "name":"ANGL Meteor"
    },
    "HD2_PreampSoloLeadClean": {
        "type":"preamp",
        "name":"Solo Lead Clean"
    },
    "HD2_PreampSoloLeadCrunch": {
        "type":"preamp",
        "name":"Solo Lead Crunch"
    },
    "HD2_PreampSoloLeadOD": {
        "type":"preamp",
        "name":"Solo Lead OD"
    },
    "HD2_PreampPVPanama": {
        "type":"preamp",
        "name":"PV Panama"
    },
    "HD2_PreampLine6Elektrik": {
        "type":"preamp",
        "name":"Line 6 Elektrik"
    },
    "HD2_PreampLine6Doom": {
        "type":"preamp",
        "name":"Line 6 Doom"
    },
    "HD2_PreampLine6Epic": {
        "type":"preamp",
        "name":"Line 6 Epic"
    },
    "HD2_PreampLine62204Mod": {
        "type":"preamp",
        "name":"Line 6 2204 Mod"
    },
    "HD2_PreampLine6Fatality": {
        "type":"preamp",
        "name":"Line 6 Fatality"
    },
    "HD2_PreampLine6Litigator": {
        "type":"preamp",
        "name":"Line 6 Litigator"
    },
    "HD2_PreampLine6Badonk": {
        "type":"preamp",
        "name":"Line 6 Badonk"
    },
    "HD2_PreampTucknGo": {
        "type":"preamp",
        "name":"Tuck n' Go"
    },
    "HD2_PreampSVBeastNrm": {
        "type":"preamp",
        "name":"SV Beast Nrm"
    },
    "HD2_PreampSVBeastBrt": {
        "type":"preamp",
        "name":"SV Beast Brt"
    },
    "HD2_PreampWoodyBlue": {
        "type":"preamp",
        "name":"Woody Blue"
    },
    "HD2_PreampAgua51": {
        "type":"preamp",
        "name":"Agua 51"
    },
    "HD2_PreampCaliBass": {
        "type":"preamp",
        "name":"Cali Bass"
    },
    "HD2_PreampCali400Ch1": {
        "type":"preamp",
        "name":"Cali 400 Ch1"
    },
    "HD2_PreampCali400Ch2": {
        "type":"preamp",
        "name":"Cali 400 Ch2"
    },
    "HD2_PreampGCougar800": {
        "type":"preamp",
        "name":"G Cougar 800"
    },
    "HD2_PreampDelSol300": {
        "type":"preamp",
        "name":"Del Sol 300"
    },
    "HD2_PreampBusyOneCh1": {
        "type":"preamp",
        "name":"Busy One Ch1"
    },
    "HD2_PreampBusyOneCh2": {
        "type":"preamp",
        "name":"Busy One Ch2"
    },
    "HD2_PreampBusyOneJump": {
        "type":"preamp",
        "name":"Busy One Jump"
    },
    "HD2_PreampVintagePre": {
        "type":"preamp",
        "name":"Studio Tube Pre"
    },

    /* Delays */

    "HD2_DelaySimpleDelay": {
        "type": "delay",
        "name": "Simple Delay"
    },
    "HD2_DelayModChorusEcho": {
        "type": "delay",
        "name": "Mod/Cho Echo"
    },
    "HD2_DelayDualDelay": {
        "type": "delay",
        "name": "Dual Delay"
    },
    "HD2_DelayMultitap4": {
        "type": "delay",
        "name": "Multitap 4"
    },
    "HD2_DelayMultitap6": {
        "type": "delay",
        "name": "Multitap 6"
    },
    "HD2_DelayPingPong": {
        "type": "delay",
        "name": "Ping Pong"
    },
    "HD2_DelaySweepEcho": {
        "type": "delay",
        "name": "Sweep Echo"
    },
    "HD2_DelayDuckedDelay": {
        "type": "delay",
        "name": "Ducked Delay"
    },
    "HD2_DelayReverseDelay": {
        "type": "delay",
        "name": "Reverse Delay"
    },
    "HD2_DelayVintageDigitalV2": {
        "type": "delay",
        "name": "Vintage Digital"
    },
    "HD2_DelaySwellVintageDigital": {
        "type": "delay",
        "name": "Vintage Swell"
    },
    "HD2_DelayPitch": {
        "type": "delay",
        "name": "Pitch Echo"
    },
    "HD2_DelayTransistorTape": {
        "type": "delay",
        "name": "Transistor Tape"
    },
    "HD2_DelayCosmosEcho": {
        "type": "delay",
        "name": "Cosmos Echo"
    },
    "HD2_DelayHarmonyDelay": {
        "type": "delay",
        "name": "Harmony Delay"
    },
    "HD2_DelayBucketBrigade": {
        "type": "delay",
        "name": "Bucket Brigade"
    },
    "HD2_DelayAdriaticDelay": {
        "type": "delay",
        "name": "Adriatic Delay"
    },
    "HD2_DelaySwellAdriatic": {
        "type": "delay",
        "name": "Adriatic Swell"
    },
    "HD2_DelayElephantMan": {
        "type": "delay",
        "name": "Elephant Man"
    },
    "HD2_DelayMultiPass": {
        "type": "delay",
        "name": "Multi Pass"
    },
    "HD2_DL4PingPong": {
        "type": "delay",
        "name": "Ping Pong"
    },
    "HD2_DL4DynamicDelayStereo": {
        "type": "delay",
        "name": "Dynamic"
    },
    "HD2_DL4StereoDelay": {
        "type": "delay",
        "name": "Stereo"
    },
    "HD2_DL4DigDelay": {
        "type": "delay",
        "name": "Digital"
    },
    "HD2_DL4DigDelayWithMod": {
        "type": "delay",
        "name": "Dig w/Mod"
    },
    "HD2_DL4Reverse": {
        "type": "delay",
        "name": "Reverse"
    },
    "HD2_DL4LowResDelay": {
        "type": "delay",
        "name": "Lo Res"
    },
    "HD2_DL4TubeEchoStereo": {
        "type": "delay",
        "name": "Tube Echo"
    },
    "HD2_DL4TapeEchoStereo": {
        "type": "delay",
        "name": "Tape Echo"
    },
    "HD2_DL4SweepEchoStereo": {
        "type": "delay",
        "name": "Sweep Echo"
    },
    "HD2_DL4EchoPlatterStereo": {
        "type": "delay",
        "name": "Echo Platter"
    },
    "HD2_DL4AnalogDelayStereo": {
        "type": "delay",
        "name": "Analog Echo"
    },
    "HD2_DL4AnalogDelayStereoMod": {
        "type": "delay",
        "name": "Analog w/Mod"
    },
    "HD2_DL4AutoVolStereo": {
        "type": "delay",
        "name": "Auto-Vol Echo"
    },
    "HD2_DL4MultiheadStereo": {
        "type": "delay",
        "name": "Multi-Head"
    },

    /* Mod */

    "HD2_TremoloOpticalTrem": {
        "type": "mod",
        "name": "Optical Trem"
    },
    "HD2_ChorusTrinityChorus": {
        "type": "mod",
        "name": "Trinity Chorus"
    },
    "HD2_RotaryVibeRotary": {
        "type": "mod",
        "name": "Vibe Rotary"
    },
    "HD2_RingModulatorAMRingMod": {
        "type": "mod",
        "name": "AM Ring Mod"
    },
    "HD2_RingModulatorPitchRingMod": {
        "type": "mod",
        "name": "Pitch Ring Mod"
    },
    "HD2_DelayDoubleDouble": {
        "type": "mod",
        "name": "Double Take"
    },
    "HD2_Rotary145Rotary": {
        "type": "mod",
        "name": "145 Rotary"
    },
    "HD2_Rotary122Rotary": {
        "type": "mod",
        "name": "122 Rotary"
    },
    "HD2_Chorus70sChorus": {
        "type": "mod",
        "name": "70s Chorus"
    },
    "HD2_FlangerGrayFlanger": {
        "type": "mod",
        "name": "Gray Flanger"
    },
    "HD2_PhaserDeluxePhaser": {
        "type": "mod",
        "name": "Deluxe Phaser"
    },
    "HD2_Tremolo60sBiasTrem": {
        "type": "mod",
        "name": "60s Bias Trem"
    },
    "HD2_FlangerCourtesanFlange": {
        "type": "mod",
        "name": "Courtesan Flange"
    },
    "HD2_TremoloTremolo": {
        "type": "mod",
        "name": "Tremolo"
    },
    "HD2_Chorus": {
        "type": "mod",
        "name": "Chorus"
    },
    "HD2_VibratoBubbleVibrato": {
        "type": "mod",
        "name": "Bubble Vibrato"
    },
    "HD2_TremoloHarmonic": {
        "type": "mod",
        "name": "Harmonic Tremolo"
    },
    "HD2_ChorusPlastiChorus": {
        "type": "mod",
        "name": "PlastiChorus"
    },
    "HD2_TremoloPattern": {
        "type": "mod",
        "name": "Pattern Tremolo"
    },
    "HD2_FlangerHarmonicFlanger": {
        "type": "mod",
        "name": "Harmonic Flanger"
    },
    "HD2_PhaserScriptModPhase": {
        "type": "mod",
        "name": "Script Mod Phase"
    },
    "HD2_FlangerDynamixFlanger": {
        "type": "mod",
        "name": "Dynamix Flanger"
    },
    "HD2_PhaserUbiquitousVibe": {
        "type": "mod",
        "name": "Ubiquitous Vibe"
    },

    "HD2_MM4RingModulator": {
        "type": "mod",
        "name": "Ring Modulator"
    },
    "HD2_MM4FrequencyShifter": {
        "type": "mod",
        "name": "Frequency Shifter"
    },
    "HD2_M1380AFlanger": {
        "type": "mod",
        "name": "80A Flanger"
    },
    "HD2_M13ACFlanger": {
        "type": "mod",
        "name": "AC Flanger"
    },
    "HD2_MM4RotaryDrumHorn": {
        "type": "mod",
        "name": "Rotary Drum/Horn"
    },
    "HD2_MM4RotaryDrum": {
        "type": "mod",
        "name": "RotaryDrum"
    },
    "HD2_MM4TriChorus": {
        "type": "mod",
        "name": "Tri Chorus"
    },
    "HD2_MM4UVibe": {
        "type": "mod",
        "name": "UVibe"
    },
    "HD2_MM4JetFlanger": {
        "type": "mod",
        "name": "Jet Flanger"
    },
    "HD2_MM4Panner": {
        "type": "mod",
        "name": "Panner"
    },
    "HD2_MM4PitchVibrato": {
        "type": "mod",
        "name": "Pitch Vibrato"
    },
    "HD2_MM4BiasTremolo": {
        "type": "mod",
        "name": "Bias Tremolo"
    },
    "HD2_MM4AnalogChorus": {
        "type": "mod",
        "name": "Analog Chorus"
    },
    "HD2_MM4DualPhaser": {
        "type": "mod",
        "name": "Dual Phaser"
    },
    "HD2_MM4OptoTremolo": {
        "type": "mod",
        "name": "Opto Tremolo"
    },
    "HD2_MM4AnalogFlanger": {
        "type": "mod",
        "name": "Analog Flanger"
    },
    "HD2_MM4ScriptPhase": {
        "type": "mod",
        "name": "Script Phase"
    },
    "HD2_MM4Phaser": {
        "type": "mod",
        "name": "Phaser"
    },
    "HD2_MM4PatternTrem": {
        "type": "mod",
        "name": "Pattern Trem"
    },
    "HD2_MM4PannedPhaser": {
        "type": "mod",
        "name": "Panned Phaser"
    },
    "HD2_MM4Dimension": {
        "type": "mod",
        "name": "Dimension"
    },
    "HD2_MM4BarberpolePhaser": {
        "type": "mod",
        "name": "Barberpole Phaser"
    },

    /* IR */

    "HD2_ImpulseResponse1024": {
        "type": "ir",
        "name": "IR 1024"
    },
    "HD2_ImpulseResponse2048": {
        "type": "ir",
        "name": "IR 2048"
    },

    /* Cabs */

    "HD2_Cab1x6x9SoupProEllipse": {
        "type": "cab",
        "name": "Soup Pro Ellipse"
    },
    "HD2_Cab1x8SmallTweed": {
        "type": "cab",
        "name": "1x8 Small Tweed"
    },
    "HD2_Cab1x12FieldCoil": {
        "type": "cab",
        "name": "1x12 Field Coil"
    },
    "HD2_Cab1x12USDeluxe": {
        "type": "cab",
        "name": "1x12 US Deluxe"
    },
    "HD2_Cab1x12Celest12H": {
        "type": "cab",
        "name": "1x12 Celest 12H"
    },
    "HD2_Cab1x12BlueBell": {
        "type": "cab",
        "name": "1x12 Blue Bell"
    },
    "HD2_Cab1x12Lead80": {
        "type": "cab",
        "name": "1x12 Lead 80"
    },
    "HD2_Cab1x12CaliExt": {
        "type": "cab",
        "name": "1x12 Cali Ext"
    },
    "HD2_Cab1x12CaliIV": {
        "type": "cab",
        "name": "1x12 Cali IV"
    },
    "HD2_Cab1x12DelSol": {
        "type": "cab",
        "name": "1x12 Del Sol"
    },
    "HD2_Cab1x12MatchH30": {
        "type": "cab",
        "name": "1x12 Match H30"
    },
    "HD2_Cab1x12MatchG25": {
        "type": "cab",
        "name": "1x12 Match G25"
    },
    "HD2_Cab2x12DoubleC12N": {
        "type": "cab",
        "name": "2x12 Double C12N"
    },
    "HD2_Cab2x12MailC12Q": {
        "type": "cab",
        "name": "2x12 Mail C12Q"
    },
    "HD2_Cab2x12Interstate": {
        "type": "cab",
        "name": "2x12 Interstate"
    },
    "HD2_Cab2x12JazzRivet": {
        "type": "cab",
        "name": "2x12 Jazz Rivet"
    },
    "HD2_Cab2x12SilverBell": {
        "type": "cab",
        "name": "2x12 Silver Bell"
    },
    "HD2_Cab2x12BlueBell": {
        "type": "cab",
        "name": "2x12 Blue Bell"
    },
    "HD2_Cab4x10TweedP10R": {
        "type": "cab",
        "name": "4x10 Tweed P10R"
    },
    "HD2_Cab4x12WhoWatt100": {
        "type": "cab",
        "name": "4x12 WhoWatt 100"
    },
    "HD2_Cab4x12MandarinEM": {
        "type": "cab",
        "name": "4x12 Mandarin EM"
    },
    "HD2_Cab4x12Greenback25": {
        "type": "cab",
        "name": "4x12 Greenback25"
    },
    "HD2_Cab4x12Greenback20": {
        "type": "cab",
        "name": "4x12 Greenback20"
    },
    "HD2_Cab4x12Blackback30": {
        "type": "cab",
        "name": "4x12 Blackback30"
    },
    "HD2_Cab4x121960T75": {
        "type": "cab",
        "name": "4x12 1960 T75"
    },
    "HD2_Cab4x12UberV30": {
        "type": "cab",
        "name": "4x12 Uber V30"
    },
    "HD2_Cab4x12UberT75": {
        "type": "cab",
        "name": "4x12 Uber T75"
    },
    "HD2_Cab4X12CaliV30": {
        "type": "cab",
        "name": "4x12 Cali V30"
    },
    "HD2_Cab4x12XXLV30": {
        "type": "cab",
        "name": "4x12 XXL V30"
    },
    "HD2_Cab4x12SoloLeadEM": {
        "type": "cab",
        "name": "4x12 SoloLead EM"
    },
    "HD2_Cab1x15TucknGo": {
        "type": "cab",
        "name": "1x15 Tuck n' Go"
    },
    "HD2_Cab1x18DelSol": {
        "type": "cab",
        "name": "1x18 Del Sol"
    },
    "HD2_Cab1x18WoodyBlue": {
        "type": "cab", "name": "1x18 Woody Blue"
    },
    "HD2_Cab2x15Brute": {
        "type": "cab", "name": "2x15 Brute"
    },
    "HD2_Cab4x10Rhino": {
        "type": "cab", "name": "4x10 Rhino"
    },
    "HD2_Cab6x10CaliPower": {
        "type": "cab", "name": "6x10 Cali Power"
    },
    "HD2_Cab8x10SVBeast": {
        "type": "cab", "name": "8x10 SV Beast"
    },

    /* Pitch */

    "HD2_PitchPitchWham": {
        "type": "pitch",
        "name": "Pitch Wham"
    },
    "HD2_PitchTwinHarmony": {
        "type": "pitch",
        "name": "Twin Harmony"
    },
    "HD2_PitchSimplePitch": {
        "type": "pitch", "name":
        "Simple Pitch"
    },
    "HD2_PitchDualPitch": {
        "type": "pitch",
        "name": "Dual Pitch"
    },
    "HD2_SynthSubtractive": {
        "type": "pitch",
        "name": "3 OSC Synth"
    },
    "HD2_Synth3NoteGenerator": {
        "type": "pitch",
        "name": "3 Note Generator"
    },
    "HD2_Synth4OSCGenerator": {
        "type": "pitch",
        "name": "4 OSC Generator"
    },
    "HD2_DM4BassOctaver": {
        "type": "pitch",
        "name": "Bass Octaver"
    },
    "HD2_M13TwoVoiceHarmony": {
        "type": "pitch",
        "name": "Smart Harmony"
    },
    "HD2_FM4OctiSynth": {
        "type": "pitch",
        "name": "Octi Synth"
    },
    "HD2_FM4SynthOMatic": {
        "type": "pitch",
        "name": "Synth O Matic"
    },
    "HD2_FM4AttackSynth": {
        "type": "pitch",
        "name": "Attack Synth"
    },
    "HD2_FM4SynthString": {
        "type": "pitch",
        "name": "Synth String"
    },
    "HD2_FM4Growler": {
        "type": "pitch",
        "name": "Growler"
    },

    /* Filter */

    "HD2_FilterMutantFilter": {
        "type": "filter",
        "name": "Mutant Filter"
    },
    "HD2_FilterMysterFilter": {
        "type": "filter",
        "name": "Mystery Filter"
    },
    "HD2_FilterAutoFilter": {
        "type": "filter",
        "name": "Autofilter"
    },
    "HD2_FM4VoiceBox": {
        "type": "filter",
        "name": "Voice Box"
    },
    "HD2_FM4VTron": {
        "type": "filter",
        "name": "V Tron"
    },
    "HD2_FM4QFilter": {
        "type": "filter",
        "name": "Q Filter"
    },
    "HD2_FM4Seeker": {
        "type": "filter",
        "name": "Seeker"
    },
    "HD2_FM4ObiWah": {
        "type": "filter",
        "name": "Obi Wah"
    },
    "HD2_FM4TronUp": {
        "type": "filter",
        "name": "Tron Up"
    },
    "HD2_FM4TronDown": {
        "type": "filter",
        "name": "Tron Down"
    },
    "HD2_FM4Throbber": {
        "type": "filter",
        "name": "Throbber"
    },
    "HD2_FM4SlowFilter": {
        "type": "filter",
        "name": "Slow Filter"
    },
    "HD2_FM4SpinCycle": {
        "type": "filter",
        "name": "Spin Cycle"
    },
    "HD2_FM4CometTrails": {
        "type": "filter",
        "name": "Comet Trails"
    },

    /* Comp */

    "HD2_CompressorDeluxeComp": {
        "type": "comp",
        "name": "Deluxe Comp"
    },
    "HD2_CompressorRedSqueeze": {
        "type": "comp",
        "name": "Red Squeeze"
    },
    "HD2_CompressorKinkyComp": {
        "type": "comp",
        "name": "Kinky Comp"
    },
    "HD2_CompressorLAStudioComp": {
        "type": "comp",
        "name": "LA Studio Comp"
    },
    "HD2_Compressor3BandComp": {
        "type": "comp",
        "name": "3-Band Comp"
    },
    "HD2_GateNoiseGate": {
        "type": "comp",
        "name": "Noise Gate"
    },
    "HD2_GateHardGate": {
        "type": "comp",
        "name": "Hard Gate"
    },
    "HD2_CompressorAutoSwell": {
        "type": "comp",
        "name": "Autoswell"
    },
    "HD2_DM4TubeComp": {
        "type": "comp",
        "name": "Tube Comp"
    },
    "HD2_DM4RedComp": {
        "type": "comp",
        "name": "Red Comp"
    },
    "HD2_DM4BlueComp": {
        "type": "comp",
        "name": "Blue Comp"
    },
    "HD2_DM4BlueCompTreb": {
        "type": "comp",
        "name": "Blue Comp Treb"
    },
    "HD2_DM4VettaComp": {
        "type": "comp",
        "name": "Vetta Comp"
    },
    "HD2_DM4VettaJuice": {
        "type": "comp",
        "name": "Vetta Juice"
    },
    "HD2_DM4BoostComp": {
        "type": "comp",
        "name": "Boost Comp"
    },

    /* Vol-Pan */

    "HD2_VolPanVol": {
        "type": "vol-pan",
        "name": "Volume"
    },
    "HD2_VolPanGain": {
        "type": "vol-pan",
        "name": "Gain"
    },
    "HD2_VolPanPan": {
        "type": "vol-pan",
        "name": "Pan"
    },
    "HD2_VolPanStereoWidth": {
        "type": "vol-pan",
        "name": "Stereo Width"
    },

    /* Looper */

    "HD2_Looper": {
        "type": "looper",
        "name": "6 Switch Looper"
    },
    "HD2_LooperOneSwitch": {
        "type": "looper",
        "name": "1 Switch Looper"
    },

    /* Send-Return */

    "HD2_SendMono1": {
        "type": "send-return",
        "name": "Send 1"
    },
    "HD2_SendMono2": {
        "type": "send-return",
        "name": "Send 2"
    },
    "HD2_SendMono3": {
        "type": "send-return",
        "name": "Send 3"
    },
    "HD2_SendMono4": {
        "type": "send-return",
        "name": "Send 4"
    },
    "HD2_ReturnMono1": {
        "type": "send-return",
        "name": "Return 1"
    },
    "HD2_ReturnMono2": {
        "type": "send-return",
        "name": "Return 2"
    },
    "HD2_ReturnMono3": {
        "type": "send-return",
        "name": "Return 3"
    },
    "HD2_ReturnMono4": {
        "type": "send-return",
        "name": "Return 4"
    },
    "HD2_FXLoopMono1": {
        "type": "send-return",
        "name": "FX Loop 1"
    },
    "HD2_FXLoopMono2": {
        "type": "send-return",
        "name": "FX Loop 2"
    },
    "HD2_FXLoopMono3": {
        "type": "send-return",
        "name": "FX Loop 3"
    },
    "HD2_FXLoopMono4": {
        "type": "send-return",
        "name": "FX Loop 4"
    },
    "HD2_SendStereo1_2": {
        "type": "send-return",
        "name": "Send 1/2"
    },
    "HD2_SendStereo3_4": {
        "type": "send-return",
        "name": "Send 3/4"
    },
    "HD2_ReturnStereo1_2": {
        "type": "send-return",
        "name": "Return 1/2"
    },
    "HD2_ReturnStereo3_4": {
        "type": "send-return",
        "name": "Return 3/4"
    },
    "HD2_FXLoopStereo1_2": {
        "type": "send-return",
        "name": "FX Loop 1/2"
    },
    "HD2_FXLoopStereo3_4": {
        "type": "send-return",
        "name": "FX Loop 3/4"
    },

    /* Reverb */

    "HD2_ReverbGlitz": {
        "type": "reverb",
        "name": "Glitz"
    },
    "HD2_ReverbGanymede": {
        "type": "reverb",
        "name": "Ganymede"
    },
    "HD2_ReverbSearchlights": {
        "type": "reverb",
        "name": "Searchlights"
    },
    "HD2_ReverbPlateaux": {
        "type": "reverb",
        "name": "Plateaux"
    },
    "HD2_ReverbDoubleTank": {
        "type": "reverb",
        "name": "Double Tank"
    },
    "HD2_ReverbPlate": {
        "type": "reverb",
        "name": "Plate"
    },
    "HD2_ReverbRoom": {
        "type": "reverb",
        "name": "Room"
    },
    "HD2_ReverbChamber": {
        "type": "reverb",
        "name": "Chamber"
    },
    "HD2_ReverbHall": {
        "type": "reverb",
        "name": "Hall"
    },
    "HD2_ReverbEcho": {
        "type": "reverb",
        "name": "Echo"
    },
    "HD2_ReverbTile": {
        "type": "reverb",
        "name": "Tile"
    },
    "HD2_ReverbCave": {
        "type": "reverb",
        "name": "Cave"
    },
    "HD2_ReverbDucking": {
        "type": "reverb",
        "name": "Ducking"
    },
    "HD2_ReverbOcto": {
        "type": "reverb",
        "name": "Octo"
    },
    "HD2_Reverb63Spring": {
        "type": "reverb",
        "name": "'63 Spring"
    },
    "HD2_ReverbSpring": {
        "type": "reverb",
        "name": "Spring"
    },
    "HD2_ReverbParticle": {
        "type": "reverb",
        "name": "Particle Verb"
    },

    /* Wah */

    "HD2_WahUKWah846": {
        "type": "wah",
        "name": "UK Wah 846"
    },
    "HD2_WahTeardrop310": {
        "type": "wah",
        "name": "Teardrop 310"
    },
    "HD2_WahFassel": {
        "type": "wah",
        "name": "Fassel"
    },
    "HD2_WahWeeper": {
        "type": "wah",
        "name": "Weeper"
    },
    "HD2_WahChrome": {
        "type": "wah",
        "name": "Chrome"
    },
    "HD2_WahChromeCustom": {
        "type": "wah",
        "name": "Chrome Custom"
    },
    "HD2_WahThroaty": {
        "type": "wah",
        "name": "Throaty"
    },
    "HD2_WahVettaWah": {
        "type": "wah",
        "name": "Vetta Wah"
    },
    "HD2_WahColorful": {
        "type": "wah",
        "name": "Colorful"
    },
    "HD2_WahConductor": {
        "type": "wah",
        "name": "Conductor"
    },

    /* Ins, Outs, Splits, and Joins */

    "HD2_AppDSPFlowSplitY": {
        "type": "split",
        "name": "Split Y"
    },
    "HD2_AppDSPFlowSplitAB": {
        "type": "split",
        "name": "Split A/B"
    },
    "HD2_AppDSPFlowSplitXOver": {
        "type": "split",
        "name": "Split Crossover"
    },
    "HD2_AppDSPFlowJoin": {
        "type": "join",
        "name": "Mixer"
    },
    "HD2_AppDSPFlow1Input": {
        "type": "input",
        "name": "Flow 1 Input"
    },
    "HD2_AppDSPFlow2Input": {
        "type": "input",
        "name": "Flow 2 Input"
    },
    "HD2_AppDSPFlowOutput": {
        "type": "output",
        "name": "Output"
    }
};

var hxLabels = {
    "@bypassvolume": "Bypass Volume",
    "@cab": "Cab",
    "@enabled": "Enabled",
    "@model": "Model",
    "@path": "Path",
    "@position": "Position",
    "@stereo": "Stereo",
    "@trails": "Trails",
    "@type": "Type",
    "125Hz": "125Hz",
    "16kHz": "16kHz",
    "1kHz": "1kHz",
    "2200Hz": "2200Hz",
    "240Hz": "240Hz",
    "250Hz": "250Hz",
    "2kHz": "2kHz",
    "31p25Hz": "31p25Hz",
    "4kHz": "4kHz",
    "500Hz": "500Hz",
    "62p5Hz": "62p5Hz",
    "6600Hz": "6600Hz",
    "750Hz": "750Hz",
    "80Hz": "80Hz",
    "8kHz": "8kHz",
    "AM": "AM",
    "AM/FM": "AM/FM",
    "AMFreq": "AM Frequency",
    "Amount": "Amount",
    "Asym": "Asym",
    "Attack": "Attack",
    "Auto": "Auto",
    "Balance": "Balance",
    "Bass": "Bass",
    "BassFreq": "Bass Frequency",
    "BBD Size": "BBD Size",
    "Bias": "Bias",
    "BiasX": "Bias X",
    "BitDepth": "Bit Depth",
    "Blend": "Blend",
    "Boost": "Boost",
    "Bright": "Bright",
    "C45": "C45",
    "Cents1": "Cents 1",
    "Cents2": "Cents 2",
    "ChorusIntensity": "Chorus Intensity",
    "CH Vib": "Chorus Vibration",
    "ChVol": "Channel Volume",
    "Clipping": "Clipping",
    "CloseThreshold": "Close Threshold",
    "Color": "Color",
    "Comp": "Compression",
    "Compress": "Compression",
    "Condition": "Condition",
    "CV Decay": "CV Decay",
    "CV Dynamics": "CV Dynamics",
    "CV Tracking": "CV Tracking",
    "Decay": "Decay",
    "Delay": "Delay",
    "DelayVoice1": "Delay Voice 1",
    "DelayVoice2": "Delay Voice 2",
    "Depth": "Depth",
    "Depth1": "Depth 1",
    "Depth2": "Depth 2",
    "Depth3": "Depth 3",
    "Detector": "Detector",
    "Diffusion": "Diffusion",
    "Direction": "Direction",
    "Distortion": "Distortion",
    "Doubles": "Doubles",
    "Drive": "Drive",
    "Dry Level": "Dry Level",
    "DryLevel": "Dry Level",
    "DryPan": "Dry Pan",
    "DryThru": "Dry Thru",
    "Ducking": "Ducking",
    "DutyCycle": "DutyCycle",
    "DutyVoice1": "Duty Voice 1",
    "DutyVoice2": "Duty Voice 2",
    "DutyVoice3": "Duty Voice 3",
    "DynAttack": "Dyn Attack",
    "DynRel": "Dyn Release",
    "DynType": "Dyn Type",
    "Emphasis": "Emphasis",
    "End": "End",
    "Enhance": "Enhance",
    "Env Input": "Envelope Input",
    "Env Lag": "Envelope Lag",
    "FM Voice3to1": "FM Voice 3 to 1",
    "FastSpeed": "Fast Speed",
    "Fat": "Fat",
    "FBTone": "Feedback Tone",
    "FcHigh": "Fc High",
    "FcLow": "Fc Low",
    "Feedback": "Feedback",
    "Filter": "Filter",
    "FilterGain": "FilterGain",
    "FilterMatrix": "Filter Matrix",
    "FilterQ": "FilterQ",
    "FilterType": "Filter Type",
    "FMAmount": "FM Amount",
    "FMDuty": "FM Duty",
    "FMOctave": "FM Octave",
    "FMPitch": "FM Pitch",
    "FMShape": "FM Shape",
    "Focus": "Focus",
    "Freq": "Freq",
    "FreqDepth": "Freq Depth",
    "Frequency": "Frequency",
    "Fuzz": "Fuzz",
    "FuzzGain": "Fuzz Gain",
    "FuzzLevel": "FuzzLevel",
    "FuzzOct": "Fuzz Oct",
    "FuzzTone": "Fuzz Tone",
    "FuzzType": "Fuzz Type",
    "Gain": "Gain",
    "Gate": "Gate",
    "Grit": "Grit",
    "Grunt": "Grunt",
    "Harmonic": "Harmonic",
    "HBE": "HBE",
    "Headroom": "Headroom",
    "Heads 1-2": "Heads 1-2",
    "Heads 3-4": "Heads 3-4",
    "Heel": "Heel",
    "Hi Gain": "High Gain",
    "Hi Thresh": "High Threshold",
    "Hi X Freq": "High Crossover Frequency",
    "HiMid": "High Mid",
    "HiMidFreq": "High Mid Freq",
    "HighCut": "High Cut",
    "highCut": "High Cut",
    "HighFreq": "High Frequency",
    "HighGain": "High Gain",
    "HighQ": "High Q",
    "HoldTime": "Hold Time",
    "Horn Depth": "Horn Depth",
    "Index": "Index",
    "Intensity": "Intensity",
    "Interval1": "Interval 1",
    "Interval2": "Interval 2",
    "IntervalVoice1": "Interval Voice 1",
    "IntervalVoice2": "Interval Voice 2",
    "Key": "Key",
    "KeyVoice1": "Key Voice 1",
    "KeyVoice2": "Key Voice 2",
    "Knee": "Knee",
    "LampBias": "Lamp Bias",
    "Left": "Left",
    "Left Time": "Left Time",
    "LeftBoost": "Left Boost",
    "LeftFeedback": "Left Feedback",
    "Level": "Level",
    "LevelRootVoice": "Level Root Voice",
    "LevelVoice1": "Level Voice 1",
    "LevelVoice2": "Level Voice 2",
    "LevelVoice3": "Level Voice 3",
    "LFeedback": "Left Feedback",
    "LFO": "LFO",
    "LFORate": "LFO Rate",
    "LFOShape": "LFO Shape",
    "Lo Gain": "Low Gain",
    "Lo Thresh": "Low Threshold",
    "Lo X Freq": "Low Crossover Frequency",
    "LoMid": "Lo Mid",
    "LoMidFreq": "Low Mid Frequncy",
    "LowCut": "Low Cut",
    "LowFreq": "Low Frequency",
    "LowGain": "Low Gain",
    "LowQ": "Low Q",
    "LPHP": "LPHP",
    "LR In Swap": "LR In Swap",
    "LTime": "Left Time",
    "Manual": "Manual",
    "Master": "Master",
    "Max Delay": "Max Delay",
    "Mid": "Mid",
    "Mid Gain": "Mid Gain",
    "Mid Thresh": "Mid Threshold",
    "MidFreq": "Mid Frequency",
    "MidGain": "Mid Gain",
    "MidQ": "Mid Q",
    "Mix": "Mix",
    "MixL": "Mix Left",
    "MixR": "Mix Right",
    "Mod Mix": "Mod Mix",
    "ModSpeed": "Mod Speed",
    "Mode": "Mode",
    "Modulation": "Modulation",
    "ModulationMode": "Modulation Mode",
    "Noise": "Noise",
    "Normal": "Normal",
    "Notch Freq": "Notch Freq",
    "Notch Gain": "Notch Gain",
    "ODGain": "OD Gain",
    "ODLevel": "OD Level",
    "ODLowBoost": "OD Low Boost",
    "ODTone": "OD Tone",
    "Octave": "Octave",
    "OctaveVoice1": "Octave Voice 1",
    "OctaveVoice2": "Octave Voice 2",
    "OctaveVoice3": "Octave Voice 3",
    "Offset": "Offset",
    "OpenThreshold": "Open Threshold",
    "Osc1Freq": "OSC Frequency 1",
    "Osc1Glide": "OSC Glide 1",
    "Osc1Level": "OSC Level 1",
    "Osc1Note": "OSC Note 1",
    "Osc1Octave": "OSC Octave 1",
    "Osc1Pan": "OSC Pan 1",
    "Osc1Shape": "OSC Shape 1",
    "Osc2Freq": "OSC Frequency 2",
    "Osc2Glide": "OSC Glide 2",
    "Osc2Level": "OSC Level 2",
    "Osc2Note": "OSC Note 2",
    "Osc2Octave": "OSC Octave 2",
    "Osc2Pan": "OSC Pan 2",
    "Osc2Shape": "OSC Shape 2",
    "Osc3Freq": "OSC Frequency 3",
    "Osc3Glide": "OSC Glide 3",
    "Osc3Level": "OSC Level 3",
    "Osc3Note": "OSC Note 3",
    "Osc3Octave": "OSC Octave 3",
    "Osc3Pan": "OSC Pan 3",
    "Osc3Shape": "OSC Shape 3",
    "Osc4Freq": "OSC Frequency 4",
    "Osc4Level": "OSC Level 4",
    "Osc4Pan": "OSC Pan 4",
    "Osc4Shape": "OSC Shape 4",
    "Oscillator": "Oscillator",
    "Output": "Output",
    "Overdub": "Overdub",
    "Pan": "Pan",
    "Pan Speed": "Pan Speed",
    "PanDry": "Pan Dry",
    "PanRootVoice": "Pan Root Voice",
    "PanVoice1": "Pan Voice 1",
    "PanVoice2": "Pan Voice 2",
    "PanVoice3": "Pan Voice 3",
    "Pattern": "Pattern",
    "Peak": "Peak",
    "PeakReduction": "Peak Reduction",
    "Pedal": "Pedal Position",
    "Phasing": "Phasing",
    "Pitch": "Pitch",
    "Pitch2": "Pitch 2",
    "PitchMix": "Pitch Mix",
    "PitchVoice1": "Pitch Voice 1",
    "PitchVoice2": "Pitch Voice 2",
    "PitchVoice3": "Pitch Voice 3",
    "Playback": "Playback",
    "Predelay": "Pre-Delay",
    "Presence": "Presence",
    "Preset": "Preset",
    "PullDiode": "Pull Diode",
    "PushDiode": "Push Diode",
    "Q": "Q",
    "R Polarity": "R Polarity",
    "Ramp": "Ramp",
    "RampTime": "Ramp Time",
    "Range": "Range",
    "Rate": "Rate",
    "Ratio": "Ratio",
    "RealTimeSwitch": "Real Time Switch",
    "Recycle": "Recycle",
    "Regen": "Regen",
    "Rel Offset": "Release Offset",
    "Release": "Release",
    "Res": "Res",
    "Resonance": "Resonance",
    "Return": "Return",
    "Right": "Right",
    "Right Time": "Right Time",
    "RightBoost": "Right Boost",
    "RightFeedback": "Right Feedback",
    "RiseTime": "Rise Time",
    "RiseTimeSwitch": "Rise Time Switch",
    "RFeedback": "Right Feedback",
    "Ripple": "Ripple",
    "RTime": "Right Time",
    "SSwitch": "SSwitch",
    "Sag": "Sag",
    "SampleRate": "Samplerate",
    "Saturation": "Saturation",
    "Scale": "Scale",
    "ScaleVoice1": "Scale Voice 1",
    "ScaleVoice2": "Scale Voice 2",
    "Send": "Send",
    "Sens": "Sensitivity",
    "Sensitivity": "Sensitivity",
    "Shape": "Shape",
    "ShapeVoice1": "Shape Voice 1",
    "ShapeVoice2": "Shape Voice 2",
    "ShapeVoice3": "Shape Voice 3",
    "Shift": "Shift",
    "Slop": "Slop",
    "SlowSpeed": "Slow Speed",
    "Source": "Source",
    "Space": "Space",
    "Speed": "Speed",
    "Splice": "Splice",
    "Spread": "Spread",
    "Stability": "Stability",
    "Stage": "Stage",
    "Stages": "Stages",
    "Start": "Start",
    "Step1": "Step 1",
    "Step2": "Step 2",
    "Step3": "Step 3",
    "Step4": "Step 4",
    "Steps": "Steps",
    "Sub": "Sub",
    "Sustain": "Sustain",
    "SW1": "SW1",
    "SW2": "SW2",
    "SW3": "SW3",
    "SW4": "SW4",
    "SweepDepth": "Sweep Depth",
    "SweepResonance": "Sweep Resonance",
    "SweepShape": "Sweep Shape",
    "SweepSpeed": "Sweep Speed",
    "SweepSpread": "Sweep Spread",
    "SweepStart": "Sweep Start",
    "SweepSymmetry": "Sweep Symmetry",
    "Swell": "Swell",
    "SyncSelect1": "Sync Select 1",
    "SyncSelect2": "Sync Select 2",
    "SynthPreset": "Synth Preset",
    "Tap1Delay": "Tap Delay 1",
    "Tap1Level": "Tap Level 1",
    "Tap1Pan": "Tap Pan 1",
    "Tap2Delay": "Tap Delay 2",
    "Tap2Level": "Tap Level 2",
    "Tap2Pan": "Tap Pan 2",
    "Tap3Delay": "Tap Delay 3",
    "Tap3Level": "Tap Level 3",
    "Tap3Pan": "Tap Pan 3",
    "Tap4Delay": "Tap Delay 4",
    "Tap4Level": "Tap Level 4",
    "Tap4Pan": "Tap Pan 4",
    "Tap5Delay": "Tap Delay 5",
    "Tap5Level": "Tap Level 5",
    "Tap5Pan": "Tap Pan 5",
    "Tap6Delay": "Tap Delay 6",
    "Tap6Level": "Tap Level 6",
    "Tap6Pan": "Tap Pan 6",
    "Taper": "Taper",
    "TempoSync1": "Tempo Sync 1",
    "TempoSync2": "Tempo Sync 2",
    "Thick": "Thick",
    "Thresh": "Threshold",
    "Threshold": "Threshold",
    "Time": "Time",
    "Time1": "Time 1",
    "Time2": "Time 2",
    "Toe": "Toe",
    "Tone": "Tone",
    "TrebFreq": "Treble Frequency",
    "Treble": "Treble",
    "Type": "Type",
    "Version": "Version",
    "VibratoDepth": "Vibrato Depth",
    "VibratoRate": "Vibrato Rate",
    "Voice": "Voice",
    "Vol Sens": "Volume Sensitivity",
    "Volsens": "Volume Sensitivity",
    "VolSens": "Volume Sensitivity",
    "VolumeTaper": "Volume Taper Curve",
    "Wave": "Wave",
    "WaveShape": "Wave Shape",
    "Wet Level": "Wet Level",
    "Width": "Width",
    "Wow Flt": "Wow Flt",
    "WowFlutter": "Wow Flutter",
    "Xover": "Crossover"
};

Vue.filter('getModel', function (value, prop) {
    if (!value) return '';
    value = value.toString();
    if (typeof hxModels[value] !== "undefined") {
        return hxModels[value][prop];
    }  else {
        return "unknown";
    }
});

Vue.filter('getLabel', function (value) {
    if (!value) return '';
    value = value.toString();
    if (typeof hxLabels[value] !== "undefined") {
        return hxLabels[value];
    }  else {
        return value + "*";
    }
});

new Vue({
  render: h => h(App),
  data: {
      hxModels: hxModels,
      hxLabels: hxLabels,
      hxPreset: hxPreset
  }
}).$mount('#app')
