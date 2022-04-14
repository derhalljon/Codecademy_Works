// Halldór Jónsson - Sample DNA builder

// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]

}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

const pAequorFactory = (index, baseArray) => {
    return {
        specimenNum: index,
        dna: baseArray,
        mutate() {
            const randIndex = Math.floor(Math.random() * this.dna.length);
            let randBase = returnRandBase();
            while (this.dna[randIndex] === randBase) {
                randBase = returnRandBase();
            }
            this.dna[randIndex] = randBase;
        },
        compareDNA(pAequor) {
            let sameCount = 0;
            if (this.dna.length != pAequor.dna.length) {
                console.log('DNA strands are different lengths. Check the input.')
            } else {
                for (let i = 0; i < this.dna.length; i++) {
                    if (this.dna[i] === pAequor.dna[i]) {
                        sameCount++
                    }
                }
            }
            const pctSame = Math.floor((sameCount / this.dna.length) * 100);
            console.log(`This specimen strand: ${this.specimenNum} and This specimen strand: ${pAequor.specimenNum} have ${pctSame}% matching DNA.`);
            return pctSame;

        },
        willLikelySurvive() {
            if (this.dna.length != 15) {
                console.log('Incomplete sample, check input.');
            } else {
                let cgCount = 0;
                this.dna.forEach(base => {
                    if (base === 'C' || base === 'G') {
                        cgCount++;
                    }
                }
                );
                return Math.floor((cgCount / this.dna.length) * 100) >= 60;
            }
        },
    }
}

const thirtySamples = () => {
    let samples = [];
    let sampleIndex = 1;

    while (samples.length < 30) {
        let currentSample = pAequorFactory(sampleIndex, mockUpStrand());
        if (currentSample.willLikelySurvive()) {
            sampleSet.push(currentSample);
        };
        sampleIndex++;
    }
    return sampleSet;
};




