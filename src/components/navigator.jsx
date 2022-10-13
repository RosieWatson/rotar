import { Button } from 'react95';

const navOptions = [
    {
        title: "Home",
        value: 'home'
    },
    {
        title: "Generate",
        value: 'gen'
    }
]

export const Navigator = ({handleNav}) => {
    return navOptions.map((option) => 
        <Button onClick={() => handleNav(option.value)}>
            {option.title}    
        </Button>
    )
}