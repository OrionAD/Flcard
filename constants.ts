
import { Deck, Card, Topic, CertificationLevel } from './types';

export const INITIAL_DECKS: Deck[] = [
    {
        "id": "deck-cac",
        "name": "CAC System",
        "description": "Aviation CAC System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-pcu",
        "name": "PCU System",
        "description": "Aviation PCU System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-deflector",
        "name": "DEFLECTOR System",
        "description": "Aviation DEFLECTOR System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-ahv",
        "name": "AHV System",
        "description": "Aviation AHV System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-ozone",
        "name": "OZONE System",
        "description": "Aviation OZONE System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-sensors",
        "name": "SENSORS System",
        "description": "Aviation SENSORS System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-packs",
        "name": "PACKS System",
        "description": "Aviation PACKS System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-ram",
        "name": "RAM System",
        "description": "Aviation RAM System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-fan",
        "name": "FAN System",
        "description": "Aviation FAN System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-heatex",
        "name": "HEATEX System",
        "description": "Aviation HEATEX System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-acm",
        "name": "ACM System",
        "description": "Aviation ACM System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-condenser",
        "name": "CONDENSER System",
        "description": "Aviation CONDENSER System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-valves",
        "name": "VALVES System",
        "description": "Aviation VALVES System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-overheat",
        "name": "OVERHEAT System",
        "description": "Aviation OVERHEAT System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-recirc",
        "name": "RECIRC System",
        "description": "Aviation RECIRC System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-mixer",
        "name": "MIXER System",
        "description": "Aviation MIXER System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-distribution",
        "name": "DISTRIBUTION System",
        "description": "Aviation DISTRIBUTION System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-boost",
        "name": "BOOST System",
        "description": "Aviation BOOST System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-trim",
        "name": "TRIM System",
        "description": "Aviation TRIM System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-humidification",
        "name": "HUMIDIFICATION System",
        "description": "Aviation HUMIDIFICATION System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-heating",
        "name": "HEATING System",
        "description": "Aviation HEATING System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-dryers",
        "name": "DRYERS System",
        "description": "Aviation DRYERS System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-pecs",
        "name": "PECS System",
        "description": "Aviation PECS System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    },
    {
        "id": "deck-cpcs",
        "name": "CPCS System",
        "description": "Aviation CPCS System Questions",
        "category": "SYSTEMS",
        "certification": "ATP",
        "isCustom": false
    }
];

export const INITIAL_CARDS: Card[] = [
    {
        "id": "cac-0",
        "deckId": "deck-cac",
        "question": "How many CACs are installed on the airplane?",
        "answer": "Four (two per pack).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-1",
        "deckId": "deck-cac",
        "question": "What drives the CAC?",
        "answer": "A variable-speed electric motor.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-2",
        "deckId": "deck-cac",
        "question": "What type of bearings do CACs use?",
        "answer": "Air bearings.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-3",
        "deckId": "deck-cac",
        "question": "What is the primary purpose of the CAC?",
        "answer": "To pull in external air and provide hot, high-pressure supply air for the packs.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-4",
        "deckId": "deck-cac",
        "question": "What is the maximum speed of a CAC?",
        "answer": "47,929 rpm.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-5",
        "deckId": "deck-cac",
        "question": "Do CACs require oil for lubrication?",
        "answer": "No, they use air bearings.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-6",
        "deckId": "deck-cac",
        "question": "Where is the CAC cooling air exhausted?",
        "answer": "Into the ram air fan outlet duct.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-7",
        "deckId": "deck-cac",
        "question": "What is the source of CAC motor cooling air?",
        "answer": "Conditioned air from the primary heat exchanger.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-8",
        "deckId": "deck-cac",
        "question": "What adjusts the CAC inlet to prevent surges?",
        "answer": "A variable diffuser.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-9",
        "deckId": "deck-cac",
        "question": "How many CACs operate during normal ground operations?",
        "answer": "Only the inboard CACs.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-10",
        "deckId": "deck-cac",
        "question": "What determines which CAC shuts down first during descent?",
        "answer": "The need for nitrogen generation (typically R2).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-11",
        "deckId": "deck-cac",
        "question": "What is the standard CAC outlet temperature at 35,000 ft?",
        "answer": "200\u00b0F.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-12",
        "deckId": "deck-cac",
        "question": "What is the standard CAC outlet temperature below 30,000 ft?",
        "answer": "170\u00b0F.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-13",
        "deckId": "deck-cac",
        "question": "What is the maximum normal CAC outlet temperature?",
        "answer": "450\u00b0F.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-14",
        "deckId": "deck-cac",
        "question": "Which unit provides speed data to the PCU?",
        "answer": "The CAC motor controller via the CCS.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-15",
        "deckId": "deck-cac",
        "question": "What prevents debris from entering the CAC on the ground?",
        "answer": "The inlet deflector door.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-16",
        "deckId": "deck-cac",
        "question": "How is CAC efficiency controlled?",
        "answer": "By the Variable Diffuser Actuator.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-17",
        "deckId": "deck-cac",
        "question": "What happens to CACs during engine start?",
        "answer": "They decrease speed to 8,720 rpm.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-18",
        "deckId": "deck-cac",
        "question": "Where are CACs located?",
        "answer": "In the pack bays forward of the main gear.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-19",
        "deckId": "deck-cac",
        "question": "What is the function of the acoustic treatment in the CAC?",
        "answer": "Noise reduction.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-20",
        "deckId": "deck-cac",
        "question": "Is the CAC flow sensor located upstream or downstream of the ozone converter?",
        "answer": "Downstream.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-21",
        "deckId": "deck-cac",
        "question": "What type of power does the CAC motor use?",
        "answer": "Variable frequency AC.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-22",
        "deckId": "deck-cac",
        "question": "What protects the CAC from an overheat?",
        "answer": "Automatic shutdown by the PCU if outlet temp exceeds 450\u00b0F.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-23",
        "deckId": "deck-cac",
        "question": "Which CAC is labeled \\",
        "answer": "The left inboard compressor.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-24",
        "deckId": "deck-cac",
        "question": "Which CAC is labeled \\",
        "answer": "The right outboard compressor.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-25",
        "deckId": "deck-cac",
        "question": "Does a single CAC failure prevent pack operation?",
        "answer": "No, a pack can operate with one CAC.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-26",
        "deckId": "deck-cac",
        "question": "How does the PCU control CAC speed?",
        "answer": "It sends data to the Common Motor Start Controller (CMSC).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-27",
        "deckId": "deck-cac",
        "question": "What is the CAC intake source?",
        "answer": "External ambient air.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-28",
        "deckId": "deck-cac",
        "question": "What is the role of the CAC in nitrogen generation?",
        "answer": "It provides the high-pressure air source for the NGS.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cac-29",
        "deckId": "deck-cac",
        "question": "Can the CAC motor be cooled if the pack is off?",
        "answer": "No, it requires heat exchanger air.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-0",
        "deckId": "deck-pcu",
        "question": "How many PCUs are installed?",
        "answer": "Two (one per pack).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-1",
        "deckId": "deck-pcu",
        "question": "How many channels does each PCU have?",
        "answer": "Two (dual-channel).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-2",
        "deckId": "deck-pcu",
        "question": "How many channels are active at one time?",
        "answer": "Only one.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-3",
        "deckId": "deck-pcu",
        "question": "How is the PCU cooled?",
        "answer": "By air from the lower recirculation heat exchanger.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-4",
        "deckId": "deck-pcu",
        "question": "Where does PCU exhaust air go?",
        "answer": "To the ram air outlet duct.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-5",
        "deckId": "deck-pcu",
        "question": "Which unit does the PCU send data to for CAC speed control?",
        "answer": "The CMSC.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-6",
        "deckId": "deck-pcu",
        "question": "What are the three primary valves the PCU controls?",
        "answer": "LLV, ABPV, and ECV.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-7",
        "deckId": "deck-pcu",
        "question": "Does the PCU control the Ram Air Fan?",
        "answer": "Yes, via the RFMC.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-8",
        "deckId": "deck-pcu",
        "question": "What unit provides target temperature data to the PCU?",
        "answer": "The Common Core System (CCS).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-9",
        "deckId": "deck-pcu",
        "question": "How does the PCU interface with the pilot?",
        "answer": "Via the CCS and P5 panel.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-10",
        "deckId": "deck-pcu",
        "question": "What happens if PCU power is lost?",
        "answer": "Valves move to fail-safe positions.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-11",
        "deckId": "deck-pcu",
        "question": "Does the PCU monitor pack bay temperatures?",
        "answer": "Yes, it triggers a shutdown at 235\u00b0F.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-12",
        "deckId": "deck-pcu",
        "question": "What loop does the PCU use for CAC flow control?",
        "answer": "The inner loop.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-13",
        "deckId": "deck-pcu",
        "question": "What loop does the PCU use for total pack flow accuracy?",
        "answer": "The outer loop.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-14",
        "deckId": "deck-pcu",
        "question": "Can the PCU operate the pack in \\",
        "answer": "Yes, if the ACM fails.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-15",
        "deckId": "deck-pcu",
        "question": "Does the PCU control the Trim Air Pressure Regulator Valve?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-16",
        "deckId": "deck-pcu",
        "question": "How does the PCU control lower recirculation fans?",
        "answer": "It adjusts speed based on total flow requirements.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-17",
        "deckId": "deck-pcu",
        "question": "What unit performs the \\",
        "answer": "The PCU.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-18",
        "deckId": "deck-pcu",
        "question": "Where are the PCUs located?",
        "answer": "In the pack bays.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-19",
        "deckId": "deck-pcu",
        "question": "Does the PCU control the Ozone Converter?",
        "answer": "No, it monitors the air passing through it.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-20",
        "deckId": "deck-pcu",
        "question": "Which PCU controls the Right Inboard CAC?",
        "answer": "The Right PCU.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-21",
        "deckId": "deck-pcu",
        "question": "Can one PCU channel control the entire pack?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-22",
        "deckId": "deck-pcu",
        "question": "What is the PCU's role in the Economy Cooling mode?",
        "answer": "It opens the ECV.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-23",
        "deckId": "deck-pcu",
        "question": "How does the PCU respond to a duct overheat?",
        "answer": "It closes the associated trim valve.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-24",
        "deckId": "deck-pcu",
        "question": "Does the PCU use feedback from the ACM speed sensor?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-25",
        "deckId": "deck-pcu",
        "question": "What is the PCU's role during engine start?",
        "answer": "It commands recirculation fans to minimum speed.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-26",
        "deckId": "deck-pcu",
        "question": "Does the PCU monitor water extractor levels?",
        "answer": "No, but it manages the LLV to prevent ice.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-27",
        "deckId": "deck-pcu",
        "question": "How does the PCU communicate with other controllers?",
        "answer": "Via the CDN (Common Data Network).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-28",
        "deckId": "deck-pcu",
        "question": "Is the PCU responsible for Zonal Drying?",
        "answer": "No, that is a separate controller.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pcu-29",
        "deckId": "deck-pcu",
        "question": "Can the PCU reset a pack trip?",
        "answer": "Yes, when commanded by the pilot via the P5 panel.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-0",
        "deckId": "deck-deflector",
        "question": "What is the primary function of the deflector door?",
        "answer": "To protect the CAC inlet from water and debris on the ground.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-1",
        "deckId": "deck-deflector",
        "question": "When is the door normally deployed?",
        "answer": "During ground operations.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-2",
        "deckId": "deck-deflector",
        "question": "When is the door retracted?",
        "answer": "During flight to reduce drag.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-3",
        "deckId": "deck-deflector",
        "question": "What drives the door?",
        "answer": "An electric actuator.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-4",
        "deckId": "deck-deflector",
        "question": "What is the door's \\",
        "answer": "Closed (retracted).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-5",
        "deckId": "deck-deflector",
        "question": "What provides the \\",
        "answer": "A spring return device.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-6",
        "deckId": "deck-deflector",
        "question": "Which unit controls the door actuator?",
        "answer": "The PCU.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-7",
        "deckId": "deck-deflector",
        "question": "Can the airplane fly with the door stuck open?",
        "answer": "Yes, with performance adjustments per MEL.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-8",
        "deckId": "deck-deflector",
        "question": "Where is the door located?",
        "answer": "On the bottom of the wing-to-body fairing.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-9",
        "deckId": "deck-deflector",
        "question": "Does the door move during takeoff?",
        "answer": "It retracts once airspeed increases.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-10",
        "deckId": "deck-deflector",
        "question": "What is the door made of?",
        "answer": "Composite materials (Ref. general structure).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-11",
        "deckId": "deck-deflector",
        "question": "How many actuators are per door?",
        "answer": "One.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-12",
        "deckId": "deck-deflector",
        "question": "Is the door linked to the Ram Air doors?",
        "answer": "No, they operate independently.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-13",
        "deckId": "deck-deflector",
        "question": "Does the door have a manual override?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-14",
        "deckId": "deck-deflector",
        "question": "What signal tells the PCU to retract the door?",
        "answer": "Weight-off-wheels and airspeed.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-15",
        "deckId": "deck-deflector",
        "question": "What prevents the door from vibrating?",
        "answer": "Actuator locking logic.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-16",
        "deckId": "deck-deflector",
        "question": "Does the door operate if the associated pack is off?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-17",
        "deckId": "deck-deflector",
        "question": "How is door position sensed?",
        "answer": "By internal actuator switches.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-18",
        "deckId": "deck-deflector",
        "question": "Is the door inlet filtered?",
        "answer": "No, it is a direct opening.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-19",
        "deckId": "deck-deflector",
        "question": "Does ice affect door operation?",
        "answer": "Yes, but the actuator has high torque to break ice.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-20",
        "deckId": "deck-deflector",
        "question": "What is the actuator voltage?",
        "answer": "115V AC (Ref. PCU outputs).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-21",
        "deckId": "deck-deflector",
        "question": "Is the door interchangeable between left and right?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-22",
        "deckId": "deck-deflector",
        "question": "Where is the actuator accessed?",
        "answer": "Via the pack bay access panels.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-23",
        "deckId": "deck-deflector",
        "question": "Does the door have a \\",
        "answer": "No, it is binary (open/closed).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-24",
        "deckId": "deck-deflector",
        "question": "What is the door's effect on fuel burn?",
        "answer": "Significant drag if left open in flight.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-25",
        "deckId": "deck-deflector",
        "question": "Does the door deploy during landing?",
        "answer": "Yes, upon weight-on-wheels.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-26",
        "deckId": "deck-deflector",
        "question": "What is the door's maintenance \\",
        "answer": "PCU circuit breaker or ground maintenance mode.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-27",
        "deckId": "deck-deflector",
        "question": "Can a pilot see the door status?",
        "answer": "On the maintenance pages.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-28",
        "deckId": "deck-deflector",
        "question": "What protects the actuator from overload?",
        "answer": "Thermal protection in the motor.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "deflector-29",
        "deckId": "deck-deflector",
        "question": "Does the door assist in ram air recovery?",
        "answer": "No, it is purely for CAC protection.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-0",
        "deckId": "deck-ahv",
        "question": "What is the purpose of the AHV?",
        "answer": "To increase CAC outlet temperature by recirculating air.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-1",
        "deckId": "deck-ahv",
        "question": "Where does the AHV take air from?",
        "answer": "The CAC outlet duct.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-2",
        "deckId": "deck-ahv",
        "question": "Where does the AHV send the air?",
        "answer": "Back to the CAC inlet.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-3",
        "deckId": "deck-ahv",
        "question": "Which unit controls the AHV?",
        "answer": "The PCU.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-4",
        "deckId": "deck-ahv",
        "question": "What is the valve type?",
        "answer": "Modulating butterfly valve.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-5",
        "deckId": "deck-ahv",
        "question": "Why is adding heat necessary?",
        "answer": "To prevent ice or reach trim air requirements.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-6",
        "deckId": "deck-ahv",
        "question": "What is the AHV's fail position?",
        "answer": "Closed.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-7",
        "deckId": "deck-ahv",
        "question": "Does the AHV have a manual control?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-8",
        "deckId": "deck-ahv",
        "question": "How many AHVs per pack?",
        "answer": "Two (one per CAC).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-9",
        "deckId": "deck-ahv",
        "question": "What sensor does the PCU use to modulate the AHV?",
        "answer": "CAC outlet temperature sensor.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-10",
        "deckId": "deck-ahv",
        "question": "Does the AHV operate at high altitudes?",
        "answer": "Generally no, unless outlet temp is too low.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-11",
        "deckId": "deck-ahv",
        "question": "Is the AHV used for surge control?",
        "answer": "It can be used as a secondary method.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-12",
        "deckId": "deck-ahv",
        "question": "Where is the AHV located?",
        "answer": "In the CAC supply manifold.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-13",
        "deckId": "deck-ahv",
        "question": "What is the AHV actuator power?",
        "answer": "DC electric.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-14",
        "deckId": "deck-ahv",
        "question": "Does the AHV affect pack cooling capacity?",
        "answer": "Yes, it reduces it by adding heat.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-15",
        "deckId": "deck-ahv",
        "question": "Can the AHV cause a pack trip?",
        "answer": "Yes, if it fails open and causes a CAC overheat.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-16",
        "deckId": "deck-ahv",
        "question": "What is the valve diameter?",
        "answer": "Approx 1.5-2 inches (Ref. CAC ducting).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-17",
        "deckId": "deck-ahv",
        "question": "Is there a position indicator?",
        "answer": "Yes, internal to the actuator.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-18",
        "deckId": "deck-ahv",
        "question": "Does the AHV operate on the ground?",
        "answer": "Yes, frequently.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-19",
        "deckId": "deck-ahv",
        "question": "What is the \\",
        "answer": "170\u00b0F or 200\u00b0F depending on altitude.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-20",
        "deckId": "deck-ahv",
        "question": "Is the AHV used in Economy Cooling?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-21",
        "deckId": "deck-ahv",
        "question": "Does the AHV use PECS cooling?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-22",
        "deckId": "deck-ahv",
        "question": "Is the AHV interchangeable with the LLV?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-23",
        "deckId": "deck-ahv",
        "question": "What happens if the AHV is stuck closed?",
        "answer": "Lower trim air capability.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-24",
        "deckId": "deck-ahv",
        "question": "What happens if the AHV is stuck open?",
        "answer": "High CAC outlet temps and potential shutdown.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-25",
        "deckId": "deck-ahv",
        "question": "Does the AHV require regular lubrication?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-26",
        "deckId": "deck-ahv",
        "question": "How is it accessed?",
        "answer": "CAC access panels.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-27",
        "deckId": "deck-ahv",
        "question": "Does it have a spring return?",
        "answer": "Yes, to the closed position.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-28",
        "deckId": "deck-ahv",
        "question": "Is the AHV involved in the Ozone conversion?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ahv-29",
        "deckId": "deck-ahv",
        "question": "What is its primary maintenance task?",
        "answer": "Visual inspection and BITE test.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-0",
        "deckId": "deck-ozone",
        "question": "What is the primary function of the ozone converter?",
        "answer": "To remove ozone from CAC supply air.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-1",
        "deckId": "deck-ozone",
        "question": "Where is it located?",
        "answer": "Downstream of the CACs, upstream of the pack.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-2",
        "deckId": "deck-ozone",
        "question": "How does it remove ozone?",
        "answer": "Catalytic conversion (O3 to O2).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-3",
        "deckId": "deck-ozone",
        "question": "How many ozone converters are installed?",
        "answer": "Two (one per pack).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-4",
        "deckId": "deck-ozone",
        "question": "Does it have any moving parts?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-5",
        "deckId": "deck-ozone",
        "question": "Does it require electrical power?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-6",
        "deckId": "deck-ozone",
        "question": "What is the core material?",
        "answer": "Precious metal catalyst on a honeycomb structure.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-7",
        "deckId": "deck-ozone",
        "question": "Does it affect air temperature?",
        "answer": "It causes a slight temperature rise due to the chemical reaction.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-8",
        "deckId": "deck-ozone",
        "question": "What is the ozone converter's lifespan?",
        "answer": "Dependent on flight hours and ozone exposure.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-9",
        "deckId": "deck-ozone",
        "question": "Where is the trim air taken from?",
        "answer": "Downstream of the ozone converter.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-10",
        "deckId": "deck-ozone",
        "question": "Can the converter be clogged?",
        "answer": "Yes, by dust or oil, reducing efficiency.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-11",
        "deckId": "deck-ozone",
        "question": "Is there an \\",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-12",
        "deckId": "deck-ozone",
        "question": "How is its efficiency monitored?",
        "answer": "Generally not monitored in flight; periodic lab testing.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-13",
        "deckId": "deck-ozone",
        "question": "What is the casing made of?",
        "answer": "Stainless steel or titanium.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-14",
        "deckId": "deck-ozone",
        "question": "Does the converter remove smells?",
        "answer": "It can reduce some odors but is optimized for ozone.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-15",
        "deckId": "deck-ozone",
        "question": "Is it bypassed during ground operations?",
        "answer": "No, all CAC air passes through it.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-16",
        "deckId": "deck-ozone",
        "question": "Does high temperature help the reaction?",
        "answer": "Yes, catalytic conversion is more efficient with hot air.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-17",
        "deckId": "deck-ozone",
        "question": "Where is it accessed?",
        "answer": "Aft of the CACs in the pack bay.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-18",
        "deckId": "deck-ozone",
        "question": "What are the inlet/outlet diameters?",
        "answer": "Approx 4 inches.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-19",
        "deckId": "deck-ozone",
        "question": "Is the ozone converter interchangeable?",
        "answer": "Yes, between left and right packs.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-20",
        "deckId": "deck-ozone",
        "question": "Does the converter require PECS cooling?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-21",
        "deckId": "deck-ozone",
        "question": "What happens if it fails?",
        "answer": "Ozone enters the cabin, causing discomfort/health issues.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-22",
        "deckId": "deck-ozone",
        "question": "Does it have sensors?",
        "answer": "No, though temp sensors are nearby.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-23",
        "deckId": "deck-ozone",
        "question": "Is it part of the ACM?",
        "answer": "No, it is a separate duct component.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-24",
        "deckId": "deck-ozone",
        "question": "Does it function if only one CAC is running?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-25",
        "deckId": "deck-ozone",
        "question": "Is it removed for cleaning?",
        "answer": "No, it is usually replaced.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-26",
        "deckId": "deck-ozone",
        "question": "Does it restrict airflow?",
        "answer": "Minimally.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-27",
        "deckId": "deck-ozone",
        "question": "Is it protected by a filter?",
        "answer": "No, the CAC inlet is the only protection.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-28",
        "deckId": "deck-ozone",
        "question": "Does it function on the ground?",
        "answer": "Yes, but ozone is rare at sea level.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ozone-29",
        "deckId": "deck-ozone",
        "question": "Can it be installed backwards?",
        "answer": "No, it is keyed or flanged specifically.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-0",
        "deckId": "deck-sensors",
        "question": "Where is the CAC flow sensor located?",
        "answer": "Downstream of the ozone converter.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-1",
        "deckId": "deck-sensors",
        "question": "What does the flow sensor measure?",
        "answer": "Total mass airflow from the two CACs in a pack.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-2",
        "deckId": "deck-sensors",
        "question": "How many inlet pressure sensors per pack?",
        "answer": "Two (one per CAC).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-3",
        "deckId": "deck-sensors",
        "question": "What is measured by the inlet pressure sensor?",
        "answer": "Ambient air pressure at the CAC intake.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-4",
        "deckId": "deck-sensors",
        "question": "Where is the CAC outlet pressure sensor?",
        "answer": "In the duct before the pack.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-5",
        "deckId": "deck-sensors",
        "question": "Which unit uses sensor data to calculate flow?",
        "answer": "The PCU.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-6",
        "deckId": "deck-sensors",
        "question": "Can the airplane fly with one CAC inlet pressure sensor failed?",
        "answer": "Yes, if the other sensor in that pack is good.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-7",
        "deckId": "deck-sensors",
        "question": "What is the purpose of the outlet temp sensor?",
        "answer": "To protect the CAC from overheating.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-8",
        "deckId": "deck-sensors",
        "question": "Does the PCU use sensors for surge control?",
        "answer": "Yes, it compares inlet and outlet data.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-9",
        "deckId": "deck-sensors",
        "question": "What type of data is sent from the flow sensor?",
        "answer": "Digital signal to the PCU.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-10",
        "deckId": "deck-sensors",
        "question": "Is there a sensor for CAC motor temperature?",
        "answer": "Yes, internal to the motor/controller.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-11",
        "deckId": "deck-sensors",
        "question": "What does the PCU do if flow is too low?",
        "answer": "Increases CAC speed or adjusts the variable diffuser.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-12",
        "deckId": "deck-sensors",
        "question": "Are these sensors accessed in the pack bay?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-13",
        "deckId": "deck-sensors",
        "question": "Does the flow sensor detect reverse flow?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-14",
        "deckId": "deck-sensors",
        "question": "What is the \\",
        "answer": "Primary pack flow control.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-15",
        "deckId": "deck-sensors",
        "question": "What is the \\",
        "answer": "Flow rate calculation and accuracy.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-16",
        "deckId": "deck-sensors",
        "question": "Are the sensors dual-channel?",
        "answer": "Most are single-channel but redundant by pack layout.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-17",
        "deckId": "deck-sensors",
        "question": "What happens if the outlet pressure sensor fails?",
        "answer": "The pack may revert to a backup control mode.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-18",
        "deckId": "deck-sensors",
        "question": "Do these sensors require calibration?",
        "answer": "Generally no; they are self-testing.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-19",
        "deckId": "deck-sensors",
        "question": "Is the flow sensor a Pitot-static type?",
        "answer": "Yes (Ref. flow sensor technology).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-20",
        "deckId": "deck-sensors",
        "question": "Does the PCU monitor CAC current?",
        "answer": "No, the CMSC does.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-21",
        "deckId": "deck-sensors",
        "question": "What is the sensor's power source?",
        "answer": "Low voltage DC from the PCU.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-22",
        "deckId": "deck-sensors",
        "question": "Can sensors be swapped for troubleshooting?",
        "answer": "Yes, if they share the same part number.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-23",
        "deckId": "deck-sensors",
        "question": "Is moisture a problem for the flow sensor?",
        "answer": "Yes, but the CAC air is hot enough to prevent ice.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-24",
        "deckId": "deck-sensors",
        "question": "Where is the CAC 1 pressure sensor located?",
        "answer": "In the inlet duct near the deflector door.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-25",
        "deckId": "deck-sensors",
        "question": "Where is the CAC 2 pressure sensor located?",
        "answer": "Corresponding position on the outboard side.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-26",
        "deckId": "deck-sensors",
        "question": "Does the PCU log sensor faults?",
        "answer": "Yes, in the BITE memory.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-27",
        "deckId": "deck-sensors",
        "question": "Is there a \\",
        "answer": "Yes, at the inlet.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-28",
        "deckId": "deck-sensors",
        "question": "What is the flow sensor's maximum range?",
        "answer": "Approx 200 lb/min (Ref. total pack flow).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "sensors-29",
        "deckId": "deck-sensors",
        "question": "Are the sensors protected against lightning?",
        "answer": "Yes, via shielding and bonding.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-0",
        "deckId": "deck-packs",
        "question": "What is a \\",
        "answer": "A group of components that makes cold, dry air from hot CAC air.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-1",
        "deckId": "deck-packs",
        "question": "How many packs are on the airplane?",
        "answer": "Two.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-2",
        "deckId": "deck-packs",
        "question": "Does a pack use moisture to increase humidity?",
        "answer": "No, it removes moisture.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-3",
        "deckId": "deck-packs",
        "question": "What are the two primary cooling methods in a pack?",
        "answer": "Heat exchangers and the ACM.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-4",
        "deckId": "deck-packs",
        "question": "Can the airplane fly with one pack inoperative?",
        "answer": "Yes, with altitude limits.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-5",
        "deckId": "deck-packs",
        "question": "What is \\",
        "answer": "Cooling using only ram air when the ACM is failed.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-6",
        "deckId": "deck-packs",
        "question": "What is the pack outlet check valve for?",
        "answer": "To prevent reverse flow from the mix manifold.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-7",
        "deckId": "deck-packs",
        "question": "Where are the packs located?",
        "answer": "In the pack bays, forward of the main gear.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-8",
        "deckId": "deck-packs",
        "question": "What triggers an automatic pack shutdown?",
        "answer": "Pack bay overheat (235\u00b0F).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-9",
        "deckId": "deck-packs",
        "question": "How is the pack cooled on the ground?",
        "answer": "By the Ram Air Fan.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-10",
        "deckId": "deck-packs",
        "question": "Does the pack use PECS?",
        "answer": "No, it uses ram air and the ACM.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-11",
        "deckId": "deck-packs",
        "question": "What is the \\",
        "answer": "The point where pack air mixes with recirc air.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-12",
        "deckId": "deck-packs",
        "question": "Is pack air used for wing anti-ice?",
        "answer": "No (electric airplane).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-13",
        "deckId": "deck-packs",
        "question": "How much does a cooling pack weigh?",
        "answer": "Several hundred pounds (Ref. general structure).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-14",
        "deckId": "deck-packs",
        "question": "What is the pack's primary target?",
        "answer": "To meet the coldest zone temperature requirement.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-15",
        "deckId": "deck-packs",
        "question": "Does the pack operate during engine start?",
        "answer": "It may shut down or reduce flow.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-16",
        "deckId": "deck-packs",
        "question": "What signal does the PCU use for pack flow control?",
        "answer": "CAC flow sensor data.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-17",
        "deckId": "deck-packs",
        "question": "Are the packs identical?",
        "answer": "Yes, but mirrored in installation.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-18",
        "deckId": "deck-packs",
        "question": "How many ACM turbines are used per pack?",
        "answer": "Two (T1 and T2).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-19",
        "deckId": "deck-packs",
        "question": "What is the first stage of cooling?",
        "answer": "The primary heat exchanger.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-20",
        "deckId": "deck-packs",
        "question": "What is the final stage of cooling?",
        "answer": "The T2 turbine.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-21",
        "deckId": "deck-packs",
        "question": "Can the pilot turn a pack off manually?",
        "answer": "Yes, via the P5 panel.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-22",
        "deckId": "deck-packs",
        "question": "Does the pack have an \\",
        "answer": "Yes, it is the standard mode.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-23",
        "deckId": "deck-packs",
        "question": "Does the pack remove CO2?",
        "answer": "No, it relies on fresh air exchange.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-24",
        "deckId": "deck-packs",
        "question": "How is the pack accessed for maintenance?",
        "answer": "Large lower bay doors.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-25",
        "deckId": "deck-packs",
        "question": "What is the pack's maximum flow rate?",
        "answer": "Sufficient to provide fresh air for a full cabin.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-26",
        "deckId": "deck-packs",
        "question": "Is the pack part of the PECS system?",
        "answer": "No, they are separate cooling systems.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-27",
        "deckId": "deck-packs",
        "question": "Does the pack have its own fire detection?",
        "answer": "No, it uses the overheat sensors.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-28",
        "deckId": "deck-packs",
        "question": "What happens if both packs fail?",
        "answer": "The AVS system opens for ventilation.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "packs-29",
        "deckId": "deck-packs",
        "question": "Is pack operation linked to landing altitude?",
        "answer": "No, that is the pressurization system.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-0",
        "deckId": "deck-ram",
        "question": "What is the purpose of the ram air inlet door?",
        "answer": "To regulate the amount of cooling air for the heat exchangers.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-1",
        "deckId": "deck-ram",
        "question": "How many ram air inlet doors per pack?",
        "answer": "One.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-2",
        "deckId": "deck-ram",
        "question": "What drives the ram air doors?",
        "answer": "Electric actuators.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-3",
        "deckId": "deck-ram",
        "question": "Which system has priority for ram air door control?",
        "answer": "PECS.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-4",
        "deckId": "deck-ram",
        "question": "What is the maximum ground opening for the outlet door?",
        "answer": "45 degrees.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-5",
        "deckId": "deck-ram",
        "question": "What is the \\",
        "answer": "The distribution point for ram air into the heat exchangers.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-6",
        "deckId": "deck-ram",
        "question": "Are ram air doors binary or modulating?",
        "answer": "Modulating.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-7",
        "deckId": "deck-ram",
        "question": "Where is the water spray nozzle located?",
        "answer": "In the ram air inlet header.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-8",
        "deckId": "deck-ram",
        "question": "Does the inlet door close during cruise?",
        "answer": "It modulates to a small opening to reduce drag.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-9",
        "deckId": "deck-ram",
        "question": "What is the \\",
        "answer": "A device to prevent water/debris ingestion.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-10",
        "deckId": "deck-ram",
        "question": "How is the outlet door different from the inlet door?",
        "answer": "It controls air exit to manage pressure/drag.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-11",
        "deckId": "deck-ram",
        "question": "Does the door operate if the Ram Air Fan is on?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-12",
        "deckId": "deck-ram",
        "question": "What unit controls the ram air actuators?",
        "answer": "The PCU.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-13",
        "deckId": "deck-ram",
        "question": "What is the ram air source on the ground?",
        "answer": "Ambient air pulled by the fan.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-14",
        "deckId": "deck-ram",
        "question": "Can the ram air doors be moved manually for maintenance?",
        "answer": "Yes, via the Knurled knob.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-15",
        "deckId": "deck-ram",
        "question": "Is there an indicator for door position?",
        "answer": "Yes, on the actuator.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-16",
        "deckId": "deck-ram",
        "question": "Does the door close if smoke is detected in the pack?",
        "answer": "No (Ref. shutdown logic).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-17",
        "deckId": "deck-ram",
        "question": "What is the door construction?",
        "answer": "Carbon fiber/composite.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-18",
        "deckId": "deck-ram",
        "question": "What prevents reverse flow in the ram air system?",
        "answer": "The ram air fan check valve.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-19",
        "deckId": "deck-ram",
        "question": "Are the left and right doors interchangeable?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-20",
        "deckId": "deck-ram",
        "question": "Does the system use ram air for ACM cooling?",
        "answer": "Indirectly, through the heat exchangers.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-21",
        "deckId": "deck-ram",
        "question": "What is the actuator voltage?",
        "answer": "115V AC.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-22",
        "deckId": "deck-ram",
        "question": "How is ice prevented on the ram air doors?",
        "answer": "Aerodynamic design and actuator torque.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-23",
        "deckId": "deck-ram",
        "question": "Is there a \\",
        "answer": "No, it is integrated into pack status.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-24",
        "deckId": "deck-ram",
        "question": "What happens if a door actuator fails?",
        "answer": "The door remains in the last position.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-25",
        "deckId": "deck-ram",
        "question": "Do the doors move during takeoff?",
        "answer": "Yes, they modulate to a takeoff position.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-26",
        "deckId": "deck-ram",
        "question": "Is ram air used for the PECS heat exchanger?",
        "answer": "Yes, it is the primary cooling source.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-27",
        "deckId": "deck-ram",
        "question": "Where does the ram air exit the airplane?",
        "answer": "Through the outlet doors on the bottom of the fuselage.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-28",
        "deckId": "deck-ram",
        "question": "Are the outlet doors linked together?",
        "answer": "No, they are independent per pack.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "ram-29",
        "deckId": "deck-ram",
        "question": "Does the inlet header contain any sensors?",
        "answer": "Yes, temperature sensors.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-0",
        "deckId": "deck-fan",
        "question": "What is the purpose of the Ram Air Fan?",
        "answer": "To provide cooling airflow when ram air is insufficient (ground/low speed).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-1",
        "deckId": "deck-fan",
        "question": "What drives the Ram Air Fan?",
        "answer": "An electric motor.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-2",
        "deckId": "deck-fan",
        "question": "What unit controls the fan?",
        "answer": "The Ram Air Fan Motor Controller (RFMC).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-3",
        "deckId": "deck-fan",
        "question": "How is the RFMC cooled?",
        "answer": "By PECS liquid coolant.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-4",
        "deckId": "deck-fan",
        "question": "When does the fan operate in flight?",
        "answer": "At low airspeeds if cooling is needed.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-5",
        "deckId": "deck-fan",
        "question": "What is \\",
        "answer": "The RFMC runs the fan at 500 rpm to prevent bearing damage.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-6",
        "deckId": "deck-fan",
        "question": "How many fans per pack?",
        "answer": "One.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-7",
        "deckId": "deck-fan",
        "question": "What is the maximum fan speed?",
        "answer": "Approx 22,000 rpm.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-8",
        "deckId": "deck-fan",
        "question": "What prevents reverse airflow through the fan?",
        "answer": "The Ram Air Fan Check Valve.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-9",
        "deckId": "deck-fan",
        "question": "Is the fan motor AC or DC?",
        "answer": "Variable frequency AC.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-10",
        "deckId": "deck-fan",
        "question": "Where is the fan located?",
        "answer": "In the ram air outlet duct.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-11",
        "deckId": "deck-fan",
        "question": "Does the fan run during cruise?",
        "answer": "No, it is generally off or in windmilling protection.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-12",
        "deckId": "deck-fan",
        "question": "What happens if the RFMC fails?",
        "answer": "The fan is inoperative, limiting ground cooling.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-13",
        "deckId": "deck-fan",
        "question": "Does the fan assist in CAC motor cooling?",
        "answer": "Yes, by creating a pressure drop in the exhaust duct.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-14",
        "deckId": "deck-fan",
        "question": "Is the RFMC a dual-channel unit?",
        "answer": "No, it is single-channel.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-15",
        "deckId": "deck-fan",
        "question": "How is the RFMC accessed?",
        "answer": "In the pack bay.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-16",
        "deckId": "deck-fan",
        "question": "Does the fan have a BITE test?",
        "answer": "Yes, initiated by the PCU.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-17",
        "deckId": "deck-fan",
        "question": "Is the check valve flapper-type?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-18",
        "deckId": "deck-fan",
        "question": "Does the fan operate during PECS high-load conditions?",
        "answer": "Yes, even if the pack is off.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-19",
        "deckId": "deck-fan",
        "question": "What is the power source for the RFMC?",
        "answer": "115V AC from the main power panels.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-20",
        "deckId": "deck-fan",
        "question": "Can the fan be heard in the cabin?",
        "answer": "Only slightly during ground operations.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-21",
        "deckId": "deck-fan",
        "question": "Is the fan motor cooled by air or liquid?",
        "answer": "Air-cooled.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-22",
        "deckId": "deck-fan",
        "question": "Does the RFMC communicate via the CCS?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-23",
        "deckId": "deck-fan",
        "question": "What is the primary cause of fan failure?",
        "answer": "Bearing wear or controller overheat.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-24",
        "deckId": "deck-fan",
        "question": "Is the fan assembly interchangeable?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-25",
        "deckId": "deck-fan",
        "question": "What is the \\",
        "answer": "Adding PECS coolant to the controller before installation.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-26",
        "deckId": "deck-fan",
        "question": "Does the fan run during engine start?",
        "answer": "Usually, it is shed.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-27",
        "deckId": "deck-fan",
        "question": "Is the check valve spring-loaded?",
        "answer": "Yes, to the closed position.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-28",
        "deckId": "deck-fan",
        "question": "What is the fan's effect on ground noise?",
        "answer": "Significant; it is a major noise source.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "fan-29",
        "deckId": "deck-fan",
        "question": "Does the PCU monitor fan current?",
        "answer": "Yes, via the RFMC.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-0",
        "deckId": "deck-heatex",
        "question": "What is the role of the Primary Heat Exchanger?",
        "answer": "To perform the first cooling stage of hot CAC air.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-1",
        "deckId": "deck-heatex",
        "question": "Where is CAC air sent after the Primary HE?",
        "answer": "To the ACM Compressor.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-2",
        "deckId": "deck-heatex",
        "question": "What is the role of the Secondary Heat Exchanger?",
        "answer": "To cool air after it has been heated by the ACM Compressor.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-3",
        "deckId": "deck-heatex",
        "question": "What is the cooling medium for the heat exchangers?",
        "answer": "External ram air.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-4",
        "deckId": "deck-heatex",
        "question": "Are the Primary and Secondary HEs physically combined?",
        "answer": "Yes, in a single dual-pass core assembly.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-5",
        "deckId": "deck-heatex",
        "question": "How is cooling improved during hot days?",
        "answer": "By spraying water into the ram air header.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-6",
        "deckId": "deck-heatex",
        "question": "Where does the spray water come from?",
        "answer": "The pack's water extractor.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-7",
        "deckId": "deck-heatex",
        "question": "What is the HE assembly made of?",
        "answer": "Aluminum plate-fin structure.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-8",
        "deckId": "deck-heatex",
        "question": "Can the HE be cleaned?",
        "answer": "Yes, by back-flushing or chemical cleaning.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-9",
        "deckId": "deck-heatex",
        "question": "What happens if the HE is clogged with external dirt?",
        "answer": "Pack outlet temperature rises.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-10",
        "deckId": "deck-heatex",
        "question": "Is there a PECS heat exchanger in the pack bay?",
        "answer": "Yes, it is often mounted in parallel or series with the pack HEs.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-11",
        "deckId": "deck-heatex",
        "question": "What is the ACM Compressor's effect on temperature?",
        "answer": "It increases air temperature before it enters the Secondary HE.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-12",
        "deckId": "deck-heatex",
        "question": "How is ram air flow across the HE controlled?",
        "answer": "By the Ram Air Inlet and Outlet doors.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-13",
        "deckId": "deck-heatex",
        "question": "Does the HE have any moving parts?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-14",
        "deckId": "deck-heatex",
        "question": "Is there a bypass for the heat exchangers?",
        "answer": "No, all air passes through them.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-15",
        "deckId": "deck-heatex",
        "question": "What happens if an HE core leaks?",
        "answer": "Loss of conditioned air and potential airframe contamination.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-16",
        "deckId": "deck-heatex",
        "question": "Where is the HE assembly mounted?",
        "answer": "In the upper part of the ram air duct.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-17",
        "deckId": "deck-heatex",
        "question": "Are HEs interchangeable between left and right packs?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-18",
        "deckId": "deck-heatex",
        "question": "What is the typical temperature drop across the Primary HE?",
        "answer": "100\u00b0F to 200\u00b0F.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-19",
        "deckId": "deck-heatex",
        "question": "Does ice form on the ram side of the HE?",
        "answer": "Rarely, as the conditioned air side is very hot.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-20",
        "deckId": "deck-heatex",
        "question": "How is the HE protected from debris?",
        "answer": "By the ram air deflector.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-21",
        "deckId": "deck-heatex",
        "question": "What unit monitors HE performance?",
        "answer": "The PCU via temp sensors.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-22",
        "deckId": "deck-heatex",
        "question": "Is the Primary HE used for trim air?",
        "answer": "No, trim air is taken before the HE.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-23",
        "deckId": "deck-heatex",
        "question": "Is ram air temperature measured?",
        "answer": "Yes, at the header.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-24",
        "deckId": "deck-heatex",
        "question": "Does the HE assembly require electrical power?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-25",
        "deckId": "deck-heatex",
        "question": "What is the weight of the HE assembly?",
        "answer": "Approx 100-150 lbs.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-26",
        "deckId": "deck-heatex",
        "question": "Can one core be replaced independently?",
        "answer": "No, it is a single unit.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-27",
        "deckId": "deck-heatex",
        "question": "Does smoke in the ram air duct affect the cabin?",
        "answer": "Only if the HE core is leaking.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-28",
        "deckId": "deck-heatex",
        "question": "Is there a \\",
        "answer": "No, but the ACM can be bypassed.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heatex-29",
        "deckId": "deck-heatex",
        "question": "What maintenance is required for the spray nozzles?",
        "answer": "Inspection for clogs.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-0",
        "deckId": "deck-acm",
        "question": "How many major sections does the ACM have?",
        "answer": "Three (Compressor, T1, T2).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-1",
        "deckId": "deck-acm",
        "question": "What type of bearings does the ACM use?",
        "answer": "Air bearings.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-2",
        "deckId": "deck-acm",
        "question": "Does the ACM use oil?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-3",
        "deckId": "deck-acm",
        "question": "What is the purpose of the ACM Compressor?",
        "answer": "To increase air pressure and temperature for better heat exchange.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-4",
        "deckId": "deck-acm",
        "question": "What does the T1 Turbine do?",
        "answer": "Provides initial expansion cooling to the air.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-5",
        "deckId": "deck-acm",
        "question": "What does the T2 Turbine do?",
        "answer": "Provides the final expansion cooling before distribution.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-6",
        "deckId": "deck-acm",
        "question": "What is the maximum speed of the ACM?",
        "answer": "Approx 40,000 - 50,000 rpm.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-7",
        "deckId": "deck-acm",
        "question": "How is the ACM speed monitored?",
        "answer": "By a speed sensor that sends data to the PCU.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-8",
        "deckId": "deck-acm",
        "question": "What is the \\",
        "answer": "The pack operates in \\",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-9",
        "deckId": "deck-acm",
        "question": "Where is the ACM located?",
        "answer": "Centrally in the pack bay.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-10",
        "deckId": "deck-acm",
        "question": "Does the ACM generate electrical power?",
        "answer": "No, it is a purely pneumatic device.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-11",
        "deckId": "deck-acm",
        "question": "What drives the ACM?",
        "answer": "The energy of the compressed CAC air.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-12",
        "deckId": "deck-acm",
        "question": "What is the \\",
        "answer": "To bypass the compressor and T1 at high altitudes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-13",
        "deckId": "deck-acm",
        "question": "How is the ACM cooled?",
        "answer": "By the air flowing through it.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-14",
        "deckId": "deck-acm",
        "question": "What prevents overspeed?",
        "answer": "The PCU modulates valves (LLV/ABPV) to reduce flow.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-15",
        "deckId": "deck-acm",
        "question": "Can the ACM be repaired on wing?",
        "answer": "No, it is an LRU.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-16",
        "deckId": "deck-acm",
        "question": "Does the ACM produce noise?",
        "answer": "Yes, it is the primary source of pack noise.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-17",
        "deckId": "deck-acm",
        "question": "What happens to the ACM during Economy Cooling?",
        "answer": "Only the T2 turbine is active.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-18",
        "deckId": "deck-acm",
        "question": "Is the ACM part of the \\",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-19",
        "deckId": "deck-acm",
        "question": "Are the ACMs interchangeable?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-20",
        "deckId": "deck-acm",
        "question": "What is the purpose of the T1 outlet duct?",
        "answer": "To send air to the condenser.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-21",
        "deckId": "deck-acm",
        "question": "Does a bearing failure cause smoke?",
        "answer": "Yes, from friction heat, even without oil.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-22",
        "deckId": "deck-acm",
        "question": "Is there a temperature sensor at the ACM outlet?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-23",
        "deckId": "deck-acm",
        "question": "What is the weight of the ACM?",
        "answer": "Approx 80-100 lbs.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-24",
        "deckId": "deck-acm",
        "question": "How is it accessed?",
        "answer": "Main pack bay door.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-25",
        "deckId": "deck-acm",
        "question": "Does the ACM use PECS cooling?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-26",
        "deckId": "deck-acm",
        "question": "What is the typical life of air bearings?",
        "answer": "Highly reliable (thousands of hours).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-27",
        "deckId": "deck-acm",
        "question": "Can the pilot see ACM speed?",
        "answer": "On the maintenance pages.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-28",
        "deckId": "deck-acm",
        "question": "What is the ACM's cooling capacity?",
        "answer": "Expressed in tons of refrigeration (Ref. technical specs).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "acm-29",
        "deckId": "deck-acm",
        "question": "Does high humidity affect the ACM?",
        "answer": "No, it aids cooling via condensation energy.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-0",
        "deckId": "deck-condenser",
        "question": "What is the purpose of the Condenser?",
        "answer": "To turn water vapor into liquid water droplets.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-1",
        "deckId": "deck-condenser",
        "question": "How many passes does air make through the condenser?",
        "answer": "Two.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-2",
        "deckId": "deck-condenser",
        "question": "What component actually removes the liquid water?",
        "answer": "The Water Extractor.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-3",
        "deckId": "deck-condenser",
        "question": "Where does the extracted water go?",
        "answer": "To the ram air duct spray nozzles.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-4",
        "deckId": "deck-condenser",
        "question": "How is ice prevented in the condenser?",
        "answer": "By the Low Limit Valve (LLV).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-5",
        "deckId": "deck-condenser",
        "question": "Is the condenser an air-to-air heat exchanger?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-6",
        "deckId": "deck-condenser",
        "question": "What cools the condenser air?",
        "answer": "Cold air from the T1 turbine.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-7",
        "deckId": "deck-condenser",
        "question": "Where is the water extractor located?",
        "answer": "Downstream of the condenser.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-8",
        "deckId": "deck-condenser",
        "question": "What happens if the water extractor is clogged?",
        "answer": "Water enters the cabin ducts (rain in the plane).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-9",
        "deckId": "deck-condenser",
        "question": "Does the condenser use any electrical power?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-10",
        "deckId": "deck-condenser",
        "question": "Is the water extractor a centrifuge type?",
        "answer": "No, it uses static vanes (Ref. typical design).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-11",
        "deckId": "deck-condenser",
        "question": "What is the \\",
        "answer": "Controlled by the Economy Cooling Valve.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-12",
        "deckId": "deck-condenser",
        "question": "Does water extraction happen at high altitudes?",
        "answer": "Minimal, as high altitude air is very dry.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-13",
        "deckId": "deck-condenser",
        "question": "Are condenser units interchangeable?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-14",
        "deckId": "deck-condenser",
        "question": "What is the condenser core made of?",
        "answer": "Aluminum.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-15",
        "deckId": "deck-condenser",
        "question": "Can the water extractor freeze?",
        "answer": "Yes, if the LLV fails.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-16",
        "deckId": "deck-condenser",
        "question": "Is the spray nozzle system automatic?",
        "answer": "Yes, purely pneumatic/pressure driven.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-17",
        "deckId": "deck-condenser",
        "question": "Where is the condenser accessed?",
        "answer": "Center of the pack bay.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-18",
        "deckId": "deck-condenser",
        "question": "What is the typical pressure drop across the condenser?",
        "answer": "1-2 psi.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-19",
        "deckId": "deck-condenser",
        "question": "Does the water extractor have a filter?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-20",
        "deckId": "deck-condenser",
        "question": "Is there a water level sensor?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-21",
        "deckId": "deck-condenser",
        "question": "What happens to excess water if the nozzles are clogged?",
        "answer": "It overflows into the ram air duct.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-22",
        "deckId": "deck-condenser",
        "question": "Does the condenser use PECS?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-23",
        "deckId": "deck-condenser",
        "question": "How is the condenser bypass sensed?",
        "answer": "By pack outlet humidity/temp.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-24",
        "deckId": "deck-condenser",
        "question": "Is the condenser physically part of the ACM?",
        "answer": "No, it is a separate duct component.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-25",
        "deckId": "deck-condenser",
        "question": "Does the condenser affect T2 inlet temperature?",
        "answer": "Yes, it pre-cools it.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-26",
        "deckId": "deck-condenser",
        "question": "What is the weight of the condenser?",
        "answer": "Approx 40-60 lbs.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-27",
        "deckId": "deck-condenser",
        "question": "Does the condenser assist in Economy Cooling?",
        "answer": "It is partially bypassed.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-28",
        "deckId": "deck-condenser",
        "question": "Are there heaters in the water extractor?",
        "answer": "No, it relies on warm air from the LLV.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "condenser-29",
        "deckId": "deck-condenser",
        "question": "Is condensation visible on the unit?",
        "answer": "Yes, it is usually insulated to prevent bay dripping.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-0",
        "deckId": "deck-valves",
        "question": "What does LLV stand for?",
        "answer": "Low Limit Valve.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-1",
        "deckId": "deck-valves",
        "question": "What is the function of the LLV?",
        "answer": "To prevent the condenser from freezing.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-2",
        "deckId": "deck-valves",
        "question": "What does ABPV stand for?",
        "answer": "ACM Bypass Valve.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-3",
        "deckId": "deck-valves",
        "question": "What is the function of the ABPV?",
        "answer": "To control pack outlet temperature by mixing hot air with cold ACM air.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-4",
        "deckId": "deck-valves",
        "question": "What does ECV stand for?",
        "answer": "Economy Cooling Valve.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-5",
        "deckId": "deck-valves",
        "question": "When does the ECV open?",
        "answer": "During cruise above 30,000 ft.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-6",
        "deckId": "deck-valves",
        "question": "Which unit controls all three valves?",
        "answer": "The PCU.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-7",
        "deckId": "deck-valves",
        "question": "Are these valves electric or pneumatic?",
        "answer": "Electric (Ref. PCU system).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-8",
        "deckId": "deck-valves",
        "question": "What is the fail-safe position of the ABPV?",
        "answer": "Full Open (max heat).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-9",
        "deckId": "deck-valves",
        "question": "What is the fail-safe position of the LLV?",
        "answer": "Full Open (to prevent ice).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-10",
        "deckId": "deck-valves",
        "question": "Does the ECV have a manual override?",
        "answer": "Yes, a knurled knob.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-11",
        "deckId": "deck-valves",
        "question": "Which valve is used most during descent?",
        "answer": "ABPV.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-12",
        "deckId": "deck-valves",
        "question": "What is the diameter of the ABPV?",
        "answer": "Approx 3.5 inches.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-13",
        "deckId": "deck-valves",
        "question": "Does the LLV add heat to the ACM?",
        "answer": "No, it adds heat to the condenser.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-14",
        "deckId": "deck-valves",
        "question": "Can a failed ECV cause a pack shutdown?",
        "answer": "Yes, if the ACM overspeeds.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-15",
        "deckId": "deck-valves",
        "question": "Where is the LLV located?",
        "answer": "In the duct between the Secondary HE and the Condenser.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-16",
        "deckId": "deck-valves",
        "question": "Where is the ABPV located?",
        "answer": "Between the Secondary HE and the pack outlet.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-17",
        "deckId": "deck-valves",
        "question": "Is there a position indicator for the LLV?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-18",
        "deckId": "deck-valves",
        "question": "What is the \\",
        "answer": "Reduced electrical load and drag.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-19",
        "deckId": "deck-valves",
        "question": "Does the ABPV modulate constantly?",
        "answer": "Yes, to maintain zone targets.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-20",
        "deckId": "deck-valves",
        "question": "What happens if the LLV is stuck closed?",
        "answer": "Condenser freezes, stopping airflow.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-21",
        "deckId": "deck-valves",
        "question": "What unit provides the temperature signal for the LLV?",
        "answer": "The condenser outlet sensor.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-22",
        "deckId": "deck-valves",
        "question": "Is the ECV a butterfly valve?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-23",
        "deckId": "deck-valves",
        "question": "Are the actuators interchangeable between ABPV and ECV?",
        "answer": "Often yes (Ref. part numbers).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-24",
        "deckId": "deck-valves",
        "question": "Does the PCU calibrate these valves?",
        "answer": "Yes, upon power-up.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-25",
        "deckId": "deck-valves",
        "question": "Can these valves be accessed without removing the pack?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-26",
        "deckId": "deck-valves",
        "question": "Does the ABPV operate on the ground?",
        "answer": "Yes, to prevent over-cooling.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-27",
        "deckId": "deck-valves",
        "question": "What is the \\",
        "answer": "ECV open, ABPV open, ACM bypassed.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-28",
        "deckId": "deck-valves",
        "question": "Is the TAPRV one of these three?",
        "answer": "No, it is the Trim Air Pressure Regulator Valve.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "valves-29",
        "deckId": "deck-valves",
        "question": "Do these valves use PECS cooling?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-0",
        "deckId": "deck-overheat",
        "question": "What triggers a Pack shutdown due to bay temperature?",
        "answer": "235\u00b0F for 40 seconds.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-1",
        "deckId": "deck-overheat",
        "question": "What is the WAP system?",
        "answer": "Wing/Pack overheat protection (Ref. general logic).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-2",
        "deckId": "deck-overheat",
        "question": "How many overheat sensors are in the pack bay?",
        "answer": "Multiple dual-element sensors.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-3",
        "deckId": "deck-overheat",
        "question": "Which unit monitors the overheat elements?",
        "answer": "The Overheat Protection Controller (OPC).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-4",
        "deckId": "deck-overheat",
        "question": "Where is the OPC located?",
        "answer": "In the EE center area.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-5",
        "deckId": "deck-overheat",
        "question": "Does the OPC communicate with the PCU?",
        "answer": "Yes, via the CDN.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-6",
        "deckId": "deck-overheat",
        "question": "What is a \\",
        "answer": "Air temperature in the supply duct exceeding 180\u00b0F - 250\u00b0F.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-7",
        "deckId": "deck-overheat",
        "question": "Does an overheat trip require a manual reset?",
        "answer": "Yes, via the P5 panel.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-8",
        "deckId": "deck-overheat",
        "question": "What happens if only one element of a dual sensor detects heat?",
        "answer": "Generally causes a status message but not a shutdown (dual-loop logic).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-9",
        "deckId": "deck-overheat",
        "question": "Is there a specific fire detection loop in the pack bay?",
        "answer": "No, it uses the overheat system.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-10",
        "deckId": "deck-overheat",
        "question": "What is the \\",
        "answer": "Two channels per controller.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-11",
        "deckId": "deck-overheat",
        "question": "Does an overheat trip close the CACs?",
        "answer": "Yes, it shuts down the associated compressors.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-12",
        "deckId": "deck-overheat",
        "question": "Can the flight crew see the specific location of an overheat?",
        "answer": "Yes, on the synoptic/EICAS.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-13",
        "deckId": "deck-overheat",
        "question": "What is the purpose of the \\",
        "answer": "Detects leaks in the CAC supply duct.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-14",
        "deckId": "deck-overheat",
        "question": "Are sensors \\",
        "answer": "Thermistor-based (Ref. modern logic).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-15",
        "deckId": "deck-overheat",
        "question": "Do overheat sensors require PECS cooling?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-16",
        "deckId": "deck-overheat",
        "question": "What is the \\",
        "answer": "Cycle the zone temperature switch.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-17",
        "deckId": "deck-overheat",
        "question": "Does the OPC shut down the Ram Air Fan during an overheat?",
        "answer": "No, the fan helps cool the bay.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-18",
        "deckId": "deck-overheat",
        "question": "Is there a test for the overheat system?",
        "answer": "Yes, the PCU/OPC performs a self-test.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-19",
        "deckId": "deck-overheat",
        "question": "Can the airplane fly with an OPC failed?",
        "answer": "MEL dependent, usually restricted.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-20",
        "deckId": "deck-overheat",
        "question": "What is the shutdown temp for the CAC motor?",
        "answer": "Approx 300\u00b0F (Ref. motor controller logic).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-21",
        "deckId": "deck-overheat",
        "question": "Does the mix manifold have an overheat sensor?",
        "answer": "No, sensors are in individual zone ducts.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-22",
        "deckId": "deck-overheat",
        "question": "What is the \\",
        "answer": "200\u00b0F.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-23",
        "deckId": "deck-overheat",
        "question": "What is the \\",
        "answer": "106\u00b0F.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-24",
        "deckId": "deck-overheat",
        "question": "Is there an overheat sensor in the EE bay?",
        "answer": "Yes, part of the EE cooling system.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-25",
        "deckId": "deck-overheat",
        "question": "What does \\",
        "answer": "Loss of Conditioned Inflow.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-26",
        "deckId": "deck-overheat",
        "question": "Does LOCI cause an overheat?",
        "answer": "It can lead to one if the EE cooling fails.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-27",
        "deckId": "deck-overheat",
        "question": "How are sensors mounted to the ducts?",
        "answer": "Via clamps or mounting blocks.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-28",
        "deckId": "deck-overheat",
        "question": "Is the OPC interchangeable?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "overheat-29",
        "deckId": "deck-overheat",
        "question": "Does the WAP system affect hydraulic cooling?",
        "answer": "No, separate system.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-0",
        "deckId": "deck-recirc",
        "question": "What is the purpose of the Lower Recirculation system?",
        "answer": "To reduce the load on the packs by reusing cabin air.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-1",
        "deckId": "deck-recirc",
        "question": "How many lower recirculation fans are there?",
        "answer": "Two (one per pack side).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-2",
        "deckId": "deck-recirc",
        "question": "What component cools the recirculated air?",
        "answer": "The Lower Recirculation Heat Exchanger.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-3",
        "deckId": "deck-recirc",
        "question": "What cooling medium does this heat exchanger use?",
        "answer": "PECS liquid.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-4",
        "deckId": "deck-recirc",
        "question": "Where is the recirculated air mixed with fresh air?",
        "answer": "In the Compact Mixer.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-5",
        "deckId": "deck-recirc",
        "question": "What filter is used in this system?",
        "answer": "HEPA filters.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-6",
        "deckId": "deck-recirc",
        "question": "Does the system remove CO2?",
        "answer": "No, just particles/contaminants.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-7",
        "deckId": "deck-recirc",
        "question": "Which unit controls the lower recirc fans?",
        "answer": "The PCU.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-8",
        "deckId": "deck-recirc",
        "question": "Does the fan speed change during engine start?",
        "answer": "Yes, it decreases to 8,720 rpm.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-9",
        "deckId": "deck-recirc",
        "question": "What happens if a lower recirc fan fails?",
        "answer": "Pack flow increases to compensate, increasing fuel burn.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-10",
        "deckId": "deck-recirc",
        "question": "Where is the lower recirc air pulled from?",
        "answer": "The cabin floor area/EE bay.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-11",
        "deckId": "deck-recirc",
        "question": "Does the pilot have a switch for these fans?",
        "answer": "Yes, the \\",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-12",
        "deckId": "deck-recirc",
        "question": "What is the \\",
        "answer": "A valve that blocks recirc air if high fresh air flow is needed.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-13",
        "deckId": "deck-recirc",
        "question": "Is the recirc fan motor cooled?",
        "answer": "Yes, by the air it moves.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-14",
        "deckId": "deck-recirc",
        "question": "What is the typical HEPA filter replacement interval?",
        "answer": "Dependent on environment/usage.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-15",
        "deckId": "deck-recirc",
        "question": "Does the recirc system operate on the ground?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-16",
        "deckId": "deck-recirc",
        "question": "What is the fan voltage?",
        "answer": "115V AC.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-17",
        "deckId": "deck-recirc",
        "question": "Where is the recirc heat exchanger accessed?",
        "answer": "In the pack bay.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-18",
        "deckId": "deck-recirc",
        "question": "Is the fan motor dual-speed?",
        "answer": "It is variable speed.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-19",
        "deckId": "deck-recirc",
        "question": "What is the \\",
        "answer": "The area where recirc air is collected.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-20",
        "deckId": "deck-recirc",
        "question": "Can recirc air be used for heating?",
        "answer": "Yes, if the cabin is already warm.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-21",
        "deckId": "deck-recirc",
        "question": "Does the recirc system filter out smoke?",
        "answer": "HEPA filters catch some particles but not gases.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-22",
        "deckId": "deck-recirc",
        "question": "Is there a \\",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-23",
        "deckId": "deck-recirc",
        "question": "What is the fan's RPM during normal cruise?",
        "answer": "Modulated by the PCU.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-24",
        "deckId": "deck-recirc",
        "question": "Does the fan have a check valve?",
        "answer": "Yes, to prevent backflow into the mixer.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-25",
        "deckId": "deck-recirc",
        "question": "Are the HEPA filters identical to upper recirc filters?",
        "answer": "Often yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-26",
        "deckId": "deck-recirc",
        "question": "Does the recirc HE use ram air?",
        "answer": "No, it uses PECS.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-27",
        "deckId": "deck-recirc",
        "question": "What is the fan diameter?",
        "answer": "Approx 10-12 inches.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-28",
        "deckId": "deck-recirc",
        "question": "Can one fan operate both sides?",
        "answer": "No, they are dedicated to their side's compact mixer.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "recirc-29",
        "deckId": "deck-recirc",
        "question": "What happens during smoke removal?",
        "answer": "Recirc fans are typically turned off.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-0",
        "deckId": "deck-mixer",
        "question": "What is a Compact Mixer?",
        "answer": "A plenum that combines cold pack air and filtered recirc air.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-1",
        "deckId": "deck-mixer",
        "question": "How many compact mixers per airplane?",
        "answer": "Two (Left and Right).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-2",
        "deckId": "deck-mixer",
        "question": "Where is the compact mixer located?",
        "answer": "In the pack bay, between the pack and the mix manifold.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-3",
        "deckId": "deck-mixer",
        "question": "Does it have any moving parts?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-4",
        "deckId": "deck-mixer",
        "question": "What is the temperature of the air leaving the mixer?",
        "answer": "The \\",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-5",
        "deckId": "deck-mixer",
        "question": "Does it have sensors?",
        "answer": "Yes, the pack outlet/mixer temp sensors.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-6",
        "deckId": "deck-mixer",
        "question": "What happens if a pack fails?",
        "answer": "The mixer only receives recirc air on that side.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-7",
        "deckId": "deck-mixer",
        "question": "Is the flight deck air taken from the compact mixer?",
        "answer": "Yes, before it enters the mix manifold.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-8",
        "deckId": "deck-mixer",
        "question": "What is the mixer made of?",
        "answer": "Composite or aluminum.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-9",
        "deckId": "deck-mixer",
        "question": "Does it have an insulation blanket?",
        "answer": "Yes, to prevent condensation.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-10",
        "deckId": "deck-mixer",
        "question": "Is there a \\",
        "answer": "No, but there are temp sensors.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-11",
        "deckId": "deck-mixer",
        "question": "Can the mixer be bypassed?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-12",
        "deckId": "deck-mixer",
        "question": "What prevents recirc air from flowing back into the pack?",
        "answer": "Pack outlet check valve.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-13",
        "deckId": "deck-mixer",
        "question": "What prevents pack air from flowing back into the recirc system?",
        "answer": "Recirc fan check valve.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-14",
        "deckId": "deck-mixer",
        "question": "Does the mixer handle trim air?",
        "answer": "No, trim air is added downstream.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-15",
        "deckId": "deck-mixer",
        "question": "Is the mixer accessible for maintenance?",
        "answer": "Yes, via pack bay doors.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-16",
        "deckId": "deck-mixer",
        "question": "Are the mixers mirrored?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-17",
        "deckId": "deck-mixer",
        "question": "How many inlets are on a mixer?",
        "answer": "Two (one for pack, one for recirc).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-18",
        "deckId": "deck-mixer",
        "question": "How many outlets are on a mixer?",
        "answer": "Two (one for mix manifold, one for flight deck).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-19",
        "deckId": "deck-mixer",
        "question": "Does the mixer help with noise?",
        "answer": "Its design helps stabilize airflow/reduce turbulence.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-20",
        "deckId": "deck-mixer",
        "question": "Is the mixer part of the pressurized vessel?",
        "answer": "No, but the air inside is.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-21",
        "deckId": "deck-mixer",
        "question": "What is the weight of the mixer?",
        "answer": "Approx 20-30 lbs.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-22",
        "deckId": "deck-mixer",
        "question": "Does the mixer provide air to the cargo bays?",
        "answer": "No, that air is taken from the mix manifold.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-23",
        "deckId": "deck-mixer",
        "question": "Can the mixer leak?",
        "answer": "Yes, causing loss of flow and bay heat.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-24",
        "deckId": "deck-mixer",
        "question": "What is the diameter of the pack inlet to the mixer?",
        "answer": "Approx 5-6 inches.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-25",
        "deckId": "deck-mixer",
        "question": "What is the diameter of the recirc inlet?",
        "answer": "Approx 7-8 inches.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-26",
        "deckId": "deck-mixer",
        "question": "Is there a BITE test for the mixer?",
        "answer": "No, it is a passive component.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-27",
        "deckId": "deck-mixer",
        "question": "Can the mixer be cleaned?",
        "answer": "Yes, but rarely necessary due to upstream filters.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-28",
        "deckId": "deck-mixer",
        "question": "Does the AVS connect to the mixer?",
        "answer": "No, to the mix manifold.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "mixer-29",
        "deckId": "deck-mixer",
        "question": "Does the mixer handle ground-conditioned air?",
        "answer": "No, that enters the mix manifold directly.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-0",
        "deckId": "deck-distribution",
        "question": "What is the Mix Manifold?",
        "answer": "A large plenum that distributes mixed air to all cabin zones.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-1",
        "deckId": "deck-distribution",
        "question": "How many risers lead from the mix manifold to the overhead?",
        "answer": "Typically five.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-2",
        "deckId": "deck-distribution",
        "question": "Where is the mix manifold located?",
        "answer": "Center wing area, aft of the forward cargo.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-3",
        "deckId": "deck-distribution",
        "question": "Where does ground-supplied air enter the system?",
        "answer": "Directly into the mix manifold.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-4",
        "deckId": "deck-distribution",
        "question": "What are \\",
        "answer": "Vertical ducts that move air to the cabin ceiling.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-5",
        "deckId": "deck-distribution",
        "question": "What is a \\",
        "answer": "A device to reduce air velocity noise.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-6",
        "deckId": "deck-distribution",
        "question": "How is air balanced between zones?",
        "answer": "By fixed orifices in the ducts.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-7",
        "deckId": "deck-distribution",
        "question": "Does the mix manifold have moving parts?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-8",
        "deckId": "deck-distribution",
        "question": "Is the manifold insulated?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-9",
        "deckId": "deck-distribution",
        "question": "Where does the Alternate Ventilation System (AVS) connect?",
        "answer": "To the mix manifold.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-10",
        "deckId": "deck-distribution",
        "question": "What prevents conditioned air from leaking out of the ground port?",
        "answer": "A check valve at the ground connection.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-11",
        "deckId": "deck-distribution",
        "question": "Does the distribution system have any sensors?",
        "answer": "No, sensors are in the risers or zone ducts.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-12",
        "deckId": "deck-distribution",
        "question": "What is the \\",
        "answer": "The zone supply ducts.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-13",
        "deckId": "deck-distribution",
        "question": "How many cabin zones are there?",
        "answer": "Seven (Flight Deck + 6 Cabin).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-14",
        "deckId": "deck-distribution",
        "question": "Is the EE bay part of the distribution system?",
        "answer": "No, it has its own cooling.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-15",
        "deckId": "deck-distribution",
        "question": "Can a riser be blocked?",
        "answer": "Possible, causing uneven cooling.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-16",
        "deckId": "deck-distribution",
        "question": "Are distribution ducts made of composite?",
        "answer": "Yes, or flexible fabric.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-17",
        "deckId": "deck-distribution",
        "question": "What is the diameter of the mix manifold?",
        "answer": "Approx 12-15 inches.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-18",
        "deckId": "deck-distribution",
        "question": "How is smoke removed from the cabin?",
        "answer": "Through the outflow valves via the lower cabin vents.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-19",
        "deckId": "deck-distribution",
        "question": "Does the distribution system have its own heaters?",
        "answer": "No, it uses trim air or supplemental heaters.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-20",
        "deckId": "deck-distribution",
        "question": "What is the \\",
        "answer": "The baseline temp for the distribution system.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-21",
        "deckId": "deck-distribution",
        "question": "Does the mix manifold receive air from upper recirc fans?",
        "answer": "No, they discharge into the crown area.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-22",
        "deckId": "deck-distribution",
        "question": "How is a duct leak detected?",
        "answer": "By the overheat sensors near the ducts.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-23",
        "deckId": "deck-distribution",
        "question": "Are risers accessible?",
        "answer": "Yes, behind cabin side panels.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-24",
        "deckId": "deck-distribution",
        "question": "What is the \\",
        "answer": "Refers to the first cabin zone trim.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-25",
        "deckId": "deck-distribution",
        "question": "Is ground air filtered?",
        "answer": "Dependent on the ground source; no aircraft filter.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-26",
        "deckId": "deck-distribution",
        "question": "Does the distribution system handle CO2?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-27",
        "deckId": "deck-distribution",
        "question": "Can the distribution system be manually adjusted?",
        "answer": "No, fixed orifices only.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-28",
        "deckId": "deck-distribution",
        "question": "What is the \\",
        "answer": "Another name for the PAO.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "distribution-29",
        "deckId": "deck-distribution",
        "question": "Is the distribution system part of the CPCS?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-0",
        "deckId": "deck-boost",
        "question": "What is the primary purpose of the Boost Fan?",
        "answer": "To ensure positive airflow to the flight deck.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-1",
        "deckId": "deck-boost",
        "question": "Where is it located?",
        "answer": "In the forward EE compartment.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-2",
        "deckId": "deck-boost",
        "question": "What is the Boost Fan Isolation Valve?",
        "answer": "A valve that opens to allow the fan to draw air.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-3",
        "deckId": "deck-boost",
        "question": "When does the Boost Fan operate?",
        "answer": "Ground ops, smoke detection, or Equipment Cooling override.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-4",
        "deckId": "deck-boost",
        "question": "Where does the fan pull air from?",
        "answer": "The Zone A supply duct or EE bay.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-5",
        "deckId": "deck-boost",
        "question": "Which unit controls the fan?",
        "answer": "The CCS.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-6",
        "deckId": "deck-boost",
        "question": "Is the fan motor AC or DC?",
        "answer": "115V AC.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-7",
        "deckId": "deck-boost",
        "question": "What is the isolation valve fail position?",
        "answer": "Closed.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-8",
        "deckId": "deck-boost",
        "question": "Does the Boost Fan provide heating?",
        "answer": "No, it just moves air.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-9",
        "deckId": "deck-boost",
        "question": "Is the fan monitored?",
        "answer": "Yes, for flow and current.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-10",
        "deckId": "deck-boost",
        "question": "What happens to the fan during engine start?",
        "answer": "It is shed.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-11",
        "deckId": "deck-boost",
        "question": "Does the fan run during cruise?",
        "answer": "Normally no.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-12",
        "deckId": "deck-boost",
        "question": "What is the \\",
        "answer": "When the fan is used to purge smoke.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-13",
        "deckId": "deck-boost",
        "question": "How is the fan accessed?",
        "answer": "Forward EE compartment door.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-14",
        "deckId": "deck-boost",
        "question": "Is the fan motor cooled?",
        "answer": "Yes, by the air it moves.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-15",
        "deckId": "deck-boost",
        "question": "Does the fan have a check valve?",
        "answer": "Yes, to prevent reverse flow.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-16",
        "deckId": "deck-boost",
        "question": "Is the isolation valve a butterfly type?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-17",
        "deckId": "deck-boost",
        "question": "Can the pilot turn the fan on manually?",
        "answer": "Indirectly, by using \\",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-18",
        "deckId": "deck-boost",
        "question": "Does the fan affect cabin pressure?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-19",
        "deckId": "deck-boost",
        "question": "What is the fan's noise level?",
        "answer": "Quiet, as it is in the EE bay.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-20",
        "deckId": "deck-boost",
        "question": "Is there a maintenance test for the boost fan?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-21",
        "deckId": "deck-boost",
        "question": "Does the fan provide air to the observers?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-22",
        "deckId": "deck-boost",
        "question": "Is the fan motor dual-speed?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-23",
        "deckId": "deck-boost",
        "question": "Does the fan have HEPA filters?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-24",
        "deckId": "deck-boost",
        "question": "What is the fan weight?",
        "answer": "Approx 10 lbs.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-25",
        "deckId": "deck-boost",
        "question": "Is the isolation valve electric?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-26",
        "deckId": "deck-boost",
        "question": "Does the fan help cool the EE bay?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-27",
        "deckId": "deck-boost",
        "question": "What is the fan's RPM?",
        "answer": "Approx 10,000 rpm.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-28",
        "deckId": "deck-boost",
        "question": "Is the fan interchangeable with the recirc fan?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "boost-29",
        "deckId": "deck-boost",
        "question": "Does the fan operate on battery power?",
        "answer": "No, requires AC.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-0",
        "deckId": "deck-trim",
        "question": "What is the function of the Trim Air system?",
        "answer": "To add hot air to the conditioned supply to reach specific zone targets.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-1",
        "deckId": "deck-trim",
        "question": "Where is trim air taken from?",
        "answer": "Downstream of the ozone converter.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-2",
        "deckId": "deck-trim",
        "question": "What is the TAPRV?",
        "answer": "Trim Air Pressure Regulator Valve.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-3",
        "deckId": "deck-trim",
        "question": "How many TAPRVs are there?",
        "answer": "Two (one per pack).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-4",
        "deckId": "deck-trim",
        "question": "What pressure does the TAPRV maintain?",
        "answer": "4 psi above cabin pressure.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-5",
        "deckId": "deck-trim",
        "question": "How many zone trim valves are there?",
        "answer": "Seven.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-6",
        "deckId": "deck-trim",
        "question": "Which unit controls the trim valves?",
        "answer": "The PCU.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-7",
        "deckId": "deck-trim",
        "question": "What is the fail-safe position of a trim valve?",
        "answer": "Closed or fixed position.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-8",
        "deckId": "deck-trim",
        "question": "Does the TAPRV have a manual override?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-9",
        "deckId": "deck-trim",
        "question": "What happens if a zone duct exceeds 180\u00b0F?",
        "answer": "The trim valve for that zone closes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-10",
        "deckId": "deck-trim",
        "question": "Is trim air air filtered?",
        "answer": "It passes through the ozone converter, but no particulate filter.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-11",
        "deckId": "deck-trim",
        "question": "Does the TAPRV close during an engine fire?",
        "answer": "No, but the CACs do.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-12",
        "deckId": "deck-trim",
        "question": "Where is the Flight Deck trim valve?",
        "answer": "In the pack bay.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-13",
        "deckId": "deck-trim",
        "question": "What is a \\",
        "answer": "Automatic closure of the TAPRV due to an overheat.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-14",
        "deckId": "deck-trim",
        "question": "How is a trim valve reset?",
        "answer": "Cycle the zone temp switch on the P",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-15",
        "deckId": "deck-trim",
        "question": "Can the airplane fly without trim air?",
        "answer": "Yes, but temp control is poor.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-16",
        "deckId": "deck-trim",
        "question": "What unit provides the temp signal for the trim valve?",
        "answer": "Zone duct temp sensor.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-17",
        "deckId": "deck-trim",
        "question": "Is there a trim air \\",
        "answer": "Yes, on the P5 panel.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-18",
        "deckId": "deck-trim",
        "question": "What is the trim valve actuator type?",
        "answer": "Modulating electric.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-19",
        "deckId": "deck-trim",
        "question": "Does trim air reduce pack flow?",
        "answer": "No, it uses a small portion of CAC flow.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-20",
        "deckId": "deck-trim",
        "question": "Are trim valves accessible in the crown?",
        "answer": "Yes, for the cabin zones.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-21",
        "deckId": "deck-trim",
        "question": "What is the pressure range for the TAPRV?",
        "answer": "2.0 to 5.5 psi.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-22",
        "deckId": "deck-trim",
        "question": "Does the PCU monitor trim air temperature?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-23",
        "deckId": "deck-trim",
        "question": "Is the trim air manifold insulated?",
        "answer": "Yes, it is very hot.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-24",
        "deckId": "deck-trim",
        "question": "Does trim air contain smoke during a CAC failure?",
        "answer": "Potentially.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-25",
        "deckId": "deck-trim",
        "question": "What is the trim valve diameter?",
        "answer": "Approx 1.5 inches.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-26",
        "deckId": "deck-trim",
        "question": "Is the Flight Deck trim valve separate from cabin trim valves?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-27",
        "deckId": "deck-trim",
        "question": "Do attendants have control over trim air?",
        "answer": "Yes, within +/- 10\u00b0F.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-28",
        "deckId": "deck-trim",
        "question": "What is the \\",
        "answer": "The baseline selected by the crew.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "trim-29",
        "deckId": "deck-trim",
        "question": "Is trim air used in Economy Cooling?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-0",
        "deckId": "deck-humidification",
        "question": "What is the primary purpose of the Humidifier?",
        "answer": "To increase relative humidity in the flight deck.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-1",
        "deckId": "deck-humidification",
        "question": "How many humidifiers are on the airplane?",
        "answer": "One.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-2",
        "deckId": "deck-humidification",
        "question": "What is the humidifier pad?",
        "answer": "An evaporative medium that water flows through.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-3",
        "deckId": "deck-humidification",
        "question": "What is the water source?",
        "answer": "The potable water system.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-4",
        "deckId": "deck-humidification",
        "question": "What drives the water to the humidifier?",
        "answer": "Potable water pressure.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-5",
        "deckId": "deck-humidification",
        "question": "When does the humidifier operate?",
        "answer": "During cruise.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-6",
        "deckId": "deck-humidification",
        "question": "Does it operate during descent?",
        "answer": "No, it shuts off at the start of descent.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-7",
        "deckId": "deck-humidification",
        "question": "What unit controls the humidifier?",
        "answer": "The Humidifier Interface Unit (HIU).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-8",
        "deckId": "deck-humidification",
        "question": "What is the HIU's role?",
        "answer": "To control the water solenoid and monitor the pad.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-9",
        "deckId": "deck-humidification",
        "question": "Where is the humidifier located?",
        "answer": "In the flight deck supply duct, crown area.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-10",
        "deckId": "deck-humidification",
        "question": "Does the pilot have a switch for it?",
        "answer": "Yes, on the P5 panel.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-11",
        "deckId": "deck-humidification",
        "question": "What is the \\",
        "answer": "Excess water is sent to a heated drain mast.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-12",
        "deckId": "deck-humidification",
        "question": "Can the pad be replaced?",
        "answer": "Yes, it is a periodic maintenance item.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-13",
        "deckId": "deck-humidification",
        "question": "What happens if the humidifier leaks?",
        "answer": "Potential damage to EE components; usually detected by the water level sensor.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-14",
        "deckId": "deck-humidification",
        "question": "Is the humidifier pad accessible?",
        "answer": "Yes, via an overhead access panel.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-15",
        "deckId": "deck-humidification",
        "question": "Does the system use steam?",
        "answer": "No, it is cold evaporation.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-16",
        "deckId": "deck-humidification",
        "question": "What is the HIU's source of data?",
        "answer": "The CCS.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-17",
        "deckId": "deck-humidification",
        "question": "Does the humidifier operate if potable water is low?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-18",
        "deckId": "deck-humidification",
        "question": "Is there a \\",
        "answer": "Yes, status on EICAS.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-19",
        "deckId": "deck-humidification",
        "question": "What is the target humidity level?",
        "answer": "Approx 10-15% relative humidity.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-20",
        "deckId": "deck-humidification",
        "question": "Does the humidifier operate on the ground?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-21",
        "deckId": "deck-humidification",
        "question": "Is there a filter for the water?",
        "answer": "Yes, an inline strainer.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-22",
        "deckId": "deck-humidification",
        "question": "What is the solenoid power?",
        "answer": "28V DC.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-23",
        "deckId": "deck-humidification",
        "question": "Does the humidifier use conditioned air?",
        "answer": "Yes, it adds water to the fresh air duct.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-24",
        "deckId": "deck-humidification",
        "question": "Is the system used for the passenger cabin?",
        "answer": "No, flight deck and crew rest only.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-25",
        "deckId": "deck-humidification",
        "question": "What is the pad made of?",
        "answer": "Specialized cellulose or ceramic fiber.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-26",
        "deckId": "deck-humidification",
        "question": "Does the system have a heater?",
        "answer": "No, but the air is already warm.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-27",
        "deckId": "deck-humidification",
        "question": "What happens if the HIU fails?",
        "answer": "The system shuts down.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-28",
        "deckId": "deck-humidification",
        "question": "Can the flight crew adjust the humidity level?",
        "answer": "No, only ON/OFF.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "humidification-29",
        "deckId": "deck-humidification",
        "question": "Is the drain mast shared with the galleys?",
        "answer": "Yes, usually.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-0",
        "deckId": "deck-heating",
        "question": "What are Foot Rest heaters?",
        "answer": "Radiant electric heaters for pilot comfort.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-1",
        "deckId": "deck-heating",
        "question": "What are Shoulder heaters?",
        "answer": "Inline electric heaters in the flight deck window ducts.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-2",
        "deckId": "deck-heating",
        "question": "What are Floor heaters?",
        "answer": "Electric radiant panels at passenger entries.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-3",
        "deckId": "deck-heating",
        "question": "Which unit controls these heaters?",
        "answer": "The CCS via various controllers.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-4",
        "deckId": "deck-heating",
        "question": "What is the trip temperature for a shoulder heater?",
        "answer": "200\u00b0F.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-5",
        "deckId": "deck-heating",
        "question": "How many foot rest heaters are in the flight deck?",
        "answer": "Two (Capt and F/O).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-6",
        "deckId": "deck-heating",
        "question": "Are floor heaters used during flight?",
        "answer": "Yes, to prevent drafts at doors.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-7",
        "deckId": "deck-heating",
        "question": "What is the shoulder heater power source?",
        "answer": "115V AC.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-8",
        "deckId": "deck-heating",
        "question": "Can the pilot adjust foot rest temp?",
        "answer": "Yes, via the CAP or side panel switches.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-9",
        "deckId": "deck-heating",
        "question": "Is there a \\",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-10",
        "deckId": "deck-heating",
        "question": "Do galley heaters use trim air?",
        "answer": "No, they are purely electric duct heaters.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-11",
        "deckId": "deck-heating",
        "question": "How many floor heater zones are there?",
        "answer": "Usually corresponding to each entry door.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-12",
        "deckId": "deck-heating",
        "question": "What is the \\",
        "answer": "It heats the surface, not the air.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-13",
        "deckId": "deck-heating",
        "question": "Does the PCU monitor floor heaters?",
        "answer": "No, the CCS does.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-14",
        "deckId": "deck-heating",
        "question": "Are the heaters self-testing?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-15",
        "deckId": "deck-heating",
        "question": "Can a failed heater be reset?",
        "answer": "Sometimes, if it was a temporary overheat.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-16",
        "deckId": "deck-heating",
        "question": "What is the wattage of a shoulder heater?",
        "answer": "Approx 500-1000W.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-17",
        "deckId": "deck-heating",
        "question": "Are heaters shedding during high load?",
        "answer": "Yes, they are low-priority loads.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-18",
        "deckId": "deck-heating",
        "question": "What is the purpose of the Galley Area Duct Heater?",
        "answer": "To compensate for heat loss in galley areas.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-19",
        "deckId": "deck-heating",
        "question": "Does the floor heater have a temp sensor?",
        "answer": "Yes, embedded in the panel.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-20",
        "deckId": "deck-heating",
        "question": "Is there a manual switch for floor heat?",
        "answer": "No, it is automatic.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-21",
        "deckId": "deck-heating",
        "question": "What is the floor heater voltage?",
        "answer": "115V AC.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-22",
        "deckId": "deck-heating",
        "question": "Is floor heat used on the ground?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-23",
        "deckId": "deck-heating",
        "question": "What happens if a foot heater gets wet?",
        "answer": "It has sealed insulation for protection.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-24",
        "deckId": "deck-heating",
        "question": "Can shoulder heaters burn out?",
        "answer": "Yes, if airflow is restricted.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-25",
        "deckId": "deck-heating",
        "question": "Is there a \\",
        "answer": "Yes, on the side console.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-26",
        "deckId": "deck-heating",
        "question": "Are floor panels replaceable?",
        "answer": "Yes, but require floor covering removal.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-27",
        "deckId": "deck-heating",
        "question": "Do heaters operate if the pack is off?",
        "answer": "Radiant heaters yes; duct heaters no.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-28",
        "deckId": "deck-heating",
        "question": "What is the primary cause of heater trips?",
        "answer": "Low airflow.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "heating-29",
        "deckId": "deck-heating",
        "question": "Is floor heat linked to ambient temperature?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-0",
        "deckId": "deck-dryers",
        "question": "What is the primary function of a Zonal Dryer?",
        "answer": "To remove moisture from the cabin crown to prevent condensation.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-1",
        "deckId": "deck-dryers",
        "question": "How many dryers are installed?",
        "answer": "Two.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-2",
        "deckId": "deck-dryers",
        "question": "What is the \\",
        "answer": "The component that absorbs water (Ref. common design).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-3",
        "deckId": "deck-dryers",
        "question": "How is the desiccant dried?",
        "answer": "By an electric regeneration heater.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-4",
        "deckId": "deck-dryers",
        "question": "Where does the moist air go?",
        "answer": "It is exhausted to the mix manifold or distribution system.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-5",
        "deckId": "deck-dryers",
        "question": "Where are the dryers located?",
        "answer": "One at Station 852 and one at Station",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-6",
        "deckId": "deck-dryers",
        "question": "What unit controls the dryer?",
        "answer": "The Zonal Dryer Controller.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-7",
        "deckId": "deck-dryers",
        "question": "Does the dryer use a fan?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-8",
        "deckId": "deck-dryers",
        "question": "What is the flow rate?",
        "answer": "Approx 180 cfm.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-9",
        "deckId": "deck-dryers",
        "question": "Does the dryer operate on the ground?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-10",
        "deckId": "deck-dryers",
        "question": "What is the dryer's power source?",
        "answer": "115V AC.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-11",
        "deckId": "deck-dryers",
        "question": "Is the dryer part of the pack?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-12",
        "deckId": "deck-dryers",
        "question": "What happens if the dryer fails?",
        "answer": "Condensation (\\",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-13",
        "deckId": "deck-dryers",
        "question": "Does the dryer have a filter?",
        "answer": "Yes, to protect the desiccant.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-14",
        "deckId": "deck-dryers",
        "question": "How many temp sensors are in the dryer?",
        "answer": "Multiple for heater and motor protection.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-15",
        "deckId": "deck-dryers",
        "question": "What is the \\",
        "answer": "320\u00b0F.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-16",
        "deckId": "deck-dryers",
        "question": "Can the pilot turn off the dryer?",
        "answer": "No manual switch, automatic based on conditions.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-17",
        "deckId": "deck-dryers",
        "question": "Does the dryer help cabin humidity?",
        "answer": "No, it reduces it.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-18",
        "deckId": "deck-dryers",
        "question": "Is there an EICAS message for zonal dryers?",
        "answer": "Yes, status and maintenance.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-19",
        "deckId": "deck-dryers",
        "question": "Is the desiccant wheel continuously rotating?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-20",
        "deckId": "deck-dryers",
        "question": "What is the dryer's weight?",
        "answer": "Approx 40-50 lbs.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-21",
        "deckId": "deck-dryers",
        "question": "Are the two dryers identical?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-22",
        "deckId": "deck-dryers",
        "question": "How is it accessed?",
        "answer": "Crown access panels.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-23",
        "deckId": "deck-dryers",
        "question": "Does the dryer remove smells?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-24",
        "deckId": "deck-dryers",
        "question": "What is the power for the dryer motor?",
        "answer": "115V AC.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-25",
        "deckId": "deck-dryers",
        "question": "Is there a water drain for the dryer?",
        "answer": "No, water is exhausted as vapor.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-26",
        "deckId": "deck-dryers",
        "question": "Does the dryer run during takeoff?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-27",
        "deckId": "deck-dryers",
        "question": "Does it have a BITE test?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-28",
        "deckId": "deck-dryers",
        "question": "What is the lifespan of the desiccant?",
        "answer": "Several years.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "dryers-29",
        "deckId": "deck-dryers",
        "question": "Can a clogged filter cause a trip?",
        "answer": "Yes, due to low airflow over the heater.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-0",
        "deckId": "deck-pecs",
        "question": "What is the purpose of PECS?",
        "answer": "To cool large motor controllers and electronics.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-1",
        "deckId": "deck-pecs",
        "question": "How many loops does PECS have?",
        "answer": "Two (Left and Right).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-2",
        "deckId": "deck-pecs",
        "question": "What coolant is used?",
        "answer": "Propylene Glycol and Water (PGW) 50/",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-3",
        "deckId": "deck-pecs",
        "question": "What component cools the liquid?",
        "answer": "The PECS Heat Exchanger.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-4",
        "deckId": "deck-pecs",
        "question": "What cools the Heat Exchanger?",
        "answer": "Ram air.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-5",
        "deckId": "deck-pecs",
        "question": "Does PECS use the cooling packs?",
        "answer": "No, it is independent.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-6",
        "deckId": "deck-pecs",
        "question": "Which unit controls PECS?",
        "answer": "The CCS.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-7",
        "deckId": "deck-pecs",
        "question": "How many pumps are per loop?",
        "answer": "Two (Primary and Backup).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-8",
        "deckId": "deck-pecs",
        "question": "What is the normal operating pressure?",
        "answer": "Approx 150-200 psi.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-9",
        "deckId": "deck-pecs",
        "question": "What is the normal coolant temperature?",
        "answer": "Approx 65\u00b0F.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-10",
        "deckId": "deck-pecs",
        "question": "What is the \\",
        "answer": "To bypass the heat exchanger if the liquid is too cold.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-11",
        "deckId": "deck-pecs",
        "question": "How is PECS \\",
        "answer": "Via service ports in the wheel well.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-12",
        "deckId": "deck-pecs",
        "question": "Is there a filter in the PECS loop?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-13",
        "deckId": "deck-pecs",
        "question": "What happens if a PECS leak occurs?",
        "answer": "The system shuts down the affected loop.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-14",
        "deckId": "deck-pecs",
        "question": "Does PECS cool the CAC motors?",
        "answer": "No (they are air-cooled).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-15",
        "deckId": "deck-pecs",
        "question": "Does PECS cool the ICS?",
        "answer": "Yes, via an interface.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-16",
        "deckId": "deck-pecs",
        "question": "What is the pump package power?",
        "answer": "115V AC.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-17",
        "deckId": "deck-pecs",
        "question": "Where are the pumps located?",
        "answer": "In the main gear wheel wells.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-18",
        "deckId": "deck-pecs",
        "question": "What is \\",
        "answer": "A valve that lets PECS cool the ICS system.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-19",
        "deckId": "deck-pecs",
        "question": "Does the pilot have a PECS switch?",
        "answer": "No, it is fully automatic.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-20",
        "deckId": "deck-pecs",
        "question": "Can the airplane fly with one PECS loop inop?",
        "answer": "No, major electronics would overheat.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-21",
        "deckId": "deck-pecs",
        "question": "What is the coolant reservoir type?",
        "answer": "Bootstrap (self-pressurizing).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-22",
        "deckId": "deck-pecs",
        "question": "How is the liquid level monitored?",
        "answer": "By level sensors in the pump package.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-23",
        "deckId": "deck-pecs",
        "question": "Does the PECS heat exchanger have a fan?",
        "answer": "It uses the pack's Ram Air Fan.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-24",
        "deckId": "deck-pecs",
        "question": "Are PECS pumps interchangeable?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-25",
        "deckId": "deck-pecs",
        "question": "What happens if PECS temp exceeds 140\u00b0F?",
        "answer": "High load shedding and EICAS alerts.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-26",
        "deckId": "deck-pecs",
        "question": "Is the coolant flammable?",
        "answer": "No.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-27",
        "deckId": "deck-pecs",
        "question": "Where are the PECS heat exchangers?",
        "answer": "In the ram air ducts.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-28",
        "deckId": "deck-pecs",
        "question": "What is the \\",
        "answer": "Supplemental Cooling Unit, often linked to PECS/ICS.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "pecs-29",
        "deckId": "deck-pecs",
        "question": "Does PECS use air bearings?",
        "answer": "No, the pumps have traditional bearings.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-0",
        "deckId": "deck-cpcs",
        "question": "What is the main function of the CPCS?",
        "answer": "To maintain cabin altitude and rate of change.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-1",
        "deckId": "deck-cpcs",
        "question": "How many Outflow Valves (OFV) are installed?",
        "answer": "Two (one forward, one aft).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-2",
        "deckId": "deck-cpcs",
        "question": "How many motors are in each OFV?",
        "answer": "Three.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-3",
        "deckId": "deck-cpcs",
        "question": "What are the two types of OFV motors?",
        "answer": "Two automatic and one manual.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-4",
        "deckId": "deck-cpcs",
        "question": "Which unit provides the control logic for the OFVs?",
        "answer": "The Valve Control Unit (VCU).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-5",
        "deckId": "deck-cpcs",
        "question": "What is the maximum normal cabin altitude?",
        "answer": "6,000 ft.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-6",
        "deckId": "deck-cpcs",
        "question": "What is a Positive Pressure Relief Valve (PPRV)?",
        "answer": "A safety valve for over-pressurization.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-7",
        "deckId": "deck-cpcs",
        "question": "How many PPRVs are there?",
        "answer": "Two.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-8",
        "deckId": "deck-cpcs",
        "question": "What is a Negative Pressure Relief Valve (NPRV)?",
        "answer": "Prevents ambient pressure from exceeding cabin pressure.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-9",
        "deckId": "deck-cpcs",
        "question": "How many NPRVs are there?",
        "answer": "Four.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-10",
        "deckId": "deck-cpcs",
        "question": "Where is cabin pressure measured?",
        "answer": "By Remote Sensor Units (RSUs).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-11",
        "deckId": "deck-cpcs",
        "question": "What is the RSU source?",
        "answer": "Static ports and cabin air.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-12",
        "deckId": "deck-cpcs",
        "question": "Does the VCU use CCS data?",
        "answer": "Yes, for primary control.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-13",
        "deckId": "deck-cpcs",
        "question": "How is manual control performed?",
        "answer": "Via the \\",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-14",
        "deckId": "deck-cpcs",
        "question": "What is \\",
        "answer": "Landing Altitude, set by the pilot.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-15",
        "deckId": "deck-cpcs",
        "question": "What is the power for the primary OFV motor?",
        "answer": "115V AC.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-16",
        "deckId": "deck-cpcs",
        "question": "What is the power for the manual motor?",
        "answer": "28V DC.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-17",
        "deckId": "deck-cpcs",
        "question": "What are the \\",
        "answer": "Noise reduction.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-18",
        "deckId": "deck-cpcs",
        "question": "Can the airplane fly with one OFV inoperative?",
        "answer": "Yes, per MEL.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-19",
        "deckId": "deck-cpcs",
        "question": "What triggers a \\",
        "answer": "Altitude exceeding 10,000 ft.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-20",
        "deckId": "deck-cpcs",
        "question": "Is the forward OFV identical to the aft?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-21",
        "deckId": "deck-cpcs",
        "question": "What is the \\",
        "answer": "Automatic closure of OFVs if cabin alt hits a safety limit.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-22",
        "deckId": "deck-cpcs",
        "question": "Does the OFV have a position indicator?",
        "answer": "Yes, on the VCU/synoptic.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-23",
        "deckId": "deck-cpcs",
        "question": "What is the VCU's role in a ditching?",
        "answer": "To close both OFVs automatically when commanded.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-24",
        "deckId": "deck-cpcs",
        "question": "Is the OFV motor brushless?",
        "answer": "Yes (Ref. modern V frequency AC).",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-25",
        "deckId": "deck-cpcs",
        "question": "What is the pressure relief limit?",
        "answer": "Approx 9.4 psi differential.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-26",
        "deckId": "deck-cpcs",
        "question": "Does the RSU have a filter?",
        "answer": "Yes.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-27",
        "deckId": "deck-cpcs",
        "question": "How is the aft OFV protected from ice?",
        "answer": "Heated by exhaust air from the cabin.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-28",
        "deckId": "deck-cpcs",
        "question": "What unit handles the \\",
        "answer": "The CCS.",
        "category": "SYSTEMS",
        "certification": "ATP"
    },
    {
        "id": "cpcs-29",
        "deckId": "deck-cpcs",
        "question": "Can the VCU be reset?",
        "answer": "Yes, via a circuit breaker cycle.",
        "category": "SYSTEMS",
        "certification": "ATP"
    }
];