// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(driver => {
        return driver.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    });
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase().includes(name.toLowerCase()));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

export default { findMatching, fuzzyMatch, matchName };


