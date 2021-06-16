function tortoGabalas(tortuKiekis, zmoniuKiekis, tortoSvoris) {
    const vienamTortuiZmoniu = Math.ceil(zmoniuKiekis / tortuKiekis)
    const svorisVienamZmogui = Math.floor(tortoSvoris * 1000 / vienamTortuiZmoniu);
    console.log(svorisVienamZmogui);
}
tortoGabalas(3, 17, 1)




// Jei 3000g ir 17 zmoniu, tai 17 / 3 ~6 ir 1000 / 6 = 166

// const vienamTortuiZmoniu = zmoniuKiekis / tortuKiekis
// const svorisVienamZmogui = tortoSvoris * 1000 / vienamTortuiZmoniu);
 //166