function checkForName(inputText) {
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        // alert("Welcome, Captain!")
        return true;
    } else {
        return false;
    }
}

export { checkForName }
