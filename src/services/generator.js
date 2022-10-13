const isSuitableGroupSize = (totalPeopleSize, groupSize) => {
    return (totalPeopleSize % groupSize !==1)
}

const chunkTheBois = (people, size, section) => {
    let groups = [];
    let desiredGroupSize = size;

    // stops people being lonely, in this environment at least...

    if (!isSuitableGroupSize(people.length, desiredGroupSize)){
        desiredGroupSize = size + 1;
    }

    if (!isSuitableGroupSize(people.length, desiredGroupSize)){
        desiredGroupSize = desiredGroupSize - 1;
    }

    for (let i = 0; i < people.length; i += desiredGroupSize) {
        const chunk = people.slice(i, i + desiredGroupSize);
        const groupNumber = groups.length + 1
        const group = {
            name: `${section} Group ${groupNumber}`,
            people: chunk
        }
        groups.push(group)
    }

    return groups;

}
export const generateGroups = (people, numberPerGroup) => {
    const officePeople = people.filter(person => person.office);
    const nonOfficePeople = people.filter(person => !person.office)

    const gmtHomeBois = nonOfficePeople.filter(person => person.timezone === "gmt")
    const pdtHomeBois = nonOfficePeople.filter(person => person.timezone === "pdt")

    const gmtHomeGroups = chunkTheBois(gmtHomeBois, numberPerGroup, "GMT WFH")
    const pdtHomeGroups = chunkTheBois(pdtHomeBois, numberPerGroup, "PDT WFH")
    const officeGroups = chunkTheBois(officePeople, numberPerGroup, "UK OFFICE")

    const groupsList = {
        gmt: gmtHomeGroups,
        pdt: pdtHomeGroups,
        ukOffice: officeGroups
    }

    return (groupsList)
    }