class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {}

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {}

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {}

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {}

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {}

  // Returns the total number of vampires that exist
  get totalDescendents() {}

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {}

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {}

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    let luckyVamp = null;

    // base case name has been found

    let currentVamp = this;
    // recursive case name hasn't been found
    while (currentVamp.creator) {
      // if we find the name end the loop
      if (currentVamp.name === name) {
        return currentVamp;
        // otherwise go up one level
      } else {
        currentVamp = currentVamp.creator;
      }
    }

    // Our vampire should be the eldest one now
      for (const child of currentVamp.offspring) {
        if(child.name ===)
    

    // second base case all vampires visited

    return luckyVamp;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {}

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {}
}

module.exports = Vampire;
