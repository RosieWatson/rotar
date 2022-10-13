export const generateGroups = (people, numberPerGroup) => {
   let groups = []
   console.log(people)
    for (let i = 0; i < people.length; i += numberPerGroup) {
        const chunk = people.slice(i, i + numberPerGroup);
        groups.push(chunk)
        }
    return (groups)
    }