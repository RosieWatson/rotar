const isSuitableGroupSize = (totalPeopleSize, groupSize) => {
    return (totalPeopleSize % groupSize !==1)
}

const shufflePeople = (people) => {
    for (let i = people.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [people[i], people[j]] = [people[j], people[i]];
    }
    return people
}

const chunkTheBois = (people, size, section) => {
    let groups = [];
    let desiredGroupSize = size;

    // stops people being lonely, in this environment at least...

    if (people.length < desiredGroupSize){
        desiredGroupSize = people.length
    } else {
        if (!isSuitableGroupSize(people.length, desiredGroupSize)){
            desiredGroupSize = size + 1;
        }

        if (!isSuitableGroupSize(people.length, desiredGroupSize)){
            desiredGroupSize = desiredGroupSize - 1;
        }
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

    const randomisedOrder = shufflePeople(people)
    const officePeople = randomisedOrder.filter(person => person.office);
    const nonOfficePeople = randomisedOrder.filter(person => !person.office)

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