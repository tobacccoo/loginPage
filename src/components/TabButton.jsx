
export default function TabButton({children, isSelected, ...props}){
    console.log(props);
    return(
        <li>
            <button className={isSelected ? 'active' : undefined } {...props}>{children}</button>
            </li>
    );
}