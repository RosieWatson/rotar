export const generateGroups = (people, numberPerGroup) => {
   let groups = []

   const officePeople = people.filter(person => person.office);
    const officeGroup = {
        name: "Office",
        people: officePeople
    }

   groups.push(officeGroup)
   
    for (let i = 0; i < people.length; i += numberPerGroup) {
        const chunk = people.slice(i, i + numberPerGroup);
        const groupNumber = groups.length + 1
        const group = {
            name: `Group ${groupNumber}`,
            people: chunk
        }
        groups.push(group)
    }
    return (groups)
    }