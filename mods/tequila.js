elements.tequila {
    color: "#f2f3ee",
    behavior: "liquid",
    reactions: (
	"fire": { elem1:null, elem2:"fire" },
	"heat": { elem1:"elements.tequila_gas", elem2:null }
    )
}

elements.tequila_gas {
    color: "#f2f3ee", // Source: https://bevvy.co/articles/tequila-revolucion-review/3721
    behavior: "gas",
    reactions: {
	"fire": { elem1:null, elem2:"fire" },
	"heat": { elem1:null, elem2:"fire", tempMin:300 },
	"cool": { elem1:"elements.tequila", elem2:null }
    },
    state: "gas"
}

elements.wort {
    color: "#7c550a", // By Ildar Sagdejev (Specious) - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=5224787
    behavior: "liquid",
    reactions: {
	"heat": { elem1:null, elem2:"elements.tequila_gas", tempMin:78 }
	// tempMin source: https://www.thoughtco.com/boiling-point-of-alcohol-60849
	"heat": { elem1:null, elem2:"fire", tempMin:300 },
	"fire": { elem1:null, elem2:"fire" }
    },
    state: "liquid"
}

elements.agave_nectar = {
    color: "#d5aa18", /* By Sharky78 - Own work, CC BY 3.0, https://commons.wikimedia.org/w/index.php?curid=5834254 */
    behavior: "liquid",
    reactions: {
	"yeast": { elem1:null, elem2:"elements.wort" },
	"heat": { elem1:null, elem2:"sugar", tempMin:150 }
    },
    state: "liquid"
}

elements.agave_plant = {
    color: "#86947d",
    // By Marc Ryckaert (MJJR) - Self-photographed, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=7209445
    reactions: {
	"smash": { elem1:null, elem2:"elements.agave_nectar" }
    },
    
}
